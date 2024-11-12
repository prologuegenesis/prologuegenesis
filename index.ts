import { GenesisBot } from './twitter/bot';
import { initializeWallet, PROTOCOL_WALLET, RPC_ENDPOINT } from './config/wallet';
import dotenv from 'dotenv';

dotenv.config();

const main = async () => {
    const { wallet, connection } = await initializeWallet();
    
    const bot = new GenesisBot(
        process.env.TWITTER_API_KEY!,
        connection,
        PROTOCOL_WALLET
    );

    await bot.startStream();
};

main(); 