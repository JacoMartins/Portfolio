import { BookBookmark, Bus } from 'phosphor-react';
import bookYourselfIcon from '../../../assets/images/BookYourself.svg';
import eclipseLogo from '../../../assets/images/eclipseLogo.svg';
import portmeLogo from '../../../assets/images/portme40x.svg';

export const projects = [
    {
        text: 'BookYourself',
        description: 'Um site de reservas para escolas.',
        image: bookYourselfIcon,
        icon: <BookBookmark size={48} weight='regular' color='#2F855A' />,
        type: 'projects'
    },
    {
        text: 'Moovooca',
        description: 'Encontre o ônibus perfeito para chegar até a UFC.',
        icon: <Bus size={48} weight='regular' color='#338274' />,
        type: 'projects'
    },
    {
        text: 'Ecos',
        description: 'Um site que simula um sistema operacional, feito para aperfeiçoar meus conhecimentos em Javascript.',
        image: eclipseLogo,
        type: 'projects'
    },
    {
        text: 'Port.me',
        description: 'Port.me: Crie, Gerencie e Conecte-se!',
        image: portmeLogo,
        type: 'projects'
    }
]