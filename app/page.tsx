import Image from "next/image"
import Link from "next/link"

import { ChecklistForm } from "@/components/checklist-form"
import { NavLink } from "@/components/nav-link"
import { BrandBanner } from "@/components/brand-banner"
import { BiomechIllustration } from "@/components/biomech-illustration"
import { Arrow, CheckIcon, Dots, Hex, HexDouble } from "@/components/section-decor"
import { YouTubeEmbed } from "@/components/youtube-embed"

const WHATSAPP = "https://wa.me/5585988267557"

const PROBLEMS = [
  {
    title: "Copiando planilhas",
    description: "Planilhas genéricas da internet não respeitam sua fisiologia e rotina únicas.",
  },
  {
    title: "Treino genérico",
    description: "Sem adaptação para o seu histórico, cansaço acumulado e tempo disponível.",
  },
  {
    title: "Correndo no feeling",
    description: "Sem métricas claras, você corre demais quando devia descansar.",
  },
  {
    title: "Volume sem estratégia",
    description: "Aumentar quilometragem por conta própria é o caminho direto para a lesão.",
  },
]

const GOALS = [
  { title: "Primeiros 5km", subtitle: "Construa sua base", img: "/images/IMG_2164.JPEG" },
  { title: "Baixar pace", subtitle: "Treinos de velocidade", img: "/images/IMG_2180.JPEG" },
  { title: "Voltar sem dor", subtitle: "Foco em reabilitação", img: "/images/IMG_2165.JPEG" },
  { title: "Meia ou Maratona", subtitle: "Estratégia de volume", img: "/images/IMG_2175.JPEG" },
]

const BENEFITS = [
  {
    title: "Planilha 100% Individualizada",
    desc: "Construída para sua rotina, nível atual e histórico de lesão.",
  },
  {
    title: "Integração com Plataformas",
    desc: "Sincronismo direto com Garmin, Strava, Coros, Amazfit e Apple para análise de métricas em tempo real.",
  },
  {
    title: "Grupo Exclusivo de Alunos",
    desc: "Comunidade no WhatsApp para troca de experiências e motivação.",
  },
  {
    title: "Suporte Direto com o Coach",
    desc: "Ajustes contínuos e acompanhamento técnico direto com Diego.",
  },
]

const TESTIMONIALS = [
  {
    quote:
      "Eu jamais imaginava sair dos 5 km. Hoje me sinto mais confiante, motivada e já pensando em bater meu próximo RP.",
    name: "Ana Alice",
    avatar: "/images/pessoas/ana-alice.jpeg",
  },
  {
    quote:
      "Eu já tinha tentado de tudo, mas hoje saí de 4 km sofrendo para 9 km com muito mais confiança.",
    name: "Cristian",
    avatar: "/images/pessoas/cristian.jpeg",
  },
  {
    quote:
      "Nunca tive tanta disciplina. A planilha me anima porque sempre traz um desafio diferente.",
    name: "Thâmara",
    avatar: "/images/pessoas/thamara.jpeg",
  },
]

const PLANS = [
  {
    name: "Assessoria de Corrida",
    featured: false,
    description:
      "Para quem deseja evoluir na corrida com um planejamento individualizado e acompanhamento contínuo.",
    features: [
      "Planejamento individualizado",
      "Treinos enviados para o relógio",
      "Ajustes constantes conforme evolução",
      "Feedbacks dos treinos",
      "Suporte via App e WhatsApp",
    ],
    cta: "Quero Evoluir na Corrida",
    href: `${WHATSAPP}?text=Olá%20Diego!%20Tenho%20interesse%20na%20Assessoria%20de%20Corrida.`,
  },
  {
    name: "Acompanhamento Completo",
    featured: true,
    description:
      "Para quem busca um acompanhamento mais completo, integrando fortalecimento e exercícios cardiorrespiratórios de acordo com seus objetivos e rotina.",
    features: [
      "Planejamento individualizado do fortalecimento",
      "Planejamento completo dos seus treinos",
      "Organização da rotina semanal",
      "Ajustes constantes conforme evolução",
      "Suporte via App e WhatsApp",
    ],
    cta: "Quero um Acompanhamento Completo",
    href: `${WHATSAPP}?text=Olá%20Diego!%20Tenho%20interesse%20no%20Acompanhamento%20Completo.`,
  },
]

