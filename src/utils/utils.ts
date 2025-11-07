export const ChecksTexts = {
  INCLUDE_UPPERCASE: "Include Uppercase Letters",
  INCLUDE_LOWERCASE: "Include Lowercase Letters",
  INCLUDE_NUMBERS: "Include Numbers",
  INCLUDE_SYMBOLS: "Include Symbols",
} as const;

export type ChecksText = (typeof ChecksTexts)[keyof typeof ChecksTexts];
