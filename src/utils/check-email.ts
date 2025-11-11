/**
 * Comprehensive email validation with multiple checks
 */

// RFC 5322 compliant email regex (more accurate than basic regex)
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

// Common disposable email domains to block
const DISPOSABLE_DOMAINS = [
  "10minutemail.com",
  "guerrillamail.com",
  "mailinator.com",
  "tempmail.com",
  "throwaway.email",
  "yopmail.com",
  "trashmail.com",
  "fakeinbox.com",
];

// Common typos in popular email providers
const COMMON_TYPOS: Record<string, string> = {
  "gmial.com": "gmail.com",
  "gmai.com": "gmail.com",
  "gmil.com": "gmail.com",
  "yahooo.com": "yahoo.com",
  "yaho.com": "yahoo.com",
  "outlok.com": "outlook.com",
  "outloo.com": "outlook.com",
  "hotmial.com": "hotmail.com",
  "hotmal.com": "hotmail.com",
};

/**
 * Basic email validation using regex
 * @param email - The email address to validate
 * @returns True if the email format is valid
 */
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== "string") {
    return false;
  }

  const trimmedEmail = email.trim().toLowerCase();

  // Basic checks
  if (trimmedEmail.length === 0) return false;
  if (trimmedEmail.length > 254) return false; // RFC 5321
  if (!trimmedEmail.includes("@")) return false;
  if (trimmedEmail.startsWith("@") || trimmedEmail.endsWith("@")) return false;
  if (trimmedEmail.includes("..")) return false; // No consecutive dots
  if (trimmedEmail.split("@").length !== 2) return false; // Only one @

  return EMAIL_REGEX.test(trimmedEmail);
}

/**
 * Advanced email validation with additional checks
 * @param email - The email address to validate
 * @returns Validation result object with details
 */
export function validateEmail(email: string): {
  isValid: boolean;
  email: string;
  errors: string[];
  suggestions?: string;
} {
  const errors: string[] = [];
  const trimmedEmail = email.trim().toLowerCase();

  // Basic validation
  if (!email || typeof email !== "string") {
    errors.push("Email is required");
    return { isValid: false, email: trimmedEmail, errors };
  }

  if (trimmedEmail.length === 0) {
    errors.push("Email cannot be empty");
    return { isValid: false, email: trimmedEmail, errors };
  }

  if (trimmedEmail.length > 254) {
    errors.push("Email is too long (max 254 characters)");
  }

  if (!trimmedEmail.includes("@")) {
    errors.push("Email must contain @ symbol");
    return { isValid: false, email: trimmedEmail, errors };
  }

  const [localPart, domain] = trimmedEmail.split("@");

  // Local part validation
  if (!localPart || localPart.length === 0) {
    errors.push("Email must have a local part before @");
  }

  if (localPart && localPart.length > 64) {
    errors.push("Local part is too long (max 64 characters)");
  }

  // Domain validation
  if (!domain || domain.length === 0) {
    errors.push("Email must have a domain after @");
  }

  if (domain && !domain.includes(".")) {
    errors.push("Domain must contain at least one dot");
  }

  if (domain && domain.startsWith(".")) {
    errors.push("Domain cannot start with a dot");
  }

  if (domain && domain.endsWith(".")) {
    errors.push("Domain cannot end with a dot");
  }

  if (trimmedEmail.includes("..")) {
    errors.push("Email cannot contain consecutive dots");
  }

  // Check for common typos
  let suggestion: string | undefined;
  if (domain && COMMON_TYPOS[domain]) {
    suggestion = `${localPart}@${COMMON_TYPOS[domain]}`;
    errors.push(`Did you mean ${suggestion}?`);
  }

  // Regex validation
  if (errors.length === 0 && !EMAIL_REGEX.test(trimmedEmail)) {
    errors.push("Email format is invalid");
  }

  return {
    isValid: errors.length === 0,
    email: trimmedEmail,
    errors,
    ...(suggestion && { suggestions: suggestion }),
  };
}

/**
 * Check if email is from a disposable email provider
 * @param email - The email address to check
 * @returns True if the email is from a disposable provider
 */
export function isDisposableEmail(email: string): boolean {
  if (!isValidEmail(email)) return false;

  const domain = email.trim().toLowerCase().split("@")[1];
  return !!domain && DISPOSABLE_DOMAINS.includes(domain);
}

/**
 * Extract domain from email
 * @param email - The email address
 * @returns The domain or null if invalid
 */
export function getEmailDomain(email: string): string | null {
  if (!isValidEmail(email)) return null;

  const parts = email.trim().toLowerCase().split("@");
  return parts[1] || null;
}

/**
 * Check if email belongs to a specific domain
 * @param email - The email address
 * @param domain - The domain to check against
 * @returns True if the email is from the specified domain
 */
export function isFromDomain(email: string, domain: string): boolean {
  const emailDomain = getEmailDomain(email);
  return emailDomain === domain.toLowerCase();
}

/**
 * Normalize email address (trim, lowercase, remove dots from Gmail)
 * @param email - The email address to normalize
 * @returns Normalized email or null if invalid
 */
export function normalizeEmail(email: string): string | null {
  if (!isValidEmail(email)) return null;

  const parts = email.trim().toLowerCase().split("@");
  let localPart = parts[0];
  let domain = parts[1];

  // Ensure localPart and domain are present to satisfy TypeScript
  if (!localPart || !domain) {
    return null;
  }

  // Gmail ignores dots in local part and everything after +
  if (domain === "gmail.com" || domain === "googlemail.com") {
    localPart = localPart.replace(/\./g, ""); // Remove dots
    localPart = localPart.split("+")[0]; // Remove everything after +
    domain = "gmail.com"; // Normalize googlemail to gmail
  }

  return `${localPart}@${domain}`;
}

/**
 * Mask email for privacy (e.g., j***n@example.com)
 * @param email - The email address to mask
 * @returns Masked email or original if invalid
 */
export function maskEmail(email: string): string {
  if (!isValidEmail(email)) return email;

  const [localPart, domain] = email.split("@");

  // Guard against undefined localPart (TypeScript may still consider it possibly undefined)
  if (!localPart) {
    return email;
  }

  if (localPart.length <= 2) {
    return `${localPart[0]}*@${domain}`;
  }

  const firstChar = localPart[0];
  const lastChar = localPart[localPart.length - 1];
  const maskedLength = localPart.length - 2;

  return `${firstChar}${"*".repeat(maskedLength)}${lastChar}@${domain}`;
}

/**
 * Check if two emails are equivalent (after normalization)
 * @param email1 - First email address
 * @param email2 - Second email address
 * @returns True if emails are equivalent
 */
export function areEmailsEquivalent(email1: string, email2: string): boolean {
  const normalized1 = normalizeEmail(email1);
  const normalized2 = normalizeEmail(email2);

  if (!normalized1 || !normalized2) return false;

  return normalized1 === normalized2;
}

/**
 * Get email provider name from domain
 * @param email - The email address
 * @returns Provider name or 'Unknown'
 */
export function getEmailProvider(email: string): string {
  const domain = getEmailDomain(email);
  if (!domain) return "Unknown";

  const providers: Record<string, string> = {
    "gmail.com": "Gmail",
    "googlemail.com": "Gmail",
    "yahoo.com": "Yahoo",
    "outlook.com": "Outlook",
    "hotmail.com": "Hotmail",
    "icloud.com": "iCloud",
    "protonmail.com": "ProtonMail",
    "aol.com": "AOL",
  };

  return providers[domain] || "Custom Domain";
}
