import { GetStaticProps } from 'next';
import Head from 'next/head';
import { FC } from 'react';
import { Container, Flex, Link, Text } from 'theme-ui';

import ColorModeSwitcher from '../components/ColorModeSwitcher';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Person from '../components/Person';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import { Author } from '../types';
import { getAuthorById } from '../utils/graphcms';

interface HomeProps {
    author: Author;
}

const Home: FC<HomeProps> = ({ author }) => {
    return (
        <>
            <Head>
                <title>{`${author.name}`}</title>
                <script async data-api="/_hive" src="/bee.js"></script>
            </Head>
            <header>
                <Container
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        px: [3, 3, 0],
                        py: [3, 3, 3]
                    }}>
                    <ColorModeSwitcher />
                </Container>
            </header>
            <Container
                as="main"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    px: [3, 3, 0]
                }}>
                <Section>
                    <Person {...author} />
                </Section>
                <Section
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        my: 5
                    }}>
                    <SectionTitle>Experience</SectionTitle>
                    {author.posts.map((post) => (
                        <Experience key={post.id} {...post} />
                    ))}
                </Section>
                <Section>
                    <SectionTitle>Education</SectionTitle>
                    {author.educations.map((education) => (
                        <Education key={education.id} {...education}></Education>
                    ))}
                </Section>
                <Section>
                    <SectionTitle>Contact & Links</SectionTitle>
                    <Flex
                        sx={{
                            justifyContent: 'space-around',
                            flexDirection: ['column', 'row'],
                            my: [5, 5]
                        }}>
                        <Link href={`mailto:${author.email}`}>
                            <Text as="strong" variant="textStyles.strong">
                                {author.email}
                            </Text>
                        </Link>
                        <Link href={author.github}>
                            <Text as="strong" variant="textStyles.strong">
                                GitHub
                            </Text>
                        </Link>
                        <Link href={author.linkedin}>
                            <Text as="strong" variant="textStyles.strong">
                                LinkedIn
                            </Text>
                        </Link>
                    </Flex>
                </Section>
                {/* <Section>
                    <SectionTitle>About this page</SectionTitle>
                </Section> */}
            </Container>
            <footer></footer>
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    try {
        const author = await getAuthorById('ckkfgjdfcl44209156lzxzls0');

        return { props: { author } };
    } catch (error) {
        console.log(error);
    }
};

export default Home;
