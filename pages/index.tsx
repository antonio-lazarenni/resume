import Head from 'next/head'
import { Container } from 'theme-ui';

import { getAuthorById, getPosts } from '../utils/graphcms'
import markdownToHtml from '../utils/markdownToHtml'

import Person from '../components/Person'
import Experience from '../components/Experience'
import Section from '../components/Section'

export default function Home({ author, posts }) {
  return (
    <>
      <Head>
          <title>{`${author.name}`}</title>
      </Head>
      <header></header>
      <Container as="main" sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        px: [3, 3, 0]
      }}>
        <Section>
          <Person {...author} />
        </Section>
        <Section sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 5,
        }}>
          {posts.map((post) => <Experience {...post} />)}
        </Section>
        </Container>
      <footer></footer>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  try {
    const author = await getAuthorById('ckkfgjdfcl44209156lzxzls0');
    const posts = await getPosts();

    return { props: { author, posts } }

  } catch (error) {
    console.log(error);
  }
}