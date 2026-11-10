"use client"

import { useState } from "react"
import Image from "next/image"
import { track } from "@/lib/analytics"

/**
 * Fachada do YouTube: mostra só a miniatura até o clique, evitando carregar
 * ~500 KB de scripts e cookies de terceiros na abertura da página.
 * Ao clicar, carrega o player no domínio youtube-nocookie.com.
 */
export function YouTubeEmbed({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-[var(--card-radius)] bg-[#171717]">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={() => {
        setPlaying(true)
        track("play_video", { label: title })
      }}
      aria-label={`Assistir ao vídeo: ${title}`}
      className="group relative block aspect-video w-full cursor-pointer overflow-hidden rounded-[var(--card-radius)] border border-[#E5E5E5] bg-[#171717] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
    >
      <Image
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt=""
        fill
        sizes="(min-width: 1200px) 1200px, 100vw"
        className="object-cover"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/15"
      />
      <span
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 flex h-16 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[var(--button-radius)] bg-[var(--color-primary)] text-white transition-colors group-hover:bg-[var(--color-primary-hover)]"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </button>
  )
}
