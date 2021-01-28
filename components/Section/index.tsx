import { FC } from 'react';
import { Box } from 'theme-ui';

const Section: FC = ({ children, ...rest }) => (
    <Box as="section" {...rest}>
        {children}
    </Box>
);

export default Section;
