# nft360-type-definitions

## Usage

This repo contains Typescript bindings for custom nft360-node modules.

In order to use the standard API against Nft360 you must initialize the API's options object as follows:

```
import { typesBundleForPolkadot } from '@nft360/type-definitions';

const options: ApiOptions = {
  provider : new WsProvider('ws://localhost:9944'),
  typesBundle: typesBundleForPolkadot,
};

const api = new ApiPromise(options);
```

You will also need to update the `tsconfig.json` of your project to include the following:

```
{
  "compilerOptions": {
    "paths": {
      "@polkadot/api/augment": ["./node_modules/@nft360/type-definitions/dist/interfaces/augment-api.d.ts"],
      "@polkadot/types/augment": ["./node_modules/@nft360/type-definitions/dist/interfaces/augment-types.d.ts"],
    }
  }
}
```

### Dependencies

Your project's @polkadot-js dependency versions **must match the versions used in this project**, including `@polkadot/api`, `@polkadot/keyring`, and all associated packages, as well as `rxjs` (if using `ApiRx` instead of `ApiPromise`) and `typescript`. To verify the versions required, inspect the @polkadot package.json files for the version specified in this project's package.json.

## Building

This project depends on the [@polkadot/typegen](https://github.com/polkadot-js/api/tree/master/docs/examples/promise/90_typegen) project, which has a step-by-step guide to building this project.

The Nft360-specific version is as follows:

- Ensure in [package.json](package.json) that `@polkadot/api` is set to the correct version, and that `@polkadot/typegen` is set to the same version as `@polkadot/api`. Increase the `@nft360/type-definitions` version if necessary for publication.

- Ensure that all the `definitions.ts` files in `src/interfaces` are updated to the latest versions of each type, if any nft360 modules changed.

- Run an [nft360-node](https://github.com/nft360/nft360-node) chain on localhost. Then, run `./generateMetadata.bash` to update the `nft360.json` file.

- Once you have an `nft360.json` file, you can rebuild the types with:

    ```
    $ yarn generate
    $ yarn lint
    ```
- Upgrade all [spec files](src/spec) with any changes necessary as per the [@polkadot-js changelog](https://github.com/polkadot-js/api/blob/master/CHANGELOG.md) and the underlying Substrate version of the chain.

- To compile the Typescript to Javascript for npm publication, run `yarn build`. This command should not produce any errors and will output build files to the [dist](dist/) directory.

- Run a simple test of the newly-built API against a live nft360 node with `yarn verify [mainnet | dev]`.

- Publish the new version with `npm publish`.
