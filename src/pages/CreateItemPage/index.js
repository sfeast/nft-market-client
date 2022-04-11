import Page from 'components/shared/Page';
import CreateItemPageComponent from 'components/CreateItemPage';
import { useMint } from 'hooks/mint';

const CreateItemPage = () => {
    useMint();

    return (
        <Page>
            <CreateItemPageComponent />
        </Page>
    );
};

export default CreateItemPage;
