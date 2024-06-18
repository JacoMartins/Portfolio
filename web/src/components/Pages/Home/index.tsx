import { PageMain, PresentSection, PresentContainer, AboutMeSection } from "../../../globalStyles";
import languageStore from "../../../stores/languageStore";

interface PageType {
  name: string;
  language: "english" | "portuguese";
}

export function scrollToSection(sectionId: string, headerId: string) {
  const sectionElement = document.getElementById(sectionId);
  const headerElement = document.getElementById(headerId);
  const resumeURL = "https://drive.google.com/file/d/1f-smA8Yg8ClGKkS8lYdId5FQ4518LAba/view?usp=sharing"

  if (sectionElement) {
    const headerHeight = headerElement ? headerElement.offsetHeight : 0;
    window.scrollTo(0, sectionElement.offsetTop - headerHeight);
  } else {
    console.error(`Section with ID "${sectionId}" not found.`);
  }
}

export function Page({ language }: PageType) {
  return (
    <PageMain>
      <PresentSection id="home">
        <PresentContainer>
          <div className="Container">
            <div className="TextContainer">
              <h1>{languageStore[language].presentingSection.welcome} <span>Jacó Martins</span></h1>

              <div className="textTextContainer">
                <h2>
                  {languageStore[language].title}
                </h2>
                <span>
                  {languageStore[language].presentingSection.description}
                </span>
              </div>

              <div className="buttonContainer">
                <a onClick={() => scrollToSection("contacts", "header")}>
                  <button>
                    {languageStore[language].presentingSection.contactMe}
                  </button>
                </a>
                <a href={resumeURL}>
                  <button>
                    {languageStore[language].presentingSection.downloadResume}
                  </button>
                </a>
              </div>
            </div>
            <div className="Picture" />
          </div>

        </PresentContainer>
      </PresentSection>


      <AboutMeSection id="aboutMe">
        <AboutMeContainer>
          <div className='TextContainer'>
            <SectionTitle>{languageStore[language].aboutMeSection.title}</SectionTitle>
            <SectionText>
              {languageStore[language].aboutMeSection.description}
            </SectionText>

            <br></br>

            <div className='SkillsContainer'>
              {languageStore[language].aboutMeSection.skills.map((item) => {
                return (
                  <li key={item}>
                    {item}
                  </li>
                )
              })}
            </div>
          </div>
        </AboutMeContainer>
      </AboutMeSection>


      <AbilitiesSection id="habilities">
        <AbilitiesContainer>
          <div className='TextContainer'>
            <SectionTitle>Habilidades</SectionTitle>
          </div>

          <div className='SummaryContainer'>
            <Summary type="%list" title="Frontend" subTitle='HTML5, CSS3, Javascript, React JS' summaries={frontEndSummary} />
            <Summary type="%list" title="Backend" subTitle='Node JS e Python' summaries={backEndSummary} />
            <Summary type="%list" title="Idiomas" subTitle='Língua Inglesa e Espanhola' summaries={languagesSummary} />
            <Summary type="%list" title="UX/UI" subTitle='Design de Interfaces' summaries={UxUiSummary} />
          </div>
        </AbilitiesContainer>
      </AbilitiesSection>

      <Section id="contacts">
        <SectionContainer>
          <SectionTitle>Contato</SectionTitle>
          <div className='iconTextContainer'>
            {contacts.map((item) => {
              return (
                <IconButton
                  key={item.description}
                  text={item.text}
                  description={item.description}
                  image={item.image}
                  link={item.link}
                  type={item.type}

                />
              )
            })}
          </div>
        </SectionContainer>
      </Section>

      <Section id="projects">
        <SectionContainer>
          <SectionTitle>Projetos</SectionTitle>
          <div className='iconTextContainer'>
            {ProjectsInformations.map((item) => {
              return (
                <IconButton
                  key={item.description}
                  text={item.text}
                  description={item.description}
                  image={item.image}
                  icon={item.icon}
                  type={item.type}

                />
              )
            })}
          </div>
        </SectionContainer>
      </Section>

      <AbilitiesSection id="portfolio">
        <SectionContainer>
          <SectionTitle>Portfólio</SectionTitle>
          <AbilitiesContainer>
            <div className='SummaryContainer'>
              <Summary title="Licenças e certificados" subTitle="Meus certificados/certificações" type="Button">

                {cert.map((item) => {
                  return (
                    <IconButton
                      key={item.description}
                      text={item.text}
                      description={item.description}
                      image={item.image}
                      link={item.link}
                      type={item.type}

                    />
                  )
                })}

              </Summary>

              <Summary title="Github e LinkedIn" subTitle="Veja aqui os códigos feitos por mim" type="Button">
                {ProfessionalInformations.map((item) => {
                  return (
                    <>
                      <IconButton
                        key={item.description}
                        text={item.text}
                        description={item.description}
                        image={item.image}
                        link={item.link}
                        type={item.type}

                      />
                    </>
                  )
                })}

              </Summary>
            </div>
          </AbilitiesContainer>
        </SectionContainer>
      </AbilitiesSection>

      <Footer>
        <SectionContainer>

          <div className='FooterMain'>
            <div className='LogoContainer'>
              <Logo>
                jaco<span>.dev</span>
              </Logo>

              <SectionText opacity='0.5'>Meu Portfólio</SectionText>
            </div>

            <div className='FooterContent'>
              <a href="#home"><SectionText>Início</SectionText></a>
              <a href="#aboutMe"><SectionText>Sobre mim</SectionText></a>
              <a href="#habilities"><SectionText>Habilidades</SectionText></a>
              <a href="#contacts"><SectionText>Contatos</SectionText></a>
              <a href="#portfolio"><SectionText>Portfólio</SectionText></a>
            </div>
          </div>

        </SectionContainer>
      </Footer>

    </PageMain >
  )
}