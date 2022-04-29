import React, { useState, useEffect, ReactNode } from 'react';
import { PresentSection, PresentContainer } from './styles';
import axios from 'axios';

interface PageType {
  name: string;
  children: ReactNode;
}

export function Page({ name }: PageType) {

  

  return (
    <PresentSection>
      <PresentContainer>
        <div></div>
      </PresentContainer>
    </PresentSection>
  )
}