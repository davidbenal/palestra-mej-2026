import { useState, useEffect } from 'react'

/* ═══════════════════════════════════════════════════════════════════
   DESIGN PRIMITIVES — shadcn-inspired
═══════════════════════════════════════════════════════════════════ */

const Card = ({ children, className = '' }) => (
  <div className={`rounded-2xl border border-gray-200 bg-white shadow-sm ${className}`}>
    {children}
  </div>
)

const CardContent = ({ children, className = '' }) => (
  <div className={`p-8 ${className}`}>{children}</div>
)

const Separator = () => (
  <div className="w-full h-px bg-gray-200 my-24" />
)

const Badge = ({ children, variant = 'default' }) => {
  const styles = {
    default: 'bg-gray-100 text-gray-700 border-gray-200',
    primary: 'bg-red-50 text-primary border-red-100',
    success: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    warning: 'bg-amber-50 text-amber-700 border-amber-100',
    info: 'bg-blue-50 text-blue-700 border-blue-100',
  }
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${styles[variant]}`}>
      {children}
    </span>
  )
}

const SectionLabel = ({ children }) => (
  <span className="inline-block text-[11px] font-semibold uppercase tracking-[2px] text-gray-400 mb-4">
    {children}
  </span>
)

const SubsectionTitle = ({ title, description }) => (
  <div className="mb-8">
    <h3 className="font-display font-semibold text-2xl tracking-tight">{title}</h3>
    {description && <p className="text-gray-500 text-sm mt-2 max-w-lg leading-relaxed">{description}</p>}
  </div>
)

const ConnectorLine = () => (
  <div className="flex justify-center py-2">
    <div className="w-px h-8 bg-gray-300" />
  </div>
)

/* ═══════════════════════════════════════════════════════════════════
   CHARTS / DIAGRAMS
═══════════════════════════════════════════════════════════════════ */

const ROIStats = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
    {[
      { value: '75%', label: 'das solucoes IA nao entregam ROI esperado', source: 'IBM' },
      { value: '95%', label: 'sem retorno mensuravel', source: 'MIT' },
      { value: '5%', label: 'dos pilotos chegam a producao', source: 'MIT' },
      { value: '76%', label: 'sem impacto no lucro', source: 'PwC' },
    ].map((s, i) => (
      <Card key={i}>
        <CardContent className="text-center">
          <div className="font-display font-bold text-4xl tracking-tighter text-primary">{s.value}</div>
          <p className="text-xs text-gray-500 mt-3 leading-relaxed">{s.label}</p>
          <span className="text-[10px] text-gray-400 mt-2 inline-block font-medium uppercase tracking-wider">{s.source}</span>
        </CardContent>
      </Card>
    ))}
  </div>
)

const SuccessStats = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
    {[
      { company: 'Klarna', stat: '-40%', desc: 'custo de atendimento ao cliente com assistente IA' },
      { company: 'Intercom', stat: '1M+', desc: 'conversas de suporte resolvidas por IA por semana' },
      { company: 'Freshworks', stat: '-76%', desc: 'tempo de resolucao de tickets em IT helpdesk' },
    ].map((s, i) => (
      <Card key={i}>
        <CardContent>
          <SectionLabel>{s.company}</SectionLabel>
          <div className="font-display font-bold text-4xl tracking-tighter text-emerald-600 mt-1">{s.stat}</div>
          <p className="text-sm text-gray-500 mt-3 leading-relaxed">{s.desc}</p>
        </CardContent>
      </Card>
    ))}
  </div>
)

const DriversChart = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {[
      {
        num: '01',
        title: 'Workflow Fit',
        desc: 'Integrado no processo, nao apenas mais uma ferramenta. Redesenho de workflows.',
        stat: 'McKinsey: "Redesenhar workflows" e o fator #1 para impacto real no EBIT'
      },
      {
        num: '02',
        title: 'Team Enablement',
        desc: 'Mentalidade probabilistica. Pensamento critico sobre outputs de IA.',
        stat: 'Sem isso, a adocao morre apos um unico output ruim'
      },
      {
        num: '03',
        title: 'Operator Owner',
        desc: 'Operadores dedicados. Human-in-the-loop. Monitoramento de qualidade continuo.',
        stat: 'Gartner: Avaliacao & Otimizacao regulares = 3x chance de alto valor'
      }
    ].map((d) => (
      <Card key={d.num} className="overflow-hidden">
        <div className="h-1.5 bg-primary" style={{ width: `${Number(d.num) * 33.3}%` }} />
        <CardContent className="pt-6">
          <span className="text-primary font-display font-bold text-xs tracking-wider">{d.num}</span>
          <h4 className="font-display font-bold text-xl tracking-tight mt-1 mb-3">{d.title}</h4>
          <p className="text-sm text-gray-600 leading-relaxed mb-5">{d.desc}</p>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs text-gray-600 leading-relaxed">{d.stat}</p>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
)

const AIStackDiagram = () => (
  <Card>
    <CardContent className="p-10">
      <div className="flex flex-col gap-0 max-w-xl mx-auto">
        {/* Business ROI */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center">
          <span className="font-display font-bold text-lg">Business ROI</span>
          <p className="text-xs text-gray-500 mt-1">P&L Impact + Eficiencia + Crescimento</p>
        </div>
        <ConnectorLine />
        {/* Service Layer */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <SectionLabel>The Service Layer</SectionLabel>
          <div className="flex flex-wrap gap-2 mt-1">
            <Badge variant="warning">Consultoria</Badge>
            <Badge variant="warning">Educacao</Badge>
            <Badge variant="warning">Implementacao Customizada</Badge>
          </div>
        </div>
        <ConnectorLine />
        {/* Applications */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <SectionLabel>AI Applications</SectionLabel>
          <div className="flex flex-wrap gap-2 mt-1">
            <Badge variant="info">AI Software</Badge>
            <Badge variant="info">SaaS + AI</Badge>
            <Badge variant="info">AI Agencies</Badge>
            <Badge variant="info">AI-First Services</Badge>
          </div>
        </div>
        <ConnectorLine />
        {/* Infrastructure */}
        <div className="bg-gray-100 border border-gray-200 rounded-xl p-6">
          <SectionLabel>AI Infrastructure</SectionLabel>
          <div className="flex flex-wrap gap-2 mt-1">
            <Badge>OpenAI</Badge>
            <Badge>Anthropic</Badge>
            <Badge>Google</Badge>
            <Badge>LLMs etc.</Badge>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

const EvolutionStages = () => {
  const stages = [
    { num: '01', title: 'Uso Individual', subtitle: 'ChatGPT Free', desc: 'Pessoas usando IA individualmente, sem direcionamento. Cada um descobre por conta propria.', accent: 'bg-gray-400' },
    { num: '02', title: 'Adocao em Equipe', subtitle: 'Team Enablement', desc: 'Times aprendendo a trabalhar com IA. Mentalidade probabilistica. Pensamento critico sobre outputs.', accent: 'bg-blue-500' },
    { num: '03', title: 'Integracao em Workflows', subtitle: 'Workflow Fit', desc: 'IA integrada nos processos reais. Nao mais uma ferramenta — parte do fluxo de trabalho.', accent: 'bg-amber-500' },
    { num: '04', title: 'Operacoes de IA', subtitle: 'AI Operations', desc: 'Operadores dedicados. Human-in-the-loop. Monitoramento de qualidade. Guardrails e atualizacoes.', accent: 'bg-primary' },
    { num: '05', title: 'Organizacao AI-First', subtitle: 'Full Integration', desc: 'Sistemas integrados a operacao. Pessoas empoderadas. ROI mensuravel. Escala com eficiencia.', accent: 'bg-emerald-500' }
  ]

  return (
    <div className="max-w-2xl mx-auto">
      {stages.map((s, i) => (
        <div key={s.num} className="flex gap-8">
          {/* Timeline */}
          <div className="flex flex-col items-center w-14 shrink-0">
            <div className={`w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center font-display font-bold text-sm text-gray-800 shadow-sm`}>
              {s.num}
            </div>
            {i < stages.length - 1 && <div className="w-px flex-1 bg-gray-200" />}
          </div>
          {/* Content */}
          <div className={`pb-10 flex-1 ${i === stages.length - 1 ? 'pb-0' : ''}`}>
            <Card className="overflow-hidden">
              <div className={`h-1 ${s.accent}`} />
              <CardContent className="pt-5">
                <div className="flex items-baseline gap-3 mb-2">
                  <h4 className="font-display font-bold text-lg tracking-tight">{s.title}</h4>
                  <span className="text-xs text-gray-400 font-medium">{s.subtitle}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      ))}
    </div>
  )
}

const MoatDiagram = () => (
  <Card>
    <CardContent className="p-10">
      <div className="grid grid-cols-[1fr_3fr_1fr] items-stretch gap-6 max-w-2xl mx-auto">
        <div className="bg-red-50 border border-red-100 rounded-xl p-5 flex flex-col justify-center text-center">
          <SectionLabel>Era SaaS</SectionLabel>
          <span className="font-display font-bold text-sm text-primary mt-1">O Dificil era Construir</span>
        </div>
        <div className="flex flex-col gap-3">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
            <span className="font-display font-semibold text-sm">Business ROI</span>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
            <span className="font-display font-semibold text-sm">Service / Deployment Layer</span>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
            <span className="font-display font-semibold text-sm">Application Layer</span>
          </div>
          <div className="bg-gray-100 border border-gray-200 rounded-xl p-4 text-center">
            <span className="font-display font-semibold text-sm">AI Infrastructure</span>
          </div>
        </div>
        <div className="bg-red-50 border border-red-100 rounded-xl p-5 flex flex-col justify-center text-center">
          <SectionLabel>Era AI</SectionLabel>
          <span className="font-display font-bold text-sm text-primary mt-1">O Dificil e Deployar</span>
        </div>
      </div>
    </CardContent>
  </Card>
)

const SpectrumChart = () => (
  <Card>
    <CardContent className="p-10">
      <div className="max-w-xl mx-auto">
        <div className="flex justify-between mb-6">
          <div className="text-left">
            <span className="text-sm font-semibold text-primary">Pure Service</span>
            <p className="text-xs text-gray-400 mt-0.5">Custom Agency</p>
          </div>
          <div className="text-right">
            <span className="text-sm font-semibold text-emerald-600">Pure Product</span>
            <p className="text-xs text-gray-400 mt-0.5">Self-Serve SaaS</p>
          </div>
        </div>
        <div className="relative h-2 bg-gradient-to-r from-primary/20 via-amber-200 to-emerald-200 rounded-full">
          {[15, 35, 55, 75, 90].map((pos, i) => (
            <div key={i} className="absolute -top-1.5 w-5 h-5 rounded-full border-2 border-white shadow-md"
              style={{
                left: `${pos}%`,
                transform: 'translateX(-50%)',
                backgroundColor: i < 2 ? '#E53935' : i < 3 ? '#F59E0B' : '#22C55E',
                opacity: 0.5 + (i * 0.12)
              }}
            />
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-6 italic">Melhor caminho para produtizacao →</p>
      </div>
    </CardContent>
  </Card>
)

const ServiceToProductChart = () => (
  <Card>
    <CardContent className="p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-2xl mx-auto">
        {[
          { num: '1', title: 'Services', desc: 'Messy, Manual, Custom', bg: 'bg-gray-100 border-gray-200' },
          { num: '2', title: 'Patterns', desc: 'Repetivel, Organizado', bg: 'bg-blue-50 border-blue-200' },
          { num: '3', title: 'Product(s)', desc: 'Codigo Escalavel', bg: 'bg-emerald-50 border-emerald-200' }
        ].map((s, i) => (
          <div key={s.num} className="flex flex-col items-center text-center gap-4">
            <div className={`${s.bg} border rounded-2xl w-24 h-24 flex items-center justify-center`}>
              <span className="font-display font-bold text-3xl text-gray-400">{s.num}</span>
            </div>
            <div>
              <h4 className="font-display font-bold text-base">{s.title}</h4>
              <p className="text-xs text-gray-500 mt-1">{s.desc}</p>
            </div>
            {i < 2 && (
              <div className="hidden md:block absolute" style={{ left: `${33 * (i + 1)}%`, top: '50%' }}>
                <span className="text-2xl text-gray-300">→</span>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-10 bg-amber-50 border border-amber-200 rounded-xl p-5 text-center max-w-lg mx-auto">
        <p className="text-sm font-medium text-gray-700 italic">"Bons produtos vem de EVIDENCIA, nao de suposicoes."</p>
      </div>
    </CardContent>
  </Card>
)

const VennDiagram = () => (
  <Card>
    <CardContent className="p-10">
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-80 h-72">
          <div className="absolute top-0 left-8 w-40 h-40 rounded-full bg-red-50 border-2 border-red-200 flex items-center justify-center">
            <span className="text-xs font-semibold text-primary text-center leading-tight mt-[-24px]">AI<br/>Consulting</span>
          </div>
          <div className="absolute top-0 right-8 w-40 h-40 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center">
            <span className="text-xs font-semibold text-blue-600 text-center leading-tight mt-[-24px]">AI<br/>Implementation</span>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center">
            <span className="text-xs font-semibold text-emerald-700 text-center leading-tight mt-[32px]">AI<br/>Enablement</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 max-w-md text-center leading-relaxed">
          A intersecao de <strong>Consultoria</strong>, <strong>Implementacao</strong> e <strong>Enablement</strong> em IA e o skill set mais valioso da proxima decada.
        </p>
      </div>
    </CardContent>
  </Card>
)

/* ═══════════════════════════════════════════════════════════════════
   SECTION COMPONENTS
═══════════════════════════════════════════════════════════════════ */

const SectionHeader = ({ num, title, subtitle }) => (
  <div className="mb-16">
    {num !== undefined && (
      <span className="text-primary font-display font-bold text-sm tracking-wider block mb-2">
        {String(num).padStart(2, '0')}
      </span>
    )}
    <h2 className="font-display font-bold text-4xl md:text-5xl tracking-[-1.5px] leading-[1.05]">{title}</h2>
    {subtitle && (
      <p className="text-gray-500 text-base mt-4 max-w-lg leading-relaxed">{subtitle}</p>
    )}
  </div>
)

const Logo214 = ({ size = 'md' }) => {
  const sizes = { sm: 'w-6 h-6 text-[8px]', md: 'w-8 h-8 text-xs', lg: 'w-10 h-10 text-sm' }
  return (
    <div className={`${sizes[size]} bg-primary rounded-lg flex items-center justify-center`}>
      <span className="text-white font-bold italic" style={{ fontFamily: '"Futura", "Trebuchet MS", sans-serif' }}>214</span>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN APP
═══════════════════════════════════════════════════════════════════ */

function App() {
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.section)
            if (!isNaN(idx)) setActiveSection(idx)
          }
        })
      },
      { threshold: 0.2 }
    )
    document.querySelectorAll('[data-section]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const navItems = ['Intro', 'Sobre', 'AI-First', 'Cases', 'Strategy', 'CTA']

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: '"Inter Tight", Inter, system-ui, sans-serif' }}>

      {/* ─── STICKY NAV ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo214 />
            <span className="font-display font-semibold text-sm tracking-tight hidden md:inline">Venture Studio</span>
          </div>
          <div className="flex gap-0.5 bg-gray-100 rounded-lg p-1">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={`#section-${i}`}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  activeSection === i
                    ? 'bg-white text-black shadow-sm'
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 0 — INTRO / HERO
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="section-0" data-section="0" className="min-h-screen flex items-center justify-center px-8 pt-14">
          <div className="max-w-3xl mx-auto text-center py-20">
            <SectionLabel>Movimento Empresa Junior 2026</SectionLabel>

            <h1 className="font-display font-bold text-5xl md:text-7xl tracking-[-2.5px] leading-[0.95] mt-6 mb-8">
              Como construir uma<br/>
              <span className="text-primary">organizacao AI-First</span>
            </h1>

            <p className="text-lg text-gray-500 max-w-md mx-auto leading-relaxed mb-16">
              De usar o ChatGPT gratuito a ter sistemas integrados que multiplicam a capacidade de cada pessoa na operacao.
            </p>

            {/* Speaker + Context */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
              <Card>
                <CardContent className="p-5 text-left">
                  <SectionLabel>Palestrante</SectionLabel>
                  <p className="font-display font-semibold text-base mt-1">David Benalcazar Chang</p>
                  <p className="text-xs text-gray-500 mt-1">COO metaKosmos | Founder Ktirio AI, Treehouz</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-5 text-left">
                  <SectionLabel>Powered by</SectionLabel>
                  <div className="flex items-center gap-2.5 mt-1">
                    <Logo214 size="sm" />
                    <span className="font-display font-semibold text-base">Venture Studio</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">7 empresas | Florianopolis, BR</p>
                </CardContent>
              </Card>
            </div>

            {/* Agenda */}
            <div className="max-w-md mx-auto">
              <SectionLabel>Agenda</SectionLabel>
              <div className="flex flex-col gap-3 mt-4">
                {[
                  'Minha jornada ate aqui',
                  'AI-First Organization: 5 etapas',
                  'Cases de alto impacto',
                  'metaKosmos AI Strategy + Ktirio AI',
                  'Provocacao & convite'
                ].map((item, i) => (
                  <Card key={i}>
                    <div className="flex items-center gap-4 px-5 py-4">
                      <span className="text-primary font-display font-bold text-sm w-6 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                      <span className="text-sm text-gray-700 font-medium">{item}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 1 — QUEM SOU EU
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="section-1" data-section="1" className="px-8 py-32 bg-white">
          <div className="max-w-5xl mx-auto">
            <SectionHeader num={1} title="Quem sou eu" subtitle="E como cheguei ate aqui" />

            {/* Timeline */}
            <div className="max-w-2xl mx-auto mb-20">
              {[
                { year: '2015', title: 'Empresa Junior', desc: 'Primeiro contato com gestao, vendas e execucao em alta velocidade. A base de tudo.' },
                { year: '2017', title: 'Brognoli Imoveis', desc: 'Experiencia corporativa no mercado imobiliario. Entendendo escala e processos.' },
                { year: '2019', title: 'Empreender na Moda', desc: 'Lancando marcas proprias. Producao, branding, e-commerce. Aprendendo a construir do zero.' },
                { year: '2021', title: 'metaKosmos', desc: 'COO de empresa de comercio imersivo. AR/VR/3D para grandes marcas. phygiTech #1 no Brasil.' },
                { year: '2024', title: '214 Venture Studio', desc: 'Holding de 7 empresas: Ktirio AI, Treehouz, metaKosmos, DQKER, Panthera, Montuvia + consultorias.' },
              ].map((item, i, arr) => (
                <div key={i} className="flex gap-8">
                  <div className="flex flex-col items-center w-16 shrink-0">
                    <div className="w-14 h-14 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center font-display font-bold text-xs text-gray-700 shadow-sm">
                      {item.year}
                    </div>
                    {i < arr.length - 1 && <div className="w-px flex-1 bg-gray-200" />}
                  </div>
                  <div className={`flex-1 ${i < arr.length - 1 ? 'pb-8' : ''}`}>
                    <Card className={i === arr.length - 1 ? 'border-primary/30 bg-red-50/30' : ''}>
                      <CardContent className="py-5 px-6">
                        <h4 className="font-display font-bold text-lg tracking-tight">{item.title}</h4>
                        <p className="text-sm text-gray-600 mt-1.5 leading-relaxed">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>

            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-10 text-center">
                <p className="font-display font-bold text-2xl md:text-3xl tracking-tight leading-snug">
                  "A execucao supera a perfeicao.<br/>
                  <span className="text-primary">80% hoje vence 100% na semana que vem."</span>
                </p>
                <p className="text-sm text-gray-500 mt-6">Filosofia operacional — aplicada em cada empresa</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 2 — AI FIRST ORG
            Each sub-topic gets its own visual "slide" block
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="section-2" data-section="2" className="px-8 py-32">
          <div className="max-w-5xl mx-auto">
            <SectionHeader num={2} title="AI-First Organization" subtitle="O modelo que realmente entrega ROI em 2026" />

            {/* 2.1 — The Problem */}
            <div className="mb-20">
              <SubsectionTitle
                title="O problema: IA ainda nao entrega para a maioria"
                description="Multiplos estudos mostram que a maioria das empresas nao consegue ROI real de solucoes de IA."
              />
              <ROIStats />
            </div>

            <Separator />

            {/* 2.2 — But some succeed */}
            <div className="mb-20">
              <SubsectionTitle
                title="Mas quem faz certo, colhe resultados enormes"
                description="Empresas que integram IA corretamente nos workflows veem transformacao real."
              />
              <SuccessStats />
            </div>

            <Separator />

            {/* 2.3 — 3 Drivers */}
            <div className="mb-20">
              <SubsectionTitle
                title="Os 3 drivers do ROI real com IA"
                description="O que separa quem tem resultado de quem nao tem."
              />
              <DriversChart />
            </div>

            <Separator />

            {/* 2.4 — Service Layer */}
            <div className="mb-20">
              <SubsectionTitle
                title="A Service Layer"
                description="A camada que conecta tecnologia a resultado de negocio."
              />
              <AIStackDiagram />
            </div>

            <Separator />

            {/* 2.5 — 5 Stages */}
            <div className="mb-20">
              <SubsectionTitle
                title="5 etapas para evoluir sua organizacao"
                description="Do ChatGPT gratuito ate sistemas totalmente integrados."
              />
              <EvolutionStages />
            </div>

            <Separator />

            {/* 2.6 — Moat */}
            <div className="mb-20">
              <SubsectionTitle
                title="O moat esta mudando"
                description="Na era SaaS, o dificil era construir. Na era AI, o dificil e deployar e integrar."
              />
              <MoatDiagram />
            </div>

            <Separator />

            {/* 2.7 — Spectrum */}
            <div className="mb-20">
              <SubsectionTitle
                title="Produto vs. Servico: e um espectro"
                description="A maioria dos negocios AI em 2026 precisa de alguma camada de servico."
              />
              <SpectrumChart />
            </div>

            <Separator />

            {/* 2.8 — Services to Product */}
            <div className="mb-20">
              <SubsectionTitle
                title="Servicos → Produto"
                description="Servicos de IA sao um laboratorio de pesquisa pago para seu futuro produto."
              />
              <ServiceToProductChart />
            </div>

            <Separator />

            {/* 2.9 — Skill Set */}
            <div>
              <SubsectionTitle
                title="Como vencer na decada da IA"
                description="O skill set do futuro."
              />
              <VennDiagram />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 3 — CASES
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="section-3" data-section="3" className="px-8 py-32 bg-white">
          <div className="max-w-5xl mx-auto">
            <SectionHeader num={3} title="Cases de alto impacto" subtitle="Projetos com grandes marcas" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  brand: 'C2House',
                  type: 'Visualizador 3D/AR',
                  desc: 'Configurador imersivo de espacos para construtora premium em Florianopolis.',
                  tags: ['Three.js', 'AR', 'React'],
                  impact: 'Experiencia de venda imersiva'
                },
                {
                  brand: 'Grandes Construtoras',
                  type: 'Ktirio AI',
                  desc: 'Visualizacao arquitetonica com IA — do sketch ao render em minutos.',
                  tags: ['AI', 'Architecture', 'SaaS'],
                  impact: '10x velocidade de producao'
                },
                {
                  brand: 'Marcas de Moda',
                  type: 'DQKER AI Studio',
                  desc: 'Producao de conteudo para fashion & advertising com IA generativa.',
                  tags: ['GenAI', 'Fashion', 'Content'],
                  impact: 'Reducao de 80% em custos de producao'
                },
                {
                  brand: 'Empresas Enterprise',
                  type: 'metaKosmos',
                  desc: 'Solucoes AR/VR para comercio imersivo e experiencias phygital.',
                  tags: ['AR/VR', 'Commerce', 'Enterprise'],
                  impact: 'phygiTech #1 no Brasil'
                }
              ].map((c, i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="bg-gray-50 h-48 flex items-center justify-center border-b border-gray-100">
                    <span className="text-gray-300 text-xs">imagem do case</span>
                  </div>
                  <CardContent>
                    <SectionLabel>{c.brand}</SectionLabel>
                    <h4 className="font-display font-bold text-xl tracking-tight mt-1">{c.type}</h4>
                    <p className="text-sm text-gray-600 mt-3 leading-relaxed">{c.desc}</p>
                    <div className="flex gap-2 mt-4 flex-wrap">
                      {c.tags.map(t => <Badge key={t}>{t}</Badge>)}
                    </div>
                    <div className="mt-6 pt-5 border-t border-gray-100">
                      <span className="text-sm text-emerald-600 font-semibold">↑ {c.impact}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 4 — mK AI STRATEGY
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="section-4" data-section="4" className="px-8 py-32">
          <div className="max-w-5xl mx-auto">
            <SectionHeader num={4} title="metaKosmos AI-First Strategy" subtitle="De agencia a SaaS escalavel com Ktirio AI" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {/* metaKosmos */}
              <Card>
                <CardContent className="p-8">
                  <SectionLabel>Operacao Atual</SectionLabel>
                  <h3 className="font-display font-bold text-3xl tracking-tight mt-2">metaKosmos</h3>
                  <p className="text-sm text-gray-500 mt-1 mb-8">Comercio imersivo AR/VR/3D</p>
                  <div className="space-y-6">
                    {[
                      { icon: '🎯', title: 'R$855K → R$2.565M', sub: 'Meta de revenue 3x' },
                      { icon: '🔄', title: 'Agency → SaaS', sub: 'Transicao de modelo de receita' },
                      { icon: '⚡', title: 'AI integrada na operacao', sub: 'Cada processo otimizado com IA' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-11 h-11 bg-gray-50 rounded-xl flex items-center justify-center text-lg border border-gray-100 shrink-0">{item.icon}</div>
                        <div>
                          <p className="text-sm font-semibold">{item.title}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{item.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Ktírio AI */}
              <Card>
                <CardContent className="p-8">
                  <SectionLabel>Produto AI para Escala</SectionLabel>
                  <h3 className="font-display font-bold text-3xl tracking-tight mt-2">Ktirio AI</h3>
                  <p className="text-sm text-gray-500 mt-1 mb-8">Viz arquitetonica com IA</p>
                  <div className="space-y-6">
                    {[
                      { icon: '🚀', title: 'R$1.5M de 10K usuarios', sub: 'Meta de scale via produto' },
                      { icon: '🏗', title: 'Service → Product path', sub: 'Aprendizado de +100 clientes' },
                      { icon: '📊', title: 'Credit-based model', sub: 'Melhor controle de margem' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-11 h-11 bg-gray-50 rounded-xl flex items-center justify-center text-lg border border-gray-100 shrink-0">{item.icon}</div>
                        <div>
                          <p className="text-sm font-semibold">{item.title}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{item.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Strategy Statement */}
            <div className="bg-black text-white rounded-2xl p-12 md:p-16 text-center">
              <SectionLabel>A estrategia</SectionLabel>
              <h3 className="font-display font-bold text-3xl md:text-4xl mt-4 tracking-tight leading-snug">
                Servicos geram evidencia.<br/>
                Evidencia gera produto.<br/>
                <span className="text-primary">Produto gera escala.</span>
              </h3>
              <p className="text-gray-500 text-sm mt-6 max-w-md mx-auto leading-relaxed">
                Nao comecamos com suposicoes. Cada feature do Ktirio AI nasceu de um padrao repetido em dezenas de clientes reais.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 5 — CTA
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="section-5" data-section="5" className="px-8 py-32 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader num={5} title="E voce?" />

            <div className="mb-20">
              <p className="font-display font-bold text-3xl md:text-4xl tracking-tight leading-snug mb-8">
                Em 2026, ainda nao existem<br/>especialistas em IA.<br/>
                <span className="text-primary">Esse e o seu momento.</span>
              </p>
              <p className="text-gray-500 text-base leading-relaxed max-w-md mx-auto">
                Cada semana que voce investe em aprender e implementar IA na sua organizacao coloca voce anos a frente. O gap de adocao e enorme — e a janela esta aberta agora.
              </p>
            </div>

            {/* Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
              {[
                { num: '01', title: 'Aprenda', desc: 'Comece automatizando seus proprios processos. Ferramentas como n8n e Claude Code podem ser aprendidas em semanas.' },
                { num: '02', title: 'Implemente', desc: 'Expanda para processos do seu negocio. Mostre resultados. Treine outras pessoas no time.' },
                { num: '03', title: 'Escale', desc: 'Posicione-se como operador de IA. Torne-se indispensavel. Construa um skill set de altissimo valor.' }
              ].map((a, i) => (
                <Card key={i}>
                  <CardContent className="text-left">
                    <span className="text-primary font-display font-bold text-xs">{a.num}</span>
                    <h4 className="font-display font-bold text-lg mt-1 mb-3">{a.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{a.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Mentor CTA */}
            <div className="bg-black text-white rounded-2xl p-12 md:p-16">
              <SectionLabel>Convite</SectionLabel>
              <h3 className="font-display font-bold text-3xl md:text-4xl mt-4 tracking-tight">
                Vamos trabalhar juntos?
              </h3>
              <p className="text-gray-500 text-sm mt-4 max-w-sm mx-auto leading-relaxed">
                Estou disponivel como mentor para empresas juniores e startups que querem adotar IA de forma estrategica.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <a href="mailto:david@metakosmos.com.br" className="bg-primary hover:bg-primary-hover text-white px-6 py-3.5 rounded-xl font-medium text-sm transition-colors inline-block">
                  david@metakosmos.com.br
                </a>
                <div className="bg-white/10 backdrop-blur px-6 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2.5">
                  <Logo214 size="sm" />
                  <span className="font-medium">214 Venture Studio</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <footer className="mt-20 pt-8 border-t border-gray-100">
              <p className="text-xs text-gray-400">
                Movimento Empresa Junior 2026 — Palestra por David Benalcazar Chang
              </p>
            </footer>
          </div>
        </section>

      </main>
    </div>
  )
}

export default App
