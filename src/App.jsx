import { useState, useEffect } from 'react'

/* ═══════════════════════════════════════════════════════════════════
   DESIGN SYSTEM TOKENS (Swiss Clean — Space Grotesk Edition)

   Colors:    primary=#E53935, black=#000, white=#FFF, grays 50-900
   Display:   "Space Grotesk" — 700/600 — tight tracking
   UI:        "Inter Tight" — 400/500/600 — 0.2px tracking
   Spacing:   4 / 8 / 16 / 24 / 32 / 48 / 64
   Radius:    0 / 4 / 6 / 8
═══════════════════════════════════════════════════════════════════ */

/* ─── PRIMITIVES ─── */

const Card = ({ children, className = '' }) => (
  <div className={`rounded-lg border border-gray-200 bg-white ${className}`}>{children}</div>
)

const Badge = ({ children, variant = 'default' }) => {
  const v = {
    default: 'bg-gray-100 text-gray-700',
    primary: 'bg-[#FEE2E2] text-primary',
    success: 'bg-success-light text-[#166534]',
    warning: 'bg-warning-light text-[#92400E]',
    info: 'bg-info-light text-[#1E40AF]',
  }
  return (
    <span className={`inline-flex items-center rounded px-[10px] py-1 text-[12px] font-medium tracking-[0.2px] ${v[variant]}`}>
      {children}
    </span>
  )
}

/* ─── SLIDE — the core layout unit ─── */

const Slide = ({ id, dataSection, children, bg = 'bg-gray-50', className = '' }) => (
  <section
    id={id}
    data-section={dataSection}
    className={`min-h-screen flex items-center justify-center px-16 py-24 ${bg} ${className}`}
  >
    <div className="w-full max-w-4xl mx-auto text-center">
      {children}
    </div>
  </section>
)

const SlideLabel = ({ children }) => (
  <p className="text-[11px] font-semibold uppercase tracking-[2px] text-gray-400 mb-6" style={{ fontFamily: '"Inter Tight", system-ui' }}>
    {children}
  </p>
)

const SlideTitle = ({ children }) => (
  <h2 className="font-display font-bold text-[48px] md:text-[56px] tracking-[-1.5px] leading-[1.05] mb-4">
    {children}
  </h2>
)

const SlideSubtitle = ({ children }) => (
  <p className="text-[16px] text-gray-500 leading-[1.6] max-w-[540px] mx-auto tracking-[0.2px]" style={{ fontFamily: '"Inter Tight", system-ui' }}>
    {children}
  </p>
)

const ConnectorDot = () => (
  <div className="flex justify-center py-3">
    <div className="w-px h-10 bg-gray-300" />
  </div>
)

/* ─── LOGO ─── */

