import { Helmet } from 'react-helmet-async';

import { SignUpView } from '../sections/signup';

// ----------------------------------------------------------------------

export default function SignUpPage() {
  return (
    <>
      <Helmet>
        <title> SignUp | Dashboard </title>
      </Helmet>

      <SignUpView />
    </>
  );
}
