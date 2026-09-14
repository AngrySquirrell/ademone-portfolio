import { createContext } from "react";

export interface SiteText {
    id: string;
    fieldId: string;
    value: string;
    created?: string;
    updated?: string;
    [key: string]: unknown;
}

export interface SiteMedia {
    id: string;
    mediaId: string;
    media: string;
    created?: string;
    updated?: string;
    [key: string]: unknown;
}

export interface PocketfieldContextValue {
    lookupFieldId: (fieldId: string) => string;
    textsLoading: boolean;
    textsInvalidate: () => void;
    texts: SiteText[];
    updateText: (fieldId: string, value: string) => Promise<void>;

    lookupMediaId: (mediaId: string) => string;
    mediaLoading: boolean;
    mediaInvalidate: () => void;
    media: SiteMedia[];
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
