import { readFile } from 'fs/promises';

// Load challenge
//const challenge = new Uint8Array(await readFile('challenge.bin'));
const base64 = await readFile('challenge.txt', 'utf8');
const challenge = Uint8Array.from(Buffer.from(base64, 'base64'));


// Load keys
const privateJwk = JSON.parse(await readFile('privateKey.jwk', 'utf8'));
const publicJwk = JSON.parse(await readFile('publicKey.jwk', 'utf8'));

// Import keys
const privateKey = await crypto.subtle.importKey(
  'jwk',
  privateJwk,
  {
    name: 'ECDSA',
    namedCurve: 'P-256',
  },
  false,
  ['sign']
);

const publicKey = await crypto.subtle.importKey(
  'jwk',
  publicJwk,
  {
    name: 'ECDSA',
    namedCurve: 'P-256',
  },
  false,
  ['verify']
);

// Sign the challenge
const signature = await crypto.subtle.sign(
  {
    name: 'ECDSA',
    hash: { name: 'SHA-256' },
  },
  privateKey,
  challenge
);

// Verify the signature
const isValid = await crypto.subtle.verify(
  {
    name: 'ECDSA',
    hash: { name: 'SHA-256' },
  },
  publicKey,
  signature,
  challenge
);

console.log('🖊️ Signature:', Buffer.from(signature).toString('hex'));
console.log('✅ Signature valid?', isValid);
