# @asyncapi/html-template gets installed twice.

## Reproduce
- first in package.json
- then during generation

`0_reproduce.sh`:

```
npm ci # installs @asyncapi/html-template
node ./generate.js # installs again.
```

## Fix

`1_fix.sh`:
```
npm ci # installs @asyncapi/html-template
npx patch-package
node ./generate.js # installs again.
```