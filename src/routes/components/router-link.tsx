import {FC} from 'react';
import {forwardRef} from 'react';
import {Link} from 'react-router-dom';

// ----------------------------------------------------------------------
interface RouterLink {
    href: string
}

// @ts-ignore
const RouterLink: FC<RouterLink> = forwardRef(({href, ...other}, ref) => <Link ref={ref} to={href} {...other} />);

export default RouterLink;
