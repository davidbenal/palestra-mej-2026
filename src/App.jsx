import { useState, useEffect } from 'react'

// ─── Charts / Diagrams ──────────────────────────────────────────────────────

const DiagramBox = ({ children, className = '', ...props }) => (
  <div className={`bg-white border border-gray-200 rounded-md p-4 ${className}`} {...props}>
    {children}
  </div>
)

const StackLayer = ({ label, children, color = 'bg-gray-50', border = 'border-gray-200' }) => (
  <div className={`${color} ${border} border rounded-lg p-4 w-full`}>
    <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 mb-3">{label}</div>
    <div className="flex flex-wrap gap-3 justify-center">{children}</div>
  </div>
)

const Pill = ({ children, color = 'bg-white' }) => (
  <span className={`${color} border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-700 inline-flex items-center gap-1.5`}>
    {children}
  </span>
)

// 3 Drivers of Real AI ROI
const DriversChart = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {[
      {
        num: '01',
        title: 'Workflow Fit',
        icon: '⚙️',
        desc: 'Integrado no processo, nao apenas mais uma ferramenta.',
        detail: 'Redesenho de workflows',
        stat: 'McKinsey: "Redesenhar workflows" e o fator #1 para impacto real'
      },
      {
        num: '02',
        title: 'Team Enablement',
        icon: '🧠',
        desc: 'Mentalidade probabilistica. Pensamento critico sobre outputs de IA.',
        detail: 'Sem isso: adocao morre apos um output ruim',
        stat: null
      },
      {
        num: '03',
        title: 'Operator Owner',
        icon: '👤',
        desc: 'Operadores de IA. Human-in-the-loop. Atualizacoes continuas.',
        detail: 'Monitorar qualidade, edge cases, guardrails',
        stat: 'Gartner: Avaliacao & Otimizacao = 3x chance de alto valor'
      }
    ].map((d) => (
      <div key={d.num} className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">{d.icon}</span>
          <div>
            <span className="text-[11px] font-semibold text-primary tracking-wider">{d.num}</span>
            <h4 className="font-display font-bold text-lg tracking-tight">{d.title}</h4>
          </div>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">{d.desc}</p>
        <p className="text-xs text-gray-500 mb-3">{d.detail}</p>
        {d.stat && (
          <div className="bg-error-light border-l-4 border-primary rounded px-3 py-2">
            <p className="text-[11px] text-gray-700 leading-snug">{d.stat}</p>
          </div>
        )}
      </div>
    ))}
  </div>
)

// AI Stack / Service Layer
const AIStackDiagram = () => (
  <div className="flex flex-col gap-4 max-w-2xl mx-auto">
    <div className="bg-success-light border border-success/30 rounded-lg p-5 text-center">
      <span className="text-lg mr-2">💰</span>
      <span className="font-display font-bold text-base">Business ROI</span>
      <p className="text-xs text-gray-600 mt-1">P&L Impact + Eficiencia + Crescimento</p>
    </div>
    <div className="flex justify-center"><div className="w-px h-6 bg-gray-300"></div></div>
    <StackLayer label="The Service Layer" color="bg-warning-light" border="border-warning/30">
      <Pill>🎯 Consultoria</Pill>
      <Pill>📚 Educacao</Pill>
      <Pill>🛠 Implementacao Customizada</Pill>
    </StackLayer>
    <div className="flex justify-center"><div className="w-px h-6 bg-gray-300"></div></div>
    <StackLayer label="AI Applications" color="bg-info-light" border="border-info/30">
      <Pill>AI Software</Pill>
      <Pill>SaaS + AI</Pill>
      <Pill>AI Agencies</Pill>
      <Pill>AI-First Services</Pill>
    </StackLayer>
    <div className="flex justify-center"><div className="w-px h-6 bg-gray-300"></div></div>
    <StackLayer label="AI Infrastructure" color="bg-gray-100" border="border-gray-300">
      <Pill>OpenAI</Pill>
      <Pill>Anthropic</Pill>
      <Pill>Google</Pill>
      <Pill>LLMs etc.</Pill>
    </StackLayer>
  </div>
)

