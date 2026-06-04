#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
import { normalizeUnicode, detectMyanmarEncoding } from '../text/index.js';
import { normalizeMyanmarSearchText } from '../search/index.js';
import { parseMyanmarPhoneNumber } from '../phone/index.js';

function help(): void {
  console.log(`mm-localize - Myanmar localization toolkit CLI\n\nUsage:\n  mm-localize clean <input-file> [output-file]\n  mm-localize detect <text>\n  mm-localize phone <phone-number>\n\nExamples:\n  mm-localize clean ./raw.txt ./clean.txt\n  mm-localize detect "မင်္ဂလာပါ"\n  mm-localize phone "+959784123456"`);
}

const [, , command, ...args] = process.argv;

if (!command || command === '--help' || command === '-h') {
  help();
  process.exit(0);
}

if (command === 'clean') {
  const [inputFile, outputFile] = args;
  if (!inputFile) throw new Error('Missing input file.');
  const raw = readFileSync(inputFile, 'utf8');
  const cleaned = raw.split('\n').map(line => normalizeMyanmarSearchText(normalizeUnicode(line))).join('\n');
  if (outputFile) writeFileSync(outputFile, cleaned, 'utf8');
  else process.stdout.write(cleaned);
} else if (command === 'detect') {
  console.log(JSON.stringify(detectMyanmarEncoding(args.join(' ')), null, 2));
} else if (command === 'phone') {
  console.log(JSON.stringify(parseMyanmarPhoneNumber(args.join(' ')), null, 2));
} else {
  help();
  process.exit(1);
}
