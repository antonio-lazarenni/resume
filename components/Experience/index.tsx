import { FC } from 'react';
import { Box, Flex, Link, Text } from 'theme-ui';

interface Content {
    html: string;
}

interface ExperienceProps {
    company: string;
    title: string;
    tags: string[];
    stage: string;
    slug: string;
    period: [string, string];
    location: string;
    link: string;
    id: string;
    excerpt: string;
    content: Content
    date: Date;
    publishedAt: Date;
    updatedAt: Date;
    createdAt: Date;
}

function beautifyDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en', {month: 'long', year: 'numeric'});
}

const Experience: FC<ExperienceProps> = ({
    company,
    title,
    tags,
    stage,
    slug,
    period,
    location,
    link,
    id,
    excerpt,
    content,
    date,
    publishedAt,
    updatedAt,
    createdAt}) => {
    return (
        <Flex sx={{
            flexDirection: 'column',
            // gap: 2,
            '& > *': {
                my: 2,
            },
        }}>
        <Flex sx={{
            // gap: '1rem',
            '& > *:not(:last-child)': {
                marginRight: [0, 3],
            },
            flexDirection: ['column', 'row']
        }}>
            <Text as="strong" variant="textStyles.strong">{title}</Text>
            <Text as="strong" variant="textStyles.strong">@{company}</Text>
            <Link
                href={`//${link}`}
                target="_blank"
                rel="noopener"
            ><Text as="strong" variant="textStyles.strong">{link}</Text></Link>
        </Flex>
        {tags && <Flex sx={{
            // gap: '.5rem',
            '& > *:not(:last-child)': {
                marginRight: [3, 3],
            },
            flexWrap: 'wrap',
        }}>
            {tags.map((tag) => <Text key={tag} variant="textStyles.attention">{tag}</Text>)}
        </Flex>}
        <Box dangerouslySetInnerHTML={{ __html: content.html }} />
        <Box>
            <Box>
                <Text>{location}</Text>
            </Box>
            <Box>
                <Text>{`${beautifyDate(period[0])} - ${period[1] ? beautifyDate(period[1]) : 'Present'}`}</Text>
            </Box>
        </Box>
    </Flex>
    )
}

export default Experience;