---
name: stitch-to-mantine
description: Convertit des designs générés avec Google Stitch (via MCP Stitch, stitch_data/ ou .stitch_ref/) en code React/TypeScript modulaire utilisant Mantine UI. À activer systématiquement lors de l'import d'un écran Stitch, de la création d'un thème Mantine à partir d'un design, ou du découpage d'une maquette HTML/CSS en composants Mantine.
---

# Stitch to Mantine UI Conversion Skill

## Objectif

Transformer le code brut exporté par Google Stitch (HTML, CSS utilitaire, Tailwind, variables brutes) en une architecture React + TypeScript propre, maintenable et 100% native à **Mantine v7+**, en s'appuyant sur le serveur MCP `@mantine/mcp-server`.

---

## Workflow d'exécution (Étapes obligatoires)

### Étape 1 : Extraction du Design DNA (Thème & Tokens)

Avant de coder les composants d'un écran Stitch, inspecte les couleurs, polices, rayons de bordure (`border-radius`) et ombres présents dans les fichiers Stitch (`stitch_data/` ou `.stitch_ref/`).

1. **Couleurs :** Identifie la couleur primaire et les nuances de fond/surface. Génère un tuple de 10 nuances (`MantineColorsTuple`) pour chaque couleur custom.
2. **Configuration :** Mets à jour l'objet `createTheme({...})` dans `src/theme.ts` (ou équivalent) avec `primaryColor`, `fontFamily`, `defaultRadius`, et `colors`.
3. **Vérification MCP :** Si tu as un doute sur la structure de `createTheme` ou `virtualColor`, interroge le MCP Mantine (`mantine`) avant d'écrire le code.

### Étape 2 : Mapping sémantique (HTML/Stitch -> Mantine)

Il est **strictement interdit** de copier-coller des `<div>` avec des classes Flexbox/Grid ou Tailwind issues de Stitch. Applique systématiquement cette table de conversion :

| Élément Stitch (HTML / CSS)                        | Composant `@mantine/core` obligatoire                                     |
| :------------------------------------------------- | :------------------------------------------------------------------------ |
| Structure globale (Header, Sidebar, Main)          | `<AppShell>`, `<AppShell.Header>`, `<AppShell.Navbar>`, `<AppShell.Main>` |
| `div` avec `display: flex; flex-direction: row`    | `<Group>` (utilise `justify`, `align`, `gap`, `wrap`)                     |
| `div` avec `display: flex; flex-direction: column` | `<Stack>` (utilise `align`, `justify`, `gap`)                             |
| `div` avec `display: grid` (colonnes égales)       | `<SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}>`                           |
| `div` avec `display: grid` (colonnes asymétriques) | `<Grid>` et `<Grid.Col span={{ base: 12, md: 8 }}>`                       |
| Conteneur centré avec `max-width`                  | `<Container size="...">`                                                  |
| Carte, encadré, panneau avec bordure/ombre         | `<Card withBorder shadow="sm" radius="md">` ou `<Paper>`                  |
| Titres (`h1` à `h6`)                               | `<Title order={1..6}>`                                                    |
| Paragraphes, spans, labels secondaires             | `<Text size="..." c="dimmed" fw={...}>`                                   |
| Boutons et icônes cliquables                       | `<Button variant="...">` et `<ActionIcon variant="...">`                  |
| Champs de saisie et sélecteurs                     | `<TextInput>`, `<PasswordInput>`, `<Select>`, `<Checkbox>`                |
| Modales, Drawers, Menus déroulants                 | `<Modal>`, `<Drawer>`, `<Menu>`, `<Popover>`                              |
| Séparateurs (`hr` ou `border-bottom`)              | `<Divider />`                                                             |
| Badges, tags, pilules de statut                    | `<Badge variant="light" color="...">`                                     |
| Images et avatars                                  | `<Image>` et `<Avatar>`                                                   |

### Étape 3 : Vérification via le serveur MCP Mantine

Avant d'implémenter un composant complexe (ex: `AppShell`, `Combobox`, `Tabs`, `NavLink`, `@mantine/charts` ou `@mantine/dates`), appelle **toujours** l'outil MCP `mantine` pour vérifier :

- Le nom exact des props de la version actuelle de Mantine.
- Les sélecteurs de la Styles API si une surcharge CSS est nécessaire.

### Étape 4 : Gestion du Style & CSS Modules

1. **Zéro Tailwind / Zéro style inline complexe :** Supprime toutes les classes Tailwind générées par Stitch.
2. **Style Props en priorité :** Pour les marges, paddings et dimensions simples, utilise les style props natives (`mt="md"`, `p="lg"`, `w="100%"`, `maw={400}`).
3. **CSS Modules pour le spécifique :** Si le design Stitch comporte des effets visuels spécifiques (gradients complexes, glassmorphism, animations, états `:hover`), crée un fichier `MonComposant.module.css`.
4. **Variables CSS Mantine :** Dans les fichiers `.module.css`, utilise exclusivement les variables CSS Mantine (`var(--mantine-color-*)`, `var(--mantine-spacing-*)`, `var(--mantine-radius-*)`) et la fonction `light-dark(valeurClair, valeurSombre)` pour supporter nativement le mode clair/sombre.

### Étape 5 : Découpage et Typage TypeScript

1. **Modularité :** Ne génère jamais un écran Stitch entier dans un seul fichier de 600 lignes. Découpe la vue en sous-composants logiques (ex: `HeaderBar.tsx`, `StatsGrid.tsx`, `UserTable.tsx`).
2. **Interactivité :** Remplace les états statiques du HTML Stitch par les hooks de `@mantine/hooks` (`useDisclosure` pour les modales/drawers/burger, `useMediaQuery` pour le responsive JS, `useClipboard`, etc.).
3. **Formulaires :** Si l'écran Stitch contient un formulaire, implémente-le directement avec `@mantine/form` (`useForm`).
