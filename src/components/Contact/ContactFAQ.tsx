import { Accordion, Container, Group, ThemeIcon } from '@mantine/core';
import { IconMessageCircleQuestion } from '@tabler/icons-react';
import PocketText from '../PocketText';

const faqData = Array.from({ length: 4 }, (_, i) => ({
    id: `FAQ${i + 1}`,
    questionFieldId: `FAQQuestion${i + 1}`,
    reponseFieldId: `FAQReponse${i + 1}`,
}));

const ContactFAQ = () => {
    return <></>;
    return (
        <>
            <Group justify="center" mt={'xl'}>
                <ThemeIcon size={60} color="primary" variant="light">
                    <IconMessageCircleQuestion stroke={2} scale={5} />
                </ThemeIcon>
                <PocketText ta={'center'} fz={'h2'} fw={700} fieldId="ContactFAQTitre" />
            </Group>
            <PocketText ta={'center'} fz={'lg'} mt={'xs'} fieldId="ContactFAQTexte" />

            <Container size={'sm'} mb={'xl'}>
                <Accordion variant="separated" color="orange" mt={'xl'}>
                    {faqData.map((faq) => (
                        <Accordion.Item key={faq.id} value={faq.id}>
                            <Accordion.Control>
                                <PocketText fieldId={faq.questionFieldId} fw={500} fz="lg" />
                            </Accordion.Control>
                            <Accordion.Panel>
                                <PocketText fieldId={faq.reponseFieldId} c="dimmed" fz="md" />
                            </Accordion.Panel>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </Container>
        </>
    );
};

export default ContactFAQ;
