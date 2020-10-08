# @asyncapi/html-template gets installed twice.

## Reproduce
- installed through package.json
- installed again during generation

`0_reproduce.sh`:

```
npm ci # installs @asyncapi/html-template
./node_modules/.bin/ag src/simple.yaml @asyncapi/html-template --force-write
```

## Fix

`1_fix.sh`:
```
npm ci # installs @asyncapi/html-template
npx patch-package
./node_modules/.bin/ag src/simple.yaml @asyncapi/html-template --force-write
```
