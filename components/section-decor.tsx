import { cn } from "@/lib/utils"

type Corner = "tl" | "tr" | "bl" | "br"

/**
 * Pontilhado (halftone) num canto da seção.
 * `tone="light"` usa pontos escuros para fundos claros.
 */
export function Dots({
  corner,
  tone = "dark",
  className,
}: {
  corner: Corner
  tone?: "dark" | "light"
  className?: string
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "dl-dots",
        `dl-dots-${corner}`,
        tone === "light" && "dl-dots-light",
        className
      )}
    />
  )
}

/**
 * Marca d'água: três hexágonos concêntricos em linha fina (forma da logo).
 */
export function Hex({
  corner = "bl",
  tone = "dark",
  className,
}: {
  corner?: "bl" | "br"
  tone?: "dark" | "light"
  className?: string
}) {
  const stroke = tone === "light" ? "#D4D4D0" : "#2A2A2A"
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 220"
      fill="none"
      stroke={stroke}
      strokeWidth="1.2"
      className={cn("dl-hex", `dl-hex-${corner}`, className)}
    >
      <path d="M100 5L195 57V163L100 215L5 163V57Z" />
      <path d="M100 30L173 70V150L100 190L27 150V70Z" />
      <path d="M100 55L151 83V137L100 165L49 137V83Z" />
    </svg>
  )
}

/**
 * Hexágono duplo (CTA final), traço mais grosso, à direita.
 */
export function HexDouble({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 220"
      fill="none"
      stroke="#D6D6D2"
      strokeWidth="3"
      className={cn(
        "pointer-events-none absolute top-1/2 -right-[6%] w-[clamp(280px,44vw,640px)] -translate-y-1/2",
        className
      )}
    >
      <path d="M100 5L195 57V163L100 215L5 163V57Z" />
      <path d="M100 38L166 74V146L100 182L34 146V74Z" />
    </svg>
  )
}

/** Seta "→" dos CTAs principais. */
export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      className={className}
    >
      <path d="M2 8h11M9 4l4 4-4 4" />
    </svg>
  )
}

/** Check das listas de benefícios. */
export function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="square"
      className={cn("mt-px shrink-0", className)}
    >
      <path d="M4.5 10.5l3.5 3.5 7.5-8" />
    </svg>
  )
}
