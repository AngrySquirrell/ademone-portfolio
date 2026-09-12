import { Button, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import { usePocketField } from '../providers/usePocketField';
import { modals } from '@mantine/modals';
import { IconArrowRight } from '@tabler/icons-react';

const ModifyTextModal = ({ fieldId }: { fieldId: string }) => {
    const { texts, updateText } = usePocketField();
    const form = useForm({
        initialValues: {
            text: texts.find((item) => item.fieldId === fieldId)?.value || '',
        },
        validate: {
            text: (value) => (value.trim().length === 0 ? 'Le texte ne peut pas être vide' : null),
        },
    });

    return (
        <form
            onSubmit={form.onSubmit(async (values) => {
                await updateText(fieldId, values.text?.trim() || '');
                modals.closeAll();
            })}
            style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
        >
            <Textarea autosize {...form.getInputProps('text')} />
            <Button type="submit" ml={'auto'} rightSection={<IconArrowRight />}>
                Mettre à jour
            </Button>
        </form>
    );
};

export default ModifyTextModal;
