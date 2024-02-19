import {FC} from 'react';
import {forwardRef} from 'react';
import {Icon} from '@iconify/react';

import Box from '@mui/material/Box';

// ----------------------------------------------------------------------
interface Iconify {
    icon: string,
    sx: {},
    width: number,
}

const Iconify: FC<Iconify> = forwardRef(({icon, width = 20, sx, ...other}, ref) => (
    <Box
        ref={ref}
        component={Icon}
        className="component-iconify"
        icon={icon}
        sx={{width, height: width, ...sx}}
        {...other}
    />
));

export default Iconify;
