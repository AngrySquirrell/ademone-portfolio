import type { Collections } from "@hydevs/hypb";
import { createContext } from "react";

export interface PocketfieldContextValue {
    lookupFieldId: (fieldId: string) => string;
    textsLoading: boolean;
    textsInvalidate: () => void;
    texts: Collections["audrey_texts"][];
    updateText: (fieldId: string, value: string) => Promise<void>;

    lookupMediaId: (mediaId: string) => string;
    mediaLoading: boolean;
    mediaInvalidate: () => void;
    media: Collections["audrey_medias"][];
    updateMedia: (mediaId: string, value: File) => Promise<void>;
}

export const defaultValue: PocketfieldContextValue = {
    lookupFieldId: () => "",
    textsLoading: false,
    textsInvalidate: () => {},
    texts: [],
    updateText: async () => {},

    lookupMediaId: () => "",
    mediaLoading: false,
    mediaInvalidate: () => {},
    media: [],
    updateMedia: async () => {},
};

export const PocketfieldContext =
    createContext<PocketfieldContextValue>(defaultValue);