const Logo214 = ({ size = 32 }) => (
  <div
    className="bg-primary rounded flex items-center justify-center"
    style={{ width: size, height: size, borderRadius: 4 }}
  >
    <span
      className="text-white font-bold italic"
      style={{ fontFamily: '"Futura", "Trebuchet MS", sans-serif', fontSize: size * 0.38 }}
    >
      214
    </span>
  </div>
)

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
      { threshold: 0.3 }
    )
    document.querySelectorAll('[data-section]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const navItems = ['Intro', 'Sobre', 'AI-First', 'Cases', 'Strategy', 'CTA']

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: '"Inter Tight", Inter, system-ui, sans-serif' }}>

      {/* ─── NAV ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-12 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo214 size={32} />
            <span className="font-display font-bold text-[14px] tracking-[-0.3px] hidden md:inline">Venture Studio</span>
          </div>
          <div className="flex gap-1 bg-gray-100 rounded-md p-1">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={`#section-${i}`}
                className={`px-3 py-1.5 rounded text-[12px] font-medium tracking-[0.2px] transition-all ${
                  activeSection === i
                    ? 'bg-black text-white'
                    : 'text-gray-500 hover:text-black hover:bg-gray-50'
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>


      {/* ═══════════════════════════════════════════════════════════════
          SLIDE 0 — HERO
      ═══════════════════════════════════════════════════════════════ */}
      <Slide id="section-0" dataSection="0" bg="bg-white">
        <SlideLabel>Movimento Empresa Junior 2026</SlideLabel>
        <h1 className="font-display font-bold text-[64px] md:text-[80px] tracking-[-2.5px] leading-[0.95] mb-8">
          Como construir uma<br />
          <span className="text-primary">organizacao AI-First</span>
        </h1>
        <SlideSubtitle>
          De usar o ChatGPT gratuito a ter sistemas integrados que multiplicam a capacidade de cada pessoa na operacao.
        </SlideSubtitle>

        {/* Speaker cards */}
        <div className="flex gap-4 justify-center mt-16">
          <Card>
            <div className="px-6 py-5 text-left">
              <p className="text-[11px] font-semibold uppercase tracking-[1px] text-gray-400">Palestrante</p>
              <p className="font-display font-semibold text-[16px] mt-2">David Benalcazar Chang</p>
              <p className="text-[13px] text-gray-500 mt-1">COO metaKosmos | Founder Ktirio AI, Treehouz</p>
            </div>
          </Card>
          <Card>
            <div className="px-6 py-5 text-left">
              <p className="text-[11px] font-semibold uppercase tracking-[1px] text-gray-400">Powered by</p>
              <div className="flex items-center gap-2 mt-2">
                <Logo214 size={24} />
                <span className="font-display font-semibold text-[16px]">Venture Studio</span>
              </div>
              <p className="text-[13px] text-gray-500 mt-1">7 empresas | Florianopolis, BR</p>
            </div>
          </Card>
        </div>
      </Slide>


      {/* ═══════════════════════════════════════════════════════════════
          SLIDE 0b — AGENDA
      ═══════════════════════════════════════════════════════════════ */}
      <Slide bg="bg-gray-50">
        <SlideLabel>Agenda</SlideLabel>
        <SlideTitle>O que vamos cobrir</SlideTitle>
        <div className="flex flex-col gap-3 mt-12 max-w-md mx-auto">
          {[
            'Minha jornada ate aqui',
            'AI-First Organization: 5 etapas',
            'Cases de alto impacto',
            'metaKosmos AI Strategy + Ktirio AI',
            'Provocacao & convite'
          ].map((item, i) => (
            <Card key={i}>
              <div className="flex items-center gap-4 px-6 py-4">
                <span className="text-primary font-display font-bold text-[14px] w-8 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-[14px] text-gray-700 font-medium">{item}</span>
              </div>
            </Card>
          ))}
        </div>
      </Slide>


      {/* ═══════════════════════════════════════════════════════════════
          SLIDE 1 — QUEM SOU EU
      ═══════════════════════════════════════════════════════════════ */}
      <Slide id="section-1" dataSection="1" bg="bg-white">
        <span className="text-primary font-display font-bold text-[14px] tracking-wider">01</span>
        <SlideTitle>Quem sou eu</SlideTitle>
        <SlideSubtitle>E como cheguei ate aqui</SlideSubtitle>

        {/* Horizontal Timeline */}
        <div className="mt-16 relative">
          {/* Line */}
          <div className="absolute top-5 left-0 right-0 h-px bg-gray-200" />

          <div className="grid grid-cols-5 gap-4 relative">
            {[
              { year: '2015', title: 'Empresa Junior', desc: 'Gestao, vendas e execucao de alta velocidade' },
              { year: '2017', title: 'Brognoli', desc: 'Mercado imobiliario. Escala e processos' },
              { year: '2019', title: 'Moda', desc: 'Marcas proprias. Producao, branding, e-commerce' },
              { year: '2021', title: 'metaKosmos', desc: 'COO. Comercio imersivo AR/VR/3D' },
              { year: '2024', title: '214', desc: 'Venture Studio. 7 empresas' },
            ].map((item, i, arr) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-display font-bold text-[11px] mb-4 z-10 ${
                  i === arr.length - 1 ? 'bg-primary text-white border-primary' : 'bg-white text-gray-700 border-gray-200'
                }`}>
                  {item.year}
                </div>
                <h4 className="font-display font-bold text-[14px] tracking-tight">{item.title}</h4>
                <p className="text-[12px] text-gray-500 mt-1 leading-snug max-w-[140px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="mt-20 bg-gray-50 rounded-lg p-10 max-w-lg mx-auto">
          <p className="font-display font-bold text-[24px] tracking-[-0.5px] leading-snug">
            "A execucao supera a perfeicao.
            <span className="text-primary"> 80% hoje vence 100% na semana que vem."</span>
          </p>
        </div>
      </Slide>


      {/* ═══════════════════════════════════════════════════════════════
          SLIDE 2 — AI FIRST INTRO
      ═══════════════════════════════════════════════════════════════ */}
      <Slide id="section-2" dataSection="2" bg="bg-gray-50">
        <span className="text-primary font-display font-bold text-[14px] tracking-wider">02</span>
        <SlideTitle>AI-First Organization</SlideTitle>
        <SlideSubtitle>O modelo que realmente entrega ROI em 2026</SlideSubtitle>
      </Slide>


      {/* ─── 2.1 ROI STATS ─── */}
      <Slide bg="bg-white">
        <SlideLabel>O problema</SlideLabel>
        <SlideTitle>IA ainda nao entrega<br/>para a maioria</SlideTitle>
        <div className="grid grid-cols-4 gap-6 mt-16">
          {[
            { value: '75%', label: 'nao entregam ROI esperado', source: 'IBM' },
            { value: '95%', label: 'sem retorno mensuravel', source: 'MIT' },
            { value: '5%', label: 'dos pilotos chegam a producao', source: 'MIT' },
            { value: '76%', label: 'sem impacto no lucro', source: 'PwC' },
          ].map((s, i) => (
            <Card key={i}>
              <div className="p-6 text-center">
                <div className="font-display font-bold text-[40px] tracking-[-2px] text-primary">{s.value}</div>
                <p className="text-[12px] text-gray-500 mt-3 leading-relaxed">{s.label}</p>
                <span className="text-[10px] text-gray-400 mt-2 inline-block font-semibold uppercase tracking-wider">{s.source}</span>
              </div>
            </Card>
          ))}
        </div>
      </Slide>


      {/* ─── 2.2 SUCCESS STATS ─── */}
      <Slide bg="bg-gray-50">
        <SlideLabel>Mas quem faz certo</SlideLabel>
        <SlideTitle>Colhe resultados enormes</SlideTitle>
        <div className="grid grid-cols-3 gap-6 mt-16">
          {[
            { company: 'Klarna', stat: '-40%', desc: 'custo de atendimento com assistente IA' },
            { company: 'Intercom', stat: '1M+', desc: 'conversas de suporte resolvidas por semana' },
            { company: 'Freshworks', stat: '-76%', desc: 'tempo de resolucao de tickets' },
          ].map((s, i) => (
            <Card key={i}>
              <div className="p-8 text-center">
                <p className="text-[11px] font-semibold uppercase tracking-[1.5px] text-gray-400">{s.company}</p>
                <div className="font-display font-bold text-[48px] tracking-[-2px] text-success mt-2">{s.stat}</div>
                <p className="text-[13px] text-gray-500 mt-3 leading-relaxed">{s.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </Slide>


      {/* ─── 2.3 THREE DRIVERS ─── */}
      <Slide bg="bg-white">
        <SlideLabel>A diferenca</SlideLabel>
        <SlideTitle>Os 3 drivers do ROI real</SlideTitle>
        <div className="grid grid-cols-3 gap-6 mt-16">
          {[
            { num: '01', title: 'Workflow Fit', desc: 'Integrado no processo, nao apenas mais uma ferramenta.', note: 'McKinsey: fator #1 para impacto no EBIT' },
            { num: '02', title: 'Team Enablement', desc: 'Mentalidade probabilistica. Pensamento critico sobre outputs.', note: 'Sem isso, adocao morre apos um output ruim' },
            { num: '03', title: 'Operator Owner', desc: 'Human-in-the-loop. Monitoramento e atualizacoes continuas.', note: 'Gartner: 3x chance de alto valor' },
          ].map((d) => (
            <Card key={d.num} className="overflow-hidden text-left">
              <div className="h-1 bg-primary" style={{ width: `${Number(d.num) * 33.3}%` }} />
              <div className="p-8">
                <span className="text-primary font-display font-bold text-[12px] tracking-wider">{d.num}</span>
                <h4 className="font-display font-bold text-[22px] tracking-[-0.5px] mt-1 mb-4">{d.title}</h4>
                <p className="text-[14px] text-gray-600 leading-[1.6] mb-6">{d.desc}</p>
                <div className="bg-gray-50 rounded-md p-4">
                  <p className="text-[12px] text-gray-500 leading-relaxed">{d.note}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Slide>


      {/* ─── 2.4 SERVICE LAYER STACK ─── */}
      <Slide bg="bg-gray-50">
        <SlideLabel>A camada chave</SlideLabel>
        <SlideTitle>The Service Layer</SlideTitle>
        <SlideSubtitle>A camada que conecta tecnologia a resultado de negocio</SlideSubtitle>

        <div className="mt-16 max-w-lg mx-auto">
          {/* ROI */}
          <div className="bg-success-light border border-success/30 rounded-lg p-5 text-center">
            <span className="font-display font-bold text-[16px]">Business ROI</span>
            <p className="text-[12px] text-gray-500 mt-1">P&L Impact + Eficiencia + Crescimento</p>
          </div>
          <ConnectorDot />
          {/* Service */}
          <div className="bg-warning-light border border-warning/30 rounded-lg p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[1.5px] text-gray-500 mb-3">The Service Layer</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="warning">Consultoria</Badge>
              <Badge variant="warning">Educacao</Badge>
              <Badge variant="warning">Implementacao</Badge>
            </div>
          </div>
          <ConnectorDot />
          {/* Apps */}
          <div className="bg-info-light border border-info/30 rounded-lg p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[1.5px] text-gray-500 mb-3">AI Applications</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="info">AI Software</Badge>
              <Badge variant="info">SaaS + AI</Badge>
              <Badge variant="info">AI Agencies</Badge>
            </div>
          </div>
          <ConnectorDot />
          {/* Infra */}
          <div className="bg-gray-100 border border-gray-300 rounded-lg p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[1.5px] text-gray-500 mb-3">AI Infrastructure</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge>OpenAI</Badge>
              <Badge>Anthropic</Badge>
              <Badge>Google</Badge>
              <Badge>LLMs</Badge>
            </div>
          </div>
        </div>
      </Slide>


      {/* ─── 2.5 FIVE STAGES ─── */}
      <Slide bg="bg-white">
        <SlideLabel>Evolucao</SlideLabel>
        <SlideTitle>5 etapas para ser AI-First</SlideTitle>
        <SlideSubtitle>Do ChatGPT gratuito ate sistemas totalmente integrados</SlideSubtitle>

        <div className="mt-16 max-w-xl mx-auto">
          {[
            { num: '01', title: 'Uso Individual', sub: 'ChatGPT Free', desc: 'Cada pessoa descobre por conta propria.', accent: 'bg-gray-300' },
            { num: '02', title: 'Adocao em Equipe', sub: 'Team Enablement', desc: 'Pensamento critico. Mentalidade probabilistica.', accent: 'bg-info' },
            { num: '03', title: 'Integracao em Workflows', sub: 'Workflow Fit', desc: 'IA parte do processo, nao mais uma ferramenta.', accent: 'bg-warning' },
            { num: '04', title: 'Operacoes de IA', sub: 'AI Ops', desc: 'Operadores dedicados. Human-in-the-loop.', accent: 'bg-primary' },
            { num: '05', title: 'Organizacao AI-First', sub: 'Full Integration', desc: 'Sistemas integrados. ROI mensuravel. Escala.', accent: 'bg-success' },
          ].map((s, i, arr) => (
            <div key={s.num} className="flex gap-6">
              <div className="flex flex-col items-center w-12 shrink-0">
                <div className={`w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center font-display font-bold text-[12px] text-gray-800`}>
                  {s.num}
                </div>
                {i < arr.length - 1 && <div className="w-px flex-1 bg-gray-200" />}
              </div>
              <div className={`flex-1 text-left ${i < arr.length - 1 ? 'pb-6' : ''}`}>
                <Card className="overflow-hidden">
                  <div className={`h-[3px] ${s.accent}`} />
                  <div className="px-6 py-4">
                    <div className="flex items-baseline gap-2">
                      <h4 className="font-display font-bold text-[16px] tracking-tight">{s.title}</h4>
                      <span className="text-[11px] text-gray-400">{s.sub}</span>
                    </div>
                    <p className="text-[13px] text-gray-500 mt-1">{s.desc}</p>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </Slide>


      {/* ─── 2.6 MOAT ─── */}
      <Slide bg="bg-gray-50">
        <SlideLabel>Mudanca de paradigma</SlideLabel>
        <SlideTitle>O moat esta mudando</SlideTitle>

        <div className="mt-16 max-w-2xl mx-auto">
          <div className="grid grid-cols-[1fr_3fr_1fr] items-stretch gap-6">
            <div className="bg-[#FEE2E2] border border-primary/20 rounded-lg p-6 flex flex-col justify-center text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[1px] text-gray-500">Era SaaS</p>
              <p className="font-display font-bold text-[14px] text-primary mt-2">O dificil era construir</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="bg-success-light border border-success/20 rounded-lg p-4 text-center">
                <span className="font-display font-semibold text-[14px]">Business ROI</span>
              </div>
              <div className="bg-warning-light border border-warning/20 rounded-lg p-4 text-center">
                <span className="font-display font-semibold text-[14px]">Service Layer</span>
              </div>
              <div className="bg-info-light border border-info/20 rounded-lg p-4 text-center">
                <span className="font-display font-semibold text-[14px]">Application Layer</span>
              </div>
              <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 text-center">
                <span className="font-display font-semibold text-[14px]">Infrastructure</span>
              </div>
            </div>
            <div className="bg-[#FEE2E2] border border-primary/20 rounded-lg p-6 flex flex-col justify-center text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[1px] text-gray-500">Era AI</p>
              <p className="font-display font-bold text-[14px] text-primary mt-2">O dificil e deployar</p>
            </div>
          </div>
        </div>
      </Slide>


      {/* ─── 2.7 SPECTRUM ─── */}
      <Slide bg="bg-white">
        <SlideLabel>Nao e binario</SlideLabel>
        <SlideTitle>Produto vs. Servico<br/>e um espectro</SlideTitle>

        <div className="mt-16 max-w-lg mx-auto">
          <div className="flex justify-between mb-6">
            <div>
              <span className="text-[14px] font-semibold text-primary">Pure Service</span>
              <p className="text-[11px] text-gray-400">Custom Agency</p>
            </div>
            <div className="text-right">
              <span className="text-[14px] font-semibold text-success">Pure Product</span>
              <p className="text-[11px] text-gray-400">Self-Serve SaaS</p>
            </div>
          </div>
          <div className="relative h-2 bg-gradient-to-r from-primary/20 via-warning/20 to-success/20 rounded-full">
            {[12, 30, 50, 72, 90].map((pos, i) => (
              <div
                key={i}
                className="absolute -top-1.5 w-5 h-5 rounded-full border-2 border-white shadow"
                style={{
                  left: `${pos}%`, transform: 'translateX(-50%)',
                  backgroundColor: ['#E53935','#E53935','#F59E0B','#22C55E','#22C55E'][i],
                  opacity: 0.4 + i * 0.15
                }}
              />
            ))}
          </div>
          <p className="text-[12px] text-gray-400 mt-8 italic">A maioria dos negocios AI em 2026 precisa de alguma camada de servico</p>
        </div>
      </Slide>


      {/* ─── 2.8 SERVICES → PRODUCT ─── */}
      <Slide bg="bg-gray-50">
        <SlideLabel>Caminho</SlideLabel>
        <SlideTitle>Servicos → Produto</SlideTitle>
        <SlideSubtitle>Servicos de IA sao um laboratorio de pesquisa pago para seu futuro produto</SlideSubtitle>

        <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto items-start">
          {[
            { num: '1', title: 'Services', desc: 'Messy, Manual, Custom', bg: 'bg-gray-100' },
            { num: '2', title: 'Patterns', desc: 'Repetivel, Organizado', bg: 'bg-info-light' },
            { num: '3', title: 'Product(s)', desc: 'Codigo Escalavel', bg: 'bg-success-light' },
          ].map((s, i, arr) => (
            <div key={s.num} className="flex flex-col items-center gap-4">
              <div className={`${s.bg} border border-gray-200 rounded-lg w-24 h-24 flex items-center justify-center`}>
                <span className="font-display font-bold text-[32px] text-gray-300">{s.num}</span>
              </div>
              <div>
                <h4 className="font-display font-bold text-[16px]">{s.title}</h4>
                <p className="text-[12px] text-gray-500 mt-1">{s.desc}</p>
              </div>
              {i < arr.length - 1 && (
                <span className="hidden md:block absolute text-gray-300 text-2xl" style={{ left: `${33 * (i + 1)}%`, top: '45%' }}>→</span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-warning-light border border-warning/30 rounded-lg p-5 max-w-md mx-auto">
          <p className="text-[14px] font-medium text-gray-700 italic">
            "Bons produtos vem de EVIDENCIA, nao de suposicoes."
          </p>
        </div>
      </Slide>


      {/* ─── 2.9 VENN ─── */}
      <Slide bg="bg-white">
        <SlideLabel>Skill set do futuro</SlideLabel>
        <SlideTitle>Como vencer na<br/>decada da IA</SlideTitle>

        <div className="mt-16 flex flex-col items-center">
          <div className="relative w-80 h-72">
            <div className="absolute top-0 left-6 w-40 h-40 rounded-full bg-[#FEE2E2] border-2 border-primary/20 flex items-center justify-center">
              <span className="text-[13px] font-semibold text-primary text-center leading-tight mt-[-20px]">AI<br/>Consulting</span>
            </div>
            <div className="absolute top-0 right-6 w-40 h-40 rounded-full bg-info-light border-2 border-info/20 flex items-center justify-center">
              <span className="text-[13px] font-semibold text-info text-center leading-tight mt-[-20px]">AI<br/>Implementation</span>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full bg-success-light border-2 border-success/20 flex items-center justify-center">
              <span className="text-[13px] font-semibold text-[#166534] text-center leading-tight mt-[28px]">AI<br/>Enablement</span>
            </div>
          </div>
          <p className="text-[14px] text-gray-500 max-w-sm mt-4 leading-relaxed">
            A intersecao de <strong className="text-gray-800">Consultoria</strong>, <strong className="text-gray-800">Implementacao</strong> e <strong className="text-gray-800">Enablement</strong> e o skill set mais valioso da proxima decada.
          </p>
        </div>
      </Slide>


      {/* ═══════════════════════════════════════════════════════════════
          SLIDE 3 — CASES
      ═══════════════════════════════════════════════════════════════ */}
      <Slide id="section-3" dataSection="3" bg="bg-gray-50">
        <span className="text-primary font-display font-bold text-[14px] tracking-wider">03</span>
        <SlideTitle>Cases de alto impacto</SlideTitle>
        <SlideSubtitle>Projetos com grandes marcas</SlideSubtitle>

        <div className="grid grid-cols-2 gap-6 mt-16 text-left">
          {[
            { brand: 'C2House', type: 'Visualizador 3D/AR', desc: 'Configurador imersivo para construtora premium.', tags: ['Three.js', 'AR', 'React'], impact: 'Experiencia de venda imersiva' },
            { brand: 'Construtoras', type: 'Ktirio AI', desc: 'Do sketch ao render em minutos com IA.', tags: ['AI', 'Architecture', 'SaaS'], impact: '10x velocidade de producao' },
            { brand: 'Fashion', type: 'DQKER AI Studio', desc: 'Conteudo para moda com IA generativa.', tags: ['GenAI', 'Fashion'], impact: '-80% custos de producao' },
            { brand: 'Enterprise', type: 'metaKosmos', desc: 'AR/VR para comercio imersivo e phygital.', tags: ['AR/VR', 'Commerce'], impact: 'phygiTech #1 no Brasil' },
          ].map((c, i) => (
            <Card key={i}>
              <div className="p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[1.5px] text-primary">{c.brand}</p>
                <h4 className="font-display font-bold text-[18px] tracking-tight mt-1">{c.type}</h4>
                <p className="text-[13px] text-gray-500 mt-2 leading-relaxed">{c.desc}</p>
                <div className="flex gap-2 mt-4 flex-wrap">
                  {c.tags.map(t => <Badge key={t}>{t}</Badge>)}
                </div>
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <span className="text-[13px] text-success font-semibold">↑ {c.impact}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Slide>


      {/* ═══════════════════════════════════════════════════════════════
          SLIDE 4 — STRATEGY
      ═══════════════════════════════════════════════════════════════ */}
      <Slide id="section-4" dataSection="4" bg="bg-white">
        <span className="text-primary font-display font-bold text-[14px] tracking-wider">04</span>
        <SlideTitle>AI-First Strategy</SlideTitle>
        <SlideSubtitle>De agencia a SaaS escalavel</SlideSubtitle>

        <div className="grid grid-cols-2 gap-8 mt-16 text-left">
          <Card>
            <div className="p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[1.5px] text-gray-400">Operacao</p>
              <h3 className="font-display font-bold text-[28px] tracking-[-0.5px] mt-2">metaKosmos</h3>
              <p className="text-[13px] text-gray-500 mt-1 mb-8">Comercio imersivo AR/VR/3D</p>
              <div className="space-y-5">
                {[
                  { title: 'R$855K → R$2.565M', sub: 'Meta de revenue 3x' },
                  { title: 'Agency → SaaS', sub: 'Transicao de modelo' },
                  { title: 'AI na operacao', sub: 'Cada processo otimizado' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <div>
                      <p className="text-[14px] font-semibold">{item.title}</p>
                      <p className="text-[12px] text-gray-500">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
          <Card>
            <div className="p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[1.5px] text-gray-400">Produto</p>
              <h3 className="font-display font-bold text-[28px] tracking-[-0.5px] mt-2">Ktirio AI</h3>
              <p className="text-[13px] text-gray-500 mt-1 mb-8">Viz arquitetonica com IA</p>
              <div className="space-y-5">
                {[
                  { title: 'R$1.5M de 10K usuarios', sub: 'Scale via produto' },
                  { title: 'Service → Product', sub: '+100 clientes de aprendizado' },
                  { title: 'Credit-based model', sub: 'Controle de margem' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <div>
                      <p className="text-[14px] font-semibold">{item.title}</p>
                      <p className="text-[12px] text-gray-500">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </Slide>

      {/* Strategy statement */}
      <Slide bg="bg-black" className="text-white">
        <SlideLabel>A estrategia</SlideLabel>
        <h2 className="font-display font-bold text-[48px] md:text-[56px] tracking-[-1.5px] leading-[1.1] mb-6">
          Servicos geram evidencia.<br/>
          Evidencia gera produto.<br/>
          <span className="text-primary">Produto gera escala.</span>
        </h2>
        <p className="text-[16px] text-gray-500 max-w-[440px] mx-auto leading-[1.6]">
          Cada feature do Ktirio AI nasceu de um padrao repetido em dezenas de clientes reais.
        </p>
      </Slide>


      {/* ═══════════════════════════════════════════════════════════════
          SLIDE 5 — CTA
      ═══════════════════════════════════════════════════════════════ */}
      <Slide id="section-5" dataSection="5" bg="bg-white">
        <span className="text-primary font-display font-bold text-[14px] tracking-wider">05</span>
        <h2 className="font-display font-bold text-[56px] md:text-[72px] tracking-[-2px] leading-[0.95] mt-4 mb-6">
          E voce?
        </h2>
        <p className="font-display font-bold text-[28px] tracking-[-0.5px] leading-snug mb-4">
          Em 2026, ainda nao existem especialistas em IA.<br/>
          <span className="text-primary">Esse e o seu momento.</span>
        </p>
        <SlideSubtitle>
          Cada semana investida em IA coloca voce anos a frente. O gap de adocao e enorme.
        </SlideSubtitle>

        <div className="grid grid-cols-3 gap-6 mt-16 text-left">
          {[
            { num: '01', title: 'Aprenda', desc: 'Automatize seus proprios processos. n8n e Claude Code em semanas.' },
            { num: '02', title: 'Implemente', desc: 'Expanda para o negocio. Mostre resultados. Treine o time.' },
            { num: '03', title: 'Escale', desc: 'Posicione-se como operador de IA. Skill set de altissimo valor.' },
          ].map((a, i) => (
            <Card key={i}>
              <div className="p-6">
                <span className="text-primary font-display font-bold text-[12px]">{a.num}</span>
                <h4 className="font-display font-bold text-[18px] tracking-tight mt-1 mb-3">{a.title}</h4>
                <p className="text-[13px] text-gray-500 leading-relaxed">{a.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </Slide>

      {/* CTA Final */}
      <Slide bg="bg-black" className="text-white">
        <SlideLabel>Convite</SlideLabel>
        <h2 className="font-display font-bold text-[56px] tracking-[-2px] leading-[0.95] mt-4">
          Vamos trabalhar juntos?
        </h2>
        <p className="text-[16px] text-gray-500 mt-4 max-w-sm mx-auto leading-[1.6]">
          Disponivel como mentor para empresas juniores e startups que querem adotar IA de forma estrategica.
        </p>
        <div className="mt-10 flex gap-4 justify-center">
          <a href="mailto:david@metakosmos.com.br" className="bg-primary hover:bg-primary-hover text-white px-6 py-3.5 rounded font-medium text-[14px] transition-colors">
            david@metakosmos.com.br
          </a>
          <div className="bg-white/10 px-6 py-3.5 rounded text-[14px] flex items-center gap-2.5">
            <Logo214 size={20} />
            <span className="font-medium">214 Venture Studio</span>
          </div>
        </div>

        <p className="text-[11px] text-gray-700 mt-20">
          Movimento Empresa Junior 2026
        </p>
      </Slide>

    </div>
  )
}

export default App
