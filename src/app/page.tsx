import {
  Zap,
  Brain,
  BarChart3,
  Shield,
  Clock,
  ArrowRight,
  Phone,
  Mail,
  CheckCircle2,
  Target,
  TrendingUp,
  DollarSign,
  Award,
  Calendar,
  Globe,
  Cpu,
  ArrowUpRight,
  Star,
  ChevronRight,
} from "lucide-react";
import { ChatWidget } from "@/components/chat-widget";
import { MobileNav } from "@/components/mobile-nav";
import { OpenChatButton } from "@/components/open-chat-button";
import {
  AnimateOnScroll,
  StaggerChildren,
  StaggerItem,
} from "@/components/animate-on-scroll";
import Image from "next/image";

const aiSolutions = [
  {
    icon: Brain,
    title: "Predictive Maintenance",
    description:
      "ML models analyze equipment sensor data to predict failures before they happen.",
    impact: "40% fewer emergency calls",
  },
  {
    icon: Clock,
    title: "Smart Dispatch",
    description:
      "AI routes technicians by location, skill set, urgency, and traffic patterns.",
    impact: "30% faster response",
  },
  {
    icon: BarChart3,
    title: "Energy Analytics",
    description:
      "Real-time building energy monitoring with anomaly detection and optimization.",
    impact: "15-25% energy savings",
  },
  {
    icon: Zap,
    title: "AI Customer Service",
    description:
      "24/7 chatbot for service requests, scheduling, estimates, and emergency triage.",
    impact: "Never miss a call",
  },
  {
    icon: Shield,
    title: "Automated Compliance",
    description:
      "AI-generated maintenance reports, compliance docs, and sustainability metrics.",
    impact: "80% less paperwork",
  },
  {
    icon: Target,
    title: "AI Search Optimization",
    description:
      "Get found by Google AI Overview. Content that AI recommends — not just ranks.",
    impact: "Top of AI results",
  },
];

const phases = [
  {
    phase: "01",
    title: "Discovery & Strategy",
    duration: "Week 1–2",
    items: [
      "Operations & tech stack audit",
      "Stakeholder interviews",
      "Customer journey mapping",
      "ROI opportunity identification",
      "Strategic roadmap delivery",
    ],
  },
  {
    phase: "02",
    title: "Build & Integrate",
    duration: "Week 3–6",
    items: [
      "AI chatbot deployment",
      "Website redesign (Next.js)",
      "SEO & AEO optimization",
      "CRM integration",
      "Predictive maintenance prototype",
    ],
  },
  {
    phase: "03",
    title: "Launch & Optimize",
    duration: "Week 7–8",
    items: [
      "Team training & rollout",
      "Performance monitoring",
      "A/B testing",
      "Monthly strategy reviews",
      "Continuous improvement",
    ],
  },
];

const pricingTiers = [
  {
    name: "Foundation",
    price: "$3,500",
    description: "Modern website + basic AI",
    features: [
      "Custom website (Next.js)",
      "AI chatbot integration",
      "SEO & AEO optimization",
      "Mobile-first design",
      "Contact form automation",
      "30 days support",
    ],
    popular: false,
  },
  {
    name: "Engine",
    price: "$8,500",
    description: "Full AI implementation",
    features: [
      "Everything in Foundation",
      "Smart dispatch AI",
      "Energy analytics dashboard",
      "CRM integration & automation",
      "Automated reporting",
      "Custom API integrations",
      "90 days support + training",
    ],
    popular: true,
  },
  {
    name: "Ecosystem",
    price: "$15,000+",
    description: "Enterprise AI transformation",
    features: [
      "Everything in Engine",
      "Predictive maintenance AI",
      "IoT sensor integration",
      "Real-time fleet tracking",
      "Custom ML models",
      "White-label dashboards",
      "Dedicated account manager",
      "12 months priority support",
    ],
    popular: false,
  },
];

