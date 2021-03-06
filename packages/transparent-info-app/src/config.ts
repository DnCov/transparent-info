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

export function isExternalUrl(url: string | undefined | null) {
  if (url) {
    if (url.startsWith('http') || url.startsWith('//')) {
      return true;
    }
  }

  return false;
}

export function caculateBaseUrl() {
  if (typeof window !== 'undefined') {
    if (isIpfsResource(window.location.href)) {
      return getIpfsBasePath(window.location.href);
    }
  }
  return '';
}
