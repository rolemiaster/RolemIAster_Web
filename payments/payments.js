(() => {
  "use strict";
  const API_BASE = "https://universo-rolemiaster-pagos-dev.rolemiaster.workers.dev";
  const status = document.getElementById("status");
  const buttons = Array.from(document.querySelectorAll("[data-product]"));

  function setBusy(active, selected) {
    for (const button of buttons) {
      button.disabled = active;
      if (active && button === selected) button.textContent = "Creando pedido…";
    }
  }

  function showError(message) {
    status.textContent = message;
    status.hidden = false;
  }

  async function createCheckout(button) {
    setBusy(true, button);
    status.hidden = true;
    try {
      const response = await fetch(`${API_BASE}/api/orders`, {
        method: "POST",
        headers: { "content-type": "application/json", accept: "application/json" },
        body: JSON.stringify({
          projectCode: "universo-dev",
          productCode: button.dataset.product,
          externalOrderId: `direct-${crypto.randomUUID()}`,
          customerReference: "rolemiaster-web-direct",
        }),
      });
      const body = await response.json().catch(() => null);
      if (!response.ok || !body || typeof body.checkoutUrl !== "string") {
        throw new Error(body && body.message ? body.message : `La pasarela respondió con HTTP ${response.status}.`);
      }
      location.assign(body.checkoutUrl);
    } catch (error) {
      setBusy(false, button);
      button.textContent = `Crear prueba con ${button.dataset.product.split("-")[0].toUpperCase()}`;
      showError(error instanceof Error ? error.message : "No se ha podido crear el pedido de prueba.");
    }
  }

  for (const button of buttons) {
    button.addEventListener("click", () => void createCheckout(button));
  }
})();
