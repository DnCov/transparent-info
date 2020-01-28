import { useState, useEffect } from 'react';
import { ipfsGateways } from '../../src/config';

export let baseUrl = '';

type MediaElement = HTMLImageElement | HTMLAudioElement | HTMLVideoElement;

interface WithSrc {
  src: string;
}

function isIpfsResource(src: string) {
  return /\/ip[fn]s\//.test(src);
}

function checkReplaceSrc(e: WithSrc) {
  if (e.src && isIpfsResource(e.src)) {
    e.src = `${ipfsGateways[0]}${e.src}`;
  }
}

function replaceAssetsSrc() {
  document.querySelectorAll('script').forEach(e => {
    if (e.src) {
      if (isIpfsResource(e.src)) {
        e.src = e.src.replace(/\/ip[fn]s\/[^\/]+/, baseUrl);
      } else {
        e.src = `${baseUrl}${e.src}`;
      }
    }
  });

  document.querySelectorAll('link').forEach(e => {
    if (e.href) {
      if (isIpfsResource(e.href)) {
        e.href = e.href.replace(/\/ip[fn]s\/[^\/]+/, baseUrl);
      } else {
        e.href = `${baseUrl}${e.href}`;
      }
    }
  });
}

export function getIpfsBasePath(urlOrPath: string) {
  const groups = /(\/ip[fn]s\/[^\/]+)/.exec(urlOrPath);
  if (groups && groups.length > 0) {
    return groups[1];
  }
  return '';
}

function currentAssetsPath() {
  const path = document.location.pathname;
  baseUrl = getIpfsBasePath(path);
  console.log(baseUrl);
}

export default () => {
  useEffect(() => {
    currentAssetsPath();
    replaceAssetsSrc();
    if (!isIpfsResource(window.location.href)) {
      // tmp chose first
      document.querySelectorAll('img').forEach(checkReplaceSrc);
    }
  }, []);

  return <span />;
};
