import { loginPB, useAuthContext } from '@hydevs/hypb';
import { BackgroundImage, Button, Card, Flex, Group, Text, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import backgroundImg from '../../assets/background_1.webp';
import { useNavigate } from 'react-router';
import { notifications } from '@mantine/notifications';
import { useEffect } from 'react';

const Login = () => {
    const n = useNavigate();
    const { userData } = useAuthContext();

    const form = useForm({
        initialValues: {
            email: '',
            password: '',
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            password: (value) =>
                value.length >= 8 ? null : 'Password must be at least 8 characters',
        },
    });
    useEffect(() => {
        if (userData?.id) {
            n('/admin');
        }
    }, [n, userData]);

    return (
        <BackgroundImage mih={'calc(100vh - 60px)'} display={'flex'} src={backgroundImg}>
            <Flex w={'100%'} p={'xl'} justify={'end'} align={'center'}>
                <Card shadow="lg" withBorder radius={'md'}>
                    <form
                        onSubmit={form.onSubmit(async (values) => {
                            const { email, password } = values;
                            const result = await loginPB(email, password);
                            if (result.error) {
                                notifications.show({
                                    title: "Erreur lors de l'authentification",
                                    message: 'Veuillez vérifier vos identifiants et réessayer.',
                                    color: 'red',
                                    position: 'bottom-left',
                                });
                            }
                        })}
                    >
                        {/* TODO: Replace with your logo */}
                        <Text fw={700} fz="xl" c="primary" mb="md">
                            Administration
                        </Text>
                        <Title order={2} mb={'md'} mt={'xs'}>
                            Connexion administrateur
                        </Title>
                        <Flex w={400} gap={12} direction={'column'}>
                            <TextInput
                                placeholder="Email"
                                name="email"
                                label="Email"
                                {...form.getInputProps('email')}
                            />
                            <TextInput
                                placeholder="Mot de passe"
                                type="password"
                                name="password"
                                label="Mot de passe"
                                {...form.getInputProps('password')}
                            />
                        </Flex>
                        <Group justify="flex-end" mt="md">
                            <Button type="submit">Se connecter</Button>
                        </Group>
                    </form>
                </Card>
            </Flex>
        </BackgroundImage>
    );
};

export default Login;
