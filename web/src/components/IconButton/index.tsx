import { ButtonContainer } from './styles';
import { LinkedinLogo, CaretRight } from 'phosphor-react';
import { ReactNode } from 'react';

interface InformationProps {
  text: string;
  description: string;
  image?: string;
  icon?: ReactNode;
  link?: string;
  type: string;
  colorScheme: string | null;
}

export function Information({ text, description, image, link, type, icon, colorScheme }: InformationProps) {
  if (type === 'contact' || type === 'portfolio') {
    return (
      <ButtonContainer type={type} colorScheme={colorScheme} onClick={() => { window.open(link) }}>
        <div>
          {icon && icon}
          {!icon && image === 'Linkedin' && <LinkedinLogo size={24} weight='regular' color='rgba(0, 0, 0, 0.25)' />}
          <div>
            <h3>{text}</h3>
            <p>{description}</p>
          </div>
          {!icon && <CaretRight size={24} weight='regular' color='rgba(0, 0, 0, 0.25)' />}

          {icon && icon}
        </div>
      </ButtonContainer>
    )
  } else {
    return(
      <ButtonContainer type={type} colorScheme={colorScheme} onClick={() => { window.open(link) }}>
        <div>
          {!icon && <img src={image}/>}

          {icon && icon}
          <div>
            <h3>{text}</h3>
            <p>{description}</p>
          </div>
          <CaretRight size={16} weight='regular' color='rgba(0, 0, 0, 0.25)' />
        </div>
      </ButtonContainer>
    )
  }

}