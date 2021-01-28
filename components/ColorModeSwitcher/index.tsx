import React from 'react'
import { useColorMode, Button } from 'theme-ui'

const ColorModeSwitcher = (props) => {
  const [colorMode, setColorMode] = useColorMode()
  return (
      <Button
        onClick={e => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default')
        }}>
        Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
      </Button>
  )
}

export default ColorModeSwitcher;