export default function Page() {
  return (
    <div id="top" className="min-h-svh bg-[var(--background-dark)] font-sans text-white antialiased">
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 border-b border-[var(--border-dark)] bg-[var(--background-dark)]">
        <div className="dl-container flex items-center justify-between gap-6 px-[clamp(20px,5vw,64px)] py-2.5">
          <Link href="/" aria-label="DL Performance, início" className="flex shrink-0">
            <Image
              src="/logo_h_white.png"
              alt="DL Performance"
              width={1200}
              height={272}
              priority
              sizes="200px"
              className="block h-8 w-auto md:h-[42px]"
            />
          </Link>
          <nav
            aria-label="Principal"
            className="hidden items-center gap-12 text-[13px] font-medium tracking-[0.14em] uppercase min-[760px]:flex"
          >
            <NavLink href="#o-que-e" className="text-[#D4D4D4] transition-colors hover:text-white">
              O que é
            </NavLink>
            <NavLink href="#planos" className="text-[#D4D4D4] transition-colors hover:text-white">
              Planos
            </NavLink>
            <NavLink href="#resultados" className="text-[#D4D4D4] transition-colors hover:text-white">
              Resultados
            </NavLink>
          </nav>
          <NavLink href="#planos" className="dl-btn dl-btn-primary dl-btn-compact shrink-0" data-analytics="cta_header" data-analytics-label="Começar Agora">
            Começar Agora
          </NavLink>
        </div>
      </header>

      <main id="conteudo">
        {/* ================= HERO ================= */}
        <section aria-labelledby="hero-titulo" className="relative flex min-h-[700px] items-end overflow-hidden bg-[var(--background-dark)] md:min-h-[clamp(700px,54vw,800px)]">
          <div className="absolute inset-y-0 right-0 w-full md:w-1/2">
            <Image
              src="/banner.JPEG"
              alt="Corredores da DL Performance em prova de rua"
              fill
              priority
              fetchPriority="high"
              quality={65}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="dl-bw object-cover object-[50%_26%]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 hidden bg-linear-to-r from-[var(--background-dark)] to-transparent to-40% md:block"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-[84%] bg-linear-to-t from-[var(--background-dark)] via-[rgba(17,17,17,0.9)] via-58% to-transparent md:h-[28%]"
            />
          </div>

          <div className="dl-container relative px-[clamp(20px,5vw,64px)] pt-20 pb-[clamp(40px,6vw,96px)]">
            <div className="flex max-w-[640px] flex-col gap-[clamp(20px,2.4vw,28px)]">
              <span className="dl-eyebrow text-[#D4D4D4]">Performance &amp; Saúde</span>
              <h1 id="hero-titulo" className="dl-display dl-h1 m-0 text-white">
                <span className="dl-outline block">Corra com </span>
                <span className="dl-italic block">
                  Estratégia<span className="text-[var(--color-primary)]">.</span>
                </span>
              </h1>
              <p className="m-0 max-w-[500px] text-[clamp(16px,1.4vw,19px)] leading-[1.55] text-[#D4D4D4] text-pretty">
                Evolua no seu ritmo e sem lesões. Na DL Performance te ajudamos a dar os primeiros
                passos e evoluir com constância na corrida.
              </p>
              <div className="flex max-w-[620px] flex-wrap gap-3">
                <a href="#planos" className="dl-btn dl-btn-primary flex-[1_1_200px]" data-analytics="cta_hero_planos" data-analytics-label="Ver Planos">
                  <span>Ver Planos</span>
                  <Arrow />
                </a>
                <a
                  href="#checklist"
                  className="dl-btn dl-btn-secondary flex-[1.4_1_290px] bg-black/35 whitespace-nowrap"
                  data-analytics="cta_hero_checklist"
                  data-analytics-label="Baixar Checklist Anti-Lesão"
                >
                  Baixar Checklist Anti-Lesão
                </a>
              </div>
              <p className="m-0 text-sm font-medium tracking-[0.04em] text-[#A3A3A3]">
                +1.500 corredores evoluindo.
              </p>
            </div>
          </div>
        </section>

        {/* ================= CHECKLIST ================= */}
        <section id="checklist" aria-labelledby="checklist-titulo" className="dl-section bg-[var(--surface)] text-[#171717]">
          <Dots corner="tr" tone="light" />
          <Hex corner="bl" tone="light" />
          <div className="dl-container relative grid items-center gap-[clamp(32px,5vw,80px)] lg:grid-cols-[1.3fr_1fr]">
            <div className="flex min-w-0 flex-col gap-6">
              <span className="dl-eyebrow text-[#525252]">Baixe gratuitamente</span>
              <h2 id="checklist-titulo" className="dl-display dl-h2 m-0 text-[#171717]">
                Checklist Anti-Lesão para Corredores
              </h2>
              <p className="m-0 max-w-[520px] text-lg leading-[1.55] text-[#404040] text-pretty">
                Descubra os 7 erros silenciosos que estão sabotando sua evolução e aumentando seu
                risco de lesão.
              </p>
              <ol className="m-0 mt-2 flex list-none flex-col border-t border-[#E5E5E5] p-0">
                {[
                  "Planejamento precede à intensidade.",
                  "Corra no Ritmo certo.",
                  "Aprenda a escutar seu corpo.",
                ].map((item, i) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-5 border-b border-[#E5E5E5] py-4 text-[17px] font-medium text-[#171717]"
                  >
                    <span className="dl-num text-lg text-[var(--color-primary)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
            <ChecklistForm />
          </div>
        </section>

        {/* ================= PROBLEMA ================= */}
        <section id="o-que-e" aria-labelledby="o-que-e-titulo" className="dl-section bg-[var(--background-dark)]">
          <Dots corner="tl" />
          <div className="dl-container relative flex flex-col gap-[clamp(48px,6vw,88px)]">
            <div className="flex flex-col gap-5">
              <h2 id="o-que-e-titulo" className="dl-display dl-h2 m-0 max-w-[900px] text-white">
                Como você já deve ter percebido…
              </h2>
              <p className="m-0 text-[19px] leading-normal text-[#A3A3A3]">
                A maioria das pessoas treina assim:
              </p>
            </div>

            <ol className="m-0 flex list-none flex-col border-t border-[var(--border-dark)] p-0">
              {PROBLEMS.map((item, i) => (
                <li
                  key={item.title}
                  className="grid grid-cols-[48px_1fr] items-baseline gap-x-6 gap-y-2 border-b border-[var(--border-dark)] py-[clamp(20px,2.4vw,30px)] md:grid-cols-[48px_1fr_2fr]"
                >
                  <span className="dl-num text-xl text-[#8A8A8A]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="dl-display dl-h3 m-0 text-[clamp(28px,2.8vw,38px)] text-white">
                    {item.title}
                  </h3>
                  <p className="col-start-2 m-0 text-[17px] leading-[1.55] text-[#A3A3A3] md:col-start-auto">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>

            <div className="flex flex-col gap-5">
              <p className="m-0 text-[19px] leading-normal text-[#A3A3A3]">
                E o resultado é sempre o mesmo:
              </p>
              <ul className="dl-display dl-italic dl-outline m-0 flex list-none flex-wrap gap-x-[clamp(20px,3.4vw,48px)] gap-y-1 p-0 text-[clamp(44px,6.4vw,92px)] leading-[0.98] [--stroke:#8A8A8A]">
                {["Dor", "Estagnação", "Pace travado", "Desmotivação"].map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
            </div>

            <blockquote className="m-0 flex gap-[clamp(16px,2.4vw,32px)] rounded-[var(--card-radius)] bg-[var(--surface-dark)] p-[clamp(24px,3.4vw,48px)]">
              <span aria-hidden="true" className="w-1 shrink-0 -skew-x-[8deg] bg-[var(--color-primary)]" />
              <p className="m-0 max-w-[940px] text-[clamp(20px,2.3vw,30px)] leading-[1.4] font-medium text-white text-pretty">
                &ldquo;O problema não é você. Cada corpo responde diferente ao estímulo: rotina
                diferente, histórico diferente, tempo disponível diferente. Então por que o treino
                seria igual?&rdquo;
              </p>
            </blockquote>
          </div>
        </section>

        {/* ================= BANNER DA MARCA ================= */}
        <BrandBanner />

        {/* ================= OBJETIVOS ================= */}
        <section id="objetivos" aria-labelledby="objetivos-titulo" className="dl-section border-t border-[var(--border-dark)] bg-[var(--surface-dark)]">
          <Dots corner="tr" />
          <Hex corner="bl" />
          <div className="dl-container relative flex flex-col gap-[clamp(36px,4.6vw,64px)]">
            <h2 id="objetivos-titulo" className="dl-display dl-h2 m-0 max-w-[820px] text-white">
              Cada corpo responde diferente ao treino
            </h2>
            <div className="grid grid-cols-2 gap-[clamp(10px,1.4vw,20px)] lg:grid-cols-4">
              {GOALS.map((g) => (
                <article
                  key={g.title}
                  className="relative aspect-[3/4] overflow-hidden rounded-[var(--card-radius)] bg-[#161616]"
                >
                  <Image
                    src={g.img}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="dl-bw object-cover"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-linear-to-t from-black/90 to-black/10 to-60%"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 p-[clamp(14px,1.8vw,24px)]">
                    <h3 className="dl-display m-0 text-[clamp(26px,2.6vw,36px)] leading-[0.95] text-white">
                      {g.title}
                    </h3>
                    <p className="m-0 text-sm leading-snug text-[#D4D4D4]">{g.subtitle}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= O QUE VOCÊ RECEBE ================= */}
        <section id="treino" aria-labelledby="treino-titulo" className="dl-section bg-[var(--surface)] text-[#171717]">
          <Dots corner="tl" tone="light" />
          <div className="dl-container relative flex flex-col gap-[clamp(40px,5vw,72px)]">
            <h2 id="treino-titulo" className="dl-display dl-h2 m-0 max-w-[820px] text-[#171717]">
              O que você recebe ao entrar
            </h2>
            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {BENEFITS.map((b, i) => (
                <article key={b.title} className="flex flex-col gap-3.5 border-t-[3px] border-[#171717] pt-5">
                  <span className="dl-num text-lg text-[var(--color-primary)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="dl-display m-0 text-[30px] leading-none font-bold text-[#171717]">
                    {b.title}
                  </h3>
                  <p className="m-0 text-base leading-[1.55] text-[#404040]">{b.desc}</p>
                </article>
              ))}
            </div>
            <YouTubeEmbed id="Yz6I38x1WLI" title="Acompanhamento da assessoria de corrida online" />
          </div>
        </section>

        {/* ================= COACH ================= */}
        <section id="coach" aria-labelledby="coach-titulo" className="dl-section bg-[var(--background-dark)]">
          <Dots corner="tr" />
          <Hex corner="bl" />
          <div className="dl-container relative flex flex-wrap items-center gap-[clamp(32px,6vw,96px)]">
            <div className="relative mx-auto aspect-[256/349] w-full max-w-[380px] flex-[0_1_380px]">
              <Image
                src="/images/foto diego.png"
                alt="Diego Lopes, coach da DL Performance"
                fill
                sizes="(min-width: 768px) 380px, 100vw"
                className="dl-bw dl-chamfer object-cover object-top"
              />
            </div>
            <div className="flex min-w-0 flex-[1_1_400px] flex-col gap-6">
              <span className="dl-eyebrow text-[#A3A3A3]">Profissional de Educação Física pela UFC</span>
              <h2 id="coach-titulo" className="dl-display dl-italic m-0 text-[clamp(60px,8.6vw,124px)] leading-[0.86] text-white">
                Diego Lopes
              </h2>
              <p className="m-0 max-w-[560px] text-[17px] leading-[1.65] text-[#B5B5B5] text-pretty">
                Ex-atleta de CrossFit com 15 anos de experiência em corrida e condicionamento físico.
                Diego construiu uma metodologia de precisão aplicada à corrida, focada em performance
                sustentável e longevidade no esporte.
              </p>
              <div className="flex flex-wrap gap-[clamp(24px,4vw,56px)] border-y border-[var(--border-dark)] py-6">
                {[
                  { value: "98%", label: "Dos alunos evoluem o pace" },
                  { value: "+3.000", label: "Alunos transformados" },
                ].map((s) => (
                  <div key={s.value} className="flex flex-col gap-1.5">
                    <span className="dl-display text-[clamp(56px,6vw,84px)] leading-[0.9] text-[var(--color-primary)]">
                      {s.value}
                    </span>
                    <span className="text-xs font-semibold tracking-[0.16em] uppercase text-[#A3A3A3]">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
              <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0">
                {["Ex-atleta de CrossFit", "15 anos de experiência em corrida e condicionamento"].map(
                  (c) => (
                    <li
                      key={c}
                      className="rounded-[var(--button-radius)] border border-[var(--border-dark)] px-3.5 py-2 text-sm text-[#E5E5E5]"
                    >
                      {c}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </section>

        {/* ================= RESULTADOS ================= */}
        <section id="resultados" aria-labelledby="resultados-titulo" className="dl-section bg-[var(--surface)] text-[#171717]">
          <Dots corner="tr" tone="light" />
          <Hex corner="bl" tone="light" />
          <div className="dl-container relative flex flex-col gap-[clamp(40px,5vw,72px)]">
            <div className="flex flex-col gap-5">
              <span className="dl-eyebrow text-[#525252]">Resultados</span>
              <h2 id="resultados-titulo" className="dl-display dl-h2 m-0 max-w-[1000px] text-[#171717]">
                &ldquo;Eles não correram mais. Eles correram com estratégia.&rdquo;
              </h2>
            </div>
            <div className="grid gap-10 md:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <figure
                  key={t.name}
                  className="m-0 flex flex-col justify-between gap-7 border-t-[3px] border-[var(--color-primary)] pt-6"
                >
                  <blockquote className="m-0 text-xl leading-normal font-medium text-[#171717] text-pretty">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="flex items-center gap-3.5">
                    <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[#E5E5E5]">
                      <Image
                        src={t.avatar}
                        alt=""
                        fill
                        sizes="48px"
                        className="dl-bw object-cover"
                      />
                    </span>
                    <span className="dl-display text-2xl leading-none font-bold tracking-[0.02em] text-[#171717]">
                      {t.name}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PLANOS ================= */}
        <section id="planos" aria-labelledby="planos-titulo" className="dl-section bg-[var(--background-dark)]">
          <Dots corner="tl" />
          <div className="dl-container relative flex flex-col gap-[clamp(40px,5vw,72px)]">
            <div className="flex flex-col gap-5">
              <h2 id="planos-titulo" className="dl-display dl-h2 m-0 text-white">Planos de Acompanhamento</h2>
              <p className="m-0 max-w-[560px] text-[19px] leading-normal text-[#A3A3A3] text-pretty">
                Investimento em performance, consistência e longevidade no esporte.
              </p>
            </div>
            <div className="grid items-stretch gap-5 md:grid-cols-2">
              {PLANS.map((plan) => (
                <article
                  key={plan.name}
                  className={
                    plan.featured
                      ? "flex min-w-0 flex-col gap-7 rounded-[var(--card-radius)] border border-white border-t-[6px] border-t-[var(--color-primary)] bg-white p-[clamp(24px,3vw,40px)] text-[#171717]"
                      : "flex min-w-0 flex-col gap-7 rounded-[var(--card-radius)] border border-[var(--border-dark)] bg-[var(--surface-dark)] p-[clamp(24px,3vw,40px)] text-white"
                  }
                >
                  <div className="flex flex-col gap-3.5">
                    <div className="flex h-7">
                      {plan.featured && (
                        <span className="inline-flex items-center bg-[var(--color-primary)] px-3 text-[11px] font-semibold tracking-[0.16em] uppercase text-white">
                          Mais completo
                        </span>
                      )}
                    </div>
                    <h3
                      className={
                        plan.featured
                          ? "dl-display dl-italic m-0 text-[clamp(40px,4vw,54px)] leading-[0.93]"
                          : "dl-display m-0 text-[clamp(36px,3.4vw,46px)] leading-[0.95]"
                      }
                    >
                      {plan.name}
                    </h3>
                    <p
                      className={
                        plan.featured
                          ? "m-0 text-base leading-[1.55] text-[#404040] text-pretty"
                          : "m-0 text-base leading-[1.55] text-[#A3A3A3] text-pretty"
                      }
                    >
                      {plan.description}
                    </p>
                  </div>
                  <ul
                    className={
                      plan.featured
                        ? "m-0 flex grow list-none flex-col border-t border-[#E5E5E5] p-0"
                        : "m-0 flex grow list-none flex-col border-t border-[var(--border-dark)] p-0"
                    }
                  >
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className={
                          plan.featured
                            ? "flex items-start gap-3.5 border-b border-[#E5E5E5] py-3.5 text-base leading-snug font-medium text-[#171717]"
                            : "flex items-start gap-3.5 border-b border-[var(--border-dark)] py-3.5 text-base leading-snug text-[#EDEDED]"
                        }
                      >
                        <CheckIcon className={plan.featured ? "text-[#171717]" : "text-[var(--color-primary)]"} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={plan.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={plan.featured ? "dl-btn dl-btn-primary w-full" : "dl-btn dl-btn-secondary w-full"}
                    data-analytics="cta_plano"
                    data-analytics-label={plan.name}
                  >
                    {plan.cta}
                  </a>
                </article>
              ))}
            </div>
            <p className="m-0 text-sm leading-normal text-[#A3A3A3]">
              Contratação disponível nas modalidades mensal e trimestral.
            </p>
          </div>
        </section>

        {/* ================= OUTROS SERVIÇOS ================= */}
        <section id="servicos" aria-labelledby="servicos-titulo" className="dl-section border-t border-[var(--border-dark)] bg-[var(--surface-dark)]">
          <Dots corner="tr" />
          <Hex corner="bl" />
          <div className="dl-container relative flex flex-col gap-[clamp(40px,5vw,72px)]">
            <div className="flex flex-col gap-5">
              <h2 id="servicos-titulo" className="dl-display dl-h2 m-0 text-white">Outros Serviços</h2>
              <p className="m-0 max-w-[560px] text-[19px] leading-normal text-[#A3A3A3] text-pretty">
                Potencialize seus resultados com acompanhamento especializado.
              </p>
            </div>
            <article className="grid overflow-hidden rounded-[var(--card-radius)] border border-[var(--border-dark)] bg-[var(--background-dark)] md:grid-cols-2">
              <div className="flex min-w-0 flex-col items-start justify-center gap-[22px] p-[clamp(24px,4.6vw,64px)]">
                <span className="dl-eyebrow text-[#A3A3A3]">Serviço especializado</span>
                <h3 className="dl-display m-0 text-[clamp(40px,4.6vw,64px)] leading-[0.93] text-white">
                  Avaliação Biomecânica Presencial
                </h3>
                <p className="m-0 max-w-[460px] text-[17px] leading-[1.6] text-[#B5B5B5] text-pretty">
                  Análise completa da corrida e do movimento para identificar limitações, prevenir
                  lesões e direcionar um plano de intervenção individualizado.
                </p>
                <a
                  href={`${WHATSAPP}?text=Olá%20Diego!%20Queria%20saber%20mais%20sobre%20a%20Avaliação%20Biomecânica.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dl-btn dl-btn-primary mt-2 w-full px-8 sm:w-auto"
                  data-analytics="cta_avaliacao"
                  data-analytics-label="Agendar Avaliação"
                >
                  <span>Agendar Avaliação</span>
                  <Arrow />
                </a>
              </div>
              <div className="dl-grid-bg flex min-h-[360px] items-center justify-center p-6">
                <BiomechIllustration className="h-auto w-full max-w-[460px]" />
              </div>
            </article>
          </div>
        </section>

        {/* ================= CTA FINAL ================= */}
        <section id="cta" aria-labelledby="cta-titulo" className="dl-section bg-[var(--surface)] py-[clamp(80px,10vw,168px)] text-[#171717]">
          <Dots corner="bl" tone="light" />
          <HexDouble />
          <div className="dl-container relative flex flex-col items-start gap-7">
            <h2 id="cta-titulo" className="dl-display dl-italic m-0 max-w-[900px] text-[clamp(52px,8vw,116px)] leading-[0.88] text-[#171717]">
              Pronto para evoluir sem se machucar?
            </h2>
            <p className="m-0 max-w-[520px] text-[19px] leading-normal text-[#404040] text-pretty">
              Pare de treinar no improviso. Clique abaixo e descubra o plano ideal para você.
            </p>
            <a
              href={`${WHATSAPP}?text=Olá%20Diego!%20Quero%20descobrir%20o%20plano%20ideal%20para%20mim.`}
              target="_blank"
              rel="noopener noreferrer"
              className="dl-btn dl-btn-primary dl-btn-xl mt-2 w-full sm:w-auto"
              data-analytics="cta_final"
              data-analytics-label="Descobrir meu plano ideal"
            >
              <span>Descobrir meu plano ideal</span>
              <Arrow />
            </a>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-[var(--border-dark)] bg-[var(--background-dark)] px-[clamp(20px,5vw,64px)] pt-[clamp(40px,5vw,64px)] pb-[calc(clamp(40px,5vw,64px)+56px)] lg:pb-[clamp(40px,5vw,64px)]">
        <div className="dl-container flex flex-wrap items-center justify-between gap-8">
          {/* No mobile, logo e seta ficam na mesma linha; no desktop viram itens independentes */}
          <div className="flex w-full items-center justify-between lg:contents">
            <Link href="/" aria-label="DL Performance, início" className="flex">
              <Image
                src="/logo_h_white.png"
                alt="DL Performance"
                width={1200}
                height={272}
                sizes="220px"
                className="block h-12 w-auto"
              />
            </Link>
            <NavLink
              href="#top"
              aria-label="Voltar ao topo"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[var(--button-radius)] border border-[var(--border-dark)] text-white transition-colors hover:border-white hover:bg-white/10 lg:order-last"
            >
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
              >
                <path d="M8 14V3M4 7l4-4 4 4" />
              </svg>
            </NavLink>
          </div>
          <nav
            aria-label="Contato"
            className="flex flex-wrap gap-7 text-[13px] font-medium tracking-[0.14em] uppercase"
          >
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 items-center text-white transition-colors hover:text-[var(--color-primary)]"
              data-analytics="whatsapp_footer"
            >
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/dl_performanceclub/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 items-center text-white transition-colors hover:text-[var(--color-primary)]"
            >
              Instagram
            </a>
          </nav>
          <div className="flex flex-col gap-1.5 text-[13px] leading-normal text-[#A3A3A3]">
            <span>Av. Eng. Leal Lima Verde, 1509</span>
            <span>contato.dlperformance@gmail.com</span>
            <span>© 2025 DL Performance. Todos os direitos reservados.</span>
          </div>
        </div>
      </footer>

      {/* Botão flutuante WhatsApp */}
      <a
        href="https://wa.me/5585988267557?text=Olá%20Diego!%20Vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20o%20treinamento."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        data-analytics="whatsapp_flutuante"
        className="fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110"
        style={{ backgroundColor: "#25D366" }}
      >
        <svg viewBox="0 0 24 24" fill="white" className="h-7 w-7" aria-hidden>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  )
}
