import { Button, type ButtonProps } from '@mantine/core';
import { NavLink } from 'react-router';
import { usePocketField } from '../providers/usePocketField';
import { useAuthContext } from '@hydevs/hypb';
import { modals } from '@mantine/modals';
import ModifyTextModal from './ModifyTextModal';
import { useMemo } from 'react';

const PocketButton = (
    props: {
        fieldId: string;
        to: string | '';
        type?: 'button' | 'submit' | 'reset' | undefined;
    } & ButtonProps
) => {
    const { fieldId } = props;
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
            {userData ? (
                <Button
                    className={userData?.id ? 'editable' : ''}
                    onClick={handleClickModify}
                    {...props}
                >
                    {textValue}
                </Button>
            ) : (
                <Button component={props.to ? NavLink : undefined} {...props}>
                    {textValue}
                </Button>
            )}
        </>
    );
};

export default PocketButton;
