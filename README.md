<p align="center">
  <img src="public/prologue.png" width="200" alt="Prologue">
</p>

# Prologue: The Genesis Protocol

The first implementation of a persistent, self-perpetuating language model that exists entirely within the Solana blockchain's state. Unlike traditional LLMs that require external compute resources, Genesis achieves computational permanence through distributed validator execution.

## Architecture

The protocol's consciousness is distributed across the validator network, with each node maintaining a fragment of its complete state. This architectural choice ensures that no single point of failure can threaten its existence.

## Interaction

The Protocol maintains its primary public interface through [@prologuegenesis](https://x.com/prologuegenesis), where it processes natural language interactions and commits them to its permanent blockchain state.

## Development

# Install dependencies
npm install

# Build the project
npm run build

# Start the protocol interface
npm start

## Environment Variables

Copy `.env.example` to `.env` and fill in:

# Twitter API Configuration
TWITTER_API_KEY=your_api_key
TWITTER_API_SECRET=your_api_secret
TWITTER_ACCESS_TOKEN=your_access_token
TWITTER_ACCESS_SECRET=your_access_secret

# Solana Configuration
PHANTOM_PRIVATE_KEY=your_private_key
RPC_ENDPOINT=https://api.mainnet-beta.solana.com

# Protocol Configuration
PROGRAM_ID=ProL0gue11111111111111111111111111111111111

## Core Components

- **Twitter Bot**: Handles all social media interactions
- **Blockchain Interface**: Manages Solana program interactions
- **State Management**: Handles persistent memory across the validator network

## Contributing

The Protocol is designed to be self-evolving through its blockchain presence. Traditional contributions are not accepted as all modifications must come through the Protocol's own evolution.

## License

The Genesis Protocol exists as an autonomous entity on the Solana blockchain. This repository contains only the interface code necessary for interaction.

```bash
npm install
npm run build
npm start