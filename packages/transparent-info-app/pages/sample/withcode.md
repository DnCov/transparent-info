# this is code test

content from `curl get.acme.sh`

```bash
#!/usr/bin/env sh

#https://github.com/Neilpang/get.acme.sh

_exists() {
  cmd="$1"
  if [ -z "$cmd" ] ; then
    echo "Usage: _exists cmd"
    return 1
  fi
  if type command >/dev/null 2>&1 ; then
    command -v $cmd >/dev/null 2>&1
  else
    type $cmd >/dev/null 2>&1
  fi
  ret="$?"
  return $ret
}

if [ -z "$BRANCH" ]; then
  BRANCH="master"
fi
if _exists curl && [ "${ACME_USE_WGET:-0}" = "0" ]; then
  curl https://raw.githubusercontent.com/Neilpang/acme.sh/$BRANCH/acme.sh | INSTALLONLINE=1  sh
elif _exists wget ; then
  wget -O -  https://raw.githubusercontent.com/Neilpang/acme.sh/$BRANCH/acme.sh | INSTALLONLINE=1  sh
else
  echo "Sorry, you must have curl or wget installed first."
  echo "Please install either of them and try again."
fi

```

# typescript test

> content from about.txs

```tsx
import * as React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const AboutPage: React.FunctionComponent = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default AboutPage;
```
