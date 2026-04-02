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
  Activity,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ChecklistForm } from "@/components/checklist-form"
import { NavLink } from "@/components/nav-link"

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
            <NavLink href="#o-que-e" className="text-sm font-medium text-foreground/90 hover:text-primary">
              O que é
            </NavLink>
            <NavLink href="#planos" className="text-sm font-medium text-foreground/90 hover:text-primary">
              Planos
            </NavLink>
            <NavLink href="#resultados" className="text-sm font-medium text-foreground/90 hover:text-primary">
              Resultados
            </NavLink>
          </nav>
          <Button
            asChild
            size="lg"
            className="bg-dl-pink text-white border-0"
            style={{ backgroundColor: "#e91e63" }}
          >
            <NavLink href="#planos" className="bg-dl-pink text-white font-bold" style={{ backgroundColor: "#e91e63" }}>Começar Agora</NavLink>
          </Button>
        </div>
      </header>

      <main>
        {/* Hero - imagem em toda a largura (full width), conteúdo à esquerda */}
        <section className="relative min-h-[calc(100vh-4rem)] w-full overflow-hidden border-b border-border/40">
          {/* Imagem de fundo: ocupa 100% da largura e altura da seção */}
          <div className="absolute inset-0 w-full">
            <Image
              src="/banner.JPEG"
              alt="Corredor em treino"
              fill
              className="object-cover object-[right_20%] scale-x-[-1]"
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
            <Badge
              className="mb-4 w-fit border-0 bg-dl-pink px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white mx-auto"
              style={{ backgroundColor: "#e91e63" }}
            >
              Baixe Gratuitamente
            </Badge>
            <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">
              Checklist Anti-Lesão para Corredores
            </h2>
            <p className="mb-8 text-white/90 max-w-2xl mx-auto">
              Descubra os 7 erros silenciosos que estão sabotando sua evolução — e aumentando seu risco de lesão.
            </p>

            <div className="mb-10 grid gap-4 sm:grid-cols-1 lg:grid-cols-3 text-left">
              {[
                { icon: LayoutList, text: "Planejamento precede à intensidade." },
                { icon: Gauge, text: "Corra no Ritmo certo." },
                { icon: AlertTriangle, text: "Aprenda a escutar seu corpo." },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-[#301a24] px-5 py-5 shadow-inner"
                >
                  <item.icon className="h-6 w-6 shrink-0 mt-0.5 text-[#e91e63]" aria-hidden />
                  <span className="text-sm font-medium leading-snug text-white">{item.text}</span>
                </div>
              ))}
            </div>

            <ChecklistForm />

            <p className="mt-6 text-xs text-white/60">
              Prometemos não enviar spam. Apenas conteúdo de alta performance.
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
                Como você já deve ter percebido…
              </h2>
              <p className="text-gray-600">
                A maioria das pessoas treina assim:
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Copy,
                  title: "Copiando planilhas",
                  description:
                    "Planilhas genéricas da internet não respeitam sua fisiologia e rotina únicas.",
                },
                {
                  icon: Users,
                  title: "Treino genérico",
                  description:
                    "Sem adaptação para o seu histórico, cansaço acumulado e tempo disponível.",
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
                    "Aumentar quilometragem por conta própria é o caminho direto para a lesão.",
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
            <div className="mx-auto mt-12 max-w-2xl text-center space-y-3 text-gray-800">
              <p className="text-lg font-semibold">E o resultado é sempre o mesmo:</p>
              <div className="flex flex-wrap justify-center gap-3">
                {["⚠️ Dor", "⚠️ Estagnação", "⚠️ Pace travado", "⚠️ Desmotivação"].map((item) => (
                  <span key={item} className="rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-sm font-medium text-gray-700">{item}</span>
                ))}
              </div>
              <p className="pt-4 italic text-gray-700">
                &ldquo;O problema não é você. Cada corpo responde diferente ao estímulo — rotina diferente, histórico diferente, tempo disponível diferente. Então por que o treino seria igual?&rdquo;
              </p>
            </div>
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
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover object-top transition-transform group-hover:scale-105"
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
                O que você recebe ao entrar
              </h2>
              <ul className="space-y-6">
                {[
                  {
                    icon: LayoutList,
                    title: "Planilha 100% Individualizada",
                    desc: "Construída para sua rotina, nível atual e histórico de lesão.",
                  },
                  {
                    icon: RefreshCw,
                    title: "Integração Garmin/Strava",
                    desc: "Sincronismo direto para análise de métricas em tempo real.",
                  },
                  {
                    icon: Users,
                    title: "Grupo Exclusivo de Alunos",
                    desc: "Comunidade no WhatsApp para troca de experiências e motivação.",
                  },
                  {
                    icon: MessageCircle,
                    title: "Suporte Direto com o Coach",
                    desc: "Ajustes contínuos e acompanhamento técnico direto com Diego.",
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
                <p className="mt-1 text-white/60 font-medium">Profissional de Educação Física – UFC</p>
                <p className="mt-4 text-white/90">
                  Ex-atleta de CrossFit com 15 anos de experiência em corrida e condicionamento físico. Diego construiu uma metodologia de precisão aplicada à corrida, focada em performance sustentável e longevidade no esporte.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <div className="rounded-lg border border-white/10 bg-white/5 px-5 py-4">
                    <p className="text-2xl font-bold text-[#e91e63] md:text-3xl">
                      98%
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-white">
                      DOS ALUNOS EVOLUEM O PACE
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 px-5 py-4">
                    <p className="text-2xl font-bold text-[#e91e63] md:text-3xl">
                      +3.000
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-white">
                      ALUNOS TRANSFORMADOS
                    </p>
                  </div>
                </div>
                <ul className="mt-6 space-y-3">
                  {[
                    "Profissional de Educação Física – UFC",
                    "Ex-atleta de CrossFit",
                    "15 anos de experiência em corrida e condicionamento",
                    "+3.000 alunos transformados",
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
            <div className="mx-auto max-w-2xl text-center mb-4">
              <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">
                Planos de Acompanhamento
              </h2>
              <p className="text-white/70">
                Investimento em performance, consistência e longevidade no esporte.
              </p>
            </div>
            <div className="mx-auto grid max-w-4xl gap-6 pt-10 md:grid-cols-3">
              {/* Plano Trimestral */}
              <Card className="border border-white/10 bg-[#1a1a1a] text-white shadow-none">
                <CardHeader>
                  <CardTitle className="text-white">Plano Trimestral</CardTitle>
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
                    <a href="https://wa.me/5585988267557?text=Olá%20Diego!%20Tenho%20interesse%20no%20Plano%20Trimestral." target="_blank" rel="noopener noreferrer">Garantir Minha Vaga</a>
                  </Button>
                </CardContent>
              </Card>

              {/* Plano Semestral - destaque */}
              <Card className="relative z-10 overflow-visible border-2 border-[#e91e63] bg-[#1a1a1a] py-6 text-white shadow-none md:scale-105 md:py-8">
                <div className="absolute -top-5 left-1/2 z-10 -translate-x-1/2 rounded px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md" style={{ backgroundColor: "#e91e63" }}>
                  MAIS POPULAR
                </div>
                <CardHeader className="pb-1">
                  <CardTitle className="text-lg text-white md:text-xl">Plano Semestral</CardTitle>
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
                    <a href="https://wa.me/5585988267557?text=Olá%20Diego!%20Tenho%20interesse%20no%20Plano%20Semestral." target="_blank" rel="noopener noreferrer">Garantir Minha Vaga</a>
                  </Button>
                </CardContent>
              </Card>

              {/* Plano Anual */}
              <Card className="border border-white/10 bg-[#1a1a1a] text-white shadow-none">
                <CardHeader>
                  <CardTitle className="text-white">Plano Anual</CardTitle>
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
                    <a href="https://wa.me/5585988267557?text=Olá%20Diego!%20Tenho%20interesse%20no%20Plano%20Anual." target="_blank" rel="noopener noreferrer">Garantir Minha Vaga</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section
          id="servicos"
          className="border-b border-border/40 py-16 md:py-24"
          style={{ backgroundColor: "#1a1114" }}
        >
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">
                Outros Serviços
              </h2>
              <p className="text-white/70">
                Potencialize seus resultados com acompanhamento especializado.
              </p>
            </div>
            <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-2">
              {/* Avaliação Biomecânica */}
              <Card className="flex flex-col border border-white/10 bg-[#1a1a1a] text-white shadow-none">
                <CardHeader className="items-center justify-items-center text-center">
                  <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#e91e63]/10 text-[#e91e63]">
                    <Activity className="h-10 w-10" strokeWidth={2} />
                  </div>
                  <CardTitle className="text-white text-xl">Avaliação Biomecânica</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 text-center">
                  <p className="text-white/70 text-sm leading-relaxed">
                    Descubra pontos de melhoria no seu padrão de movimento para evoluir de forma mais segura e eficiente.
                  </p>
                </CardContent>
                <CardContent className="pt-0">
                  <Button
                    className="w-full font-semibold text-white hover:opacity-95"
                    style={{ backgroundColor: "#e91e63" }}
                    asChild
                  >
                    <a href="https://wa.me/5585988267557?text=Olá%20Diego!%20Queria%20saber%20mais%20sobre%20a%20Avaliação%20Biomecânica." target="_blank" rel="noopener noreferrer">Saber Mais</a>
                  </Button>
                </CardContent>
              </Card>

              {/* Treino de Força */}
              <Card className="flex flex-col border border-white/10 bg-[#1a1a1a] text-white shadow-none">
                <CardHeader className="items-center justify-items-center text-center">
                  <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#e91e63]/10 text-[#e91e63]">
                    <Dumbbell className="h-10 w-10" strokeWidth={2} />
                  </div>
                  <CardTitle className="text-white text-xl">Treino de Força</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 text-center">
                  <p className="text-white/70 text-sm leading-relaxed">
                    Fortalecimento específico para te ajudar a prevenir lesões e correr melhor.
                  </p>
                </CardContent>
                <CardContent className="pt-0">
                  <Button
                    className="w-full font-semibold text-white hover:opacity-95"
                    style={{ backgroundColor: "#e91e63" }}
                    asChild
                  >
                    <a href="https://wa.me/5585988267557?text=Olá%20Diego!%20Queria%20saber%20mais%20sobre%20o%20Treino%20de%20Força." target="_blank" rel="noopener noreferrer">Saber Mais</a>
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
              Pare de treinar no improviso. Clique abaixo e descubra o plano ideal para você.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 min-w-[280px] bg-[#e91e63] text-white hover:bg-[#d81b5c]"
            >
              <a href="https://wa.me/5585988267557?text=Olá%20Diego!%20Quero%20descobrir%20o%20plano%20ideal%20para%20mim." target="_blank" rel="noopener noreferrer">DESCOBRIR MEU PLANO IDEAL</a>
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

      {/* Botão flutuante WhatsApp */}
      <a
        href="https://wa.me/5585988267557?text=Olá%20Diego!%20Vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20o%20treinamento."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110"
        style={{ backgroundColor: "#25D366" }}
      >
        <svg viewBox="0 0 24 24" fill="white" className="h-7 w-7" aria-hidden>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  )
}
