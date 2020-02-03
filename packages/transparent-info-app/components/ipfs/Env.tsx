import { useState, useEffect } from 'react';
import { ipfsGateways } from '../../src/config';

type MediaElement = HTMLImageElement | HTMLAudioElement | HTMLVideoElement;

interface WithSrc {
  src: string;
}

export function isIpfsResource(src: string) {
  return /\/ip[fn]s\//.test(src);
}

function checkReplaceSrc(e: WithSrc) {
  if (e.src && isIpfsResource(e.src)) {
    e.src = `${ipfsGateways[0]}${e.src}`;
  }
}

export function getIpfsBasePath(urlOrPath: string) {
  const groups = /(\/ip[fn]s\/[^\/]+)/.exec(urlOrPath);
  if (groups && groups.length > 0) {
    return groups[1];
  }
  return '';
}

export const EnvChecker = () => {
  useEffect(() => {
    if (!isIpfsResource(window.location.href)) {
      console.log(`current is not under /ipfs network, will add ipfs gateway for assets`);
      document.querySelectorAll('img').forEach(checkReplaceSrc);
    }
  }, []);

  return <span></span>;
};
