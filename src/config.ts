/**
 * Centralized application configuration.
 *
 * All environment-dependent values are read from Vite env variables (VITE_*).
 * See `.env.example` for the full list of required variables.
 */

const prefix = import.meta.env.VITE_COLLECTION_PREFIX ?? 'myproject';

export const config = {
    /** PocketBase connection */
    pocketbase: {
        url: import.meta.env.VITE_POCKETBASE_URL as string,
        userCollection: import.meta.env.VITE_USER_COLLECTION as string,
    },

    /** PocketBase collection names (auto-prefixed) */
    collections: {
        texts: `${prefix}_texts`,
        medias: `${prefix}_medias`,
        contact: `${prefix}_contact`,
        carousel: `${prefix}_carousel`,
    },

    /** Public site metadata */
    site: {
        name: (import.meta.env.VITE_SITE_NAME as string) ?? 'Mon Site',
        url: (import.meta.env.VITE_SITE_URL as string) ?? '',
    },

    /** Google Maps embed URL for the contact page. If empty, the map is hidden. */
    googleMapsEmbedUrl: (import.meta.env.VITE_GOOGLE_MAPS_EMBED_URL as string) ?? '',
} as const;
