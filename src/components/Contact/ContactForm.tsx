import { Hypb } from '@hydevs/hypb';
import { Box, Flex, Select, Textarea, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { IconSend } from '@tabler/icons-react';
import { useState } from 'react';
import PocketButton from '../PocketButton';

const objetsMessages = [
    "Demande d'information",
    'Prise de rendez-vous',
    'Question sur les tarifs',
    'Réclamation',
    'Partenariat',
    'Autre',
];

let initialValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
};
initialValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
};
if (window.location.hostname === 'localhost')
    initialValues = {
        name: 'Louis',
        email: 'louis@example.com',
        subject: "Demande d'information",
        message: "J'ai besoin d'informations",
    };

const ContactForm = () => {
    const [loading, setLoading] = useState(false);
    const form = useForm({
        initialValues: initialValues,
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Email invalide'),
        },
    });

    const handleSubmit = form.onSubmit(async (values) => {
        try {
            setLoading(true);
            const result = await Hypb.pb.collection('isao_contact').create(values);
            if (result) {
                notifications.show({
                    title: 'Message envoyé',
                    message:
                        'Votre message a bien été envoyé. Je vous répondrai dans les plus brefs délais.',
                    color: 'primary',
                });
                setLoading(false);
                form.reset();
            }
        } catch {
            notifications.show({
                title: 'Erreur',
                message:
                    "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer plus tard.",
                color: 'red',
            });
            setLoading(false);
        }
    });

    return (
        <Box flex={1}>
            <Flex align="center" gap="md" mb="xl">
                <Title order={2} fw={500} ff="The Seasons, serif">
                    Me contacter
                </Title>
            </Flex>

            <form onSubmit={handleSubmit}>
                <Flex direction="column" gap="sm">
                    <Flex gap="sm" direction={{ base: 'column', sm: 'row' }}>
                        <TextInput
                            label="Nom complet"
                            placeholder="Votre nom"
                            {...form.getInputProps('name')}
                            flex={1}
                        />
                        <TextInput
                            label="Email"
                            placeholder="votre@email.com"
                            type="email"
                            {...form.getInputProps('email')}
                            required
                            flex={1}
                        />
                    </Flex>

                    <Select
                        label="Objet de votre message"
                        placeholder="Sélectionnez un objet"
                        data={objetsMessages}
                        {...form.getInputProps('subject')}
                        required
                    />

                    <Textarea
                        label="Message"
                        placeholder="Votre message..."
                        {...form.getInputProps('message')}
                        required
                        minRows={6}
                        autosize
                    />

                    {/* <Button
                        loading={loading}
                        type="submit"
                        rightSection={<IconSend />}
                        px="xl"
                        ml={'auto'}
                        color="rosePoudre.7"
                    >
                        Envoyer le message
                    </Button> */}
                    <PocketButton
                        loading={loading}
                        type="submit"
                        rightSection={<IconSend />}
                        className="contact-button"
                        to=""
                        px="xl"
                        ml={'auto'}
                        color="rosePoudre.7"
                        fieldId="ContactFormSendButton"
                    />
                </Flex>
            </form>
        </Box>
    );
};

export default ContactForm;
