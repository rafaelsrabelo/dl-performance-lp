/**
 * Camada fina de mensuração. Não há GA4/GTM configurado no projeto:
 * os eventos vão para `window.dataLayer` (padrão do Google Tag Manager) e,
 * se existir, para `window.gtag`. Quando o ID real for definido, basta
 * instalar o snippet oficial sem alterar os pontos de disparo.
 */

type EventParams = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
    gtag?: (...args: unknown[]) => void
  }
}

export function track(event: string, params: EventParams = {}) {
  if (typeof window === "undefined") return
  const payload = { event, ...params }
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(payload)
  if (typeof window.gtag === "function") {
    window.gtag("event", event, params)
  }
}
