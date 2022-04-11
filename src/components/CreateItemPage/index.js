import { Form } from 'react-final-form';

import Typography from '@mui/material/Typography';

import CreateFormFields from 'components/CreateItemPage/CreateFormFields';
import Divider from 'components/shared/Divider';
import { StyledCreateItemPage } from 'components/CreateItemPage/styled';

import { useMint } from 'hooks/mint';

const initialValues = {
    image: '',
    name: '',
    description: '',
    externalLink: '',
    properties: []
};

const CreateItemPage = props => {
    const { mint } = useMint();

    const onSubmit = values => {
        console.log(values);
        mint(values);
    };

    return (
        <StyledCreateItemPage>
            <Divider position="left">
                <Typography variant="h4" fontWeight="bold">
                    Create Item
                </Typography>
            </Divider>
            <Form
                initialValues={initialValues}
                onSubmit={onSubmit}
                render={formProps => <CreateFormFields {...props} {...formProps} />}
            />
        </StyledCreateItemPage>
    );
};

export default CreateItemPage;
