import Head from 'next/head'
import { Container } from 'theme-ui';

import { getAuthorById, getPosts } from '../utils/graphcms'

import Person from '../components/Person'
import Experience from '../components/Experience'
import Section from '../components/Section'
import ColorModeSwitcher from '../components/ColorModeSwitcher'

export default function Home({ author, posts }) {
  return (
    <>
      <Head>
          <title>{`${author.name}`}</title>
      </Head>
      <header>
      <Container sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        px: [3, 3, 0],
        py: [3, 3, 3]
      }}>
        <ColorModeSwitcher />
        </Container>
      </header>
      <Container as="main" sx={{
        display: 'flex',
        flexDirection: 'column',
        px: [3, 3, 0]
      }}>
        <Section>
          <Person {...author} />
        </Section>
        <Section sx={{
            display: 'flex',
            flexDirection: 'column-reverse',
            my: 5,
        }}>
          {posts.map((post) => <Experience key={post.slug} {...post} />)}
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