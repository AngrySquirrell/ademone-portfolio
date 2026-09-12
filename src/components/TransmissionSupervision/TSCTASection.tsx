import { Box, Container, Flex, useMantineTheme } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import PocketButton from '../PocketButton';
import PocketText from '../PocketText';
import './TSCTASection.scss';

interface TSCTASectionProps {
    titleField: string;
    descriptionField: string;
    buttonTextField: string;
}

const TSCTASection = ({ titleField, descriptionField, buttonTextField }: TSCTASectionProps) => {
    const theme = useMantineTheme();

    return (
        <Container size="md" py="xl">
            <Flex direction="column" align="center" gap="lg">
                <PocketText
                    fieldId={titleField}
                    fw={500}
                    fz={{ base: 'xl', md: '2rem' }}
                    c={'charbon.8'}
                    ta="center"
                    ff="The Seasons, serif"
                />
                <Box
                    style={{
                        width: '35%',
                        height: '4px',
                        backgroundColor: theme.colors.framboise[5],
                        borderRadius: '8px',
                    }}
                />
                <PocketText
                    fieldId={descriptionField}
                    fz={{ base: 'md', md: 'lg' }}
                    c="dark.7"
                    ta="center"
                    maw={700}
                    lh={1.6}
                />
                <PocketButton
                    size="lg"
                    radius="xl"
                    rightSection={<IconArrowRight size={18} />}
                    className="ts-cta-button"
                    color="rosePoudre.7"
                    mt="1rem"
                    variant="filled"
                    fieldId={buttonTextField}
                    to="/contact"
                />
            </Flex>
        </Container>
    );
};

export default TSCTASection;
