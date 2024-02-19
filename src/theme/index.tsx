import {useMemo, FC} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {createTheme, ThemeProvider as MUIThemeProvider} from '@mui/material/styles';

import {palette} from './palette';
import {shadows} from './shadows';
import {overrides} from './overrides';
import {typography} from './typography';
import {customShadows} from './custom-shadows';

// ----------------------------------------------------------------------

interface ThemeProvider {
    children: any
}

const ThemeProvider: FC<ThemeProvider> = ({children}) => {
    const memoizedValue = useMemo(
        () => ({
            palette: palette(),
            typography,
            shadows: shadows(),
            customShadows: customShadows(),
            shape: {borderRadius: 8},
        }),
        []
    );

    // @ts-ignore
    const theme = createTheme(memoizedValue);

    // @ts-ignore
    theme.components = overrides(theme);

    return (
        <MUIThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </MUIThemeProvider>
    );
}

export default ThemeProvider;
