import "@hydevs/hypb";

export interface site_texts {
    id: string;
    fieldId: string;
    value: string;
    created?: string;
    updated?: string;
}

export interface site_medias {
    id: string;
    mediaId: string;
    media: string;
    created?: string;
    updated?: string;
}

export interface site_admin {
    id: string;
    email: string;
    emailVisibility: boolean;
    username: string;
    verified: boolean;
    created?: string;
    updated?: string;
}

export interface site_contact {
    id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    created?: string;
    updated?: string;
}
export interface site_carousel {
    id: string;
    media: string;
    order: number;
    created?: string;
    updated?: string;
}

/**
 * Module augmentation for @hydevs/hypb Collections.
 *
 * The actual collection names in PocketBase are prefixed with the value of
 * VITE_COLLECTION_PREFIX (see .env.example). The keys below are the generic
 * suffixes — the runtime mapping is handled by `src/config.ts`.
 *
 * We use `[key: string]: any` to let dynamic collection names resolve at
 * runtime while still providing strong types on the exported interfaces above.
 */
declare module "@hydevs/hypb" {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    export interface Collections {
        [key: string]: any;
    }
}
