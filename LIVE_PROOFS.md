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
