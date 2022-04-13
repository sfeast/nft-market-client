import React, { useCallback } from 'react';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import CollapsibleSection from 'components/shared/CollapsibleSection';
import ItemCard from 'components/ItemCard';
import { items } from 'mock';

import styles from './NFTDetailsPage.module.scss';

function NFTDetailsPage() {
    return (
        <Grid className={styles.NFTDetailsPage} container spacing={2}>
            <Grid container>
                <Grid item xs={6}>
                    <Stack spacing={3} mr={3}>
                        <ItemCard el={items[0]} hideContent />
                        <CollapsibleSection title="Description">
                            This NFT has no description.
                        </CollapsibleSection>
                        <CollapsibleSection title="Details">
                            This NFT has no description.
                        </CollapsibleSection>
                        <CollapsibleSection title="Properties">
                            This NFT has no description.
                        </CollapsibleSection>
                    </Stack>
                </Grid>
                <Grid item xs={6} styles={{ marginLeft: '50px' }}>
                    <Stack spacing={3} ml={3}>
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
