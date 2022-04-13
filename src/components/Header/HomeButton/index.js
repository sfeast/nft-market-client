import LinkButton from 'components/shared/LinkButton';

const HomeButton = () => {
    return (
        <LinkButton to="/" sx={{ color: 'grey.50' }}>
            Home
        </LinkButton>
    );
};

export default HomeButton;
