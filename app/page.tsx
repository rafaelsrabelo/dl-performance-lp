import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Check,
  Star,
  Dumbbell,
  TrendingUp,
  MessageCircle,
  AlertTriangle,
  Gauge,
  Copy,
  Users,
  Brain,
  LayoutList,
  RefreshCw,
  Video,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ChecklistForm } from "@/components/checklist-form"

export default function Page() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/Logotipos%20DLLogo%20DL.png"
              alt="DL Performance"
              width={280}
              height={36}
              className="h-14 w-auto object-contain sm:h-16 md:h-14 lg:h-20"
              priority
            />
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="#o-que-e"
              className="text-sm font-medium text-foreground/90 hover:text-primary"
            >
              O que é
            </Link>
            <Link
              href="#planos"
              className="text-sm font-medium text-foreground/90 hover:text-primary"
            >
              Planos
            </Link>
            <Link
              href="#resultados"
              className="text-sm font-medium text-foreground/90 hover:text-primary"
            >
              Resultados
            </Link>
          </nav>
          <Button
            asChild
            size="lg"
            className="bg-dl-pink text-white border-0"
            style={{ backgroundColor: "#e91e63" }}
          >
            <Link href="#planos" className="bg-dl-pink text-white" style={{ backgroundColor: "#e91e63" }}>Começar Agora</Link>
          </Button>
        </div>
      </header>

      <main>
        {/* Hero - imagem em toda a largura (full width), conteúdo à esquerda */}
        <section className="relative min-h-[calc(100vh-4rem)] w-full overflow-hidden border-b border-border/40">
          {/* Imagem de fundo: ocupa 100% da largura e altura da seção */}
          <div className="absolute inset-0 w-full">
            <Image
              src="/images/hero-secion.png"
              alt="Corredor em treino"
              fill
              className="object-cover object-right"
              priority
              sizes="100vw"
            />
          </div>
          {/* Overlay escuro à esquerda para legibilidade do texto */}
          <div
            className="absolute inset-0 z-[1] w-full bg-gradient-to-r from-background via-background/95 to-transparent md:max-w-[55%]"
            aria-hidden
          />
          {/* Conteúdo sobre a imagem */}
          <div className="relative z-10 flex min-h-[calc(100vh-4rem)] flex-col justify-center px-6 py-16 md:max-w-[55%] md:px-10 md:py-20 lg:px-16">
            <Badge
              className="mb-5 w-fit border-0 bg-dl-pink px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white"
              style={{ backgroundColor: "#e91e63" }}
            >
              PERFORMANCE & SAÚDE
            </Badge>
            <h1 className="leading-[1.1] text-foreground">
              <span className="block text-4xl font-black tracking-tight md:text-5xl lg:text-6xl">
                Corra com
              </span>
              <span
                className="mt-0.5 block text-5xl font-black tracking-tight text-dl-pink md:text-6xl lg:text-7xl"
                style={{ color: "#e91e63" }}
              >
                Estratégia.
              </span>
            </h1>
            <p className="mt-5 max-w-lg text-base font-normal leading-relaxed text-white/90">
              Evolua no seu ritmo e sem lesões. Na DL Performance te ajudamos
              a dar os primeiros passos e evoluir com constância na corrida.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="min-w-[220px] border-0 bg-dl-pink text-base font-bold text-white"
                style={{ backgroundColor: "#e91e63" }}
              >
                <Link href="#checklist" className="bg-dl-pink font-bold text-white" style={{ backgroundColor: "#e91e63" }}>Baixar Checklist Anti-Lesão</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border border-white/30 bg-transparent font-bold text-white hover:bg-white/10"
              >
                <Link href="#planos">Ver Planos</Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm font-normal text-white/80">
              <div className="flex -space-x-2">
                {["/images/pessoas/IMG_0575.JPG", "/images/pessoas/IMG_2168.JPG", "/images/pessoas/IMG_2170.JPG", "/images/pessoas/IMG_4650.JPG", "/images/pessoas/IMG_6943.JPG"].map((src) => (
                  <div
                    key={src}
                    className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-background ring-2 ring-background"
                  >
                    <Image
                      src={src}
                      alt="Corredor DL Performance"
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                ))}
              </div>
              <span>+1.500 corredores evoluindo.</span>
            </div>
          </div>
        </section>

        {/* Checklist Anti-Lesão para Corredores */}
        <section
          id="checklist"
          className="border-b border-border/40 py-16 md:py-24"
          style={{ backgroundColor: "#0b0b0b" }}
        >
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">
              Checklist Anti-Lesão para Corredores
            </h2>
            <p className="mb-10 text-white/90">
              Descubra os 7 erros silenciosos que estão sabotando sua evolução e
              aumentando seu risco de lesão.
            </p>

            {/* Cards estilo imagem: fundo marrom-avermelhado, borda sutil, ícone rosa à esquerda */}
            <div className="mb-10 grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: AlertTriangle,
                  line1: "Volume excessivo sem",
                  line2: "progressão",
                },
                {
                  icon: Dumbbell,
                  line1: "Falta de fortalecimento",
                  line2: "específico",
                },
                {
                  icon: Gauge,
                  line1: "Cadência baixa e impacto",
                  line2: "alto",
                },
              ].map((item) => (
                <div
                  key={item.line1 + item.line2}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#301a24] px-5 py-5 text-left shadow-inner"
                >
                  <item.icon
                    className="h-8 w-8 shrink-0 text-[#e91e63]"
                    aria-hidden
                  />
                  <span className="text-sm font-medium leading-snug text-white sm:text-base">
                    {item.line1}
                    <br />
                    {item.line2}
                  </span>
                </div>
              ))}
            </div>

            <ChecklistForm />

            <p className="mt-6 text-xs text-white/60">
              Preencha seu nome e clique no botão para receber o checklist direto no WhatsApp.
            </p>
          </div>
        </section>

        {/* Por que a maioria dos corredores não evolui? */}
        <section
          id="o-que-e"
          className="border-b border-gray-200 bg-white py-16 md:py-24"
        >
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
                Por que a maioria dos corredores não evolui?
              </h2>
              <p className="text-gray-600">
                Entenda os erros comuns que impedem sua melhor marca.
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Copy,
                  title: "Copiando planilhas",
                  description:
                    "Planilhas genéricas da internet não respeitam sua fisiologia única.",
                },
                {
                  icon: Users,
                  title: "Treino genérico",
                  description:
                    "Falta de adaptação para sua rotina, cansaço e histórico esportivo.",
                },
                {
                  icon: Brain,
                  title: "Correndo no feeling",
                  description:
                    "Sem métricas claras, você corre demais quando devia descansar.",
                },
                {
                  icon: TrendingUp,
                  title: "Volume sem estratégia",
                  description:
                    "Aumentar a quilometragem bruscamente é o caminho para a lesão.",
                },
              ].map((item) => (
                <Card
                  key={item.title}
                  className="border border-gray-100 bg-white shadow-md"
                >
                  <CardHeader>
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg text-[#e91e63]">
                      <item.icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                    <CardTitle className="text-gray-900">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="mx-auto mt-14 max-w-2xl text-center italic text-gray-800">
              &ldquo;O problema não é você. O problema é a falta de acompanhamento individualizado.&rdquo;
            </p>
          </div>
        </section>

        {/* Cada corpo responde diferente ao treino */}
        <section className="border-b border-border/40 bg-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
              Cada corpo responde diferente ao treino
            </h2>
            <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Primeiros 5km",
                  subtitle: "Construa sua base",
                  img: "/images/IMG_2164.JPEG",
                },
                {
                  title: "Baixar pace",
                  subtitle: "Treinos de velocidade",
                  img: "/images/IMG_2180.JPEG",
                },
                {
                  title: "Voltar sem dor",
                  subtitle: "Foco em reabilitação",
                  img: "/images/IMG_2165.JPEG",
                },
                {
                  title: "Meia ou Maratona",
                  subtitle: "Estratégia de volume",
                  img: "/images/IMG_2175.JPEG",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group overflow-hidden rounded-xl bg-card"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="border-t border-border/50 p-4">
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* O que você recebe no treinamento + vídeo YouTube */}
        <section
          id="treino"
          className="border-b border-border/40 py-16 md:py-24"
          style={{ backgroundColor: "#1a1114" }}
        >
          <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">
                O que você recebe no treinamento
              </h2>
              <ul className="space-y-6">
                {[
                  {
                    icon: LayoutList,
                    title: "Planilha Individualizada",
                    desc: "Ajustada semanalmente conforme seu feedback.",
                  },
                  {
                    icon: RefreshCw,
                    title: "Integração Garmin/Strava",
                    desc: "Sincronismo direto para análise de dados real-time.",
                  },
                  {
                    icon: Video,
                    title: "Análise Educativa em Vídeo",
                    desc: "Videos exclusivos explicando a técnica de cada exercício.",
                  },
                  {
                    icon: MessageCircle,
                    title: "Suporte Direto com Coach",
                    desc: "Tira-dúvidas via WhatsApp para ajustes rápidos.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center text-[#e91e63]">
                      <item.icon className="h-6 w-6" strokeWidth={2} />
                    </span>
                    <div>
                      <p className="font-semibold text-white">
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-sm text-white/70">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl bg-muted shadow-xl">
              {/* Troque o ID na URL pelo do seu vídeo do YouTube */}
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/dKMwYrGmh7Y?rel=0"
                title="DL Performance - Short"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* Instructor + Depoimentos */}
        <section id="resultados" className="border-b border-border/40 bg-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[auto_1fr]">
              {/* Foto: bordas arredondadas e borda branca fina */}
              <div className="relative h-72 w-56 overflow-hidden rounded-lg border-2 border-white/20 sm:h-80 sm:w-64">
                <Image
                  src="/images/foto diego.png"
                  alt="Diego Lopes"
                  fill
                  className="object-cover object-top"
                  sizes="256px"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white md:text-4xl">
                  Diego Lopes
                </h3>
                <p className="mt-4 text-white/90">
                  Com mais de 15 anos de experiência no alto rendimento, Diego
                  trouxe para a corrida a metodologia de precisão que aplicou no
                  UFC e no CrossFit.
                </p>
                {/* Cards de estatísticas: número em rosa, texto em branco */}
                <div className="mt-6 flex flex-wrap gap-4">
                  <div className="rounded-lg border border-white/10 bg-white/5 px-5 py-4">
                    <p className="text-2xl font-bold text-[#e91e63] md:text-3xl">
                      98%
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-white">
                      DOS ALUNOS EVOLUEM PACE
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 px-5 py-4">
                    <p className="text-2xl font-bold text-[#e91e63] md:text-3xl">
                      +5k
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-white">
                      TREINOS ORIENTADOS
                    </p>
                  </div>
                </div>
                <ul className="mt-6 space-y-3">
                  {[
                    "Especialista em Biomecânica",
                    "Treinador Nível 2 World Athletics",
                    "Consultor de Equipes de Performance",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check
                        className="h-5 w-5 shrink-0 text-[#e91e63]"
                        strokeWidth={2.5}
                      />
                      <span className="text-white">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mx-auto mt-16 max-w-2xl text-center text-2xl font-bold md:text-3xl">
              &ldquo;Eles não correram mais. Eles correram com estratégia.&rdquo;
            </p>
            <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
              {[
                {
                  quote:
                    "Saí de 35 min nos 5km para sub-25 em 3 meses. Sem dores no joelho que sempre me paravam.",
                  name: "Ricardo Silva",
                  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
                },
                {
                  quote:
                    "Completei minha primeira maratona seguindo o plano do Diego. Estratégia de prova foi o diferencial.",
                  name: "Amanda Costa",
                  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
                },
                {
                  quote:
                    "Acompanhamento semanal e planos personalizados. Vale cada centavo.",
                  name: "Pedro Oliveira",
                  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
                },
              ].map((t) => (
                <Card
                  key={t.name}
                  className="border-border/50 bg-card text-card-foreground"
                >
                  <CardContent className="pt-6">
                    <div className="mb-4 flex gap-1 text-[#e91e63]">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-current"
                          aria-hidden
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">&ldquo;{t.quote}&rdquo;</p>
                    <div className="mt-4 flex items-center gap-3">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full bg-muted">
                        <Image
                          src={t.avatar}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="40px"
                        />
                      </div>
                      <span className="font-medium">{t.name}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing - estilo da referência: fundo preto, cards cinza escuro, borda sutil, destaque rosa no plano popular */}
        <section
          id="planos"
          className="overflow-visible border-b border-border/40 py-16 md:py-24"
          style={{ backgroundColor: "#0b0b0b" }}
        >
          <div className="container mx-auto overflow-visible px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
              Escolha o seu plano de evolução
            </h2>
            {/* pt-10 dá espaço para o badge "MAIS POPULAR" não ser cortado */}
            <div className="mx-auto grid max-w-4xl gap-6 pt-10 md:grid-cols-3">
              {/* Plano Trimestral - card cinza escuro, borda sutil, botão escuro */}
              <Card className="border border-white/10 bg-[#1a1a1a] text-white shadow-none">
                <CardHeader>
                  <CardTitle className="text-white">Plano Trimestral</CardTitle>
                  <p className="flex items-baseline gap-0.5">
                    <span className="text-base font-medium text-white/80">R$</span>
                    <span className="text-3xl font-bold tracking-tight text-white">249</span>
                    <span className="text-sm font-normal text-white/60">/mês</span>
                  </p>
                </CardHeader>
                <CardContent className="space-y-3">
                  {["Planilha via App", "Suporte em 24h", "Ajustes Quinzenais"].map(
                    (f) => (
                      <div key={f} className="flex items-center gap-2">
                        <Check className="h-4 w-4 shrink-0 text-[#e91e63]" strokeWidth={2.5} />
                        <span className="text-sm text-white/90">{f}</span>
                      </div>
                    )
                  )}
                </CardContent>
                <CardContent className="pt-0">
                  <Button
                    variant="outline"
                    className="w-full border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                    asChild
                  >
                    <Link href="#planos">Assinar Agora</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Plano Semestral - destaque: card maior, borda rosa, badge MAIS POPULAR, botão rosa */}
              <Card className="relative z-10 overflow-visible border-2 border-[#e91e63] bg-[#1a1a1a] py-6 text-white shadow-none md:scale-105 md:py-8">
                <div className="absolute -top-5 left-1/2 z-10 -translate-x-1/2 rounded px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md" style={{ backgroundColor: "#e91e63" }}>
                  MAIS POPULAR
                </div>
                <CardHeader className="pb-1">
                  <CardTitle className="text-lg text-white md:text-xl">Plano Semestral</CardTitle>
                  <p className="flex items-baseline gap-0.5">
                    <span className="text-base font-medium text-white/80">R$</span>
                    <span className="text-3xl font-bold tracking-tight text-white md:text-4xl">199</span>
                    <span className="text-sm font-normal text-white/60">/mês</span>
                  </p>
                </CardHeader>
                <CardContent className="space-y-3.5">
                  {[
                    "Planilha via App",
                    "Suporte Prioritário",
                    "Ajustes Semanais",
                    "Desconto em Parceiros",
                  ].map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <Check className="h-4 w-4 shrink-0 text-[#e91e63] md:h-5 md:w-5" strokeWidth={2.5} />
                      <span className="text-sm text-white/90 md:text-base">{f}</span>
                    </div>
                  ))}
                </CardContent>
                <CardContent className="pt-0">
                  <Button
                    className="h-11 w-full font-semibold text-white hover:opacity-95 md:h-12 md:text-base"
                    style={{ backgroundColor: "#e91e63" }}
                    asChild
                  >
                    <Link href="#planos">Garantir Vaga</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Plano Anual - card cinza escuro, borda sutil, botão escuro */}
              <Card className="border border-white/10 bg-[#1a1a1a] text-white shadow-none">
                <CardHeader>
                  <CardTitle className="text-white">Plano Anual</CardTitle>
                  <p className="flex items-baseline gap-0.5">
                    <span className="text-base font-medium text-white/80">R$</span>
                    <span className="text-3xl font-bold tracking-tight text-white">159</span>
                    <span className="text-sm font-normal text-white/60">/mês</span>
                  </p>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "Tudo do Semestral",
                    "Análise Biomecânica",
                    "Camiseta Oficial DL",
                  ].map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <Check className="h-4 w-4 shrink-0 text-[#e91e63]" strokeWidth={2.5} />
                      <span className="text-sm text-white/90">{f}</span>
                    </div>
                  ))}
                </CardContent>
                <CardContent className="pt-0">
                  <Button
                    variant="outline"
                    className="w-full border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                    asChild
                  >
                    <Link href="#planos">Assinar Agora</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-b border-border/40 bg-primary/10 py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Pronto para evoluir sem se machucar?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/80">
              Junte-se ao time que está redefinindo a performance amadora no Brasil.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 min-w-[280px] bg-[#e91e63] text-white hover:bg-[#d81b5c]"
            >
              <Link href="#planos">DESCOBRIR MEU PLANO IDEAL</Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 sm:flex-row">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/Logotipos%20DLLogo%20DL.png"
              alt="DL Performance"
              width={120}
              height={28}
              className="h-20 w-auto object-contain"
            />
          </Link>
          <div className="flex items-center gap-6 text-sm text-white/80">
            <a
              href="https://wa.me/5585988267557"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#e91e63]"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp</span>
            </a>
            <a
              href="https://www.instagram.com/dl_performanceclub/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#e91e63]"
              aria-label="Instagram"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>Instagram</span>
            </a>
          </div>
          <div className="text-center text-xs text-white/60 space-y-1">
            <p>Av. Eng. Leal Lima Verde, 1509</p>
            <p>contato.dlperformance@gmail.com</p>
            <p>© 2025 DL Performance. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
