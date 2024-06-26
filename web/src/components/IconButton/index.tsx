import { ButtonContainer } from './styles';
import BookYourselfIcon from '../../assets/images/BookYourself.svg';
import arrowIcon from '../../assets/images/arrow.svg';

import { InstagramLogo, EnvelopeOpen, Phone, CircleWavyCheck, LinkedinLogo, GithubLogo, CaretRight } from 'phosphor-react';
import { ReactNode } from 'react';

interface IconButtonProps {
  text: string;
  description: string;
  image?: string;
  icon?: ReactNode;
  link?: string;
  type: string;
  colorScheme: string | null;
}

export function IconButton({ text, description, image, link, type, icon, colorScheme }: IconButtonProps) {

  if (type === 'contact' || type === 'portfolio') {
    return (
      <ButtonContainer type={type} colorScheme={colorScheme} onClick={() => { window.open(link) }}>
        <div>
          {(image === 'Email' && !icon) && <EnvelopeOpen color='#8522E7' weight="light" size={60} />}
          {(image === 'Phone' && !icon) && <Phone color='#8522E7' weight="light" size={60} />}
          {(image === 'Instagram' && !icon) && <InstagramLogo color='#8522E7' weight="light" size={60} />}
          {(image === 'Github' && !icon) && <GithubLogo color='#8522E7' weight="light" size={60} />}
          {(image === 'Cert' && !icon) && <CircleWavyCheck color='#8522E7' weight="light" size={60} />}
          {(image === 'Linkedin' && !icon) && <LinkedinLogo color='#8522E7' weight="light" size={60} />}


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