import styled from 'styled-components';

interface PercentProps {
  value: string;
  colorScheme?: string | null;
}

interface Props {
  colorScheme: string | null;
}

export const SummaryBody = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 19.5rem;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  flex-wrap: wrap;
`;

export const Title = styled.h2`
  font-weight: 550;
  font-size: 1.5rem;
  line-height: 1.5rem;
  letter-spacing: -0.05em;
  font-family: 'Sora', 'Inter', 'Helvetica', 'Arial';
  color: ${(props: Props) =>
    props.colorScheme === 'light' ?
      'var(--text-light)' : 'var(--text-dark)'
  };
`;

export const SubTitle = styled.p`
  color: ${(props: Props) =>
    props.colorScheme === 'light' ?
      'var(--text-light-pres)' : 'var(--text-dark-half)'
  };
  font-size: 0.875rem;
  font-family: 'Sora', 'Inter', 'Helvetica', 'Arial';
  line-height: 1.125rem;
  margin-top: 0.25rem;
`;

export const InfoBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 0.5rem;
  
  width: 100%;
  height: 4.625rem;

  border-radius: 6px;

  transition: 0.25s;

  &:hover{
    transform: translate(0, -0.125rem) scale(102%);

    aside{
      div {
        box-shadow: 0px 0px 0.75rem ${(props: Props) => props.colorScheme === 'light' ? 'rgba(133, 34, 231, 0.5)' : 'var(--red)'}; 
      }
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 0.25rem;
  border: solid 1px rgba(255, 255, 255, 0.15);
  padding: 1rem;
  justify-content: left;
  flex-direction: column;
`;

export const InfoTitle = styled.h3`
  text-align:left;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.1875rem;
`;

export const InfoCore = styled.a`
  text-align: left;
  opacity: 0.6;

  font-size: 0.875rem;
  margin-top: 0.375rem;
`;

export const AbilityPercent = styled.aside`
  width: 100%;
  height: 0.25rem;
  border-radius: 1rem;
  background: ${(props: PercentProps) =>
    props.colorScheme === 'light' ?
      'var(--percentage-bar-light)' : 'var(--percentage-bar-dark)'
  };
  
  div {
    width: ${(props: PercentProps) => props.value};
    height: 100%;
    border-radius: 1rem;
    background: ${(props: PercentProps) =>
    props.colorScheme === 'light' ?
      'var(--purple)' : 'var(--red)'
  };

    transition: 0.25s;
  }
`;