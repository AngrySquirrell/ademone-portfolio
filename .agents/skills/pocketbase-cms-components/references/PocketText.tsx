import { useAuthContext } from '@hydevs/hypb';
import { Text, type TextProps } from '@mantine/core';
import { modals } from '@mantine/modals';
import { usePocketField } from '../providers/usePocketField';
import ModifyTextModal from './ModifyTextModal';
import { useMemo } from 'react';

interface PocketTextProps {
    fieldId: string;
    link?: boolean;
    linkPrefix?: string;
    /** Intitulé affiché à la place de la valeur (utile quand la valeur est une URL). */
    label?: string;
}

const PocketText = ({
    fieldId,
    link,
    linkPrefix,
    label,
    ...style
}: PocketTextProps & TextProps) => {
    const { lookupFieldId } = usePocketField();
    const { userData } = useAuthContext();

    const handleClickModify = () => {
        if (!userData?.id) return;
        modals.open({
            title: 'Modifier le texte',
            size: 'lg',
            children: <ModifyTextModal fieldId={fieldId} />,
            centered: true,
        });
    };

    const textValue = useMemo(() => {
        const textValue = lookupFieldId(fieldId);

        return textValue
            ? textValue.split('\n')?.map((line, index, arr) => (
                  <span key={index}>
                      {line}
                      {index !== arr.length - 1 && <br />}
                  </span>
              ))
            : textValue;
    }, [lookupFieldId, fieldId]);

    return (
        <>
            {link ? (
                <Text
                    component="a"
                    {...style}
                    href={`${linkPrefix || ''}${lookupFieldId(fieldId)}`}
                    target={!linkPrefix ? '_blank' : undefined}
                    className={userData?.id ? 'editable' : ''}
                    onClick={handleClickModify}
                >
                    {label ?? textValue}
                </Text>
            ) : (
                <Text
                    {...style}
                    className={userData?.id ? 'editable' : ''}
                    onClick={handleClickModify}
                >
                    {textValue}
                </Text>
            )}
        </>
    );
};

export default PocketText;
