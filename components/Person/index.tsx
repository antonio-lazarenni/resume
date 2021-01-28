/** @jsxRuntime classic */
/** @jsx jsx */
import Image from 'next/image';
import { FC } from 'react';
import { Flex, Heading, jsx, Text } from 'theme-ui';

import { Author } from '../../types';

type PersonProps = Author;

const Person: FC<PersonProps> = ({ title, name, biography, picture }) => {
    return (
        <Flex
            sx={{
                flexDirection: 'column'
            }}>
            <Flex
                sx={{
                    justifyContent: 'center',
                    my: 4
                }}>
                <Flex
                    sx={{
                        boxShadow: (theme) => `1rem 1rem ${theme.colors.text}`
                    }}>
                    <Image src={picture.url} alt="Picture of the author" width={300} height={300} />
                </Flex>
            </Flex>
            <Flex
                sx={{
                    flexDirection: ['column', 'row'],
                    justifyContent: 'center',
                    my: 4
                }}>
                <Heading
                    sx={{
                        textAlign: 'center'
                    }}>
                    {name}
                </Heading>
                <Heading
                    as="h2"
                    sx={{
                        textAlign: 'center'
                    }}>
                    [{title}]
                </Heading>
            </Flex>
            <Text>{biography}</Text>
        </Flex>
    );
};

export default Person;
