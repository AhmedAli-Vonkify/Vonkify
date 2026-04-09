---
---

## Overzicht

Een Web3 NFT-marktplaats gebouwd op Ethereum (testnet) waarmee gebruikers digitale kunstwerken als Non-Fungible Tokens kunnen minten, kopen, verkopen en veilen. Gebouwd als freelanceproject om blockchain-ontwikkelingsvaardigheden te demonstreren.

**Functies:**

- NFT-minting met ERC-721-standaard smart contracts
- Peer-to-peer koop/verkoop met on-chain escrow
- Tijdgebonden veilingmechanisme met automatisch bieden
- IPFS-opslag voor NFT-metagegevens en beeldbestanden
- MetaMask wallet-integratie voor transacties

## Technische aanpak

**Smart Contracts (Solidity):**

- ERC-721-implementatie met minting, overdracht en verbranding
- MarketplaceFacilitator-contract voor koop-/verkoopbeheer
- AuctionEngine-contract met tijdgebonden biedlogica
- OpenZeppelin-bibliotheken voor geteste, veilige basiscontracten

**Frontend (React + TypeScript):**

- Ethereum provider-abstractie via Ethers.js
- Responsieve galerij-UI met gefilterd zoeken
- Wallet-verbindingsstatus en transactiestatus
- IPFS-metadata-ophaling voor NFT-attributen
