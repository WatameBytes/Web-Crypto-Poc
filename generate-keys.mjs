import { writeFile } from 'fs/promises';

const keyPair = await crypto.subtle.generateKey(
  {
    name: 'ECDSA',
    namedCurve: 'P-256',
  },
  true,
  ['sign', 'verify']
);

// Export keys in JWK format
const privateJwk = await crypto.subtle.exportKey('jwk', keyPair.privateKey);
const publicJwk = await crypto.subtle.exportKey('jwk', keyPair.publicKey);

await writeFile('privateKey.jwk', JSON.stringify(privateJwk, null, 2));
await writeFile('publicKey.jwk', JSON.stringify(publicJwk, null, 2));

console.log('✅ Key pair generated and saved (JWK format)');
