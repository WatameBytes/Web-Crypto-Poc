# Web Crypto API Demonstration
[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A lightweight project showcasing the Web Crypto API capabilities in Node.js v18+ for cryptographic operations including challenge generation, key pair management, signature creation, and verification.

## Features

- **Challenge Generation**: Create cryptographically secure random challenges
- **Key Management**: Generate and store ECDSA P-256 key pairs
- **Signature Operations**: Sign data with private keys and verify with public keys
- **Modern Standards**: Uses JSON Web Key (JWK) format for interoperability

## Requirements

- Node.js **v18 or later** (required for Web Crypto API support)
- ES Modules via `.mjs` file extensions OR `"type": "module"` in `package.json`

## Project Structure

| File | Description |
|------|-------------|
| `generate-challenge.mjs` | Creates a cryptographic challenge and saves as base64 |
| `generate-keys.mjs` | Generates ECDSA P-256 key pair and exports as JWK files |
| `sign-verify.mjs` | Demonstrates the full signing and verification workflow |

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/web-crypto-demo.git
cd web-crypto-demo

# No dependencies to install!
```

## Usage

Execute each script in sequence to see the complete cryptographic workflow:

1. Generate a cryptographic challenge:
   ```bash
   node generate-challenge.mjs
   ```

2. Create a key pair:
   ```bash
   node generate-keys.mjs
   ```

3. Sign the challenge and verify the signature:
   ```bash
   node sign-verify.mjs
   ```

Successful execution will display confirmation that the signature is valid.

## Technical Details

- **Challenge Format**: The random challenge is saved in both base64 (`challenge.txt`) and binary (`challenge.bin`) formats
- **Key Storage**: Keys are exported as JSON Web Keys (JWK):
  - `privateKey.jwk` - Contains the private key (keep secure!)
  - `publicKey.jwk` - Contains the shareable public key
- **Algorithm**: ECDSA with P-256 curve and SHA-256 hashing for:
  - Strong security with smaller key sizes than RSA
  - Broad compatibility with browsers and other systems
  - Efficient performance for mobile and web applications

## Applications

This code provides a foundation for implementing:

- Challenge-response authentication systems
- Digital signature workflows
- Secure message verification
- Decentralized identity solutions
- Token signing for authorization

## License

This project is licensed under the MIT License - see the LICENSE file for details.