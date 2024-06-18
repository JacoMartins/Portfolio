import styled from 'styled-components';

interface Props {
    colorScheme?: string | null;
    height?: string;
    bg?: string;
    color?: string;
    row?: string;
    opacity?: string;
}

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

