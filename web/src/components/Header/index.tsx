import { Container, Content, Nav, Logo } from "./styles";
import NavShowIcon from '../../assets/images/navShowIcon.svg';
import NavCloseIcon from '../../assets/images/close.svg';
import NavLightIcon from '../../assets/images/light.svg';
import NavDarkIcon from '../../assets/images/moon.svg';
import NavBrazilIcon from '../../assets/images/hexa.svg';

import { useState } from "react";
import { NavButton } from "../NavButton";
import { NavIconButton } from "../NavIconButton";
import { Parts } from "../../App";

interface HeaderProps {
  nav: string;
  toggleColor: () => void;
  colorScheme: string | null;
  changeNavFocus: (userFocus: Parts) => void;
}

interface Section {
  displayName: string;
  realName: string;
}

export function Header({ changeNavFocus, selectedPage, navFocus, toggleColor, colorScheme }: HeaderProps) {
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
                <NavButton colorScheme={colorScheme} navFocus={navFocus} key={sections.realName} changeNavFocus={changeNavFocus} realName={sections.realName} headerPosition={headerPosition}>{sections.displayName}</NavButton>
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