import React, { useState } from 'react';

function BiometricAuth({ setAuthenticated }) {
    const [message, setMessage] = useState('');

    const handleBiometricAuth = async () => {
        try {
            const credential = await navigator.credentials.create({
                publicKey: {
                    challenge: new Uint8Array([/* server-generated challenge */]),
                    rp: { name: "Smart Wallet" },
                    user: { id: new Uint8Array(16), name: "user", displayName: "User" },
                    pubKeyCredParams: [{ alg: -7, type: "public-key" }]
                }
            });
            setAuthenticated(true);
        } catch (error) {
            setMessage('Biometric authentication failed');
        }
    };

    return (
        <div>
            <button onClick={handleBiometricAuth}>Authenticate with Biometrics</button>
            {message && <p>{message}</p>}
        </div>
    );
}

export default BiometricAuth;