import type { AppProps /*, AppContext */ } from 'next/app';
import { ThemeProvider } from 'theme-ui';

import theme from '../theme';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
