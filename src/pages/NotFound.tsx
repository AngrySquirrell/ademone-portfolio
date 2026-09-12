import { Button, Flex, Title } from '@mantine/core';
import { NavLink } from 'react-router';

const NotFound = () => {
    return (
        <Flex align={'center'} h={'50vh'} gap={50} justify={'center'} direction={'column'}>
                <Title>404 - Page non trouvée</Title>
                <Button mt={'md'} component={NavLink} to="/">
                    Retour à l'accueil
                </Button>
        </Flex>
    );
};

export default NotFound;
