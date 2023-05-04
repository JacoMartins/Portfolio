import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Li } from './styles';

interface Section {
  changeNav: (name: string) => void;
  realName: string;
  children: string;
  nav: string;
  headerPosition: string;
  colorScheme: string | null;
}

export function NavButton({ changeNav, realName, children, nav, headerPosition, colorScheme }: Section) {

  function handleNavButtonClick() {
    changeNav(realName);
    window.scrollTo(0, document.getElementById(realName)!.offsetTop - document.querySelectorAll('header')[0].offsetHeight)

    if (document.querySelectorAll('ul')[0].className === 'ul-show') {
      document.querySelectorAll('ul')[0].style.animation = 'headerPop 0.25s';
      setTimeout(() => {
        document.querySelectorAll('ul')[0].className = '';
        document.querySelectorAll('ul')[0].style.animation = 'headerFixed 0.25s ease-out';
      }, 250);
    }
  }

  return (
    <Li name={realName} nav={nav} colorScheme={colorScheme}><a onClick={handleNavButtonClick}>{children}</a></Li>
  )
}