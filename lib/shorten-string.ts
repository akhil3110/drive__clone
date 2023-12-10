export function shortenString(str: string, maxLen: number): string {
  if (str.length <= maxLen) return str;
  return str.substr(0, maxLen - 3) + '...';
}