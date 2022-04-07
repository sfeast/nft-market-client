import { CasperClient, CLPublicKey, Keys, CasperServiceByJsonRPC } from 'casper-js-sdk';
import { SERVER_ADDRESS } from 'constants/config';
import { getData, postData } from 'utils/helpers/xchRequests';

export const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

export const sendDeploy = async json => {
    return postData(SERVER_ADDRESS + '/sendDeploy', json)
        .then(response => {
            return response;
        })
        .catch(error => {
            alert(error);
            throw Error('Deploy error: ' + error);
        });
};

export const getDeploy = async (deployHash /*string*/) => {
    let i = 300;
    while (i != 0) {
        const [deploy, raw] = await getData(SERVER_ADDRESS + '/getDeploy', { hash: deployHash });
        if (raw.execution_results.length !== 0) {
            if (raw.execution_results[0].result.Success) {
                return deploy;
            } else {
                const error = raw.execution_results[0].result.Failure.error_message;
                throw Error('Contract execution: ' + error);
            }
        } else {
            i--;
            await sleep(1000);
            continue;
        }
    }
    throw Error('Timeout after ' + i + "s. Something's wrong");
};

export const getNewMintId = async () => {
    const id = await getData(SERVER_ADDRESS + '/getMintId');
    return id;
};

export const storeMetaData = async meta => {
    return postData(SERVER_ADDRESS + '/storeMetaData', meta)
        .then(response => {
            return response;
        })
        .catch(error => {
            alert(error);
            throw Error('Deploy error: ' + error);
        });
};

export const getAccountBalance = async publicKey => {
    return getData(SERVER_ADDRESS + '/getAccountBalance', { publicKey });
};
