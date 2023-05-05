import styled from 'styled-components';
import img1 from '../../../assets/images/pic1.png'

interface Props {
  colorScheme?: string | null;
  height?: string;
  bg?: string;
  color?: string;
  row?: string;
  opacity?: string;
}

export const PageMain = styled.main`
  display: flex;
  flex-direction: column;
  height: auto;
  width: auto;
  max-width: 100vw;
  margin: 0;
`;

export const Section = styled.section`
  display: flex;
  width: auto;
  height: auto;
  border-top: solid 2px ${(props: Props) =>
    props.colorScheme === 'light' ?
      'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.08)'
  };
  background: ${(props: Props) =>
    props.colorScheme === 'light' ?
      'white' : 'var(--back-dark)'
  };
  padding: 2rem;
`;

export const SubSection = styled.section`
  display: block;
  width: 100%;
  height: ${(props: Props) => props.height};
  padding: 3rem 0;
  background: ${(props: Props) => props.bg};
`;

export const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;

  .iconTextContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;

    @media screen and (max-width: 640px) {
      flex-direction: column;
      flex-wrap: nowrap;  
    }
  }

  .FooterMain {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 2rem;
    
    a {
      text-decoration: none;

      &:hover {
        text-decoration: underline;
        color: ${(props: Props) => props.colorScheme === 'light' ? 'var(--text-light)' : 'var(--text-dark)'};
      }
    }
  }
`;

export const SectionTitle = styled.h1`
  line-height: 3rem;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;

  color: ${(props: Props) =>
    props.colorScheme === 'light' ?
      'var(--text-light)' : 'var(--text-dark)'
  };
`;

export const SectionText = styled.p`
  color: ${(props: Props) =>
    props.colorScheme === 'light' ?
      `var(--text-light)` : 'var(--text-dark)'
  };

  opacity: ${(props: Props) => props.opacity};

`;

export const ColoredText = styled.p`
  width: auto;
  color: ${(props: Props) => props.color};
`;

export const SectionH1 = styled.h1`
  width: auto;
  line-height: 3rem;
  margin-bottom: 1rem;
  font-size: 2.5rem;
  font-weight: 600;

  color: ${(props: Props) => props.color};
`;


export const SectionH2 = styled.h2`
  width: auto;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.5rem;
  letter-spacing: -0.05em;
  max-width: 30rem;
  max-height: 22.5rem;
  
  color: ${(props: Props) => props.color};

  opacity: 0.85;

  @media screen and (max-width: 30.3125rem) {
    width: auto;
    margin: 0 0 0rem 0;
  }
`;


export const Footer = styled.footer`
  display: block;
  width: 100%;
  height: auto;
  padding: 3rem 0;
  border-top: solid 2px ${(props: Props) => props.colorScheme === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.08)'};
  background: ${(props: Props) => props.colorScheme === 'light' ? 'white' : 'var(--back-dark)'};
