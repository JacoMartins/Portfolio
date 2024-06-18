import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Li } from './styles';

interface Section {
  realName: string;
  children: string;
  navFocus: string;
  changeNavFocus: (userFocus: string) => void;
  headerPosition: string;
  colorScheme: string | null;
}

export function NavButton({ realName, children, navFocus, colorScheme }: Section) {
  function handleScroll() {
    window.scrollTo(0, document.getElementById(realName)!.offsetTop - document.querySelectorAll('header')[0].offsetHeight)

    if (document.querySelectorAll('ul')[0].className === 'ul-show') {
      document.querySelectorAll('ul')[0].style.animation = 'headerPop 0.25s';
      setTimeout(() => {
        document.querySelectorAll('ul')[0].className = '';
        document.querySelectorAll('ul')[0].style.animation = 'headerFixed 0.25s ease-out';
      }, 250);
    }
  }

  function handleGoToPage() {
    window.location.href = `/${realName}`;
  }

  return (
    <Li name={realName} navFocus={navFocus} colorScheme={colorScheme} onClick={handleScroll}>{children}</Li>
  )
}