import { FC } from 'react';
import { Box, Flex, Link, Text } from 'theme-ui';

import { Experience as IExperience } from '../../types';
import { beautifyDate } from '../../utils/beautifyDate';

type ExperienceProps = IExperience;

const Experience: FC<ExperienceProps> = ({
    company,
    title,
    tags,
    period,
    location,
    link,
    content
}) => {
    return (
        <Flex
            sx={{
                flexDirection: 'column',
                my: [5, 5]
            }}>
            <Flex
                sx={{
                    my: 2,
                    '& > *:not(:last-child)': {
                        marginRight: [0, 3]
                    },
                    flexDirection: ['column', 'row']
                }}>
                <Text as="strong" variant="textStyles.strong">
                    {title}
                </Text>
                <Text as="strong" variant="textStyles.strong">
                    @{company}
                </Text>
                <Link href={`//${link}`} target="_blank" rel="noopener">
                    <Text as="strong" variant="textStyles.strong">
                        {link}
                    </Text>
                </Link>
            </Flex>
            {tags && (
                <Flex
                    sx={{
                        my: 2,
                        '& > *:not(:last-child)': {
                            marginRight: [3, 3]
                        },
                        flexWrap: 'wrap'
                    }}>
                    {tags.map((tag) => (
                        <Text key={tag} variant="textStyles.attention">
                            {tag}
                        </Text>
                    ))}
                </Flex>
            )}
            <Box dangerouslySetInnerHTML={{ __html: content.html }} />
            <Box
                sx={{
                    my: 2
                }}>
                <Box>
                    <Text>{location}</Text>
                </Box>
                <Box>
                    <Text>{`${beautifyDate(period[0])} - ${
                        period[1] ? beautifyDate(period[1]) : 'Present'
                    }`}</Text>
                </Box>
            </Box>
        </Flex>
    );
};

export default Experience;
