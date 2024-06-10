import { BookBookmark, Bus } from "phosphor-react";
import { Button, Container, PageMain, Section, SectionH1, SectionH2 } from "../Home/styles";
import portmeLogo from '../../assets/images/portme40x.svg';

interface PageType {
    name: string;
    colorScheme: string | null;
}

export function Page({ name, colorScheme }: PageType) {
    return (
        <PageMain>
            <Section id='moovooca' height='40rem' bg={colorScheme === 'light' ? '#e6faf3' : '#131414'} colorScheme={colorScheme}>
                <Container row="row-reverse">
                    <aside>
                        <Bus size='16rem' weight='regular' color="#338274" />
                        <div className='TextContainer'>
                            <SectionH1 color='#338274'>Moovooca</SectionH1>
                            <SectionH2 color={colorScheme === 'light' ? 'var(--text-light)' : 'var(--text-dark)'}>O Moovooca é uma tentativa de projeto inovador destinado a auxiliar os alunos da UFC a encontrarem a linha ideal de ônibus. Com a ambição de oferecer uma solução eficiente e confiável, o Moovooca visa funcionar consistentemente na maior parte dos momentos, proporcionando aos usuários uma experiência de transporte fluida e sem contratempos.</SectionH2>
                            <Button color='#338274'>Saiba mais sobre em github.com</Button>
                        </div>
                    </aside>
                </Container>
            </Section>

            <Section id='port.me' height='40rem' bg={colorScheme === 'light' ? '#D8B9FF' : '#0c1411'} colorScheme={colorScheme}>
                <Container row="row">
                    <aside>
                        <img src={portmeLogo} alt="Logomarca do Port.me" />
                        <div className='TextContainer'>
                            <SectionH1 color="#8F5CFF">port.me</SectionH1>
                            <SectionH2 color={colorScheme === 'light' ? 'var(--text-light)' : 'var(--text-dark)'}>O BookYourself é uma plataforma destinada a melhora, automatização e gerência de reservas de itens ou ambientes de uma instituição.</SectionH2>
                            <Button color={colorScheme === 'light' ? '#8F5CFF' : '#8F5CFF'}>Saiba mais em github.com</Button>
                        </div>
                    </aside>
                </Container>
            </Section>

            <Section id='moovooca' height='40rem' bg={colorScheme === 'light' ? '#F0FFF4' : '#0c1411'} colorScheme={colorScheme}>
                <Container row="row">
                    <aside>
                        <Bus size='16rem' weight='regular' color="#38A169" />
                        <div className='TextContainer'>
                            <SectionH1 color="#38A169">Moovooca</SectionH1>
                            <SectionH2 color={colorScheme === 'light' ? 'var(--text-light)' : 'var(--text-dark)'}></SectionH2>
                            <Button color={colorScheme === 'light' ? '#38A169' : '#2F855A'}>Saiba mais em github.com</Button>
                        </div>
                    </aside>
                </Container>
            </Section>

            <Section id='bookyourself' height='40rem' bg={colorScheme === 'light' ? '#F0FFF4' : '#0c1411'} colorScheme={colorScheme}>
                <Container row="row">
                    <aside>
                        <BookBookmark size='16rem' weight='regular' color="#38A169" />
                        <div className='TextContainer'>
                            <SectionH1 color="#38A169">BookYourself</SectionH1>
                            <SectionH2 color={colorScheme === 'light' ? 'var(--text-light)' : 'var(--text-dark)'}>O BookYourself é uma plataforma destinada a melhora, automatização e gerência de reservas de itens ou ambientes de uma instituição.</SectionH2>
                            <Button color={colorScheme === 'light' ? '#38A169' : '#2F855A'}>Saiba mais em github.com</Button>
                        </div>
                    </aside>
                </Container>
            </Section>
        </PageMain>
    )
}