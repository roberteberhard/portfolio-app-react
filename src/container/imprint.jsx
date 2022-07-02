import React, { useRef } from 'react'
import styled from 'styled-components'

// styles
const StyledImprintSection = styled.section`
  display: grid;
  background-color: var(--sandy);
`

const StyledImprintContent = styled.div`
  padding: 0 var(--pad-lg) var(--pad-xxl) var(--pad-lg);
  @media (max-width: 1080px) {
    padding: 0 var(--pad-md) var(--pad-xl) var(--pad-md);
  }
  @media (max-width: 768px) {
    padding: 0 var(--pad-sm) var(--pad-lg) var(--pad-sm);
  }
`

const StyledInnerSection = styled.div`
  margin: 0;
  .heading {
    display: block;
    margin-bottom: 20px;
    color: var(--coral);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;
    text-align: center;
  }
  .title {
    margin-bottom: 40px;
    text-align: center;
    font-size: clamp(40px, 5vw, 48px);
  }
  p.strong {
    font-weight: 600;
  }
  h4 {
    margin-top: 30px;
    margin-bottom: 15px;
  }
  .innerDistance {
    margin-top: 40px;
  }
`

// markup
const Impressum = () => {
  const revealContainer = useRef(null)

  return (
    <StyledImprintSection ref={revealContainer}>
      <StyledImprintContent>
        <StyledInnerSection>
          <h2 className="heading">Imprint</h2>
          <h2 className="title">Impressum</h2>
          <p className="strong">ROBERTEBERHARD</p>
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
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie hier finden
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
              https://ec.europa.eu/consumers/odr/
            </a>
            . Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <h4>Haftung für Inhalte</h4>
          <p>Als Diensteanbieter bin ich für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
          <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.</p>

          <h4>Haftung für Links</h4>
          <p>Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
          <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.</p>

          <h4>Urheberrecht</h4>
          <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem Schweizer Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
          <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.</p>
        </StyledInnerSection>
      </StyledImprintContent>
    </StyledImprintSection>
  )
}

export default Impressum
