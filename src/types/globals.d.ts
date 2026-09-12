import "@hydevs/hypb";

export interface audrey_texts {
    id: string;
    fieldId: string;
    value: string;
    created: string;
    updated: string;
}

export interface audrey_medias {
    id: string;
    mediaId: string;
    media: string;
    created: string;
    updated: string;
}

export interface audrey_admin {
    id: string;
    email: string;
    emailVisibility: boolean;
    username: string;
    verified: boolean;
    created: string;
    updated: string;
}

export interface audrey_contact {
    id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    created: string;
    updated: string;
}
export interface audrey_carousel {
    id: string;
    media: string;
    order: number;
    created: string;
    updated: string;
}

declare module "@hydevs/hypb" {
    export interface Collections {
        audrey_texts: audrey_texts;
        audrey_medias: audrey_medias;
        audrey_admin: audrey_admin;
        audrey_contact: audrey_contact;
        audrey_carousel: audrey_carousel;
    }
}
