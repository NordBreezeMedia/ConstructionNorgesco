import { useEffect, useMemo, useRef, useState, type CSSProperties, type FormEvent } from 'react'
import { useLanguage } from './LanguageContext'
import './index.css'

function App() {
  const { lang, t, setLang } = useLanguage()
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [sent, setSent] = useState(false)
  const [servicesInView, setServicesInView] = useState(false)
  const servicesRef = useRef<HTMLElement | null>(null)

  const questions = t.quiz.questions
  const onQuestions = step < questions.length
  const current = onQuestions ? questions[step] : null
  const progress = ((step + 1) / (questions.length + 1)) * 100
  const canContinue = useMemo(
    () => !current || Boolean(answers[current.id]),
    [answers, current],
  )

  useEffect(() => {
    const el = servicesRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setServicesInView(Boolean(entry?.isIntersecting))
      },
      { threshold: 0.18, rootMargin: '0px 0px -6% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="site">
      <header className="navbar">
        <a className="navbar__brand" href="#home" aria-label="Construction Norgesco">
          <img src="./LOGOTRANSP.png" alt="Construction Norgesco" className="navbar__logo" />
        </a>
        <nav className="tabs" aria-label="Primary">
          <a href="#home">{t.nav.home}</a>
          <a href="#services">{t.nav.services}</a>
          <a href="#why">{t.nav.why}</a>
          <a href="#areas">{t.nav.areas}</a>
          <a href="#contact">{t.nav.contact}</a>
          <div className="lang-toggle" role="group" aria-label="Language">
            <button
              type="button"
              className={lang === 'fr' ? 'is-active' : undefined}
              aria-pressed={lang === 'fr'}
              onClick={() => setLang('fr')}
            >
              FR
            </button>
            <span aria-hidden>/</span>
            <button
              type="button"
              className={lang === 'en' ? 'is-active' : undefined}
              aria-pressed={lang === 'en'}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
        </nav>
      </header>

      <section
        id="home"
        className="hero hero--photo-v3"
        aria-label="Projet de rénovation Construction Norgesco"
      >
        <div className="hero__overlay">
          <div className="hero__copy">
            <p>{t.hero.caption}</p>
            <a className="btn btn--primary btn--pulse" href="#contact">
              {t.hero.cta}
            </a>
          </div>
        </div>
      </section>

      <section
        id="services"
        ref={servicesRef}
        className={servicesInView ? 'services-section is-inview' : 'services-section'}
      >
        <h2>{t.services.title}</h2>
        <div className="services-boxes">
          {t.services.items.map((item, i) => (
            <article
              className={`service-box service-box--piece-${(i % 5) + 1}`}
              key={item.title}
              style={{ '--piece-delay': `${i * 0.12}s` } as CSSProperties}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a className="read-more" href="#contact">
                {t.services.more}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="why" className="why-section">
        <h2>
          {t.why.title} <span>{t.why.brand}</span> ?
        </h2>
        <p className="why-lead">{t.why.lead}</p>
        <div className="why-row">
          {t.why.circles.map((label) => (
            <div className="why-circle" key={label}>
              {label}
            </div>
          ))}
        </div>
      </section>

      <section id="areas" className="areas-section">
        <h2>{t.areas.title}</h2>
        <p>{t.areas.lead}</p>
        <div className="areas-row">
          {t.areas.items.map((area) => (
            <div className="area-pill" key={area}>
              {area}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>{t.quiz.title}</h2>
        <p className="contact-lead">{t.quiz.lead}</p>
        <div className="contact-layout">
          <aside className="contact-info">
            <h3>{t.quiz.infoTitle}</h3>
            <p>{t.quiz.infoAreas}</p>
            <p>{t.quiz.infoHours}</p>
            <a className="btn btn--primary" href="#contact">
              {t.hero.cta}
            </a>
          </aside>

          <div className="quiz">
            <div className="quiz__progress" aria-hidden>
              <span style={{ width: `${progress}%` }} />
            </div>

            {sent ? (
              <p className="quiz__success">{t.quiz.success}</p>
            ) : onQuestions && current ? (
              <div className="quiz__step">
                <p className="quiz__meta">
                  {t.quiz.stepOf} {step + 1} {t.quiz.of} {questions.length}
                </p>
                <h3>{current.prompt}</h3>
                <div className="quiz__options" role="radiogroup" aria-label={current.prompt}>
                  {current.options.map((option) => {
                    const selected = answers[current.id] === option
                    return (
                      <button
                        key={option}
                        type="button"
                        role="radio"
                        aria-checked={selected}
                        className={selected ? 'quiz__option is-selected' : 'quiz__option'}
                        onClick={() =>
                          setAnswers((prev) => ({ ...prev, [current.id]: option }))
                        }
                      >
                        {option}
                      </button>
                    )
                  })}
                </div>
                <div className="quiz__nav">
                  {step > 0 ? (
                    <button
                      type="button"
                      className="btn btn--ghost"
                      onClick={() => setStep((s) => s - 1)}
                    >
                      {t.quiz.back}
                    </button>
                  ) : (
                    <span />
                  )}
                  <button
                    type="button"
                    className="btn btn--primary"
                    disabled={!canContinue}
                    onClick={() => setStep((s) => s + 1)}
                  >
                    {t.quiz.next}
                  </button>
                </div>
              </div>
            ) : (
              <form className="contact-form" onSubmit={onSubmit}>
                <h3>{t.quiz.contactTitle}</h3>
                <div className="form-row">
                  <input name="name" placeholder={t.quiz.name} required autoComplete="name" />
                  <input
                    name="email"
                    type="email"
                    placeholder={t.quiz.email}
                    required
                    autoComplete="email"
                  />
                </div>
                <input
                  name="phone"
                  type="tel"
                  placeholder={t.quiz.phone}
                  required
                  autoComplete="tel"
                />
                <textarea name="message" placeholder={t.quiz.message} rows={4} />
                <input type="hidden" name="project" value={answers.project ?? ''} />
                <input type="hidden" name="sector" value={answers.sector ?? ''} />
                <input type="hidden" name="timing" value={answers.timing ?? ''} />
                <div className="quiz__nav">
                  <button
                    type="button"
                    className="btn btn--ghost"
                    onClick={() => setStep(questions.length - 1)}
                  >
                    {t.quiz.back}
                  </button>
                  <button className="btn btn--primary" type="submit">
                    {t.quiz.submit}
                  </button>
                </div>
                <p className="contact-note">{t.quiz.note}</p>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="footer">
        <img src="./LOGOTRANSP.png" alt="" className="footer__logo" />
        <div>
          <p>{t.footer.tagline}</p>
          <p>
            © {new Date().getFullYear()} Construction Norgesco. {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
