import styled from 'styled-components';
import polished from 'polished';

const HeaderSidePadding = 2;

interface ContainerProps{
  colorScheme: string | null;
  headerPosition: string;
}

interface RestProps{
  colorScheme: string | null;
}

export const Container = styled.header`
  position: fixed;
  animation: ${(props:ContainerProps) => props.headerPosition === 'relative'? 'none' : 'headerFixed 0.25s ease-in'};
  display: flex;
  justify-content: center;
  height: 4.625rem;
  width: 100%;
  background: ${
    (props:ContainerProps) => 
      props.headerPosition === 'relative'?
        props.colorScheme === 'light'? 
          'var(--purple-light)' : 'var(--red-dark)' 
      :
        props.colorScheme === 'light'? 'rgba(255, 255, 255, 0.5)' :    'rgba(6, 6, 6, 0.5)'
  };
  backdrop-filter: blur(90px);
  border-bottom: ${(props:ContainerProps) => props.headerPosition === 'relative'? 'solid 2px rgba(0, 0, 0, 0.00)' : 'solid 2px rgba(0, 0, 0, 0.04)'};
  top: 0rem;
  z-index: 1;

  @keyframes headerFixed {
    0% {
      top: -4.625rem;
    }
    100%{
      top: 0rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  max-width: 75rem;
  
  margin: 0 0;

  @media screen and (max-width: 45rem) {
    width: calc(100% - ${HeaderSidePadding}rem);
  }
`;

export const Logo = styled.h2`
  width: 75px;
  height: 24px;

  font-family: 'Sora', 'Inter', 'Helvetica', 'Arial';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.05em;

  color: ${
    (props:RestProps) => 
        props.colorScheme === 'light'? 
          'var(--text-light)' : 'var(--text-dark)' 
  };

  span {
    color: ${
      (props:RestProps) => 
          props.colorScheme === 'light'? 
            'var(--purple)' : 'var(--red)' 
    };
    font-family: 'Sora', 'Inter', 'Helvetica', 'Arial';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.05em;
  }
`;

export const Nav = styled.nav`
  display: flex;

  ul{
    position: relative;
    display: flex;
    flex-wrap: wrap;
    gap: 0px;

    button {
      display: none;
    }
    @media screen and (max-width: 54.375rem) {
      display: none;

      button{
        display: block;
      }
    }
  }
  
  @media screen and (max-width: 54.375rem) {

    .ul-show {
      position: absolute;
      animation: headerFixed 0.25s ease-out;
      top: 0px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0px;
      height: auto;
      background: ${
        (props:RestProps) => 
          props.colorScheme === 'light'? 
            'white' : 'var(--back-dark)' 
      };
      z-index: 1;
      right: 0%;
      padding: 0.5rem;
      border-bottom: solid 2px rgba(0, 0, 0, 0.08);
      transition: 0.15s;

      button {
        position: absolute;
        top: 1.25rem;
        right: 1.25rem;
        img{
          height: 1.25rem;
          width: 1.25rem;
          filter: ${
            (props:RestProps) => 
              props.colorScheme === 'light'? 
                'brightness(0)' : 'brightness(1)' 
          };

          opacity: 0.85;
        }
      }

      li { 
        padding: 1.5rem 2rem;
        a{
          font-size: 1.25rem;
          padding: 1.5rem 2rem;
        }
      }
    } 
  }

  ul + button {
    margin-left: 0.5rem;
  }

  button:last-child {
    display: none;
    img{
      
      filter: ${
        (props:RestProps) => 
          props.colorScheme === 'light'? 
            'brightness(0)' : 'brightness(1)' 
      };
      opacity: 0.85;
    }

    @media screen and (max-width: 54.375rem) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;