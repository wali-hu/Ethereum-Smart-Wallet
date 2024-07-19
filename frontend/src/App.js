import React, { useState } from 'react';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import SocialMediaLogin from './components/SocialMediaLogin';
import BiometricAuth from './components/BiometricAuth';
import PasscodeAuth from './components/PasscodeAuth';
import SmartWalletABI from './SmartWalletABI.json';

const SmartWalletAddress = 'YOUR_SMART_WALLET_CONTRACT_ADDRESS';

function App() {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const [balance, setBalance] = useState(0);

  const connectWallet = async () => {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const ethersProvider = new ethers.providers.Web3Provider(connection);
    setProvider(ethersProvider);
    const walletContract = new ethers.Contract(SmartWalletAddress, SmartWalletABI, ethersProvider.getSigner());
    setContract(walletContract);
    const contractBalance = await walletContract.getBalance();
    setBalance(ethers.utils.formatEther(contractBalance));
  };

  return (
    <div className="App">
      {!user && <SocialMediaLogin setUser={setUser} />}
      {user && !authenticated && <BiometricAuth setAuthenticated={setAuthenticated} />}
      {authenticated && <PasscodeAuth setAuthenticated={setAuthenticated} />}

      {authenticated && (
        <div>
          <button onClick={connectWallet}>Connect Wallet</button>
          <p>Balance: {balance} ETH</p>
        </div>
      )}
    </div>
  );
}

export default App;