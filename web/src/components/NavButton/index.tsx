import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Li } from './styles';

interface Section{
  changeNav: (name:string) => void;
  realName: string;
  children: string;
  nav: string;
}

export function NavButton({changeNav, realName, children, nav}:Section) {

  return (
    <Li name={realName} nav={nav}><a onClick={() => changeNav(realName)}>{children}</a></Li>
  )
}