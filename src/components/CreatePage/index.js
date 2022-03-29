import { CEP47Client } from 'casper-cep47-js-client';
import { getDeploy, sendDeploy, getNewMintId, storeMetaData } from 'utils/casper';

import { CLPublicKey, DeployUtil, Signer } from 'casper-js-sdk';

import { SERVER_ADDRESS, ENVIRONMENT, PAYMENT_AMOUNT, NFT_CONTRACT } from 'constants/config';

const cep47 = new CEP47Client(ENVIRONMENT.NODE_ADDRESS, ENVIRONMENT.CHAIN_NAME);

import { StyledButton } from 'components/CreatePage/styled';

const CreatePage = () => {
    // TODO: replace this with a form/user input fields to create these values - see https://www.friendly.market/nfts/create for example
    const metaData = {
        image: 'image',
        // optional user defined properties
        properties: {
            prop1: 'prop 1 value',
            prop2: 'prop 2 value'
        },
        description: 'description'
    };

    const mint = async e => {
        // FIXME: if not connected on this page, then connect, get error (have to refresh first)- key not availble unless refresh?
        try {
            // TODO: use redux to store/select key for all components (the WalletConnect component is current the source of truth)
            const activePublicKey = await Signer.getActivePublicKey();
            const publicKey = CLPublicKey.fromHex(activePublicKey);

            // TODO: move contract deploys to redux action?
            await cep47.setContractHash(NFT_CONTRACT.HASH, NFT_CONTRACT.PACKAGE_HASH);
            const id = await getNewMintId();

            // TODO: store metadata on ipfs & provide the uri for minting
            //       - not sure if we'll upload to storage from client or server, current call goes to server but may be an issue for images?
            const meta = await storeMetaData(metaData);

            const mintDeploy = await cep47.mint(
                publicKey,
                [id],
                [new Map([meta])],
                PAYMENT_AMOUNT.MINT_ONE,
                publicKey
            );
            const deployJSON = DeployUtil.deployToJson(mintDeploy);

            Signer.sign(deployJSON, activePublicKey)
                .then(async success => {
                    const hash = await sendDeploy(success);
                    // TODO: show user the deployment link &/OR show a loader while minting?
                    console.log('Deployed: https://testnet.cspr.live/deploy/' + hash);
                    if (hash) {
                        getDeploy(hash)
                            .then(deploy => {
                                alert('Minted successfully');
                                // TODO: show success message &/OR route user to newly minted nft's page
                            })
                            .catch(error => {
                                alert(error);
                            });
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        } catch (error) {
            console.log(error);
            alert('Please connect your Casper wallet');
        }
    };

    return <StyledButton onClick={mint}>Create</StyledButton>;
};

export default CreatePage;
