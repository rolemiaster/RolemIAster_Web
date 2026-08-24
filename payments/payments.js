(() => {
  "use strict";

  const API_BASE_BY_NETWORK = Object.freeze({
    devnet: "https://universo-rolemiaster-pagos-dev.rolemiaster.workers.dev",
    "mainnet-beta": "https://pay.rolemiaster.com",
  });
  const ALLOWED_FIELDS = new Set([
    "projectCode",
    "externalOrderId",
    "customerReference",
    "title",
    "description",
    "localizedContent",
    "network",
    "assetCode",
    "amount",
    "lang",
  ]);
  const REQUIRED_FIELDS = [
    "projectCode",
    "externalOrderId",
    "title",
    "localizedContent",
    "network",
    "assetCode",
    "amount",
  ];

  const i18n = window.PaymentEntryI18n;
  const locale = i18n.resolveLocale(window.location.search, navigator.languages ?? []);
  const t = (key) => i18n.translate(locale, key);
  i18n.applyDocument(document, locale);

  const title = document.getElementById("page-title");
  const description = document.getElementById("checkout-description");
  const state = document.querySelector(".state");
  const stateTitle = document.getElementById("checkout-state");
  const status = document.getElementById("checkout-status");

  function showError(message) {
    state.classList.add("error");
    title.textContent = t("entryErrorTitle");
    description.textContent = t("errorDetail");
    stateTitle.textContent = t("entryInvalidLink");
    status.textContent = message;
  }

  function showIdleState() {
    state.classList.remove("error");
    title.textContent = t("entryIdleTitle");
    description.textContent = t("entryIdleDescription");
    stateTitle.textContent = t("entryIdleState");
    status.textContent = t("entryIdleStatus");
  }

  function readPresetCheckout() {
    const params = new URLSearchParams(window.location.search);
    if ([...params.keys()].length === 0) return null;

    const seen = new Set();
    for (const key of params.keys()) {
      if (!ALLOWED_FIELDS.has(key)) {
        throw new Error(t("entryUnsupportedField"));
      }
      if (seen.has(key)) {
        throw new Error(t("entryDuplicateField"));
      }
      seen.add(key);
    }

    const payload = {};
    for (const field of ALLOWED_FIELDS) {
      const value = params.get(field);
      if (value !== null && value !== "") payload[field] = value;
    }

    for (const field of REQUIRED_FIELDS) {
      if (typeof payload[field] !== "string" || payload[field].trim() === "") {
        throw new Error(t("entryMissingFields"));
      }
    }

    if (!Object.hasOwn(API_BASE_BY_NETWORK, payload.network)) {
      throw new Error(t("entryNetwork"));
    }

    try {
      const localizedContent = JSON.parse(payload.localizedContent);
      if (typeof localizedContent !== "object" || localizedContent === null || Array.isArray(localizedContent)) {
        throw new Error();
      }
    } catch {
      throw new Error(t("entryLocalized"));
    }

    return payload;
  }

  function openCheckout() {
    let payload;
    try {
      payload = readPresetCheckout();
    } catch (error) {
      showError(error instanceof Error ? error.message : t("entryRead"));
      return;
    }

    if (payload === null) {
      showIdleState();
      return;
    }

    description.textContent = t("entryOpeningDescription");
    stateTitle.textContent = t("entryOpeningState");
    status.textContent = t("entryOpeningStatus");

    const target = new URL("/pay", API_BASE_BY_NETWORK[payload.network]);
    for (const [field, value] of Object.entries(payload)) target.searchParams.set(field, value);
    window.location.replace(target.toString());
  }

  openCheckout();
})();
