import { Text } from '@theme-ui/components';
import { FC } from 'react';

const SectionTitle: FC = ({ children }) => {
    return (
        <Text
            sx={{
                boxShadow: (theme) => `0 0 0 1rem ${theme.colors.tertiary}`,
                textAlign: 'center',
                color: 'tertiary',
                py: 1,
                my: 3
            }}
            variant="textStyles.attention">
            {children}
        </Text>
    );
};

export default SectionTitle;
