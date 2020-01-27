import { useState, useEffect } from 'react';
import { ipfsGateways } from '../../src/config';

export default () => {
  useEffect(() => {
    if (!/ip[fn]s\//.test(window.location.href)) {
      // tmp chose first
      document.querySelectorAll('img').forEach(e => {
        e.src = `${ipfsGateways[0]}${e.src}`;
      });
    }
  }, []);

  return <span />;
};
