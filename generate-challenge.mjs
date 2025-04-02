import { writeFile } from 'fs/promises';

const rawChallenge = crypto.getRandomValues(new Uint8Array(32));
const base64Challenge = Buffer.from(rawChallenge).toString('base64');

// Save base64 string for reading later
await writeFile('challenge.txt', base64Challenge, 'utf8');

// Optional: also save the raw binary (not strictly needed now)
await writeFile('challenge.bin', rawChallenge);

console.log('✅ Base64 challenge:', base64Challenge);