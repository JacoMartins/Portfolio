import { BookBookmark, Bus } from 'phosphor-react';
import bookYourselfIcon from '../../../assets/images/BookYourself.svg';
import eclipseLogo from '../../../assets/images/eclipseLogo.svg';
import portmeLogo from '../../../assets/images/portme40x.svg';

export const ProjectData = [
    {
        text: 'ECOS',
        description: 'Um site que simula um sistema operacional, feito para aperfeiçoar a forma de ensino para alunos do ensino médio.',
        image: eclipseLogo,
        type: 'project',
        participants: ['Alisson', 'Jacó', 'Cauan Victor']
    },
    {
        text: 'BookYourself',
        description: 'Um site de reservas para escolas.',
        image: bookYourselfIcon,
        icon: <BookBookmark size={48} weight='regular' color='#2F855A' />,
        type: 'project',
        participants: ['Jacó', 'Cauan Victor', 'Pedro Yuri']
    },
    {
        text: 'Moovooca',
        description: 'Encontre o ônibus perfeito para chegar até a UFC.',
        icon: <Bus size={48} weight='regular' color='#338274' />,
        type: 'project',
        participants: ['Jacó', 'Cauan Victor', 'Pedro Yuri']
    },
    {
        text: 'Port.me',
        description: 'Port.me: Crie, Gerencie e Conecte-se!',
        image: portmeLogo,
        type: 'project',
        participants: ['Jacó']
    }
]