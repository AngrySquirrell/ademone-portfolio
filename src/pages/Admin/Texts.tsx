import { ActionIcon, Input, Table } from '@mantine/core';
import { usePocketField } from '../../providers/usePocketField';
import { useState } from 'react';
import { IconEdit, IconSearch } from '@tabler/icons-react';
import PocketText from '../../components/PocketText';
import { modals } from '@mantine/modals';
import ModifyTextModal from '../../components/ModifyTextModal';

const TextsPage = () => {
    const { texts } = usePocketField();

    const [search, setSearch] = useState('');

    const filteredTexts = texts.filter(
        (text) =>
            text.fieldId.toLowerCase().includes(search.toLowerCase()) ||
            text.value.toLowerCase().includes(search.toLowerCase())
    );

    const handleClickModify = (fieldId: string) => {
        modals.open({
            title: 'Modifier le texte',
            size: 'lg',
            children: <ModifyTextModal fieldId={fieldId} />,
            centered: true,
        });
    };

    return (
        <>
            <Input
                leftSection={<IconSearch />}
                maw={300}
                placeholder="Rechercher par clé ou contenu"
                value={search}
                onChange={(event) => setSearch(event.currentTarget.value)}
                mb="md"
            />
            <Table mb={'xl'} striped highlightOnHover>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Clé</Table.Th>
                        <Table.Th>Contenu</Table.Th>
                        <Table.Th>Éditer</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    {filteredTexts.map((text) => (
                        <Table.Tr key={text.id}>
                            <Table.Td>{text.fieldId}</Table.Td>
                            <Table.Td>
                                <PocketText fieldId={text.fieldId} />
                            </Table.Td>
                            <Table.Td>
                                <ActionIcon onClick={() => handleClickModify(text.fieldId)}>
                                    <IconEdit />
                                </ActionIcon>
                            </Table.Td>
                        </Table.Tr>
                    ))}
                </Table.Tbody>
            </Table>
        </>
    );
};

export default TextsPage;
