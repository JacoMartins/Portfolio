import React, { useState, useEffect } from 'react';
import { Button } from './styles';

interface Button{
  handleClick: () => void;
  src: string;
  alt: string;
  selected: string;
  colorScheme: string | null;
}

export function NavIconButton({handleClick, src, alt, selected, colorScheme}:Button) {

  return (
    <Button onClick={handleClick}>
      <img src={src} alt={alt}/>
    </Button>
  )
}