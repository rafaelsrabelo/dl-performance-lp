"use client"

import { useEffect } from "react"
import { track } from "@/lib/analytics"

/**
 * Observa cliques em elementos com `data-analytics="<evento>"` e a
 * visualização da seção de planos. Sem IDs de rastreamento: apenas
 * alimenta o dataLayer para a ferramenta que for configurada depois.
 */
export function AnalyticsBridge() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-analytics]")
      if (!target) return
      track(target.dataset.analytics as string, {
        label: target.dataset.analyticsLabel,
        href: target.getAttribute("href") ?? undefined,
        device: window.matchMedia("(max-width: 767px)").matches ? "mobile" : "desktop",
      })
    }
    document.addEventListener("click", onClick)

    const planos = document.getElementById("planos")
    let observer: IntersectionObserver | undefined
    if (planos && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((en) => en.isIntersecting)) {
            track("view_planos")
            observer?.disconnect()
          }
        },
        { threshold: 0.3 }
      )
      observer.observe(planos)
    }

    return () => {
      document.removeEventListener("click", onClick)
      observer?.disconnect()
    }
  }, [])

  return null
}
