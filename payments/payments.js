(() => {
  "use strict";

  const API_BASE = "https://universo-rolemiaster-pagos-dev.rolemiaster.workers.dev";
  const ALLOWED_FIELDS = new Set([
    "projectCode",
    "externalOrderId",
    "customerReference",
    "title",
    "description",
    "network",
    "assetCode",
    "amount",
  ]);
  const REQUIRED_FIELDS = ["projectCode", "externalOrderId", "title", "network", "assetCode", "amount"];

  const title = document.getElementById("page-title");
  const description = document.getElementById("checkout-description");
  const state = document.querySelector(".state");
  const stateTitle = document.getElementById("checkout-state");
  const status = document.getElementById("checkout-status");

  function showError(message) {
    state.classList.add("error");
    title.textContent = "No se ha podido abrir el checkout";
    stateTitle.textContent = "El enlace de pago no es válido";
    status.textContent = message;
  }

  function showIdleState() {
    state.classList.remove("error");
    title.textContent = "Pasarela Solana";
    description.textContent = "Los cobros se abren desde una aplicación o enlace de pago. Sus datos no se pueden editar aquí.";
    stateTitle.textContent = "No hay ningún checkout pendiente";
    status.textContent = "Esta página no permite crear ni modificar cobros manualmente.";
  }

  function readPresetCheckout() {
    const params = new URLSearchParams(window.location.search);
    if ([...params.keys()].length === 0) return null;

    for (const key of params.keys()) {
      if (!ALLOWED_FIELDS.has(key)) {
        throw new Error("El enlace contiene un dato no admitido por la pasarela.");
      }
    }

    const payload = {};
    for (const field of ALLOWED_FIELDS) {
      const value = params.get(field);
      if (value !== null && value !== "") payload[field] = value;
    }

    for (const field of REQUIRED_FIELDS) {
      if (typeof payload[field] !== "string" || payload[field].trim() === "") {
        throw new Error("El enlace no incluye todos los datos necesarios para el cobro.");
      }
    }

    return payload;
  }

  async function openCheckout() {
    let payload;
    try {
      payload = readPresetCheckout();
    } catch (error) {
      showError(error instanceof Error ? error.message : "No se han podido leer los datos del enlace.");
      return;
    }

    if (payload === null) {
      showIdleState();
      return;
    }

    window.history.replaceState(null, "", window.location.pathname);
    description.textContent = "Los datos de este cobro ya están fijados por la aplicación o enlace que lo abrió. Preparando el checkout seguro.";
    stateTitle.textContent = "Creando el checkout";
    status.textContent = "La pasarela está fijando la ruta de pago autorizada.";

    try {
      const response = await fetch(`${API_BASE}/api/v1/checkouts`, {
        method: "POST",
        headers: { "content-type": "application/json", accept: "application/json" },
        body: JSON.stringify(payload),
        credentials: "omit",
      });
      const body = await response.json().catch(() => null);
      if (!response.ok || !body || typeof body.checkoutUrl !== "string") {
        throw new Error(body && body.message ? body.message : `La pasarela respondió con HTTP ${response.status}.`);
      }
      window.location.replace(body.checkoutUrl);
    } catch (error) {
      showError(error instanceof Error ? error.message : "No se ha podido abrir el checkout seguro.");
    }
  }

  void openCheckout();
})();
