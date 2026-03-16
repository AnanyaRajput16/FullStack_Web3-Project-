import { createWalletClient } from "https://esm.sh/viem"
import

const connectButton = document.getElementById("connectButton")

let walletClient

async function connectWallet() {
    if (typeof window.ethereum !== "undefined") {

        walletClient = createWalletClient({
            transport: custom(window.ethereum)
        })
        await walletClient.requestAddresses()
        connectButton.innerHTML = "Connected"
    } else {
        connectButton.innerHTML = "Please install MetaMask"
    }
}

connectButton.onclick = connect