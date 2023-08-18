const connectMetamask = async () => {
    if(window.ethereum !== 'undefined'){
        const accounts = await ethereum.request({ method: 'eth_requestAccounts'});
        console.log(accounts)
    }
}