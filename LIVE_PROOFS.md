# Live proofs

## StudioNet deployment

- Contract: [`0x921a56EF29EeA3dAd48986c709C2A7af5e004e9E`](https://explorer-studio.genlayer.com/address/0x921a56EF29EeA3dAd48986c709C2A7af5e004e9E)
- Deployment: [`0x9c5b20f8...ff2eae9`](https://explorer-studio.genlayer.com/tx/0x9c5b20f8e4cfdf1f1301b0f801f61eb2ad9a25b7dba3730b92bb663b9ff2eae9)

The deployment executed successfully with five validator `AGREE` votes. The Explorer source matches `contracts/EvidenceFusionOracle.py` at the initial repository commit.

## Feed lifecycle proof (StudioNet)

- Feed creation: [`0xdc3fe414...c58f59`](https://explorer-studio.genlayer.com/tx/0xdc3fe414c209fc2fa248b1d52b5f7ef18262edeb5ae99bcd2c4bb6f4edc58f59)
- Source 1 registration (Blockstream): [`0xb293b327...5e65ab`](https://explorer-studio.genlayer.com/tx/0xb293b327159916b6fde74dbc97e5b2549833f42a7a952305fcc2312b0e5b65ab)
- Source 2 registration (Blockchain.com): [`0x3bf411ab...d6545`](https://explorer-studio.genlayer.com/tx/0x3bf411ab7940e5c6612945db832664ac0d15238c595a401753b7a784ac1d6545)
- Activation: [`0x45aa5da8...3fc7c`](https://explorer-studio.genlayer.com/tx/0x45aa5da8160004caab5445f25697b14c9dbbbffed078ece1c0b48f0ec2d3fc7c)
- Refresh / validator settlement: [`0x00686528...e7cd`](https://explorer-studio.genlayer.com/tx/0x00686528fea343ab789d774ab52e01a1b223a7daf5e060514e5a53d32c66e7cd)

The lifecycle finalized with five validator votes. The refresh produced snapshot version `1`, state `UNKNOWN`, and root `e4c18c2db2865e77e1a32b48b8ca52f11eeca91501d7aaf47ee9031e446c7d36`. `UNKNOWN` is an intentional fail-closed result: the contract fetched both HTTPS sources and consensus did not establish the required exact YES/NO evidence vector. No certificate or consumer gate exists.

## Steward-requested consistency correction

The corrected source deterministically requires `YES` with an all-`SUPPORT` vector or `NO` with an all-`REFUTE` vector before assigning `VERIFIED`. Opposite-direction pairs fail closed to `UNKNOWN`; genuinely mixed known vectors remain `CONFLICTED`.

- Corrected contract: [`0x4DfbbE71185c16e943efCF872E32647123705b52`](https://explorer-studio.genlayer.com/address/0x4DfbbE71185c16e943efCF872E32647123705b52)
- Corrected deployment (`SUCCESS`): [`0x3bdb7439...f02766`](https://explorer-studio.genlayer.com/tx/0x3bdb743955891a21b8867199abf6b4ebefe5384c0232a5f6ef339746b2f02766)
- Feed creation (`SUCCESS`): [`0xf864ab35...52b46`](https://explorer-studio.genlayer.com/tx/0xf864ab35eaf30745f360e2202c9ac20e42105774adbf25d4e9f85bd57bd52b46)
- RFC source registration (`SUCCESS`): [`0x0f1bc062...a985d`](https://explorer-studio.genlayer.com/tx/0x0f1bc062d0631ea2a724d4835607ecd08ff72ff58ec9717da4d8f19405fa985d)
- IANA source registration (`SUCCESS`): [`0xa9e48ab8...e61d9`](https://explorer-studio.genlayer.com/tx/0xa9e48ab8f45579f974f51ff1f9491db0ddae2f27502f4da2c366564350ae61d9)
- Feed activation (`SUCCESS`): [`0xe749f226...bf0bb`](https://explorer-studio.genlayer.com/tx/0xe749f226e9e855f371efe1d9dbd9ef9df03bb35d7736c9534f2e74787b8bf0bb)
- Validator refresh (`SUCCESS`): [`0xfdf34b84...d6aa2`](https://explorer-studio.genlayer.com/tx/0xfdf34b8495eb81617ef8cf393916b8a933fe35dfab99d6d69c340f86f2bd6aa2)

The finalized snapshot is version `1`, state `VERIFIED`, root `5835d45069b19bb9b85fd3ea88271a03f00c4751c8d49108b9ca40ae79362993`, answer `YES`, and support vector `[SUPPORT, SUPPORT]`. The answer and vector therefore satisfy the corrected exact directional rule.
