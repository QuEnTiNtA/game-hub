import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: 'dark'
};

const theme = extendTheme({
    config,
    colors: {
        gray: {
            50: '#'
        }
    }
});

export default theme;