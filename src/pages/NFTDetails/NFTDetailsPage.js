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
import BasicTable from 'components/shared/BasicTable';

import styles from './NFTDetailsPage.module.scss';

const createData = records => records.map(rowObj => Object.keys(rowObj).map(key => rowObj[key]));

// hardcoded values for the table
const listingsTableData = {
    headings: ['From', 'Start Date', 'Expiration', 'Price'],
    rows: createData([
        {
            from: '42988...700C3',
            startDate: '14/04/2022, 14:21:55',
            expiration: '29/04/2022, 14:11:14',
            price: '10'
        },
        {
            from: '42988...700C3',
            startDate: '14/04/2022, 14:21:55',
            expiration: '29/04/2022, 14:11:14',
            price: '10'
        },
        {
            from: '42988...700C3',
            startDate: '14/04/2022, 14:21:55',
            expiration: '29/04/2022, 14:11:14',
            price: '10'
        }
    ])
};

const offersData = {
    headings: ['Price', 'Expiration', 'From'],
    rows: createData([
        { price: '42988...700C3', expiration: '29/04/2022, 14:11:14', from: '22085...b0e1C' },
        { price: '42988...700C3', expiration: '29/04/2022, 14:11:14', from: 'B6B65...14554' },
        { price: '42988...700C3', expiration: '29/04/2022, 14:11:14', from: '27004...bCC1D' }
    ])
};

const priceHistory = {
    headings: ['Price', 'Expiration', 'From'],
    rows: createData([
        { price: '42988...700C3', expiration: '29/04/2022, 14:11:14', from: '22085...b0e1C' },
        { price: '42988...700C3', expiration: '29/04/2022, 14:11:14', from: 'B6B65...14554' },
        { price: '42988...700C3', expiration: '29/04/2022, 14:11:14', from: '27004...bCC1D' }
    ])
};

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
                <Grid item sm={12} xs={12} md={12} lg={5}>
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
                <Grid item sm={12} xs={12} md={12} lg={6}>
                    <Stack spacing={3}>
                        <CollapsibleSection withoutPadding title="Price history">
                            <BasicTable rows={priceHistory.rows} headings={priceHistory.headings} />
                        </CollapsibleSection>
                        <CollapsibleSection withoutPadding title="Listings">
                            <BasicTable
                                rows={listingsTableData.rows}
                                headings={listingsTableData.headings}
                            />
                        </CollapsibleSection>
                        <CollapsibleSection withoutPadding title="Offers">
                            <BasicTable rows={offersData.rows} headings={offersData.headings} />
                        </CollapsibleSection>
                    </Stack>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default NFTDetailsPage;
