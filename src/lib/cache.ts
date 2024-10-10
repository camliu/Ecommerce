import { unstable_cache as nextCache } from 'next/cache';
import { cache as reactCache } from 'react';

type Callback = (...arg: any[]) => Promise<any>;

export const cache = <T extends Callback>(
  cd: T,
  keyParts: string[],
  options: { revalidate?: number | false; tags?: string[] } = {}
) => {
  return nextCache(reactCache(cd), keyParts, options);
};
