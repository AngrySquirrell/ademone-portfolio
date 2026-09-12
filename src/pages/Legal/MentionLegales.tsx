import React from 'react';
import { Container, Title, Text, List, Stack, Box } from '@mantine/core';
import { NavLink } from 'react-router';
import { SITE_CONFIG } from './SITE_CONFIG';

const MentionLegales: React.FC = () => {
    return (
        <Container size="lg" py="xl">
            <NavLink to="/">Retour sur le site</NavLink>
            <Stack gap="lg">
                <Box>
                    <Title order={1} size="h1" mb="md">
                        Mentions légales
                    </Title>
                    <Text size="sm" c="dimmed" mb="xl">
                        En vigueur au {SITE_CONFIG.lastUpdate.mentionLegales}
                    </Text>
                </Box>
                <Stack gap="md">
                    <Text>
                        Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004 pour la
                        Confiance en l'économie numérique, il est porté à la connaissance des
                        utilisateurs et visiteurs, ci-après l' "Utilisateur", du site{' '}
                        <Text component="span" fw={600}>
                            {SITE_CONFIG.url}
                        </Text>
                        , ci-après le "Site", les présentes mentions légales.
                    </Text>

                    <Text>
                        La connexion et la navigation sur le Site par l'Utilisateur implique
                        acceptation intégrale et sans réserve des présentes mentions légales.
                    </Text>

                    <Text>
                        Ces dernières sont accessibles sur le Site à la rubrique "Mentions légales".
                    </Text>

                    <Title order={2} size="h2" mt="xl" mb="md">
                        Édition du site
                    </Title>
                    <Text>
                        L'édition du Site est assurée par la société{' '}
                        <Text component="span" fw={600}>
                            {SITE_CONFIG.company.name}
                        </Text>
                        , SAS au capital de {SITE_CONFIG.company.capital}, immatriculée au Registre
                        du Commerce et des Sociétés de {SITE_CONFIG.company.rcs} sous le numéro{' '}
                        {SITE_CONFIG.company.siret}
                        dont le siège social est situé au {SITE_CONFIG.company.address},
                    </Text>

                    <List withPadding>
                        <List.Item>Numéro de téléphone : {SITE_CONFIG.company.phone}</List.Item>
                        <List.Item>Adresse e-mail : {SITE_CONFIG.company.email}</List.Item>
                        <List.Item>
                            N° de TVA intracommunautaire : {SITE_CONFIG.company.tva}
                        </List.Item>
                        <List.Item>
                            Directeur de la publication : {SITE_CONFIG.company.director}
                        </List.Item>
                    </List>

                    <Text>ci-après l'"Éditeur".</Text>

                    <Title order={2} size="h2" mt="xl" mb="md">
                        Hébergeur
                    </Title>
                    <Text>
                        L'hébergeur du Site est la société PlanetHoster, dont le siège social est
                        situé au 4416 Louis B. Mayer 701 Laval (Québec). Le numéro de téléphone de
                        l'hébergeur est le 0805080426.
                    </Text>

                    <Title order={2} size="h2" mt="xl" mb="md">
                        Accès au site
                    </Title>
                    <Text>
                        Le Site est normalement accessible, à tout moment, à l'Utilisateur.
                        Toutefois, l'Éditeur pourra, à tout moment, suspendre, limiter ou
                        interrompre le Site afin de procéder, notamment, à des mises à jour ou des
                        modifications de son contenu. L'Éditeur ne pourra en aucun cas être tenu
                        responsable des conséquences éventuelles de cette indisponibilité sur les
                        activités de l'Utilisateur.
                    </Text>

                    <Title order={2} size="h2" mt="xl" mb="md">
                        Collecte des données
                    </Title>
                    <Text>
                        Le Site assure à l'Utilisateur une collecte et un traitement des données
                        personnelles dans le respect de la vie privée conformément à la loi n°78-17
                        du 6 janvier 1978 relative à l'informatique, aux fichiers aux libertés et
                        dans le respect de la règlementation applicable en matière de traitement des
                        données à caractère personnel conformément au règlement (UE) 2016/679 du
                        Parlement européen et du Conseil du 27 avril 2016 (ci-après, ensemble, la
                        "Règlementation applicable en matière de protection des Données à caractère
                        personnel").
                    </Text>

                    <Text>
                        En vertu de la Règlementation applicable en matière de protection des
                        Données à caractère personnel, l'Utilisateur dispose d'un droit d'accès, de
                        rectification, de suppression et d'opposition de ses données personnelles.
                        L'Utilisateur peut exercer ce droit :
                    </Text>

                    <Text>
                        par mail à l'adresse email{' '}
                        <Text component="span" fw={600}>
                            {SITE_CONFIG.company.email}
                        </Text>
                        .
                    </Text>

                    <Text>
                        Toute utilisation, reproduction, diffusion, commercialisation, modification
                        de toute ou partie du Site, sans autorisation expresse de l'Éditeur est
                        prohibée et pourra entraîner des actions et poursuites judiciaires telles
                        que prévues par la règlementation en vigueur.
                    </Text>

                    <Box
                        mt="xl"
                        pt="xl"
                        style={{ borderTop: '1px solid var(--mantine-color-gray-3)' }}
                    >
                        <Title order={3} size="h3" mb="sm">
                            {SITE_CONFIG.company.name}
                        </Title>
                        <Text c="dimmed">
                            Joignez-vous aux entreprises qui ont choisi {SITE_CONFIG.company.name}{' '}
                            pour les aider à trouver des solutions et réussir en ligne
                        </Text>
                    </Box>
                </Stack>
            </Stack>
        </Container>
    );
};

export default MentionLegales;
