import styled from 'styled-components';

interface Props {
  type: string;
  colorScheme: string | null;
}

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 19rem;
  height: 4.24rem;
  background: transparent;
  outline: 0;
  border: 0;
  /* border: solid 2px black; */
  justify-content: center;
  cursor: pointer;
  transition: 0.15s ease-out;

  @media screen and (max-width: 30.3125rem) {
    width: 100%;
  }

  .TitleContainer + & {
    margin-top: 1rem;
  }

  &:hover{
    transform: translate(0, -0.125rem);
    svg {
      transition: 0.15s ease-in;
      filter: drop-shadow(0rem 0.25rem 0.5rem ${(props:Props) => props.colorScheme === 'light'? 'rgba(133, 34, 231, 0.5)' : 'rgba(231, 36, 34, 0.75)' });
    }
  }

  div{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: left;
    width: ${(props:Props) => props.type === 'contact' ? '16rem' : '19.5rem'};

    color: ${(props:Props) =>
      props.colorScheme === 'light'? 
        'var(--text-light-half)' : 'var(--text-dark-half)'
    };

    @media screen and (max-width: 30.3125rem) {
      width: 100%;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: left;
      align-items: left;
      text-align: left;
      margin-left: 1rem;
      
      p {
        width: 100%;
      }

      h3{ 
        width: 100%;
        color: ${(props:Props) => 
          props.colorScheme === 'light'?
           'var(--text-light)'
          :
            'var(--text-dark)'
        };
        font-weight: 600;
        text-align: left;
        font-size: 1.125rem;
      }
    }

    img:last-child {
      height: 1rem;
      width: 0.625rem;
      margin: auto 0 auto 1rem;
      filter: ${(props:Props)=> props.colorScheme === 'light'? 'brightness(0)' : 'brightness(1)'};
    }

    svg {
      min-height: 1.5rem;
      min-width: 1.5rem;
    }
  }
`;