export default function ProposalPage() {
  return (
    <main className="relative bg-white">
      <MobileNav />

      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-screen flex items-center px-6 pt-24 pb-16">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll>
              <div className="flex items-center gap-3 mb-8">
                <Image
                  src="/ajceliano-logo.png"
                  alt="A.J. Celiano"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-lg"
                />
                <span className="text-xs text-black/20">×</span>
                <Image
                  src="/haestus-logo.png"
                  alt="Haestus"
                  width={100}
                  height={24}
                  className="h-5 w-auto"
                />
              </div>
              <p className="text-sm font-mono text-black/30 tracking-widest uppercase mb-6">
                AI Implementation Proposal
              </p>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.95] mb-8">
                A.J. Celiano
                <br />
                <span className="text-black/20">Meets AI.</span>
              </h1>
              <p className="text-xl text-black/40 mb-4 max-w-md leading-relaxed">
                100 years of HVAC excellence.
                <br />
                Now powered by artificial intelligence.
              </p>
              <p className="text-sm text-black/25 mb-10 max-w-md">
                A tailored strategy to modernize operations, delight customers,
                and dominate your market.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="#solutions"
                  className="group flex items-center gap-2 px-7 py-4 rounded-full bg-black text-white font-medium hover:bg-black/80 transition-colors"
                >
                  Explore
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="flex items-center gap-2 px-7 py-4 rounded-full border border-black/10 text-black/50 hover:border-black/30 hover:text-black transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Call
                </a>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.3} direction="left">
              <div className="card-minimal rounded-2xl p-8">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-mono text-black/30 uppercase tracking-wider">
                    Proposal Overview
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-black/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-dot" />
                    Live
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "100", label: "Years of Excellence", icon: Award },
                    { value: "6", label: "AI Solutions", icon: Cpu },
                    { value: "2-3x", label: "Projected ROI", icon: TrendingUp },
                    { value: "8 wk", label: "To Launch", icon: Calendar },
                  ].map((stat) => (
                    <div key={stat.label} className="p-4 rounded-xl bg-white border border-black/5">
                      <stat.icon className="w-4 h-4 text-black/20 mb-3" />
                      <div className="text-2xl font-bold text-black">
                        {stat.value}
                      </div>
                      <div className="text-xs text-black/30 mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-black/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/haestus-logo.png"
                      alt="Haestus"
                      width={80}
                      height={20}
                      className="h-3.5 w-auto opacity-30"
                    />
                    <span className="text-[10px] text-black/15">×</span>
                    <Image
                      src="/ajceliano-logo.png"
                      alt="A.J. Celiano"
                      width={28}
                      height={28}
                      className="w-7 h-7 rounded opacity-40"
                    />
                  </div>
                  <span className="text-[10px] text-black/15 font-mono">
                    April 2026
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ═══════ HOMEWORK ═══════ */}
      <section className="py-32 px-6 bg-[#fafafa]">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <div className="mb-12">
              <div className="section-line mb-6" />
              <h2 className="text-3xl font-bold mb-2">We Did Our Homework</h2>
              <p className="text-black/30">What we know about A.J. Celiano</p>
            </div>
          </AnimateOnScroll>
          <StaggerChildren className="grid md:grid-cols-2 gap-3" staggerDelay={0.06}>
            {[
              ["Founded in 1925", "A century of trust in commercial HVAC"],
              ["Veteran-owned", "Deep commitment to quality and service"],
              ["8 core services", "HVAC design to sustainability & decarbonization"],
              ["30+ industry partners", "Including FacilAI — already exploring AI"],
              ["Cranford, NJ", "Serving the tri-state area's commercial buildings"],
              ["Sustainability-focused", "Decarbonization and energy efficiency are core values"],
              ["WordPress + Elementor", "Major opportunity for a modern tech upgrade"],
              ['"Where Legacy Meets Innovation"', "AI is the natural next chapter"],
            ].map(([bold, rest]) => (
              <StaggerItem key={bold}>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-black/5">
                  <CheckCircle2 className="w-4 h-4 text-black/20 mt-0.5 shrink-0" />
                  <p className="text-sm text-black/50">
                    <span className="text-black font-medium">{bold}</span>
                    <span className="text-black/25"> — </span>
                    {rest}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ═══════ SOLUTIONS ═══════ */}
      <section id="solutions" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll>
            <div className="mb-12">
              <div className="section-line mb-6" />
              <p className="text-xs font-mono text-black/25 uppercase tracking-widest mb-3">
                Tailored Solutions
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Six Ways AI Will
                <br />
                Transform Your Business
              </h2>
            </div>
          </AnimateOnScroll>
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.08}>
            {aiSolutions.map((s) => (
              <StaggerItem key={s.title}>
                <div className="card-minimal rounded-xl p-6 h-full">
                  <s.icon className="w-5 h-5 text-black/20 mb-5" />
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-black/40 mb-4 leading-relaxed">
                    {s.description}
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-xs font-medium text-black/30">
                    <TrendingUp className="w-3 h-3" />
                    {s.impact}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ═══════ ROI ═══════ */}
      <section className="py-32 px-6 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll>
              <div className="section-line mb-6" />
              <p className="text-xs font-mono text-black/25 uppercase tracking-widest mb-3">
                Return on Investment
              </p>
              <h2 className="text-4xl font-bold mb-8">
                The Math Speaks
                <br />
                for Itself
              </h2>
              <div className="space-y-3">
                {[
                  { label: "Emergency call reduction", saving: "$48,000", detail: "40% fewer dispatches at avg $200/call" },
                  { label: "Scheduling efficiency", saving: "$32,000", detail: "30% more jobs per tech per day" },
                  { label: "Admin time saved", saving: "$24,000", detail: "80% less reporting and paperwork" },
                  { label: "New leads from AI search", saving: "$18,000", detail: "High-intent traffic from AI Overview" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between p-4 rounded-xl bg-white border border-black/5"
                  >
                    <div>
                      <div className="text-sm font-medium">{item.label}</div>
                      <div className="text-xs text-black/25">{item.detail}</div>
                    </div>
                    <div className="text-lg font-bold font-mono">{item.saving}</div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2} direction="left">
              <div className="card-minimal rounded-2xl p-10 text-center">
                <p className="text-xs font-mono text-black/25 uppercase tracking-widest mb-4">
                  Estimated Annual Impact
                </p>
                <div className="text-7xl font-bold mb-2">$122K+</div>
                <p className="text-sm text-black/30 mb-8">
                  in savings & new revenue per year
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-[#fafafa]">
                    <div className="text-xl font-bold">2-3x</div>
                    <div className="text-xs text-black/30">ROI in Year 1</div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#fafafa]">
                    <div className="text-xl font-bold">90 days</div>
                    <div className="text-xs text-black/30">To first results</div>
                  </div>
                </div>
                <p className="text-[10px] text-black/15">
                  Based on industry benchmarks for mid-size commercial HVAC.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ═══════ ROADMAP ═══════ */}
      <section id="roadmap" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <div className="mb-12">
              <div className="section-line mb-6" />
              <p className="text-xs font-mono text-black/25 uppercase tracking-widest mb-3">
                Implementation
              </p>
              <h2 className="text-4xl md:text-5xl font-bold">
                Strategy to Launch
                <br />
                in 8 Weeks
              </h2>
            </div>
          </AnimateOnScroll>
          <div className="space-y-4">
            {phases.map((phase, i) => (
              <AnimateOnScroll key={phase.phase} delay={i * 0.12}>
                <div className="card-minimal rounded-xl p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="shrink-0 md:w-44">
                      <div className="text-4xl font-bold text-black/10 font-mono mb-1">
                        {phase.phase}
                      </div>
                      <h3 className="text-lg font-bold">{phase.title}</h3>
                      <div className="text-xs text-black/25 font-mono mt-1">
                        {phase.duration}
                      </div>
                    </div>
                    <div className="flex-1 grid sm:grid-cols-2 gap-2">
                      {phase.items.map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <ChevronRight className="w-3.5 h-3.5 text-black/15 mt-0.5 shrink-0" />
                          <span className="text-sm text-black/40">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ PRICING ═══════ */}
      <section id="pricing" className="py-32 px-6 bg-[#fafafa]">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <div className="section-line mx-auto mb-6" />
              <p className="text-xs font-mono text-black/25 uppercase tracking-widest mb-3">
                Investment
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Choose Your Starting Point
              </h2>
              <p className="text-base text-black/30 max-w-lg mx-auto">
                Flexible packages. No lock-in. Scale when you&apos;re ready.
              </p>
            </div>
          </AnimateOnScroll>
          <StaggerChildren className="grid md:grid-cols-3 gap-4" staggerDelay={0.12}>
            {pricingTiers.map((tier) => (
              <StaggerItem key={tier.name}>
                <div
                  className={`rounded-2xl p-7 h-full flex flex-col bg-white transition-all ${
                    tier.popular
                      ? "tier-popular shadow-lg"
                      : "border border-black/5"
                  }`}
                >
                  {tier.popular && (
                    <div className="text-[10px] font-mono uppercase tracking-widest text-black/40 mb-4">
                      Recommended
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                  <p className="text-xs text-black/30 mb-5">{tier.description}</p>
                  <div className="mb-6">
                    <span className="text-3xl font-bold">{tier.price}</span>
                  </div>
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-black/40">
                        <CheckCircle2 className="w-3.5 h-3.5 text-black/15 mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`block text-center py-3 rounded-full font-medium text-sm transition-all ${
                      tier.popular
                        ? "bg-black text-white hover:bg-black/80"
                        : "border border-black/10 text-black/50 hover:border-black hover:text-black"
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ═══════ RESULTS ═══════ */}
      <section id="results" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll direction="right">
              <div className="card-minimal rounded-2xl p-8">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-black text-black" />
                  ))}
                </div>
                <blockquote className="text-lg leading-relaxed mb-6">
                  &ldquo;Haestus took our outdated website and turned it into an
                  AI-powered platform that generates leads. The chatbot alone
                  booked 15+ appointments in its first month. From first call to
                  live site in under 2 weeks.&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold">
                    AE
                  </div>
                  <div>
                    <div className="text-sm font-medium">
                      Architecture & Engineering Client
                    </div>
                    <div className="text-xs text-black/25">
                      Professional Services
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              <div className="section-line mb-6" />
              <p className="text-xs font-mono text-black/25 uppercase tracking-widest mb-3">
                Proven Results
              </p>
              <h2 className="text-4xl font-bold mb-8">
                We Don&apos;t Just Talk.
                <br />
                We Deliver.
              </h2>
              <div className="space-y-3">
                {[
                  { metric: "15+", label: "AI-generated appointments in 30 days" },
                  { metric: "2 wk", label: "From kickoff to live deployment" },
                  { metric: "300%", label: "Increase in organic search visibility" },
                  { metric: "24/7", label: "Customer service via AI chatbot" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#fafafa] border border-black/5"
                  >
                    <div className="text-xl font-bold font-mono w-16 shrink-0">
                      {item.metric}
                    </div>
                    <div className="text-sm text-black/40">{item.label}</div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ═══════ WHY HAESTUS + TEAM ═══════ */}
      <section className="py-32 px-6 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <div className="section-line mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Why Haestus
              </h2>
              <p className="text-base text-black/30 max-w-lg mx-auto">
                Not a generic dev shop. An AI implementation consultancy.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid lg:grid-cols-5 gap-4">
            <AnimateOnScroll className="lg:col-span-2">
              <div className="card-minimal rounded-2xl p-8 h-full">
                <div className="w-16 h-16 rounded-xl bg-black text-white flex items-center justify-center text-xl font-bold mb-6">
                  RB
                </div>
                <h3 className="text-xl font-bold mb-1">Rocky Bunker</h3>
                <p className="text-sm text-black/30 mb-4">Founder & CEO</p>
                <p className="text-sm text-black/40 leading-relaxed mb-6">
                  Full-stack AI engineer. Builds with Claude, GPT, and Gemini.
                  Has deployed AI across professional services, real estate,
                  and B2B. Makes AI practical — not theoretical.
                </p>
                <div className="flex items-center gap-2 text-xs text-black/20">
                  <Globe className="w-3 h-3" />
                  haestus.dev
                </div>
              </div>
            </AnimateOnScroll>

            <StaggerChildren className="lg:col-span-3 grid sm:grid-cols-2 gap-4" staggerDelay={0.08}>
              {[
                {
                  title: "AI-Native",
                  description: "AI at the core of every solution. Latest models from Anthropic, OpenAI, Google.",
                  icon: Cpu,
                },
                {
                  title: "Full-Stack",
                  description: "Strategy to deployment. Dashboards, chatbots, automations — production-ready.",
                  icon: Zap,
                },
                {
                  title: "Industry-Specific",
                  description: "We research YOUR industry first. Every solution mapped to your operations.",
                  icon: Target,
                },
                {
                  title: "Speed That Shocks",
                  description: "This site? Built today. Fast iterations, rapid deployment, real results.",
                  icon: ArrowUpRight,
                },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="card-minimal rounded-xl p-6 h-full">
                    <item.icon className="w-5 h-5 text-black/15 mb-4" />
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-black/35 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* ═══════ AI DEMO CTA ═══════ */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll>
            <div className="card-minimal rounded-2xl p-12">
              <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center mx-auto mb-6">
                <Cpu className="w-5 h-5" />
              </div>
              <h2 className="text-3xl font-bold mb-3">
                Try Our AI Right Now
              </h2>
              <p className="text-base text-black/35 max-w-md mx-auto mb-2">
                The chat icon in the bottom right is a live AI that knows
                this entire proposal. Ask it anything.
              </p>
              <p className="text-sm text-black/20 mb-8">
                This is what we&apos;d build for A.J. Celiano&apos;s customers.
              </p>
              <OpenChatButton />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══════ CONTACT ═══════ */}
      <section id="contact" className="py-32 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/40 mb-4">
              100 years of legacy. The next 100 of innovation.
            </p>
            <p className="text-sm text-white/20 mb-12">
              Free 30-minute discovery call. No obligations.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <a
              href="tel:3852103238"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black font-semibold text-xl hover:bg-white/90 transition-colors mb-10"
            >
              <Phone className="w-5 h-5" />
              (385) 210-3238
            </a>

            <div className="flex items-center gap-4 justify-center mb-8">
              <div className="h-px bg-white/10 flex-1 max-w-24" />
              <span className="text-white/15 text-xs">or</span>
              <div className="h-px bg-white/10 flex-1 max-w-24" />
            </div>

            <div className="flex justify-center gap-4">
              <a
                href="mailto:rocky@haestus.dev"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-all text-sm"
              >
                <Mail className="w-4 h-4" />
                rocky@haestus.dev
              </a>
              <a
                href="https://haestus.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-all text-sm"
              >
                <Globe className="w-4 h-4" />
                haestus.dev
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="py-10 px-6 bg-black border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/haestus-logo-white.png"
              alt="Haestus"
              width={100}
              height={24}
              className="h-4 w-auto opacity-40"
            />
            <span className="text-white/10 text-xs">×</span>
            <Image
              src="/ajceliano-logo.png"
              alt="A.J. Celiano"
              width={24}
              height={24}
              className="w-6 h-6 rounded opacity-40"
            />
          </div>
          <p className="text-xs text-white/15">
            Prepared exclusively for A.J. Celiano &bull; April 2026
          </p>
        </div>
      </footer>

      <ChatWidget />
    </main>
  );
}
