(() => {
  "use strict";

  const API_BASE = "https://universo-rolemiaster-pagos-dev.rolemiaster.workers.dev";
  const form = document.getElementById("checkout-form");
  const titleInput = document.getElementById("checkout-title");
  const amountInput = document.getElementById("checkout-amount");
  const assetSelect = document.getElementById("checkout-asset");
  const descriptionInput = document.getElementById("checkout-description");
  const referenceInput = document.getElementById("checkout-reference");
  const submitButton = document.getElementById("create-checkout");
  const status = document.getElementById("status");
  const assetButtons = Array.from(document.querySelectorAll(".asset-choice"));

  function showError(message) {
    status.textContent = message;
    status.hidden = false;
  }

  function clearError() {
    status.textContent = "";
    status.hidden = true;
  }

  function setBusy(active) {
    submitButton.disabled = active;
    for (const button of assetButtons) button.disabled = active;
    submitButton.textContent = active ? "Creando checkout…" : "Crear checkout de prueba";
  }

  function normalizeAmount(value) {
    const trimmed = value.trim();
    if (!/^\d+(?:[.,]\d+)?$/.test(trimmed)) return null;
    const normalized = trimmed.replace(",", ".");
    if (!/^\d+(?:\.\d+)?$/.test(normalized) || /^0+(?:\.0+)?$/.test(normalized)) return null;
    return normalized;
  }

  function generatedOrderReference() {
    return `web-direct-${crypto.randomUUID()}`;
  }

  function buildRequest() {
    const title = titleInput.value.trim();
    const amount = normalizeAmount(amountInput.value);
    if (!title) throw new Error("Escribe el concepto del cobro antes de continuar.");
    if (!amount) throw new Error("Indica un importe positivo usando solo números y un separador decimal.");

    return {
      projectCode: "universo-dev",
      externalOrderId: referenceInput.value.trim() || generatedOrderReference(),
      customerReference: "rolemiaster-web-direct",
      title: title,
      description: descriptionInput.value.trim() || null,
      network: "devnet",
      assetCode: assetSelect.value,
      amount: amount,
    };
  }

  async function createCheckout(event) {
    event.preventDefault();
    clearError();

    let payload;
    try {
      payload = buildRequest();
    } catch (error) {
      showError(error instanceof Error ? error.message : "Revisa los datos del cobro.");
      return;
    }

    setBusy(true);
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
      window.location.assign(body.checkoutUrl);
    } catch (error) {
      setBusy(false);
      showError(error instanceof Error ? error.message : "No se ha podido crear el checkout de prueba.");
    }
  }

  for (const button of assetButtons) {
    button.addEventListener("click", () => {
      assetSelect.value = button.dataset.asset;
      clearError();
      amountInput.focus();
    });
  }

  form.addEventListener("submit", (event) => void createCheckout(event));
})();
