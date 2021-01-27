
import { Box } from 'theme-ui';

const Section = ({children, ...rest}) => <Box as="section" {...rest}>{children}</Box>

export default Section;