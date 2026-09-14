import { Hypb, useAuthContext, useCollection } from '@hydevs/hypb';
import React from 'react';
import { config } from '../config';
import { PocketfieldContext } from './PocketfieldProviderContext';

// Les champs/médias référencés dans le JSX mais absents de la base sont créés à la
// volée afin qu'ils apparaissent dans le back-office et deviennent éditables.
// Réservé aux sessions admin : la collection refuse la création aux
// visiteurs anonymes, et cela évite que le site public alimente la base.
// `attempted` évite d'envoyer une requête à chaque rendu pour un même identifiant.
const attemptedFields = new Set<string>();
const attemptedMedias = new Set<string>();

const createFieldInit = async (fieldId: string, onCreated: () => void) => {
    if (!fieldId || attemptedFields.has(fieldId)) return;
    attemptedFields.add(fieldId);
    try {
        await Hypb.collection(config.collections.texts).create({
            fieldId,
            value: fieldId,
        });
        onCreated();
    } catch {
        // Le champ existe déjà
    }
};

const createMediaInit = async (mediaId: string, onCreated: () => void) => {
    if (!mediaId || attemptedMedias.has(mediaId)) return;
    attemptedMedias.add(mediaId);
    try {
        await Hypb.collection(config.collections.medias).create({
            mediaId,
        });
        onCreated();
    } catch {
        // Le média existe déjà
    }
};

export const PocketfieldProvider = ({ children }: { children: React.ReactNode }) => {
    const { userData } = useAuthContext();
    const isAdmin = Boolean(userData?.id);
    const {
        records: textsRecord,
        loading: textsLoading,
        invalidate: textsInvalidate,
    } = useCollection(config.collections.texts, {
        defaultValue: [],
        pageParams: { perPage: 1000 },
    });
    const {
        records: mediaRecords,
        loading: mediaLoading,
        invalidate: mediaInvalidate,
    } = useCollection(config.collections.medias, {
        defaultValue: [],
    });

    const lookupFieldId = (fieldId: string) => {
        const textItem = textsRecord?.find((item) => item.fieldId === fieldId);
        if (!textItem && !textsLoading && isAdmin) createFieldInit(fieldId, textsInvalidate);
        return textItem ? textItem.value : fieldId;
    };
    const updateText = async (fieldId: string, value: string) => {
        const textItem = textsRecord.find((item) => item.fieldId === fieldId);
        if (!textItem) {
            return;
        }
        await Hypb.collection(config.collections.texts).update(textItem.id, { value });
        textsInvalidate();
    };

    const lookupMediaId = (mediaId: string) => {
        const placeholder = 'https://placehold.co/200x200?text=media%20vide';
        const mediaItem = mediaRecords?.find((item) => item.mediaId === mediaId);
        if (!mediaItem) {
            if (!mediaLoading && isAdmin) createMediaInit(mediaId, mediaInvalidate);
            return placeholder;
        }
        return Hypb.pb.files.getURL(mediaItem, mediaItem.media) ?? placeholder;
    };
    const updateMedia = async (mediaId: string, value: File) => {
        const mediaItem = mediaRecords?.find((item) => item.mediaId === mediaId);
        if (!mediaItem) console.log(`[Error] Item ${mediaId} not found.`);
        await Hypb.collection(config.collections.medias).update(mediaItem!.id, {
            media: value,
        });
        mediaInvalidate();
    };

    return (
        <PocketfieldContext.Provider
            value={{
                textsLoading,
                textsInvalidate,
                lookupFieldId,
                texts: textsRecord ?? [],
                updateText,

                lookupMediaId: lookupMediaId,
                mediaLoading,
                mediaInvalidate,
                media: mediaRecords ?? [],
                updateMedia,
            }}
        >
            {children}
        </PocketfieldContext.Provider>
    );
};

export default PocketfieldProvider;