// Product vs Services Spectrum
const SpectrumChart = () => (
  <div className="max-w-2xl mx-auto">
    <div className="flex justify-between mb-3">
      <div className="bg-primary/10 rounded-full px-4 py-2">
        <span className="text-sm font-semibold text-primary">Pure Service</span>
        <p className="text-[10px] text-gray-500">(Custom Agency)</p>
      </div>
      <div className="bg-success-light rounded-full px-4 py-2">
        <span className="text-sm font-semibold text-green-700">Pure Product</span>
        <p className="text-[10px] text-gray-500">(Self-Serve SaaS)</p>
      </div>
    </div>
    <div className="relative h-3 bg-gradient-to-r from-primary/30 via-warning/30 to-success/30 rounded-full">
      <div className="absolute left-[15%] -top-1 w-5 h-5 bg-primary rounded-full border-2 border-white shadow"></div>
      <div className="absolute left-[35%] -top-1 w-5 h-5 bg-primary/70 rounded-full border-2 border-white shadow"></div>
      <div className="absolute left-[55%] -top-1 w-5 h-5 bg-warning rounded-full border-2 border-white shadow"></div>
      <div className="absolute left-[75%] -top-1 w-5 h-5 bg-success/70 rounded-full border-2 border-white shadow"></div>
      <div className="absolute left-[90%] -top-1 w-5 h-5 bg-success rounded-full border-2 border-white shadow"></div>
    </div>
    <div className="flex justify-center mt-4">
      <span className="text-xs text-gray-500 italic">Melhor caminho para produtizacao →</span>
    </div>
  </div>
)

// The Moat is Changing
const MoatDiagram = () => (
  <div className="max-w-2xl mx-auto">
    <div className="grid grid-cols-[1fr_3fr_1fr] items-stretch gap-4">
      <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 flex flex-col justify-center text-center">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 mb-2">Era SaaS</span>
        <span className="font-display font-bold text-sm text-primary">O Dificil: Build</span>
      </div>
      <div className="flex flex-col gap-3">
        <div className="bg-success-light border border-success/30 rounded-lg p-3 text-center">
          <span className="font-display font-bold text-sm">💰 Business ROI</span>
        </div>
        <div className="bg-warning-light border border-warning/30 rounded-lg p-3 text-center">
          <span className="font-display font-bold text-sm">Service / Deployment Layer</span>
        </div>
        <div className="bg-info-light border border-info/30 rounded-lg p-3 text-center">
          <span className="font-display font-bold text-sm">Application Layer</span>
        </div>
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-3 text-center">
          <span className="font-display font-bold text-sm">AI Infrastructure</span>
        </div>
      </div>
      <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 flex flex-col justify-center text-center">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 mb-2">Era AI</span>
        <span className="font-display font-bold text-sm text-primary">O Dificil: Deploy</span>
      </div>
    </div>
  </div>
)

// Services → Patterns → Products
const ServiceToProductChart = () => (
  <div className="max-w-2xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
      {[
        { num: '1', title: 'Services', desc: 'Messy, Manual, Custom', icon: '○', color: 'bg-gray-50', dots: true },
        { num: '2', title: 'Patterns', desc: 'Repetivel, Organizado', icon: '▦', color: 'bg-info-light', dots: false },
        { num: '3', title: 'Product(s)', desc: 'Codigo Escalavel', icon: '📦', color: 'bg-success-light', dots: false }
      ].map((s, i) => (
        <div key={s.num} className="flex flex-col items-center gap-3">
          <div className={`${s.color} border border-gray-200 rounded-xl w-28 h-28 flex items-center justify-center text-4xl`}>
            {s.icon}
          </div>
          <div className="text-center">
            <span className="text-xs text-primary font-semibold">{s.num}.</span>
            <h4 className="font-display font-bold text-base">{s.title}</h4>
            <p className="text-xs text-gray-500">{s.desc}</p>
          </div>
          {i < 2 && <div className="hidden md:block absolute"><span className="text-gray-400">→</span></div>}
        </div>
      ))}
    </div>
    <div className="mt-6 bg-warning-light border border-warning/30 rounded-lg p-4 text-center">
      <p className="text-sm font-medium text-gray-700 italic">"Bons produtos vem de EVIDENCIA, nao de suposicoes."</p>
    </div>
  </div>
)

