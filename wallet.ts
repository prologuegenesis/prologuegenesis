import { Connection, PublicKey } from '@solana/web3.js';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';

export const PROTOCOL_WALLET = new PublicKey('ProL0gue11111111111111111111111111111111111');
export const RPC_ENDPOINT = 'https://api.mainnet-beta.solana.com';

export const initializeWallet = async () => {
    const wallet = new PhantomWalletAdapter();
    const connection = new Connection(RPC_ENDPOINT);
    await wallet.connect();
    return { wallet, connection };
}; 