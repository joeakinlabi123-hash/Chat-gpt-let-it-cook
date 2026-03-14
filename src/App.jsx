import { motion, useReducedMotion } from 'framer-motion';
import { sections, faqs, fitItems, outcomes, processSteps, solutionItems, trustItems } from './content';
import { FadeIn, ParallaxGlow, SectionTitle } from './components/MotionBlocks';

const cardMotion = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.09, duration: 0.6 }
  })
};

function App() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-pearl text-ink selection:bg-electric/20">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 backdrop-blur-xl bg-pearl/75">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#hero" className="text-xl font-semibold tracking-tight">Outbound <span className="text-electric">Drive</span></a>
          <a href="#book" className="rounded-full border border-ink/15 bg-white px-5 py-2 text-sm font-semibold shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow">Book Your Strategy Call</a>
        </div>
      </header>

      <main className="relative overflow-hidden pt-20">
        <section id="hero" className="relative isolate">
          <ParallaxGlow reduceMotion={reduceMotion} />
          <div className="mx-auto grid min-h-[92vh] max-w-6xl place-items-center gap-14 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
            <FadeIn className="space-y-8">
              <p className="inline-flex items-center rounded-full border border-ink/10 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate">Built for local commercial businesses</p>
              <h1 className="text-4xl font-semibold leading-[1.06] tracking-tight md:text-6xl xl:text-7xl">
                Qualified Commercial Opportunities, Delivered Through <span className="font-['Instrument_Serif'] italic text-electric">Precision Outbound</span>
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-slate md:text-xl">
                We help local commercial businesses generate qualified conversations, meetings, and opportunities through highly targeted cold email campaigns designed to drive real revenue.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a href="#book" className="rounded-full bg-ink px-8 py-4 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-electric">Book Your Strategy Call</a>
                <p className="text-sm text-slate">Targeted outreach. Qualified conversations. Measurable pipeline.</p>
              </div>
            </FadeIn>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9 }}
              className="relative w-full"
            >
              <div className="panel-cut rounded-3xl border border-white/70 bg-white/75 p-8 shadow-soft backdrop-blur-2xl">
                <p className="text-xs uppercase tracking-[0.18em] text-slate">Pipeline Snapshot</p>
                <div className="mt-8 grid gap-5">
                  {sections.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-ink/10 bg-pearl/70 p-5">
                      <p className="text-xs uppercase tracking-[0.14em] text-slate">{item.label}</p>
                      <p className="mt-2 text-2xl font-semibold">{item.value}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-8 text-sm leading-relaxed text-slate">No spray-and-pray volume. Every campaign is engineered around your market, offer, and ideal decision-maker profile.</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section-wrap">
          <SectionTitle eyebrow="Why growth feels reactive" title="If referrals slow down, pipeline dries up." subtitle="Most local commercial businesses know they can deliver. The challenge is generating a consistent flow of qualified conversations with the right decision-makers." />
          <div className="mx-auto grid max-w-6xl gap-6 px-6 lg:grid-cols-2 lg:px-10">
            {[
              'Referrals are valuable, but impossible to forecast month to month.',
              'Paid ads can be expensive, noisy, and disconnected from commercial buying intent.',
              'Sales teams waste hours chasing weak-fit leads that never progress.',
              'Decision-makers are hard to reach through traditional local channels.',
              'Revenue targets become reactive when pipeline quality is inconsistent.',
              'Internal outbound efforts stall due to bandwidth, infrastructure, and process gaps.'
            ].map((pain, index) => (
              <motion.article key={pain} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={cardMotion} className="rounded-3xl border border-ink/10 bg-white p-6 shadow-soft">
                <p className="text-base leading-relaxed text-slate">{pain}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section-wrap bg-white/80">
          <SectionTitle eyebrow="The Outbound Drive system" title="A done-for-you outbound engine built for commercial buyers." subtitle="Clear process. Professional execution. Measurable pipeline performance." />
          <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2 xl:grid-cols-3 lg:px-10">
            {solutionItems.map((item, index) => (
              <motion.div key={item.title} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardMotion} className="rounded-3xl border border-ink/10 bg-pearl p-6 shadow-soft">
                <p className="text-sm font-semibold tracking-wide text-electric">{item.kicker}</p>
                <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-slate">{item.copy}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="section-wrap">
          <SectionTitle eyebrow="How it works" title="A precise 4-step pipeline architecture." subtitle="From positioning to qualified meetings, every stage is built to create consistent commercial conversations." />
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <div className="relative grid gap-6 md:grid-cols-2">
              {processSteps.map((step, index) => (
                <motion.div key={step.title} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardMotion} className="group relative overflow-hidden rounded-3xl border border-ink/10 bg-white p-7 shadow-soft">
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-electric/10 blur-2xl transition group-hover:bg-electric/20" />
                  <p className="text-sm font-semibold text-electric">Step {index + 1}</p>
                  <h3 className="mt-2 text-2xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-slate">{step.copy}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap bg-white/85">
          <SectionTitle eyebrow="Outcomes" title="What you gain when outbound is run properly." subtitle="Everything is engineered around quality conversations and repeatable growth." />
          <div className="mx-auto grid max-w-6xl gap-5 px-6 md:grid-cols-2 lg:px-10">
            {outcomes.map((item, index) => (
              <motion.div key={item} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardMotion} className="rounded-2xl border border-ink/10 bg-pearl/80 p-6 text-lg font-medium text-ink shadow-soft">
                {item}
              </motion.div>
            ))}
          </div>
        </section>

        <section className="section-wrap">
          <SectionTitle eyebrow="Credibility architecture" title="Professional delivery you can trust." subtitle="Replace with your real proof assets over time — the structure is ready now." />
          <div className="mx-auto grid max-w-6xl gap-6 px-6 lg:grid-cols-3 lg:px-10">
            {trustItems.map((item, index) => (
              <motion.div key={item.title} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardMotion} className="rounded-3xl border border-ink/10 bg-white p-6 shadow-soft">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-slate">{item.copy}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="section-wrap bg-white/85">
          <SectionTitle eyebrow="Ideal client fit" title="Built for serious commercial operators." subtitle="This is designed for businesses that value quality pipeline and professional outbound execution." />
          <div className="mx-auto grid max-w-6xl gap-6 px-6 lg:grid-cols-2 lg:px-10">
            {fitItems.map((fit, index) => (
              <motion.div key={fit.title} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardMotion} className="rounded-3xl border border-ink/10 bg-pearl p-7 shadow-soft">
                <h3 className="text-2xl font-semibold">{fit.title}</h3>
                <ul className="mt-4 space-y-3 text-slate">
                  {fit.items.map((item) => (
                    <li key={item} className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-electric" />{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="book" className="section-wrap">
          <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
            <motion.div initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }} whileInView={reduceMotion ? {} : { opacity: 1, scale: 1 }} viewport={{ once: true }} className="rounded-[2rem] border border-ink/10 bg-white p-10 shadow-soft md:p-14">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate">Next step</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">See how Outbound Drive could build your pipeline.</h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-slate">In your strategy call, we map your target market, outreach opportunities, campaign architecture, and what qualified meetings could look like over the next 90 days.</p>
              <a href="#" className="mx-auto mt-8 inline-flex rounded-full bg-ink px-10 py-4 text-sm font-semibold text-white transition hover:bg-electric">Book Your Strategy Call</a>
            </motion.div>
          </div>
        </section>

        <section className="section-wrap bg-white/85">
          <SectionTitle eyebrow="FAQ" title="Everything decision-makers usually ask before starting." />
          <div className="mx-auto max-w-5xl space-y-4 px-6 lg:px-10">
            {faqs.map((faq, index) => (
              <motion.details key={faq.q} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardMotion} className="group rounded-2xl border border-ink/10 bg-pearl px-6 py-5 shadow-soft">
                <summary className="cursor-pointer list-none text-lg font-semibold">{faq.q}</summary>
                <p className="mt-3 text-slate">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </section>

        <footer className="section-wrap pb-16">
          <div className="mx-auto max-w-5xl rounded-[2.25rem] border border-ink/10 bg-gradient-to-b from-white to-mist px-8 py-14 text-center shadow-soft">
            <p className="text-sm uppercase tracking-[0.14em] text-slate">Outbound Drive</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Predictable pipeline. Direct access to commercial decision-makers.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate">Professional outbound execution for local commercial businesses that want consistent qualified opportunities without relying only on referrals.</p>
            <a href="#book" className="mt-8 inline-flex rounded-full border border-ink/20 bg-white px-10 py-4 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-electric hover:text-electric">Book Your Strategy Call</a>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