`;

export const Button = styled.button`
  padding: 0.5rem 0.875rem;
  margin: 1.5rem 0 0 0;
  background: ${(props: Props) => props.color};
  color: white;
  outline: none;
  border: none;
  border-radius: 1.2rem;
  transition: 0.05s ease-in;

  @media screen and (max-width: 40rem) {
    padding: 0.75rem 0.9rem;
    margin: 1.5rem 0 0 0;
    font-size: 1.125rem;
    border-radius: 1.8rem;
  }

  &:hover{
    filter: brightness(0.9);
  }

  &:active {
    transform: scale(0.975);
    filter: brightness(0.8);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;

  aside {
    display: flex;
    flex-direction: ${(props: Props) => props.row};
    justify-content: space-between;
    align-items: center;
    margin: 0 5rem 0 5rem;
    width: 56.25rem;
    height: auto;

    @media screen and (max-width: 46.25rem) {
      flex-direction: column;
      justify-content: center;
    }

    img{
      height: 16rem;
      width: 16rem;

      @media screen and (max-width: 46.25rem) {
        margin-bottom: 2rem;
      }
    }

    div{
      max-width: 56.25rem;
      max-height: 22.5rem;
      margin: ${(props: Props) => props.row === "row" ? '0 0 0 2.5rem' : '0 2.5rem 0 0'};
      align-items: ${(props: Props) => props.row === "row" ? 'right' : 'left'};
      text-align: ${(props: Props) => props.row === "row" ? 'right' : 'left'};

      @media screen and (max-width: 46.25rem) {
        align-items: center;
        text-align: center;
        margin: 0;
      }
    }
  }
`;

export const PresentSection = styled.section`
  display: flex;
  width: 100%;
  height: 44.375rem;
  background: ${(props: Props) =>
    props.colorScheme === 'light' ?
      'var(--purple-light)' : 'var(--red-dark)'
  };
`;

export const PresentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 100vw;
  height: 100%;

  @media screen and (max-width: 720px) {
    justify-content: left;
    align-items: left;
    padding: 2rem;
  }

  .Container {
    display: flex;
    flex-wrap: wrap-reverse;
    flex-direction: row;
    align-items: center;

    @media screen and (max-width: 54.375rem) {
      gap: 2rem;
      justify-content: center;
    }

    .buttonContainer {
      display: flex;
      flex-direction: row;
      justify-content: left;
      gap: 0.375rem;
      width: 100%;

      button {
        width: 100%;
      }

      @media screen and (max-width: 870px) {
        justify-content: center;
      }

      @media screen and (max-width: 640px) {
        flex-direction: column;
        justify-content: center;
      }
    }

    .TextContainer {
      display: flex;
      flex-direction: column;
      max-width: 32rem;
      gap: 1.25rem;
      
      span {
        color: ${(props: Props) =>
          props.colorScheme === 'light' ? 'var(--text-light-half)' : 'var(--text-dark-half)'
        };
      }

      @media screen and (max-width: 54.375rem) {
        gap: 2rem;
        text-align: center;
      }

      h1 {
        font-size: 2.5rem;
        line-height: 2.5rem;

        color: ${(props: Props) =>
          props.colorScheme === 'light' ? 'var(--text-light)' : 'var(--text-dark)'
        };
  
        span {
          font-size: 2.5rem;
          color: var(--purple);
          font-weight: 500;
          padding-left: 0.25rem;
        }
      }
  
      h2 {
        width: 30.3125rem;
  
        font-family: 'Sora', 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 1.25rem;
        letter-spacing: -0.05em;
        
        color: ${(props: Props) =>
    props.colorScheme === 'light' ?
      'var(--text-light)' : 'var(--text-dark-pres)'
  };
  
        opacity: 0.85;

        @media screen and (max-width: 30.3125rem) {
          width: auto;
        }
      }

    }

    .Picture {
      height: 16rem;
      width: 18.75rem;
      border-radius: 16rem;
      background-image: url("${(props) => props.colorScheme === 'light' ? img1 : img1}");
      background-size: 100%;
      background-position: 55% 40%;
      overflow: hidden;

      img {
        display: none;
      }
    }

    button {
      padding: 0.5rem 0.875rem;
      background: ${(props: Props) =>
    props.colorScheme === 'light' ?
      'var(--purple)' : 'var(--red)'
  };
      color: white;
      outline: none;
      border: none;
      border-radius: 1.2rem;
      transition: 0.05s ease-in;

      @media screen and (max-width: 40rem) {
        padding: 0.75rem 0.9rem;
        font-size: 1.125rem;
        border-radius: 1.8rem;
      }

      &:hover{
        filter: brightness(0.9);
      }

      &:active {
        transform: scale(0.975);
        filter: brightness(0.8);
      }
    }
  }  
`;

export const AboutMeSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  padding: 2rem 0;
  border-top: solid 2px ${(props: Props) =>
    props.colorScheme === 'light' ?
      'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.08)'
  };
  background: ${(props: Props) =>
    props.colorScheme === 'light' ?
      'white' : 'var(--back-dark)'
  };

  @media screen and (max-width: 1260px) {
    padding: 2rem;
  }
`;

export const AboutMeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  max-width: 75rem;
  width: 100%;
  height: 100%;

  .TextContainer{
    width: 100%;

    h1{
      line-height: 3rem;
      margin-bottom: 2rem;
      font-family: 'Sora', 'Inter', 'Helvetica', 'Arial';
      font-size: 2.5rem;
      text-align: center;

      color: ${(props: Props) =>
    props.colorScheme === 'light' ?
      'var(--text-light)' : 'var(--text-dark)'
  };
    }

    p {
      text-align: center;

      color: ${(props: Props) =>
    props.colorScheme === 'light' ?
      'var(--text-light-nav)' : 'var(--text-dark-half)'
  };

      @media screen and (max-width: 30.3125rem) {
        width: auto;
        margin: 0 2.5rem 0rem 2.5rem;
      }
    }
  }
`

export const AbilitiesSection = styled.section`
  display: flex;
  width: auto;
  height: auto;
  border-top: solid 2px ${(props: Props) =>
    props.colorScheme === 'light' ?
      'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.08)'
  };
  background: ${(props: Props) =>
    props.colorScheme === 'light' ?
      'white' : 'var(--back-dark)'
  };
  padding: 2rem;
`;

export const AbilitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  max-width: 100vw;
  width: 100%;
  height: 100%;
  color: ${(props: Props) =>
    props.colorScheme === 'light' ?
      'var(--text-light)' : 'var(--text-dark)'
  };

  .TextContainer{
    width: 22.5rem;

    h1{
      line-height: 3rem;
      margin-bottom: 3rem;
      font-size: 2.5rem;
      font-weight: 600;
      text-align: center;
    }

    p {
      text-align: center;
    }
  }

  .SummaryContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 100%;

    aside{
      transition: 0.25s;
    }

    @media screen and (min-width: 56.25rem) {
      
    }

    @media screen and (max-width: 40rem) {
      
    }
  }
`

export const ProjectsSection = styled.section`
  display: block;
  width: 100%;
  height: auto;
  border-top: solid 2px ${(props: Props) =>
    props.colorScheme === 'light' ?
      'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.08)'
  };
  background: ${(props: Props) =>
    props.colorScheme === 'light' ?
      'white' : 'var(--back-dark)'
  };
  padding: 2rem 0;
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;

  .ButtonContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 56.25rem) {
      
    }

    @media screen and (max-width: 40rem) {
      flex-direction: column;
    }
  }
`