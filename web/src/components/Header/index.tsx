import { Container, Content, Nav, Logo } from "./styles";
import logo from '../../assets/images/logo.svg';
import NavShowIcon from '../../assets/images/navShowIcon.svg';
import NavCloseIcon from '../../assets/images/close.svg';
import NavLightIcon from '../../assets/images/light.svg';
import NavDarkIcon from '../../assets/images/moon.svg';
import NavBrazilIcon from '../../assets/images/hexa.svg';
import axios from 'axios';

import { MouseEventHandler, useEffect, useState } from "react";
import { NavButton } from "../NavButton";
import { NavIconButton } from "../NavIconButton";
import { WindowsLogo } from "phosphor-react";

const data = {
  sections: [
    {
      displayName: "Início",
      realName: "home"
    },

    {
      displayName: "Sobre mim",
      realName: "aboutMe"
    },
    {
      displayName: "Habilidades",
      realName: "habilities"
    },
    {
      displayName: "Contatos",
      realName: "contacts"
    },
    {
      displayName: "Projetos",
      realName: "projects"
    },
    {
      displayName: "Portfólio",
      realName: "portfolio"
    }
  ],
};

interface HeaderProps {
  changeNav: (name: string) => void;
  nav: string;
  toggleColor: () => void;
  colorScheme: string | null;
}

interface Section {
  displayName: string;
  realName: string;
}

interface Button {
  name: string;
  src: string;
  alt: string;
  selected: string;
}

export function Header({ changeNav, nav, toggleColor, colorScheme }: HeaderProps) {

  const [navPlaces, setNavPlaces] = useState<Section[]>(data.sections);
  const [headerPosition, setHeaderPosition] = useState('relative');

  window.addEventListener('scroll', () => {
    window.scrollY < 1 ? setHeaderPosition('relative') : setHeaderPosition('fixed')
  });

  return (
    <Container headerPosition={headerPosition} colorScheme={colorScheme}>
      <Content>
        <Logo colorScheme={colorScheme}>jacó<span>.dev</span></Logo>
        <Nav colorScheme={colorScheme}>

          <ul>
            <NavIconButton colorScheme={colorScheme} src={NavCloseIcon} alt={"Show"} selected="none" handleClick={() => {
              document.querySelectorAll('ul')[0].className = '';
            }} />
            {navPlaces.map(
              (sections: Section) => (
                <NavButton colorScheme={colorScheme} nav={nav} key={sections.realName} changeNav={changeNav} realName={sections.realName} headerPosition={headerPosition}>{sections.displayName}</NavButton>
              )
            )}
          </ul>

          <NavIconButton colorScheme={colorScheme} src={colorScheme === 'light' ? NavLightIcon : NavDarkIcon} alt="Light Mode" selected="light" handleClick={toggleColor} />
          <NavIconButton colorScheme={colorScheme} src={NavBrazilIcon} alt="Portuguese - BR" selected="PT-BR" handleClick={() => ''} />

          <NavIconButton colorScheme={colorScheme} src={NavShowIcon} alt={"Show"} selected="none" handleClick={() => {
            document.querySelectorAll('ul')[0].className = 'ul-show';
          }} />
        </Nav>
      </Content>
    </Container>
  )
}