import Document, {
    DocumentContext,
    DocumentInitialProps,
    Head,
    Html,
    Main,
    NextScript
} from 'next/document';
import { InitializeColorMode } from 'theme-ui';

export default class extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render(): JSX.Element {
        return (
            <Html>
                <Head />
                <body>
                    <InitializeColorMode />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
