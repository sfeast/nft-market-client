import React, { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { nftSelectors } from 'store/selectors';
import Typography from '@mui/material/Typography';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import CollapsibleSection from 'components/shared/CollapsibleSection';
import ItemCard from 'components/ItemCard';
import { truncate } from 'utils/helpers/string';
import { nftActions } from 'store/actions';
import TokenPropertyDetails from './TokenPropertyDetails';

import styles from './NFTDetailsPage.module.scss';

function NFTDetailsPage() {
    const dispatch = useDispatch();
    const { contract, itemId } = useParams();
    const nft = useSelector(nftSelectors.selectCurrentItem);

    useEffect(() => {
        dispatch(nftActions.loadNft(contract, itemId));
    }, [contract, itemId]);

    return (
        <Grid className={styles.NFTDetailsPage} container>
            <Grid container columnGap={5} rowGap={3}>
                <Grid item sm={12} xs={12} md={5} lg={5}>
                    <Stack spacing={3}>
                        <ItemCard el={nft?.metadata} hideContent />
                        <CollapsibleSection title="Description">
                            <Typography textAlign={nft?.metadata?.description ? 'left' : 'center'}>
                                {nft?.metadata?.description || 'This NFT has no description.'}
                            </Typography>
                        </CollapsibleSection>
                        <CollapsibleSection title="Details">
                            <Grid className={styles.details} container spacing={1} p={2}>
                                <Grid xs={5}>
                                    <Stack spacing={1}>
                                        <Typography fontSize={20}>Contract Hash</Typography>
                                        <Typography fontSize={20}>Token ID</Typography>
                                    </Stack>
                                </Grid>
                                <Grid xs={5} display="flex" justifyContent="flex-end">
                                    <Stack spacing={1}>
                                        <div
                                            className={styles.contractHash}
                                            onClick={() => navigator.clipboard.writeText(contract)}
                                        >
                                            <Typography fontSize={20} fontWeight="bold">
                                                {truncate(contract, 10)}
                                            </Typography>
                                            <ContentCopyIcon />
                                        </div>
                                        <Typography fontSize={20} fontWeight="bold">
                                            {itemId}
                                        </Typography>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </CollapsibleSection>
                        <CollapsibleSection title="Properties">
                            <TokenPropertyDetails tokenProps={nft?.metadata?.properties} />
                        </CollapsibleSection>
                    </Stack>
                </Grid>
                <Grid item sm={12} xs={12} md={6} lg={6}>
                    <Stack spacing={3}>
                        <CollapsibleSection title="Price history">
                            This NFT has no description.
                        </CollapsibleSection>
                        <CollapsibleSection title="Listings">
                            This NFT has no description.
                        </CollapsibleSection>
                        <CollapsibleSection title="Offers">
                            This NFT has no description.
                        </CollapsibleSection>
                    </Stack>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default NFTDetailsPage;
