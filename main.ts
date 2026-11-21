import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const TEXT = 'The tide comes in over the flat sand, one thin line at a time, and erases every footprint without hurrying. Somewhere out past the dark water, the moon is doing the same slow work it has done for a billion years, and it is not in a rush either.';
const path = join(OUTPUT_DIR, 'entry.txt');
writeFileSync(path, TEXT);
if (readFileSync(path, 'utf8') !== TEXT) {
  throw new Error('entry.txt read-back mismatch');
}
