import { FC } from 'react';
import { Box, Flex, Text } from 'theme-ui';

export interface EducationProps {
    title: string;
    institutionName: string;
    period: [string, string];
    location: string;
    id: string;
}

function beautifyDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en', { month: 'long', year: 'numeric' });
}

const Education: FC<EducationProps> = ({ title, institutionName, period, location }) => {
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
                    @{institutionName}
                </Text>
            </Flex>
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

export default Education;
