import React, { FC } from 'react';
import { Button, useColorMode } from 'theme-ui';

const ColorModeSwitcher: FC = () => {
    const [colorMode, setColorMode] = useColorMode();
    return (
        <Button
            onClick={() => {
                setColorMode(colorMode === 'default' ? 'dark' : 'default');
            }}>
            Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
        </Button>
    );
};

export default ColorModeSwitcher;
