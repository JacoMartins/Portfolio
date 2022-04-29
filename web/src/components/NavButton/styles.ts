import styled from 'styled-components';

interface LiProps {
  nav: string;
  name: string;
}

const colors = {
  purple: '#8522E7',
  lightText: 'rgba(0, 0, 0, 0.85)'
};

export const Li = styled.li`
  display: table-cell;
  padding: 0.5rem;
  margin-left: -0.75rem;
  list-style: none;
  transition: 0.15s ease-in;

  &:hover{
    color: rgba(231, 36, 34, 0.75);
  }

  &:active{
    transform: scale(0.95, 0.95);
  }

  a {
    color: ${(props:LiProps)=> props.nav == props.name? colors.purple : colors.lightText};
    text-decoration: none;
    padding: 0.1875rem 0.75rem;
    border-radius: 1rem;
    font-weight: ${(props:LiProps)=> props.nav == props.name? '600' : '400'};
    transition: 0.125s ease-in;
    text-align: center;
    user-select: none;

    &:hover{
      font-weight: 400;
      background: rgba(0,0,0,0.05); 
    }

    &:active{
      transform: scale(0.5, 0.5);
      background: rgba(0,0,0,0.0);
    }
  }
`; 