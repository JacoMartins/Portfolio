import { Container, Content, Nav } from "./styles";
import logo from '../../assets/images/logo.svg';
import axios from 'axios';

import { MouseEventHandler, useEffect, useState } from "react";
import { NavButton } from "../NavButton";
import { NavIconButton } from "../NavIconButton";

interface HeaderProps {
  changeNav: (name: string) => void;
  nav: string;
}

interface Sections {
  displayName: string;
  realName: string;
}

interface Button {
  src: string;
  alt: string;
  selected: string;
}

export function Header({ changeNav, nav }: HeaderProps) {

  const [navPlaces, setNavPlaces] = useState([]);
  const [navButtons, setNavButtons] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/sections')
      .then((response) => {
        setNavPlaces(response.data);
      })

    axios.get('http://localhost:4000/buttons')
      .then((response) => {
        setNavButtons(response.data);
      })
  }, []);

  async function handleChangeLanguage(){
    await axios.get('http://localhost:4000/buttons')
    .then((response) => {
      setNavButtons(response.data);
    })
    axios.put('http://localhost:4000/buttons', {})
  }

  return (
    <Container>
      <Content>
        <img src={logo} alt="Jacó Martins" />
        <Nav>

          <ul>
            {navPlaces.map(
              (sections: Sections) => (
                <NavButton nav={nav} key={sections.realName} changeNav={changeNav} realName={sections.realName} >{sections.displayName}</NavButton>
              )
            )}
          </ul>

          {navButtons.map(
            (button:Button)=>(
              <NavIconButton src={button.src} alt={button.alt} selected={button.selected} handleClick={() => ''}/>
            )
          )}

        </Nav>
      </Content>
    </Container>
  )
}