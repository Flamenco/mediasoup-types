# mediasoup-types
A staging area for MediaSoup Typescript definitions.

# Overview
This project is a staging area for the creation of MediaSoup Typescript definitions.

Expect the source files to be heavily refactored as I slurp my way through the MediaSoup API.

To learn about MediaSoup, visit https://mediasoup.org.

# Installation
Import the types into your existing Typescript configuration compiler options.
```json
{
  "compilerOptions": {
    "typeRoots": [     
      "./node_modules/@types",
      "<path-to-project>/mediasoup"
    ]
  }
}
```
As a _hack_, you can drop the `mediasoup folder` into your `node_modules/@types` directory
and rely on the default `typeRoots`.

Once we get around to publishing on NPM, all you will need to do is install the types package.

# Payload Types
You can augment the AppData interface with your own types.
```typescript
namespace MediaSoup {
interface AppData {
    command: string
    timestamp: number
    data:{
        field1: string
        field2: number
    }
  }
}
```

# Contributing

# TODO
- [ ] Publish to NPM
- [ ] Split into client and server
- [ ] Add details for augmenting payload types
- [ ] Add contributor requirements
- [ ] Package in proper TypeScript/NPM format (install in node_modules/@types)
- [ ] Mark individual interfaces as completed or partial
- [ ] Provide examples
