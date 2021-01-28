/** @jsxRuntime classic */
/** @jsx jsx */
import {FC} from 'react';
import Image from 'next/image'
import { jsx, Flex, Box, Heading, Text } from 'theme-ui';


interface Picture {
    url: string;
}

interface PersonProps {
    title: string
    name: string
    biography: string
    picture: Picture
}

const Person: FC<PersonProps> = ({ title, name, biography, picture }) => {
    return (
        <Flex sx={{
            flexDirection: 'column',
        }}>
            <Flex sx={{
                justifyContent: 'center',
                my: 4,
            }}>
                <Flex sx={{
                    boxShadow: (theme) => `1rem 1rem ${theme.colors.text}`,
                }}>
                <Image
                    src={picture.url}
                    alt="Picture of the author"
                    width={300}
                    height={300}
                    />
                </Flex>
            </Flex>
            <Flex sx={{
                flexDirection: ['column', 'row'],
                justifyContent: 'center',
                my: 4,
            }}>
                <Heading sx={{
                    textAlign: 'center',
                }}>{name}</Heading>
                <Heading as='h2' sx={{
                    textAlign: 'center',
                }}>[{title}]</Heading>
            </Flex>
            <Text>{biography}</Text>
        </Flex>
    )
}

export default Person;