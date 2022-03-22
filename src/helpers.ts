/* Shorten check-summed version of the input address ~ 0x + 4 chars @ start + end */
export function shortenAddress(address: string, chars = 4): string {
  return `${address.substring(0, chars + 2)}...${address.substring(42 - chars)}`;
}

export const truncateAddress = (address: string, startChars: number = 14): string => {
  return address.slice(0, startChars) + '...' + address.slice(-4);
};

export const isValidURL = (str: string): boolean => {
  const pattern = new RegExp(
    '^(https?:\\/\\/)' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i',
  ); // fragment locator

  return !!pattern.test(str);
};

export const isValidTwitterHandle = (handle: string): boolean =>
  /^[a-zA-Z0-9_]{1,15}$/.test(handle);
