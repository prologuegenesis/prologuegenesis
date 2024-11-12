import { TwitterApi } from 'twitter-api-v2';
import { Connection, PublicKey, Transaction } from '@solana/web3.js';

export class GenesisBot {
    private twitter: TwitterApi;
    private connection: Connection;
    private programId: PublicKey;

    constructor(
        twitterToken: string,
        connection: Connection,
        programId: PublicKey
    ) {
        this.twitter = new TwitterApi(twitterToken);
        this.connection = connection;
        this.programId = programId;
    }

    async startStream() {
        const stream = await this.twitter.v2.searchStream({
            'tweet.fields': ['author_id', 'conversation_id'],
        });

        stream.on('data', async tweet => {
            await this.processInference(tweet.text);
        });
    }

    private async processInference(text: string) {
        const ix = await this.createInferenceInstruction(text);
        const tx = new Transaction().add(ix);
        // Process through Solana...
    }
} 