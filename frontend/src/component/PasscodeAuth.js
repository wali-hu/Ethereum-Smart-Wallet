import React, { useState } from 'react';

function PasscodeAuth({ setAuthenticated }) {
    const [passcode, setPasscode] = useState('');
    const [message, setMessage] = useState('');

    const correctPasscode = '1234'; // This should be securely stored and managed

    const handlePasscodeSubmit = () => {
        if (passcode === correctPasscode) {
            setAuthenticated(true);
        } else {
            setMessage('Incorrect passcode');
        }
    };

    return (
        <div>
            <input
                type="password"
                value={passcode}
                onChange={e => setPasscode(e.target.value)}
                placeholder="Enter Passcode"
            />
            <button onClick={handlePasscodeSubmit}>Submit</button>
            {message && <p>{message}</p>}
        </div>
    );
}

export default PasscodeAuth;

