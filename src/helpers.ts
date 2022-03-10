import { isAddress } from 'ethers/lib/utils';

/* Shorten check-summed version of the input address ~ 0x + 4 chars @ start + end */
export function shortenAddress(address: string, chars = 4): string {
  if (!isAddress(address)) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }
  return `${address.substring(0, chars + 2)}...${address.substring(42 - chars)}`;
}

export const truncateAddress = (address: string, startChars: number = 14): string => {
  return address.slice(0, startChars) + '...' + address.slice(-4);
};
