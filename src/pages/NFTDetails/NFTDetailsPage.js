import React, { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import moment from 'moment';

import Typography from '@mui/material/Typography';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import CollapsibleSection from 'components/shared/CollapsibleSection';
import ItemCard from 'components/ItemCard';
import TokenPropertyDetails from 'pages/NFTDetails/TokenPropertyDetails';
import MarketActions from 'components/NFTDetails/MarketActions';
import BasicTable from 'components/shared/BasicTable';

import { truncate } from 'utils/helpers/string';
import { marketActions } from 'store/actions';
import { nftSelectors, walletSelectors } from 'store/selectors';

import styles from 'pages/NFTDetails/NFTDetailsPage.module.scss';
import { toast } from 'react-toastify';
import { parseActivity } from 'utils/helpers/activity';

const createData = records =>
    records.map(rowObj =>
        Object.keys(rowObj)
            .filter(key => !!key)
            .map(key => rowObj[key])
    );

function NFTDetailsPage() {
    const { contract, itemId } = useParams();
    const dispatch = useDispatch();
    const nft = useSelector(nftSelectors.selectCurrentItem);
    const accountHash = useSelector(walletSelectors.selectAccountHash);
    const currentUserIsOwner = accountHash === nft?.owner;

    const handleAcceptOffer = useCallback(
        (tokenId, accepted_account) => {
            dispatch(marketActions.acceptOffer(tokenId, accepted_account));
        },
        [dispatch, marketActions.acceptOffer]
    );

    const offersData = useMemo(() => {
        const data = Object.keys(nft?.offers || {}).map(key => ({
            ...nft?.offers[key],
            timestamp: moment(nft?.offers[key]?.timestamp).format('MMMM Do YYYY, h:mm:ss a'),
            from: truncate(key, 10),
            renderOffer: currentUserIsOwner && (
                <Button variant="outlined" onClick={() => handleAcceptOffer(nft?.token_id, key)}>
                    Accept
                </Button>
            )
        }));

        return {
            headings: ['Price', 'Offer date', 'From', ' '],
            rows: createData(data)
        };
    }, [nft?.offers, accountHash]);

    const activityData = useMemo(() => {
        if (nft?.activity) {
            return parseActivity(nft?.activity);
        }
        return [];
    }, [nft?.activity]);

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
                                            onClick={() => {
                                                navigator.clipboard.writeText(contract);
                                                toast.success('Copied to clipboard', {
                                                    toastId: 'Copied to clipboard'
                                                });
                                            }}
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
                        {nft && (
                            <MarketActions
                                tokenId={itemId}
                                price={nft.listing?.price}
                                owner={nft.owner}
                                listed={Boolean(nft.listing)}
                                currentUserOfferPrice={nft.offers?.[accountHash]?.price}
                            />
                        )}
                        <CollapsibleSection withoutPadding title="Offers">
                            {(offersData?.rows?.length && (
                                <BasicTable
                                    rows={offersData?.rows}
                                    headings={offersData?.headings}
                                />
                            )) || (
                                <Typography p={1} textAlign="center">
                                    This NFT has no offers.
                                </Typography>
                            )}
                        </CollapsibleSection>
                        <CollapsibleSection withoutPadding title="Activity">
                            {!!activityData?.rows?.length && (
                                <BasicTable
                                    rows={activityData.rows}
                                    headings={activityData.headings}
                                />
                            )}
                        </CollapsibleSection>
                    </Stack>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default NFTDetailsPage;
