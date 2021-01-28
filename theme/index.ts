export default {
    useCustomProperties: true,
    useColorSchemeMediaQuery: true,
    initialColorModeName: 'light',
    colors: {
        text: '#0b0a07',
        background: '#fc7753',
        primary: '#439B7F',
        secondary: '#203A3B',
        tertiary: '#3B5657',
        quaternary: '#3B5657',
        modes: {
            dark: {
                text: '#fff',
                background: '#203A3B',
                primary: '#F9C359',
                secondary: '#fc7753',
                tertiary: '#F9C359',
                quaternary: '#fc7753'
            }
        }
    },
    breakpoints: ['40em', '56em', '64em'],
    fonts: {
        body: 'proxima-nova, sans-serif',
        heading: 'proxima-nova, sans-serif',
        monospace: 'proxima-nova, sans-serif'
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
    fontWeights: {
        body: 400,
        heading: 700,
        display: 900
    },
    lineHeights: {
        body: 1.5,
        heading: 1.25
    },
    textStyles: {
        heading: {
            fontFamily: 'heading',
            fontWeight: 'heading',
            lineHeight: 'heading'
        },
        display: {
            variant: 'textStyles.heading',
            fontSize: [5, 6],
            fontWeight: 'display',
            letterSpacing: '-0.03em',
            mt: 3
        },
        strong: {
            variant: 'textStyles.heading',
            fontSize: [3, 4],
            fontWeight: '100',
            letterSpacing: '-0.03em'
        },
        attention: {
            variant: 'textStyles.heading',
            fontSize: [4, 5],
            fontWeight: 'display',
            letterSpacing: '-0.03em'
        }
    },
    layout: {
        container: {
            // borderColor: 'tertiary',
            // borderStyle: 'solid',
        }
    },
    radii: [0, 2, 4, 8, 16, 32, 48],
    sizes: {
        container: 780
    },
    buttons: {
        default: {
            borderRadius: '0',
            ':focus': {
                outlineStyle: 'double',
                outlineWidth: 'thick',
                outlineColor: 'text'
            }
        },
        primary: {
            variant: 'buttons.default',
            color: 'primary',
            bg: 'secondary'
        },
        secondary: {
            variant: 'buttons.default',
            color: 'text',
            bg: 'secondary'
        }
    },
    styles: {
        root: {
            fontFamily: 'body',
            lineHeight: 'body',
            fontWeight: 'body',
            textRendering: 'optimizelegibility',
            fontSmoothing: 'antialiased',
            bg: 'background'
        },
        h1: {
            variant: 'textStyles.display'
        },
        h2: {
            variant: 'textStyles.heading',
            fontSize: 5
        },
        h3: {
            variant: 'textStyles.heading',
            fontSize: 4
        },
        h4: {
            variant: 'textStyles.heading',
            fontSize: 3
        },
        h5: {
            variant: 'textStyles.heading',
            fontSize: 2
        },
        h6: {
            variant: 'textStyles.heading',
            fontSize: 1
        },
        p: {
            fontSize: 2
        },
        a: {
            color: 'text',
            fontFamily: 'body',
            lineHeight: 'body',
            fontWeight: 'body',
            '&:hover': {
                color: 'quaternary'
            }
        },
        pre: {
            fontFamily: 'monospace',
            fontSize: 1,
            p: 3,
            color: 'text',
            bg: 'muted',
            borderColor: 'text',
            borderStyle: 'solid',
            borderTopWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 8,
            borderBottomWidth: 8,
            overflow: 'auto',
            code: {
                color: 'inherit'
            }
        },
        code: {
            fontFamily: 'monospace',
            fontSize: 1
        },
        inlineCode: {
            fontFamily: 'monospace',
            color: 'secondary',
            bg: 'muted',
            px: 2
        },
        ul: {
            listStyleType: 'square'
        },
        table: {
            width: '100%',
            my: 4,
            borderCollapse: 'separate',
            borderSpacing: 0,
            'th,td': {
                textAlign: 'left',
                py: '4px',
                pr: '4px',
                pl: 0,
                borderColor: 'text',
                borderBottomStyle: 'solid'
            }
        },
        th: {
            backgroundColor: 'muted',
            verticalAlign: 'bottom',
            borderBottomWidth: 8
        },
        td: {
            verticalAlign: 'top',
            borderBottomWidth: 4
        },
        hr: {
            border: 0,
            borderBottom: '8px solid',
            borderColor: 'text'
        }
    }
};
