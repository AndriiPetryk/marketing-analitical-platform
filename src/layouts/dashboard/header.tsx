import {FC} from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {useTheme} from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import {useResponsive} from '../../hooks/use-responsive';

import {bgBlur} from '../../theme/css';

import Iconify from '../../components/iconify';
import {NAV, HEADER} from './config-layout';

// ----------------------------------------------------------------------

interface HeaderType {
    onOpenNav: () => {},
}

const Header: FC<HeaderType> = ({onOpenNav}) => {
    const theme = useTheme();

    // @ts-ignore
    const lgUp = useResponsive('up', 'lg');

    const renderContent = (
        <>
            {!lgUp && (
                <IconButton onClick={onOpenNav} sx={{mr: 1}}>
                    <Iconify icon="eva:menu-2-fill"/>
                </IconButton>
            )}

            <Box sx={{flexGrow: 1}}/>
        </>
    );

    return (
        <AppBar
            sx={{
                boxShadow: 'none',
                height: HEADER.H_MOBILE,
                zIndex: theme.zIndex.appBar + 1,
                ...bgBlur({
                    color: theme.palette.background.default,
                }),
                transition: theme.transitions.create(['height'], {
                    duration: theme.transitions.duration.shorter,
                }),
                ...(lgUp && {
                    width: `calc(100% - ${NAV.WIDTH + 1}px)`,
                    height: HEADER.H_DESKTOP,
                }),
            }}
        >
            <Toolbar
                sx={{
                    height: 1,
                    px: {lg: 5},
                }}
            >
                {renderContent}
            </Toolbar>
        </AppBar>
    );
}

export default Header;

