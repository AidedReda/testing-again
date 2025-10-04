# Changelog

## 0.1.0-alpha.4 (2025-10-04)

Full Changelog: [v0.1.0-alpha.3...v0.1.0-alpha.4](https://github.com/AidedReda/testing-again/compare/v0.1.0-alpha.3...v0.1.0-alpha.4)

### Features

* **api:** update via SDK Studio ([3db3e7c](https://github.com/AidedReda/testing-again/commit/3db3e7ce12020d61ca43b76dbda1646cdbdb2fdb))
* **mcp:** add code execution tool ([49bc8ce](https://github.com/AidedReda/testing-again/commit/49bc8ce7f065b68e9f8c9c0782e88e8e262f12fc))
* **mcp:** add docs search tool ([cf5ed28](https://github.com/AidedReda/testing-again/commit/cf5ed28bfcbc27e93c67881a7608d51b98cd71fd))
* **mcp:** add option for including docs tools ([322aa7f](https://github.com/AidedReda/testing-again/commit/322aa7f30badc961c819c7b7c8cbc7ea3157a879))
* **mcp:** add option to infer mcp client ([484e728](https://github.com/AidedReda/testing-again/commit/484e7285c3e02149680cc79e50736fdc10f55155))
* **mcp:** add unix socket option for remote MCP ([a99a7e5](https://github.com/AidedReda/testing-again/commit/a99a7e5ae4feacc605809008920227ac93e3e67a))
* **mcp:** allow setting logging level ([160a4a2](https://github.com/AidedReda/testing-again/commit/160a4a2d87e642e433e7242b8901d289ca6592ab))
* **mcp:** enable experimental docs search tool ([801dc3d](https://github.com/AidedReda/testing-again/commit/801dc3d0fb4824bf7033598daf1ce4f6b8d4dfc4))
* **mcp:** expose client options in `streamableHTTPApp` ([796f76a](https://github.com/AidedReda/testing-again/commit/796f76a2a6a069b7faa90024fcd4aace0ff27320))
* **mcp:** parse query string as mcp client options in mcp server ([4df6192](https://github.com/AidedReda/testing-again/commit/4df6192aabe2b541ed50621907d5cbb47518fabe))


### Bug Fixes

* **ci:** set permissions for DXT publish action ([3abb1af](https://github.com/AidedReda/testing-again/commit/3abb1afc02bca960b8d1f6cd9671d460c53f15ba))
* coerce nullable values to undefined ([a6452ae](https://github.com/AidedReda/testing-again/commit/a6452ae3f1e1bb2923865ba6c9b3fb1b22ec37e4))
* **mcp:** fix bug in header handling ([463ec6c](https://github.com/AidedReda/testing-again/commit/463ec6c2e939163ac0422ea08f68498bda66cb82))
* **mcp:** fix cli argument parsing logic ([b1e798d](https://github.com/AidedReda/testing-again/commit/b1e798d8b114f98c651398702fc377f55faac4d0))
* **mcp:** fix query options parsing ([a0d6fad](https://github.com/AidedReda/testing-again/commit/a0d6fadc4fa5c3980af79345213767145ff5e0f1))
* **mcp:** fix uploading dxt release assets ([8cd4c34](https://github.com/AidedReda/testing-again/commit/8cd4c347847d20ebd8413670f2fffb50861b91b5))
* **mcp:** resolve a linting issue in server code ([89f86bc](https://github.com/AidedReda/testing-again/commit/89f86bc00bf2ade90ec59588fa7856bdff938a9f))
* **mcp:** update dxt manifest.json files ([34f7ac0](https://github.com/AidedReda/testing-again/commit/34f7ac0a2447eb065449ca386d497722ed9ebaa8))


### Performance Improvements

* faster formatting ([9554da2](https://github.com/AidedReda/testing-again/commit/9554da2b6ef6a32e45f2e37f261b4a541314c644))


### Chores

* add package to package.json ([c9a86da](https://github.com/AidedReda/testing-again/commit/c9a86da989b4f00864aa81a41fe8e591650aef31))
* ci build action ([d24a4bc](https://github.com/AidedReda/testing-again/commit/d24a4bcf8023f2100f9c1df60db83561616a20ed))
* **client:** qualify global Blob ([c6efc67](https://github.com/AidedReda/testing-again/commit/c6efc675d0e2d919e732b99a59fae7267efebe3a))
* **codegen:** internal codegen update ([fe7e900](https://github.com/AidedReda/testing-again/commit/fe7e900b26f4f1fa2be4ed6c23b0c866d366778c))
* **deps:** update dependency @types/node to v20.17.58 ([b1df58d](https://github.com/AidedReda/testing-again/commit/b1df58d7f5d00185dbb81815f8a755fa96db6861))
* do not install brew dependencies in ./scripts/bootstrap by default ([d511a82](https://github.com/AidedReda/testing-again/commit/d511a828cb318b628ff71fd3dad6147ee6d83556))
* **internal:** codegen related update ([fac5092](https://github.com/AidedReda/testing-again/commit/fac5092d7e8752fe72d917943b869dc63453228c))
* **internal:** codegen related update ([caf39f4](https://github.com/AidedReda/testing-again/commit/caf39f40862cf3c7b9a2187c339242c7d9b44582))
* **internal:** codegen related update ([2b01fab](https://github.com/AidedReda/testing-again/commit/2b01fabbb655927b956989325585bafc6f9304ed))
* **internal:** codegen related update ([72840d8](https://github.com/AidedReda/testing-again/commit/72840d8d5d516bd695559235a4f235a100e6aa40))
* **internal:** codegen related update ([378e0ac](https://github.com/AidedReda/testing-again/commit/378e0ac14928946f515b6ed0e72f110fbd5910d0))
* **internal:** codegen related update ([0c73ed9](https://github.com/AidedReda/testing-again/commit/0c73ed95fc6df9356f2aa4c093952325300a322c))
* **internal:** fix incremental formatting in some cases ([810ea28](https://github.com/AidedReda/testing-again/commit/810ea28b1561fee06791204e94217c45917b91ae))
* **internal:** formatting change ([61fdb1a](https://github.com/AidedReda/testing-again/commit/61fdb1a975f35d45f3e5f1eb3d01fd636051294f))
* **internal:** gitignore .mcpb files ([b70b42f](https://github.com/AidedReda/testing-again/commit/b70b42f8c1a8859e7bfd357d51c0995008a4bc8d))
* **internal:** ignore .eslintcache ([2e4c725](https://github.com/AidedReda/testing-again/commit/2e4c7250539aa7891405c16e2061e7846210ea88))
* **internal:** make mcp-server publishing public by defaut ([333b75a](https://github.com/AidedReda/testing-again/commit/333b75a793435ece68b577c587f62f8ae531f8c6))
* **internal:** move publish config ([f4a8ff0](https://github.com/AidedReda/testing-again/commit/f4a8ff039697125b4601e3d9fb7d5460a5d5a7d1))
* **internal:** refactor array check ([0ca900d](https://github.com/AidedReda/testing-again/commit/0ca900d3d3cecad6440ff1be1623b4a6270243d9))
* **internal:** remove .eslintcache ([aacb4f1](https://github.com/AidedReda/testing-again/commit/aacb4f178af7200333589a46c354918ac97c9eae))
* **internal:** remove deprecated `compilerOptions.baseUrl` from tsconfig.json ([99093bc](https://github.com/AidedReda/testing-again/commit/99093bc0f379931f3a06e0b5776f8ee9c0122d2f))
* **internal:** update comment in script ([001d660](https://github.com/AidedReda/testing-again/commit/001d66092ff161c7d6f6460493ca6d0f9fb8a8d5))
* **internal:** update global Error reference ([ddfe715](https://github.com/AidedReda/testing-again/commit/ddfe715c81e5c6969b3fe7a06a1fdc24357ce006))
* **jsdoc:** fix [@link](https://github.com/link) annotations to refer only to parts of the package‘s public interface ([4a9ca2b](https://github.com/AidedReda/testing-again/commit/4a9ca2bc786a53f6ff44f3b891df2756feb81025))
* **mcp:** add cors to oauth metadata route ([77c4e60](https://github.com/AidedReda/testing-again/commit/77c4e600a4ab94700235264023ff49d25ee8e3ae))
* **mcp:** allow pointing `docs_search` tool at other URLs ([12c3591](https://github.com/AidedReda/testing-again/commit/12c359141379ab890af6034156f454d9b7725125))
* **mcp:** document remote server in README.md ([552e43f](https://github.com/AidedReda/testing-again/commit/552e43fae9b57df2dfe0120dc8577de76b71cb89))
* **mcp:** minor cleanup of types and package.json ([b310a2a](https://github.com/AidedReda/testing-again/commit/b310a2a824520bdbf2a999651249b400629c783b))
* **mcp:** refactor streamable http transport ([406dad4](https://github.com/AidedReda/testing-again/commit/406dad4e0e0eec7a2d4f3af857fe52a0ceba173d))
* **mcp:** rename dxt to mcpb ([af1dada](https://github.com/AidedReda/testing-again/commit/af1dada067974c79269a558dfda2be8222e1587e))
* **mcp:** update package.json ([8e11d9f](https://github.com/AidedReda/testing-again/commit/8e11d9f255a2a78bf079559382b16d634259938c))
* **mcp:** update README ([6094068](https://github.com/AidedReda/testing-again/commit/60940681587aa703d5124f09566b064c14fca19b))
* **mcp:** update types ([1ba2042](https://github.com/AidedReda/testing-again/commit/1ba204214ed22a64a51f2cb62d9cd20712f7b707))
* **mcp:** upload dxt as release asset ([e65617b](https://github.com/AidedReda/testing-again/commit/e65617b2f5e6989d90a91cc6283538bf237d92d9))
* update @stainless-api/prism-cli to v5.15.0 ([778e019](https://github.com/AidedReda/testing-again/commit/778e019eb7190f6e531e5702a0dc0c4643d55083))
* update CI script ([07f95b3](https://github.com/AidedReda/testing-again/commit/07f95b361350775f73a7ebd521e64024fd380275))
* update lockfile ([a5ff659](https://github.com/AidedReda/testing-again/commit/a5ff65910d0ac9eeabac4396272d55ae2f903c4c))

## 0.1.0-alpha.3 (2025-08-05)

Full Changelog: [v0.1.0-alpha.2...v0.1.0-alpha.3](https://github.com/AidedReda/testing-again/compare/v0.1.0-alpha.2...v0.1.0-alpha.3)

### Chores

* update SDK settings ([c327ec9](https://github.com/AidedReda/testing-again/commit/c327ec9dc1ef48b213df67588d1e63282fcf1291))
* update SDK settings ([c28e308](https://github.com/AidedReda/testing-again/commit/c28e308f8a1da924d501b3b9711f1c68ef1455da))

## 0.1.0-alpha.2 (2025-08-05)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/AidedReda/testing-again/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Chores

* update SDK settings ([cb1273c](https://github.com/AidedReda/testing-again/commit/cb1273c640261905604b655b66d2c598a260302f))

## 0.1.0-alpha.1 (2025-08-05)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/AidedReda/testing-again/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **api:** update via SDK Studio ([9cdf869](https://github.com/AidedReda/testing-again/commit/9cdf869b74d602aa3f61cea43d23908c3f01063e))


### Chores

* sync repo ([7c797a5](https://github.com/AidedReda/testing-again/commit/7c797a5702a3e0e3544c18d0216d9296e83cd84d))
* update SDK settings ([4d755e2](https://github.com/AidedReda/testing-again/commit/4d755e2eacbf72a3011516f7c91256d29aa55a64))
* update SDK settings ([c930216](https://github.com/AidedReda/testing-again/commit/c93021657968789534d4eac06c1ae5db6bc0b14c))
