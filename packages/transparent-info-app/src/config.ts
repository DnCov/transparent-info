import { isIpfsResource, getIpfsBasePath } from '../components/ipfs/Env';
export const ipfsGateways = ['http://ncov.fox.mn:2020'];

export function getBaseUrl() {
  if (typeof window === 'undefined') {
    return '';
  }

  const chref = window.location.href;
  if (isIpfsResource(chref)) {
    return getIpfsBasePath(chref);
  }

  return `${window.location.protocol}//${window.location.host}`;
}

export function getFullUrl(href: string) {
  return getBaseUrl() + href;
}
