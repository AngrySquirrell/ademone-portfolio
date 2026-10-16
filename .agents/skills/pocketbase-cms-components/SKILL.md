---
name: pocketbase-cms-components
description: Utilise les composants custom connectés à PocketBase (PocketMedia, PocketCarousel, et optionnellement PocketText, PocketButton) pour gérer les médias administrables par la cliente. À activer systématiquement lors de l'intégration d'images, de vidéos, de bannières/hero sections ou de carrousels dans les vues React/Mantine, ou lors de la conversion de designs Stitch contenant des médias.
---

# PocketBase CMS & Media Components Skill

## Objectif

Permettre à la cliente d'administrer les médias (images et vidéos) directement depuis le dashboard du site via PocketBase (`@hydevs/hypb` et `usePocketField`).
L'agent **doit** utiliser les composants `Pocket*` à la place des composants médias statiques de Mantine (`<Image>`, `<BackgroundImage>`, `<Carousel>`) dès qu'un média fait partie du contenu éditorial ou visuel de la page.

---

## Règle de Priorité Actuelle (Scope du projet)

1. **Médias & Carrousels (ACTIF - OBLIGATOIRE) :** Utiliser systématiquement `<PocketMedia>` et `<PocketCarousel>` pour toutes les images, vidéos d'illustration, fonds de section et carrousels.
2. **Textes & Boutons (INACTIF PAR DÉFAUT) :** Les composants `<PocketText>` et `<PocketButton>` existent dans le code mais **ne doivent pas être utilisés pour l'instant**, sauf demande explicite de l'utilisateur. Utiliser `<Text>`, `<Title>` et `<Button>` de `@mantine/core` en attendant.

---

## 1. `<PocketMedia>` (Images, Vidéos & Hero Banners)

Remplace `<Image>`, `<BackgroundImage>`, `<Card>` avec image, ou les balises `<video>`.

### Signature et Props

Hérite de toutes les props de `CardProps` (`@mantine/core`), avec par défaut `p={0}`, `radius={0}`, `bg="transparent"` et `pos="relative"`.

```tsx
interface PocketMediaProps extends CardProps {
    mediaId: string; // Clé unique identifiant le média dans PocketBase (ex: "home_hero_bg", "about_team_photo")
    children?: ReactNode; // Contenu affiché PAR-DESSUS le média (en zIndex: 1)
    cover?: boolean; // Défaut: true (object-fit: cover)
    video?: {
        autoplay?: boolean;
        sound?: boolean;
        loop?: boolean;
        controls?: boolean;
        controlsList?: string;
    };
}
```

### Règles d'utilisation strictes pour `<PocketMedia>`

- **Nommage du `mediaId` :** Toujours utiliser une convention `snake_case` explicite et sémantique liée à la page et à la section (ex: `hero_main_banner`, `service_card_1_img`, `presentation_video`).
- **Dimensions obligatoires :** Comme `<PocketMedia>` encapsule un `<Card pos="relative">` avec un média en `cover={true}` par défaut, pense toujours à lui passer des props de dimension Mantine (`h`, `mih`, `w`, `style={{ aspectRatio: '...' }}`) pour éviter que le conteneur n'ait une hauteur nulle s'il n'a pas de `children`.
- **Visibilité visiteur :** Si l'image côté PocketBase est encore un placeholder (`https://placehold.co/`) et qu'aucun admin n'est connecté (`!userData?.id`), le composant retourne `null`.
- **Mode Hero / Background avec Overlay :** `<PocketMedia>` affiche ses `children` dans une `<Box style={{ zIndex: 1 }}>` par-dessus le média. Pour créer une bannière avec du texte par-dessus une image/vidéo, passe directement le layout Mantine (`<Stack>`, `<Center>`, `<Title>`) en tant que `children` de `<PocketMedia>` :

```tsx
// Exemple 1 : Bannière Hero avec texte superposé et options vidéo
<PocketMedia autoplay: false loop: mediaId="home_hero_banner" mih="{450}" radius="md" sound: true, video="{{" }}>
    <Stack align="center" h="100%" justify="center" p="xl">
        <Title c="white" order="{1}">
            Titre de la section
        </Title>
    </Stack>
</PocketMedia>

// Exemple 2 : Simple image dans une grille ou une carte
<PocketMedia cover="{true}" h="{280}" mediaId="gallery_item_1" radius="sm"/>
```

_(Note : Ne pas utiliser `<PocketMedia>` pour les petites icônes UI/SVG ou un logo fixe si ceux-ci ne doivent pas être modifiés par la cliente)._

---

## 2. `<PocketCarousel>` (Carrousel administrable)

Remplace le `<Carousel>` de `@mantine/carousel` lorsqu'un carrousel de photos/vidéos est présent sur la page. Il se connecte automatiquement à la collection `config.collections.carousel` triée par `order`.

### Signature et Props

Ne prend **aucun `children`** (les slides sont générées automatiquement depuis PocketBase).

```tsx
interface PocketCarouselProps {
    video?: {
        autoplay?: boolean;
        sound?: boolean;
        loop?: boolean;
        controls?: boolean;
        controlsList?: string;
    };
}
```

### Règles d'utilisation pour `<PocketCarousel>`

- S'utilise de manière autonome sans enfants :

```tsx
<PocketCarousel autoplay: false loop: sound: true, video="{{" }}/>
```

- Il possède déjà une hauteur `height={400}`, une largeur `w="100%"`, et un `aspectRatio: '32/9'` configuré en interne, avec 1 slide par scroll sur mobile et 2 sur desktop. Place-le simplement dans le conteneur parent adéquat (`<Box>`, `<Container>` ou `<Stack>`).

---

## 3. `<PocketText>` & `<PocketButton>` (Référence - Inactifs par défaut)

Ces composants permettent l'édition de texte au clic lorsqu'un admin est connecté (`userData?.id`) via l'ouverture de `<ModifyTextModal fieldId={fieldId} />`. **À n'utiliser que si l'utilisateur demande explicitement de rendre les textes ou boutons dynamiques.**

### `<PocketText>`

Hérite de `TextProps` (`@mantine/core`) et gère automatiquement les retours à la ligne (`\n` -> `<br />`).

- `fieldId: string` (Requis) : Clé du texte dans PocketBase.
- `link?: boolean` : Transforme le `<Text>` en balise `<a>`.
- `linkPrefix?: string` : Préfixe ajouté devant l'URL récupérée (ex: `"mailto:"`, `"tel:"`). Si omis avec `link={true}`, ouvre en `target="_blank"`.
- `label?: string` : Texte affiché à la place de l'URL brute quand `link={true}`.

```tsx
<PocketText fieldId="contact_email" fw="{500}" link linkPrefix="mailto:" />
```

### `<PocketButton>`

Hérite de `ButtonProps` (`@mantine/core`).

- `fieldId: string` (Requis) : Clé du label du bouton dans PocketBase.
- `to: string | ''` (Requis) : Route `react-router` (`NavLink`) quand l'utilisateur n'est pas connecté en admin (en mode admin, le clic ouvre la modale d'édition du texte au lieu de naviguer).
- `type?: 'button' | 'submit' | 'reset'`.

```tsx
<PocketButton fieldId="cta_home_contact" size="md" to="/contact" variant="filled" />
```
