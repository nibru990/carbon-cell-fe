import { useWeb3React } from '@web3-react/core';
import React, {useState, useEffect} from 'react'
import Web3 from 'web3';

function MetaMask() {

    const [loading, setLoading] = useState(false);
    const { connector, hooks } = useWeb3React();
    const { useSelectedAccount } = hooks;
    const account = useSelectedAccount(connector);
    const [connectedAccount, setConnectedAccount] = useState('null');

    const onConnectMetamassk = async () => {
        const chainID = process.env.SUPPORT_CHAIN_ID || "5";
        try {
            if(
                chainID &&
                window.ethereum &&
                window.ethereum.networkVersion !== chainID
            ) {
                try {
                    await connector.activate(chainID);
                } catch(err) {
                    console.log("User rejected the request", err);
                    setLoading(false);
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    const onDisconnectMetamask = () => {
        if(connector?.deactivate) {
            connector.deactivate();
        } else {
            connector.resetState();
        }
    };

    useEffect(() => {
      if (account) setLoading(false)    
    }, [account])



    async function connectMetamask() {
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);

            await window.ethereum.request({method: 'eth_requestAccounts'});

            const accounts = await web3.eth.getAccounts();

            setConnectedAccount(accounts[0])
        } else {
            alert('Please download metamsak')
        }
    }
    
    return (
        <>
                <button onClick={() => connectMetamask()}>Connect to Metamask</button>

                <h2>{connectedAccount}</h2>
        </>
    )
}

export default MetaMask