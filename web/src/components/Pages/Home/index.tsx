import React, { useState, useEffect, ReactNode } from 'react';
import {
  PresentSection, PresentContainer, PageMain, AboutMeSection, AboutMeContainer, AbilitiesSection, SectionTitle, SectionText, AbilitiesContainer, ProjectsSection, ProjectsContainer, Section, SectionContainer, Container, SubSection, SectionH1, ColoredText, SectionH2, Button, Footer
} from './styles';

import { Summary } from '../../Summary';

import { IconButton } from '../../IconButton';

import { frontEndSummary, backEndSummary, languagesSummary, UxUiSummary, contacts, cert, prof, projects } from './data';
import { Logo } from '../../Header/styles';
import { BookBookmark, Bus } from 'phosphor-react';

import curriculo from '../../../assets/documents/CV - Jacó Martins.pdf'
import portmelogo from '../../../assets/images/portme40x.svg'

interface PageType {
  name: string;
  colorScheme: string | null;
}

export function scrollToSection(sectionId: string, headerId: string) {
  const sectionElement = document.getElementById(sectionId);
  const headerElement = document.getElementById(headerId);

  if (sectionElement) {
    const headerHeight = headerElement ? headerElement.offsetHeight : 0;
    window.scrollTo(0, sectionElement.offsetTop - headerHeight);
  } else {
    console.error(`Section with ID "${sectionId}" not found.`);
  }
}


export function Page({ name, colorScheme }: PageType) {
  return (
    <PageMain>
      <PresentSection id="home" colorScheme={colorScheme}>
        <PresentContainer colorScheme={colorScheme}>

          <div className="Container">
            <div className="TextContainer">
              <h1>Sou <span>Jacó Martins</span></h1>

              <div className="textTextContainer">
                <h2>
                  Software Engineer
                </h2>
                <span>Software Engineer | Javascript | NodeJS | ReactJS | NextJS | PHP | Laravel | Python | Django | Linux</span>
              </div>

              <div className="buttonContainer">
                <a onClick={() => scrollToSection("contacts", "header")}><button>Entrar em contato</button></a>
                <a href={curriculo}><button>Baixar currículo</button></a>
              </div>
            </div>
            <div className="Picture" />
          </div>

        </PresentContainer>
      </PresentSection>


      <AboutMeSection id="aboutMe" colorScheme={colorScheme}>
        <AboutMeContainer colorScheme={colorScheme}>
          <div className='TextContainer'>

            <SectionTitle colorScheme={colorScheme}>Sobre mim</SectionTitle>

            <SectionText colorScheme={colorScheme}>
              Sou um jovem de 17 anos, brasileiro, natural de Fortaleza capital cearense, atualmente cursando o quinto semestre do Curso Técnico em Redes de Computadores na Escola Estadual de Ensino Profissionalizante Leonel de Moura Brizola.
            </SectionText>

            <br></br>

            <SectionText>
              - Desenvolvedor Fullstack;
            </SectionText>

            <SectionText>
              - Programo em PHP, JavaScript e Python;
            </SectionText>

            <SectionText>
              - Tenho conhecimentos em design de interfaces de usuário (UX/UI);
            </SectionText>

            <SectionText>
              - Conhecimentos sólidos em Redes de Computadores;
            </SectionText>

            <SectionText>
              - Sempre expandindo meus aprendizados;
            </SectionText>

            <SectionText>
              - Inglês avançado, consigo escutar, falar, ler e escrever em inglês!
            </SectionText>
          </div>
        </AboutMeContainer>
      </AboutMeSection>


      <AbilitiesSection id="habilities" colorScheme={colorScheme}>
        <AbilitiesContainer colorScheme={colorScheme}>
          <div className='TextContainer'>
            <SectionTitle colorScheme={colorScheme}>Habilidades</SectionTitle>
          </div>

          <div className='SummaryContainer'>
            <Summary type="%list" title="Frontend" subTitle='HTML5, CSS3, Javascript, React JS' summaries={frontEndSummary} colorScheme={colorScheme} />
            <Summary type="%list" title="Backend" subTitle='Node JS e Python' summaries={backEndSummary} colorScheme={colorScheme} />
            <Summary type="%list" title="Idiomas" subTitle='Língua Inglesa e Espanhola' summaries={languagesSummary} colorScheme={colorScheme} />
            <Summary type="%list" title="UX/UI" subTitle='Design de Interfaces' summaries={UxUiSummary} colorScheme={colorScheme} />
          </div>
        </AbilitiesContainer>
      </AbilitiesSection>

      <Section id="contacts" colorScheme={colorScheme}>
        <SectionContainer>
          <SectionTitle colorScheme={colorScheme}>Contato</SectionTitle>
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
                  colorScheme={colorScheme}
                />
              )
            })}
          </div>
        </SectionContainer>
      </Section>

      <Section id="projects" colorScheme={colorScheme}>
        <SectionContainer>
          <SectionTitle colorScheme={colorScheme}>Projetos</SectionTitle>
          <div className='iconTextContainer'>
            {projects.map((item) => {
              return (
                <IconButton
                  key={item.description}
                  text={item.text}
                  description={item.description}
                  image={item.image}
                  icon={item.icon}
                  type={item.type}
                  colorScheme={colorScheme}
                />
              )
            })}
          </div>
        </SectionContainer>
      </Section>

      <AbilitiesSection id="portfolio" colorScheme={colorScheme}>
        <SectionContainer>
          <SectionTitle colorScheme={colorScheme}>Portfólio</SectionTitle>
          <AbilitiesContainer colorScheme={colorScheme}>
            <div className='SummaryContainer'>
              <Summary title="Licenças e certificados" subTitle="Meus certificados/certificações" type="Button" colorScheme={colorScheme}>

                {cert.map((item) => {
                  return (
                    <IconButton
                      key={item.description}
                      text={item.text}
                      description={item.description}
                      image={item.image}
                      link={item.link}
                      type={item.type}
                      colorScheme={colorScheme}
                    />
                  )
                })}

              </Summary>

              <Summary title="Github e LinkedIn" subTitle="Veja aqui os códigos feitos por mim" type="Button" colorScheme={colorScheme}>

                {prof.map((item) => {
                  return (
                    <>
                      <IconButton
                        key={item.description}
                        text={item.text}
                        description={item.description}
                        image={item.image}
                        link={item.link}
                        type={item.type}
                        colorScheme={colorScheme}
                      />
                    </>
                  )
                })}

              </Summary>
            </div>
          </AbilitiesContainer>
        </SectionContainer>
      </AbilitiesSection>

      <Footer colorScheme={colorScheme}>
        <SectionContainer colorScheme={colorScheme}>

          <div className='FooterMain'>
            <div className='LogoContainer'>
              <Logo colorScheme={colorScheme}>
                jaco<span>.dev</span>
              </Logo>

              <SectionText opacity='0.5' colorScheme={colorScheme}>Meu Portfólio</SectionText>
            </div>

            <div className='FooterContent'>
              <a href="#home"><SectionText colorScheme={colorScheme}>Início</SectionText></a>
              <a href="#aboutMe"><SectionText colorScheme={colorScheme}>Sobre mim</SectionText></a>
              <a href="#habilities"><SectionText colorScheme={colorScheme}>Habilidades</SectionText></a>
              <a href="#contacts"><SectionText colorScheme={colorScheme}>Contatos</SectionText></a>
              <a href="#portfolio"><SectionText colorScheme={colorScheme}>Portfólio</SectionText></a>
            </div>
          </div>

        </SectionContainer>
      </Footer>

    </PageMain >
  )
}