import { ReactNode } from 'react';
import { AbilityPercent, InfoBody, InfoContainer, InfoCore, InfoTitle, SubTitle, SummaryBody, Title, TitleContainer } from './styles';

interface Summary {
  title: string;
  subTitle: string;
  summaries?: InfoBody[];
  type: string;
  children?: ReactNode;
  colorScheme: string | null;
}

interface SummaryInfo {
  infoTitle: string;
  value: string;
  colorScheme: string | null;
}

interface InfoBody {
  infoTitle: string;
  value: string;
}

export function Summary({ title, subTitle, summaries, colorScheme, type, children }: Summary) {
  return (
    <SummaryBody>

      <TitleContainer className='TitleContainer'>

        <Title colorScheme={colorScheme}>{title}</Title>

        <SubTitle colorScheme={colorScheme}>
          {subTitle}
        </SubTitle>

      </TitleContainer>

      <div className='infoContainer'>
        {type === '%list' && summaries?.map(
          (sum) => <SummaryInfo key={sum.infoTitle} colorScheme={colorScheme} infoTitle={sum.infoTitle} value={sum.value} />
        )}

        {type !== '%list' && children}
      </div>

    </SummaryBody>
  )
}

export function SummaryInfo({ infoTitle, value, colorScheme }: SummaryInfo) {
  let filteredValue = value === '100%' ? '' : value;

  return (
    <InfoBody colorScheme={colorScheme}>
      <InfoContainer>

        {infoTitle ? <InfoTitle>{infoTitle}</InfoTitle> : <></>}
        {filteredValue ? <InfoCore>{filteredValue}</InfoCore> : <></>}

        <AbilityPercent value={value} colorScheme={colorScheme}>
          <div></div>
        </AbilityPercent>

      </InfoContainer>
    </InfoBody>
  )
}