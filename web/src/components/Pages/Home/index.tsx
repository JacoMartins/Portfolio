import React, { useState, useEffect, ReactNode } from 'react';
import {
  PresentSection, PresentContainer, PageMain, AboutMeSection, AboutMeContainer, AbilitiesSection, SectionTitle, SectionText, AbilitiesContainer, ProjectsSection, ProjectsContainer, Section, SectionContainer, Container, SubSection, SectionH1, ColoredText, SectionH2, Button, Footer

} from './styles';
import axios from 'axios';

import { SvgBlob } from 'react-svg-blob';
import { cross as crossPattern } from 'react-svg-blob/dist/lib/patterns';
import { Summary } from '../../Summary';

import darkPicture from '../../../assets/images/jacomartins.png';
import lightPicture from '../../../assets/images/jacomartins.png';
import BookYourSelfMobile from '../../../assets/images/BookYourselfMobile.svg';
import ECOSIcon from '../../../assets/images/ecosIcon.svg';
import { IconButton } from '../../IconButton';

import { frontEndSummary, backEndSummary, languagesSummary, UxUiSummary, contacts, projects, cert, prof } from './data';
import { Logo } from '../../Header/styles';
import { Bus } from 'phosphor-react';

interface PageType {
  name: string;
  colorScheme: string | null;
}

export function Page({ name, colorScheme }: PageType) {
  function handleContactMeClick() {
    window.scrollTo(0, document.getElementById('contacts')!.offsetTop - (document.querySelectorAll('header')[0].offsetHeight))
  }

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
                <span>Fullstack Developer | Javascript | NodeJS | ReactJS | NextJS | PHP | Laravel | Python | Django | Linux</span>
              </div>

              <div className="buttonContainer">
                <a onClick={handleContactMeClick}><button>Entrar em contato</button></a>
                <a onClick={handleContactMeClick}><button>Baixar currículo</button></a>
              </div>
            </div>
            <div className="Picture">
              <img src={darkPicture} alt="Foto de Jacó" />
              <img src={lightPicture} alt="Foto de Jacó" />
            </div>
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
            <Summary type="%list" title="Front end" subTitle='HTML5, CSS3, Javascript, React JS' summaries={frontEndSummary} colorScheme={colorScheme} />
            <Summary type="%list" title="Back end" subTitle='Node JS e Python' summaries={backEndSummary} colorScheme={colorScheme} />
            <Summary type="%list" title="Linguagens" subTitle='Língua Inglesa e Espanhola' summaries={languagesSummary} colorScheme={colorScheme} />
            <Summary type="%list" title="UX/UI" subTitle='Design de Interfaces' summaries={UxUiSummary} colorScheme={colorScheme} />
          </div>
        </AbilitiesContainer>
      </AbilitiesSection>

      <Section id="contacts" colorScheme={colorScheme}>
        <SectionContainer>
          <SectionTitle colorScheme={colorScheme}>Contato</SectionTitle>
          <Container>
            {contacts.map((item) => {
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
          </Container>
        </SectionContainer>
      </Section>

      <Section id="projects" colorScheme={colorScheme}>
        <SectionContainer>
          <SectionTitle colorScheme={colorScheme}>Projetos</SectionTitle>
          <Container>
            {projects.map((item) => {
              return (
                <IconButton
                  key={item.description}
                  text={item.text}
                  description={item.description}
                  image={item.image}
                  icon={item.icon}
                  link={item.link}
                  type={item.type}
                  colorScheme={colorScheme}
                />
              )
            })}
          </Container>
        </SectionContainer>
      </Section>

      <SubSection id='projectsbookyourself' height='40rem' bg={colorScheme === 'light' ? 'var(--back-light-green)' : 'var(--back-dark-green)'} colorScheme={colorScheme}>
        <Container row="row">
          <aside>
            <img src={BookYourSelfMobile} alt="Book Yourself Icone" />
            <div className='TextContainer'>
              <SectionH1 color="var(--dark-green)">BookYourself</SectionH1>
              <SectionH2 color={colorScheme === 'light' ? 'var(--text-light)' : 'var(--text-dark)'}>Um site de reservas que faz todo o trabalho de anotar, agendar e gerenciar as reservas para você!</SectionH2>
              <Button color={colorScheme === 'light' ? 'var(--dark-green)' : 'var(--dark-green)'}>Saiba mais</Button>
            </div>
          </aside>
        </Container>
      </SubSection>

      <SubSection id='projectsecos' height='40rem' bg={colorScheme === 'light' ? 'var(--back-light-blue)' : 'var(--back-dark-blue)'} colorScheme={colorScheme}>
        <Container row="row-reverse">
          <aside>
            <Bus size='16rem' weight='regular' color="#338274" />
            <div className='TextContainer'>
              <SectionH1 color='#338274'>Moovooca</SectionH1>
              <SectionH2 color={colorScheme === 'light' ? 'var(--text-light)' : 'var(--text-dark)'}>Uma plataforma com o intuito de guiar os alunos da UFC quanto as linhas de ônibus, seus horários e como chegar até a faculdade.</SectionH2>
              <Button color='#338274' onClick={() => window.open('https://jacomartins.vercel.app/main/core/ui/ecos.html')}>Saiba mais</Button>
            </div>
          </aside>
        </Container>
      </SubSection>

      <Section id="portfolio" colorScheme={colorScheme}>
        <SectionContainer>
          <SectionTitle colorScheme={colorScheme}>Portfólio</SectionTitle>
          <AbilitiesContainer colorScheme={colorScheme}>
            <div className='SummaryContainer'>
              <Summary title="Licenças e certificados" subTitle="Meus certificados/certificações" type="Button" colorScheme={colorScheme}>

                {cert.map((item) => {
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
      </Section>

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