# transparent-info

transparent infomation on Novel coronavirus (2019-nCoV)

| ![CI](https://github.com/DnCov/transparent-info/workflows/CI/badge.svg) | ![auto release](https://github.com/DnCov/transparent-info/workflows/auto%20release/badge.svg) |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |


# setup dev

```bash
git clone git@github.com:DnCov/transparent-info.git
# or git clone https://github.com/DnCov/transparent-info.git

cd transparent-info
yarn
yarn boot
yarn dev
```

then edit it
open `http://localhost:3000` preview

# build

```bash
yarn build
yarn export

```

# release

Release is now automated

> .github/workflows/auto_release.yml

1. add `:prerelease` postfix on commit message.
2. then merge to `master` branch
3. the rest things will automatic complete soon

# prerelease

1. add `:release` postfix on commit message.
2. then merge to `master` branch.
3. the rest things will automatic complete soon
