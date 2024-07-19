import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';

function SocialMediaLogin({ setUser }) {
    const login = useGoogleLogin({
        onSuccess: tokenResponse => setUser(tokenResponse),
        onError: error => console.log('Login Failed:', error)
    });

    return (
        <button onClick={() => login()}>
            Login with Google
        </button>
    );
}

export default SocialMediaLogin;