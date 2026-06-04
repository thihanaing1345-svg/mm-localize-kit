import { isValidMyanmarPhoneNumber } from '../phone/index.js';
import { detectMyanmarEncoding, hasMyanmarText } from '../text/index.js';

export interface ValidationResult {
  valid: boolean;
  message?: string;
}

export function validateMyanmarPhone(value: string, message = 'Enter a valid Myanmar phone number.'): ValidationResult {
  return isValidMyanmarPhoneNumber(value) ? { valid: true } : { valid: false, message };
}

export function validateUnicodeText(value: string, message = 'Please use Myanmar Unicode text.'): ValidationResult {
  const result = detectMyanmarEncoding(value);
  return result.encoding === 'unicode' || result.encoding === 'unknown' ? { valid: true } : { valid: false, message };
}

export function requireMyanmarText(value: string, message = 'Myanmar text is required.'): ValidationResult {
  return hasMyanmarText(value) ? { valid: true } : { valid: false, message };
}
