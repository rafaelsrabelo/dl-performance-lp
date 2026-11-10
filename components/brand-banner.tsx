import Image from "next/image"

const ALT = "DL Performance: Evolua além dos seus limites"

/**
 * Banner da marca, largura total e sem padding.
 * Desktop (>= 700px): imagem única. Mobile: logo preta + frase + recorte do banner.
 */
export function BrandBanner() {
  return (
    <section aria-label={ALT} className="overflow-hidden bg-[#EFEFF0] text-[#171717]">
      {/* Desktop */}
      <div className="hidden min-[700px]:block">
        <Image
          src="/banner.jpg"
          alt={ALT}
          width={1800}
          height={640}
          sizes="100vw"
          className="block h-auto w-full"
        />
      </div>

      {/* Mobile */}
      <div className="min-[700px]:hidden">
        <div className="flex flex-col items-start gap-5 px-5 pt-10 pb-3">
          <Image
            src="/logo_h_black.png"
            alt=""
            width={1200}
            height={272}
            sizes="290px"
            className="block h-auto w-[min(290px,84%)]"
          />
          <p className="m-0 text-sm leading-[2] font-semibold tracking-[0.42em] uppercase">
            Evolua além
            <br />
            dos seus limites
          </p>
          <span aria-hidden="true" className="block h-[3px] w-14 bg-[#171717]" />
        </div>
        <Image
          src="/banner_m.jpg"
          alt=""
          width={999}
          height={640}
          sizes="100vw"
          className="block h-auto w-full"
        />
      </div>
    </section>
  )
}
