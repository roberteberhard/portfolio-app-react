import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { IconSeparatorUp } from '../assets/icons'
import { IconSeparatorDown } from '../assets/icons'
import useShop from '../context/AppContext'

// styles
const StyledImprintSection = styled.section`
  display: grid;
  padding-top: 100px;
  background-color: var(--body);

  .separator.separator--up {
    fill: var(--sandy);
    background-color: var(--body);
  }
  .separator.separator--down {
    fill: var(--body);
    background-color: var(--sandy);
  }
`

const StyledImprintContent = styled.div`
  padding: 0 var(--pad-lg) var(--pad-xxl) var(--pad-lg);
  background-color: var(--sandy);

  @media (max-width: 1080px) {
    padding: 0 var(--pad-md) var(--pad-xl) var(--pad-md);
  }
  @media (max-width: 768px) {
    padding: 0 var(--pad-sm) var(--pad-lg) var(--pad-sm);
  }
`

const StyledInnerSection = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;

  h1.title {
    margin-bottom: 50px;
    text-align: center;
    font-size: clamp(40px, 5vw, 48px);
  }
  p.heading {
    display: block;
    position: relative;
    margin-bottom: 10px;
    color: var(--secondary);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 500;
    text-align: center;
    &:before {
      content: '--';
      display: inline-block;
      width: 50px;
      padding-right: 4px;
      color: var(--secondary);
      font-family: var(--font-mono);
      font-size: var(--fz-md);
      font-weight: 500;
      text-align: right;
    }
    &:after {
      content: '--';
      display: inline-block;
      width: 50px;
      padding-left: 4px;
      color: var(--secondary);
      font-family: var(--font-mono);
      font-size: var(--fz-md);
      font-weight: 500;
      text-align: left;
    }
  }
  p.strong {
    font-weight: 600;
  }
  h3 {
    margin-top: 30px;
    margin-bottom: 15px;
    color: var(--primary);
    font-size: clamp(17px, 1.5vw, 18px);
  }
  h4 {
    margin-top: 30px;
    margin-bottom: 15px;
    color: var(--primary);
    font-size: clamp(16px, 1.5vw, 17px);
  }
  .innerDistance {
    margin-top: 40px;
  }
`

// markup
const Impressum = () => {
  const { mounted } = useShop()
  const [hasNoDelay, setHasNoDelay] = useState(mounted)

  useEffect(() => {
    setHasNoDelay(mounted)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const data = (
    <>
      <p className="heading">Imprint</p>
      <h1 className="title">Impressum</h1>
      <h3>ROBERTEBERHARD</h3>
      <p>vertreten durch Robert Eberhard</p>
      <p>
        Schaffhauserstrasse 42
        <br />
        8400 Winterthur
        <br />
        Switzerland
      </p>
      <p>Telefon: +41 44 586 66 30</p>
      <p>Mail: hello@roberteberhad.com</p>
      <p className="innerDistance">
        Die Europ??ische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie hier finden
        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
          https://ec.europa.eu/consumers/odr/
        </a>
        . Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
      <h4>Haftung f??r Inhalte</h4>
      <p>Als Diensteanbieter bin ich f??r eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Jedoch nicht verpflichtet, ??bermittelte oder gespeicherte fremde Informationen zu ??berwachen oder nach Umst??nden zu forschen, die auf eine rechtswidrige T??tigkeit hinweisen.</p>
      <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unber??hrt. Eine diesbez??gliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung m??glich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.</p>
      <h4>Haftung f??r Links</h4>
      <p>Mein Angebot enth??lt Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich f??r diese fremden Inhalte auch keine Gew??hr ??bernehmen. F??r die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf m??gliche Rechtsverst????e ??berpr??ft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
      <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.</p>
      <h4>Urheberrecht</h4>
      <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem Schweizer Urheberrecht. Die Vervielf??ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung au??erhalb der Grenzen des Urheberrechtes bed??rfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f??r den privaten, nicht kommerziellen Gebrauch gestattet.</p>
      <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.</p>
    </>
  )

  return (
    <StyledImprintSection>
      <IconSeparatorDown className="down" />
      <StyledImprintContent>
        <StyledInnerSection>
          {hasNoDelay ? (
            <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 0 }} className="fade-enter">
              {data}
            </motion.div>
          ) : (
            <motion.div animate={{ y: [30, 0], opacity: [0, 1] }} transition={{ delay: 0.6, duration: 0.5 }} className="fade-enter">
              {data}
            </motion.div>
          )}
        </StyledInnerSection>
      </StyledImprintContent>
      <IconSeparatorUp />
    </StyledImprintSection>
  )
}

export default Impressum
