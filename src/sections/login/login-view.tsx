import {useState, useEffect} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useLoginMutation} from '../../slices/usersApiSlice';
import {setCredentials} from '../../slices/authSlice';
import {toast} from 'react-toastify';


import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import {alpha, useTheme} from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import {useRouter} from '../../routes/hooks';
import {bgGradient} from '../../theme/css';
import Logo from '../../components/logo';
import Iconify from '../../components/iconify';
import CircularIndeterminate from "../../components/progress/progress.tsx";

// ----------------------------------------------------------------------

export default function LoginView() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [login, {isLoading}] = useLoginMutation();
    // @ts-ignore
    const {userInfo} = useSelector((state) => state?.auth);

    const {search} = useLocation();
    const sp = new URLSearchParams(search);
    const redirect = sp.get('redirect') || '/signup';

    useEffect(() => {
        if (userInfo) {
            router.push('/dashboard');
        }
    }, [navigate, redirect, userInfo]);

    const theme = useTheme();

    const router = useRouter();

    const [showPassword, setShowPassword] = useState(false);
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await login({email, password}).unwrap();
            dispatch(setCredentials({...res}));
            router.push('/dashboard');
        } catch (err) {
            toast.error(err?.data?.message || err.error);
        }
    };

    if (isLoading) {
        return <CircularIndeterminate/>
    }

    const renderForm = (
        <>
            <Stack spacing={3}>
                <TextField
                    name="email"
                    label="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <TextField
                    name="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'}/>
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </Stack>

            <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                color="inherit"
                onClick={submitHandler}
            >
                Login
            </LoadingButton>
        </>
    );

    return (
        <Box
            sx={{
                ...bgGradient({
                    color: alpha(theme.palette.background.default, 0.9),
                    imgUrl: '/assets/background/overlay_4.jpg',
                }),
                height: 1,
            }}
        >
            <Logo
                sx={{
                    position: 'fixed',
                    top: {xs: 16, md: 24},
                    left: {xs: 16, md: 24},
                }}
            />

            <Stack alignItems="center" justifyContent="center" sx={{height: 1}}>
                <Card
                    sx={{
                        p: 5,
                        width: 1,
                        maxWidth: 420,
                    }}
                >
                    <Typography variant="h4">Sign in to Dashboard</Typography>

                    <Typography variant="body2" sx={{mt: 2, mb: 5}}>
                        Don’t have an account?
                        <Link to='/signup'>
                            Get started
                        </Link>
                    </Typography>

                    {renderForm}
                </Card>
            </Stack>
        </Box>
    );
}