// Venn Diagram - Skill Set of the Future
const VennDiagram = () => (
  <div className="flex flex-col items-center gap-4">
    <div className="relative w-72 h-64">
      <div className="absolute top-0 left-8 w-36 h-36 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
        <span className="text-xs font-semibold text-primary text-center leading-tight mt-[-20px]">AI<br/>Consulting</span>
      </div>
      <div className="absolute top-0 right-8 w-36 h-36 rounded-full bg-info/10 border-2 border-info/30 flex items-center justify-center">
        <span className="text-xs font-semibold text-info text-center leading-tight mt-[-20px]">AI<br/>Implementation</span>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-36 h-36 rounded-full bg-success/10 border-2 border-success/30 flex items-center justify-center">
        <span className="text-xs font-semibold text-green-700 text-center leading-tight mt-[30px]">AI<br/>Enablement</span>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <span className="text-2xl">💎</span>
      </div>
    </div>
  </div>
)

// 5 Stages Evolution
const EvolutionStages = () => {
  const stages = [
    {
      num: '01',
      title: 'Uso Individual',
      subtitle: 'ChatGPT Free',
      desc: 'Pessoas usando IA individualmente, sem direcionamento. Cada um descobre por conta propria.',
      color: 'border-gray-300',
      bg: 'bg-gray-50'
    },
    {
      num: '02',
      title: 'Adocao em Equipe',
      subtitle: 'Team Enablement',
      desc: 'Times aprendendo a trabalhar com IA. Mentalidade probabilistica. Pensamento critico sobre outputs.',
      color: 'border-info',
      bg: 'bg-info-light'
    },
    {
      num: '03',
      title: 'Integracao em Workflows',
      subtitle: 'Workflow Fit',
      desc: 'IA integrada nos processos reais. Nao mais uma ferramenta — parte do fluxo de trabalho.',
      color: 'border-warning',
      bg: 'bg-warning-light'
    },
    {
      num: '04',
      title: 'Operacoes de IA',
      subtitle: 'AI Operations',
      desc: 'Operadores dedicados. Human-in-the-loop. Monitoramento de qualidade. Guardrails e atualizacoes.',
      color: 'border-primary',
      bg: 'bg-error-light'
    },
    {
      num: '05',
      title: 'Organizacao AI-First',
      subtitle: 'Full Integration',
      desc: 'Sistemas integrados a operacao. Pessoas empoderadas. ROI mensuravel. Escala com eficiencia.',
      color: 'border-success',
      bg: 'bg-success-light'
    }
  ]

  return (
    <div className="flex flex-col gap-0">
      {stages.map((s, i) => (
        <div key={s.num} className="flex items-stretch gap-6">
          {/* Timeline */}
          <div className="flex flex-col items-center w-12 shrink-0">
            <div className={`w-10 h-10 rounded-full ${s.bg} border-2 ${s.color} flex items-center justify-center font-display font-bold text-sm`}>
              {s.num}
            </div>
            {i < stages.length - 1 && <div className="w-px flex-1 bg-gray-200 min-h-[40px]"></div>}
          </div>
          {/* Content */}
          <div className={`${s.bg} border ${s.color} rounded-lg p-5 mb-4 flex-1`}>
            <div className="flex items-baseline gap-2 mb-1">
              <h4 className="font-display font-bold text-base">{s.title}</h4>
              <span className="text-xs text-gray-400">{s.subtitle}</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

// ROI Stats
const ROIStats = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {[
      { value: '75%', label: 'das solucoes IA nao entregam ROI esperado', source: 'IBM', color: 'text-primary' },
      { value: '95%', label: 'sem retorno mensuravel', source: 'MIT', color: 'text-primary' },
      { value: '5%', label: 'dos pilotos chegam a producao', source: 'MIT', color: 'text-primary' },
      { value: '76%', label: 'sem impacto no lucro', source: 'PwC', color: 'text-primary' },
    ].map((s, i) => (
      <div key={i} className="bg-white border border-gray-200 rounded-lg p-5 text-center">
        <div className={`font-display font-bold text-3xl tracking-tighter ${s.color}`}>{s.value}</div>
        <p className="text-xs text-gray-500 mt-2 leading-snug">{s.label}</p>
        <span className="text-[10px] text-gray-400 mt-1 inline-block">{s.source}</span>
      </div>
    ))}
  </div>
)

// Success Stories Counter
const SuccessStats = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {[
      { company: 'Klarna', stat: '-40%', desc: 'custo de atendimento ao cliente com assistente IA' },
      { company: 'Intercom', stat: '1M+', desc: 'conversas de suporte resolvidas por IA por semana' },
      { company: 'Freshworks', stat: '-76%', desc: 'tempo de resolucao de tickets em IT helpdesk' },
    ].map((s, i) => (
      <div key={i} className="bg-white border border-gray-200 rounded-lg p-5">
        <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">{s.company}</span>
        <div className="font-display font-bold text-3xl tracking-tighter text-success mt-1">{s.stat}</div>
        <p className="text-xs text-gray-500 mt-2 leading-snug">{s.desc}</p>
      </div>
    ))}
  </div>
)

// ─── Section Components ──────────────────────────────────────────────────────

const SectionTitle = ({ num, title, subtitle }) => (
  <div className="mb-10">
    {num !== undefined && (
      <span className="text-primary font-display font-bold text-sm tracking-wider">{String(num).padStart(2, '0')}</span>
    )}
    <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mt-1">{title}</h2>
    {subtitle && <p className="text-gray-500 text-base mt-2 max-w-xl">{subtitle}</p>}
  </div>
)

const Logo214 = () => (
  <span className="font-logo font-bold italic text-2xl tracking-tight">214</span>
)

// ─── Main App ────────────────────────────────────────────────────────────────

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
      { threshold: 0.3 }
    )
    document.querySelectorAll('[data-section]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const navItems = [
    'Intro',
    'Quem sou eu',
    'AI-First Org',
    'Cases',
    'mK Strategy',
    'Vamos juntos'
  ]

  return (
    <div className="min-h-screen bg-gray-50 font-ui">
      {/* ─── Sticky Nav ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="text-white font-bold italic text-xs" style={{ fontFamily: '"Futura", "Trebuchet MS", sans-serif' }}>214</span>
            </div>
            <span className="font-display font-bold text-sm tracking-tight hidden md:inline">Venture Studio</span>
          </div>
          <div className="flex gap-1">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={`#section-${i}`}
                className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
                  activeSection === i
                    ? 'bg-black text-white'
                    : 'text-gray-500 hover:text-black hover:bg-gray-100'
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 0 — INTRO
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="section-0" data-section="0" className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <span className="text-[11px] font-semibold uppercase tracking-[3px] text-gray-400">Movimento Empresa Junior 2026</span>
            </div>

            <h1 className="font-display font-bold text-5xl md:text-7xl tracking-[-2px] leading-[0.95] mb-6">
              Como construir uma<br/>
              <span className="text-primary">organizacao AI-First</span>
            </h1>

            <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed mb-12">
              De usar o ChatGPT gratuito a ter sistemas integrados que multiplicam a capacidade de cada pessoa na operacao.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
              <div className="bg-white border border-gray-200 rounded-lg px-6 py-4 text-left">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">Palestrante</span>
                <p className="font-display font-semibold text-base mt-1">David Benalcazar Chang</p>
                <p className="text-xs text-gray-500">COO metaKosmos | Founder Ktirio AI, Treehouz</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg px-6 py-4 text-left">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">Powered by</span>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                    <span className="text-white font-bold italic text-[9px]" style={{ fontFamily: '"Futura", "Trebuchet MS", sans-serif' }}>214</span>
                  </div>
                  <span className="font-display font-semibold text-base">Venture Studio</span>
                </div>
                <p className="text-xs text-gray-500">7 empresas | Florianopolis, BR</p>
              </div>
            </div>

            {/* Agenda */}
            <div className="max-w-lg mx-auto">
              <h3 className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-4">Agenda</h3>
              <div className="flex flex-col gap-2">
                {[
                  'Minha jornada ate aqui',
                  'AI-First Organization: 5 etapas',
                  'Cases de alto impacto',
                  'metaKosmos AI Strategy + Ktirio AI',
                  'Provocacao & convite'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-4 py-3 text-left">
                    <span className="text-primary font-display font-bold text-sm w-6">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 1 — QUEM SOU EU
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="section-1" data-section="1" className="min-h-screen px-6 py-20 bg-white">
          <div className="max-w-5xl mx-auto">
            <SectionTitle num={1} title="Quem sou eu" subtitle="E como cheguei ate aqui" />

            {/* Photo grid placeholder + key text */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
              {[
                { label: 'Equador → Brasil', sub: '11 anos em Florianopolis' },
                { label: 'Arquitetura + Tech', sub: 'Da prancheta ao codigo' },
                { label: 'metaKosmos', sub: 'COO — Comercio Imersivo AR/VR/3D' },
                { label: 'Ktirio AI', sub: 'Founder — Viz arquitetonica com IA' },
                { label: 'Treehouz', sub: 'Founder — CGI, VFX, FOOH' },
                { label: '+ Montuvia, DQKER, Panthera', sub: '7 empresas no portfolio 214' },
              ].map((item, i) => (
                <div key={i} className="group relative">
                  <div className="bg-gray-100 border border-gray-200 rounded-lg aspect-[4/3] flex items-center justify-center overflow-hidden">
                    <div className="text-center p-4">
                      <span className="text-gray-400 text-xs block mb-1">📸 foto {i + 1}</span>
                      <span className="text-[10px] text-gray-300">(adicionar foto)</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <h4 className="font-display font-bold text-sm">{item.label}</h4>
                    <p className="text-xs text-gray-500">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Key statement */}
            <div className="bg-gray-50 rounded-xl p-8 text-center max-w-2xl mx-auto">
              <p className="font-display font-bold text-xl md:text-2xl tracking-tight leading-snug">
                "A execucao supera a perfeicao.<br/>
                <span className="text-primary">80% hoje vence 100% na semana que vem."</span>
              </p>
              <p className="text-sm text-gray-500 mt-4">Filosofia operacional — aplicada em cada empresa</p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 2 — AI FIRST ORG
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="section-2" data-section="2" className="px-6 py-20">
          <div className="max-w-5xl mx-auto">
            <SectionTitle num={2} title="AI-First Organization" subtitle="O modelo que realmente entrega ROI em 2026" />

            {/* The Problem */}
            <div className="mb-16">
              <h3 className="font-display font-semibold text-xl mb-6">O problema: IA ainda nao entrega para a maioria</h3>
              <ROIStats />
            </div>

            {/* But some succeed */}
            <div className="mb-16">
              <h3 className="font-display font-semibold text-xl mb-6">Mas quem faz certo, colhe resultados enormes</h3>
              <SuccessStats />
            </div>

            {/* 3 Drivers */}
            <div className="mb-16">
              <h3 className="font-display font-semibold text-xl mb-2">Os 3 drivers do ROI real com IA</h3>
              <p className="text-sm text-gray-500 mb-6">O que separa quem tem resultado de quem nao tem</p>
              <DriversChart />
            </div>

            {/* The Stack */}
            <div className="mb-16">
              <h3 className="font-display font-semibold text-xl mb-2">A Service Layer</h3>
              <p className="text-sm text-gray-500 mb-6">A camada que conecta tecnologia a resultado de negocio</p>
              <AIStackDiagram />
            </div>

            {/* 5 Stages */}
            <div className="mb-16">
              <h3 className="font-display font-semibold text-xl mb-2">5 etapas para evoluir sua organizacao</h3>
              <p className="text-sm text-gray-500 mb-6">Do ChatGPT gratuito ate sistemas integrados</p>
              <EvolutionStages />
            </div>

            {/* Moat */}
            <div className="mb-16">
              <h3 className="font-display font-semibold text-xl mb-2">O moat esta mudando</h3>
              <p className="text-sm text-gray-500 mb-6">Na era SaaS, o dificil era construir. Na era AI, o dificil e deployar e integrar.</p>
              <MoatDiagram />
            </div>

            {/* Product vs Services */}
            <div className="mb-16">
              <h3 className="font-display font-semibold text-xl mb-2">Produto vs. Servico: e um espectro</h3>
              <p className="text-sm text-gray-500 mb-6">A maioria dos negocios AI em 2026 precisa de alguma camada de servico</p>
              <SpectrumChart />
            </div>

            {/* Services to Product */}
            <div className="mb-16">
              <h3 className="font-display font-semibold text-xl mb-2">Servicos → Produto</h3>
              <p className="text-sm text-gray-500 mb-6">Servicos de IA sao um laboratorio de pesquisa pago para seu futuro produto</p>
              <ServiceToProductChart />
            </div>

            {/* Skill Set */}
            <div className="mb-16">
              <h3 className="font-display font-semibold text-xl mb-2">Como vencer na decada da IA</h3>
              <p className="text-sm text-gray-500 mb-6">O skill set do futuro</p>
              <VennDiagram />
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">A intersecao de <strong>Consultoria</strong>, <strong>Implementacao</strong> e <strong>Enablement</strong> em IA</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 3 — CASES
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="section-3" data-section="3" className="min-h-screen px-6 py-20 bg-white">
          <div className="max-w-5xl mx-auto">
            <SectionTitle num={3} title="Cases de alto impacto" subtitle="Projetos com grandes marcas" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-100 h-40 flex items-center justify-center">
                    <span className="text-gray-400 text-xs">📸 imagem do case</span>
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">{c.brand}</span>
                    <h4 className="font-display font-bold text-lg mt-1">{c.type}</h4>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">{c.desc}</p>
                    <div className="flex gap-2 mt-3 flex-wrap">
                      {c.tags.map(t => (
                        <span key={t} className="bg-gray-100 text-gray-600 text-[11px] px-2 py-1 rounded">{t}</span>
                      ))}
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <span className="text-xs text-success font-semibold">↑ {c.impact}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 4 — mK AI STRATEGY
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="section-4" data-section="4" className="min-h-screen px-6 py-20">
          <div className="max-w-5xl mx-auto">
            <SectionTitle num={4} title="metaKosmos AI-First Strategy" subtitle="De agencia a SaaS escalavel com Ktirio AI" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* metaKosmos */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">Operacao Atual</span>
                <h3 className="font-display font-bold text-2xl mt-2">metaKosmos</h3>
                <p className="text-sm text-gray-500 mt-1 mb-6">Comercio imersivo AR/VR/3D</p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-lg">🎯</div>
                    <div>
                      <p className="text-sm font-medium">R$855K → R$2.565M</p>
                      <p className="text-xs text-gray-500">Meta de revenue 3x</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-info-light rounded-lg flex items-center justify-center text-info text-lg">🔄</div>
                    <div>
                      <p className="text-sm font-medium">Agency → SaaS</p>
                      <p className="text-xs text-gray-500">Transicao de modelo de receita</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-success-light rounded-lg flex items-center justify-center text-success text-lg">⚡</div>
                    <div>
                      <p className="text-sm font-medium">AI integrada na operacao</p>
                      <p className="text-xs text-gray-500">Cada processo otimizado com IA</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ktírio */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">Produto AI para Escala</span>
                <h3 className="font-display font-bold text-2xl mt-2">Ktirio AI</h3>
                <p className="text-sm text-gray-500 mt-1 mb-6">Viz arquitetonica com IA</p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-lg">🚀</div>
                    <div>
                      <p className="text-sm font-medium">R$1.5M de 10K usuarios</p>
                      <p className="text-xs text-gray-500">Meta de scale via produto</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-warning-light rounded-lg flex items-center justify-center text-warning text-lg">🏗</div>
                    <div>
                      <p className="text-sm font-medium">Service → Product path</p>
                      <p className="text-xs text-gray-500">Aprendizado de +100 clientes</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-success-light rounded-lg flex items-center justify-center text-success text-lg">📊</div>
                    <div>
                      <p className="text-sm font-medium">Credit-based model</p>
                      <p className="text-xs text-gray-500">Melhor controle de margem</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* The Strategy Visual */}
            <div className="bg-black text-white rounded-xl p-8 md:p-12 text-center">
              <span className="text-[11px] font-semibold uppercase tracking-[3px] text-gray-400">A estrategia</span>
              <h3 className="font-display font-bold text-3xl md:text-4xl mt-3 tracking-tight">
                Servicos geram evidencia.<br/>
                Evidencia gera produto.<br/>
                <span className="text-primary">Produto gera escala.</span>
              </h3>
              <p className="text-gray-400 text-sm mt-4 max-w-lg mx-auto">
                Nao comecamos com suposicoes. Cada feature do Ktirio AI nasceu de um padrao repetido em dezenas de clientes reais.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 5 — CTA
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="section-5" data-section="5" className="min-h-screen flex items-center justify-center px-6 py-20 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle num={5} title="E voce?" subtitle="" />

            <div className="mb-12">
              <p className="font-display font-bold text-2xl md:text-3xl tracking-tight leading-snug mb-6">
                Em 2026, ainda nao existem especialistas em IA.<br/>
                <span className="text-primary">Esse e o seu momento.</span>
              </p>
              <p className="text-gray-600 text-base leading-relaxed max-w-lg mx-auto">
                Cada semana que voce investe em aprender e implementar IA na sua organizacao coloca voce anos a frente. O gap de adocao e enorme — e a janela esta aberta agora.
              </p>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              {[
                {
                  icon: '🧠',
                  title: 'Aprenda',
                  desc: 'Comece automatizando seus proprios processos. Ferramentas como n8n e Claude Code podem ser aprendidas em semanas.'
                },
                {
                  icon: '⚡',
                  title: 'Implemente',
                  desc: 'Expanda para processos do seu negocio. Mostre resultados. Treine outras pessoas no time.'
                },
                {
                  icon: '🚀',
                  title: 'Escale',
                  desc: 'Posicione-se como operador de IA. Torne-se indispensavel. Construa um skill set de altissimo valor.'
                }
              ].map((a, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-6 text-left">
                  <span className="text-2xl">{a.icon}</span>
                  <h4 className="font-display font-bold text-base mt-3">{a.title}</h4>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>

            {/* Mentor CTA */}
            <div className="bg-black text-white rounded-xl p-8 md:p-12">
              <span className="text-[11px] font-semibold uppercase tracking-[3px] text-gray-400">Convite</span>
              <h3 className="font-display font-bold text-2xl md:text-3xl mt-3 tracking-tight">
                Vamos trabalhar juntos?
              </h3>
              <p className="text-gray-400 text-sm mt-3 max-w-md mx-auto leading-relaxed">
                Estou disponivel como mentor para empresas juniores e startups que querem adotar IA de forma estrategica. Vamos conversar.
              </p>
              <div className="mt-6 flex flex-col md:flex-row gap-3 justify-center">
                <a href="mailto:david@metakosmos.com.br" className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded font-medium text-sm transition-colors inline-block">
                  david@metakosmos.com.br
                </a>
                <div className="bg-white/10 backdrop-blur px-6 py-3 rounded text-sm flex items-center justify-center gap-2">
                  <div className="w-5 h-5 bg-primary rounded flex items-center justify-center">
                    <span className="text-white font-bold italic text-[8px]" style={{ fontFamily: '"Futura", "Trebuchet MS", sans-serif' }}>214</span>
                  </div>
                  <span>214 Venture Studio</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <footer className="mt-16 pt-8 border-t border-gray-200">
              <p className="text-xs text-gray-400">
                Movimento Empresa Junior 2026 — Palestra por David Benalcazar Chang
              </p>
              <p className="text-[10px] text-gray-300 mt-1">
                Built with React + Tailwind | Design System 214
              </p>
            </footer>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
