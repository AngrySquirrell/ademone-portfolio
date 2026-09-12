import React from 'react';
import { Container, Title, Text, List, Stack, Box, Paper, Anchor } from '@mantine/core';
import { NavLink } from 'react-router';
import { SITE_CONFIG } from './SITE_CONFIG';

const PolitiqueDeConfidientalite: React.FC = () => {
    return (
        <Container size="lg" py="xl">
            <NavLink to="/">Retour sur le site</NavLink>
            <Stack gap="lg">
                <Box>
                    <Title order={1} size="h1" mb="md">
                        Politique de confidentialité
                    </Title>
                    <Text size="sm" c="dimmed" mb="xl">
                        Date de dernière mise à jour :{' '}
                        {SITE_CONFIG.lastUpdate.politiqueDeConfidentialite}
                    </Text>
                </Box>

                <Stack gap="md">
                    <Text>
                        La présente charte sur le respect de la vie privée (la « Charte ») a pour
                        objectif de formaliser notre engagement quant au respect de la vie privée
                        des utilisateurs du site internet{' '}
                        <Text component="span" fw={600}>
                            {SITE_CONFIG.url}
                        </Text>{' '}
                        et{' '}
                        <Text component="span" fw={600}>
                            {SITE_CONFIG.name}
                        </Text>{' '}
                        (le « Site ») exploité par{' '}
                        <Text component="span" fw={600}>
                            {SITE_CONFIG.company.name}
                        </Text>
                        .
                    </Text>

                    <Text>
                        La Charte et les Conditions Générales du Site forment un ensemble
                        contractuel. Tous les termes en majuscules non-définis dans la présente
                        Charte sont définis dans les Conditions Générales consultables sur le Site.
                    </Text>

                    <Text>
                        Dans le cadre de la mise à disposition de notre Site, nous traitons vos
                        données à caractère personnel dans le respect du Règlement Général sur la
                        Protection des Données 2016/679 du 27 avril 2016 (« RGPD ») et dans les
                        conditions exposées ci-après.
                    </Text>

                    <Text>
                        Une donnée à caractère personnel désigne toute information se rapportant à
                        une personne physique identifiée ou identifiable. Nous collectons et
                        traitons des données à caractère personnel dans le cadre de la fourniture de
                        nos Services ou de la communication à propose de ces Services exclusivement,
                        en stricte conformité avec le RGPD.
                    </Text>

                    <Text>
                        Nous collectons uniquement des données à caractère personnel adéquates,
                        pertinentes et limitées à ce qui est nécessaire au regard des finalités pour
                        lesquelles elles sont traitées. Ainsi, il ne vous sera jamais demandé de
                        renseigner des données à caractère personnel considérées comme « sensibles
                        », telles que vos origines raciales ou ethniques, vos opinions politiques,
                        philosophiques ou religieuses.
                    </Text>

                    <Text>
                        En vous enregistrant sur le Site, vous nous autorisez à traiter vos données
                        à caractère personnel conformément à la Charte. Si vous refusez les termes
                        de cette Charte, veuillez vous abstenir d'utiliser le Site ainsi que les
                        Services.
                    </Text>

                    <Title order={2} size="h2" mt="xl" mb="md">
                        1. Dans quels cas collectons-nous vos données à caractère personnel et
                        quelles données sont collectées ?
                    </Title>
                    <Text>
                        Nous sommes susceptibles de recueillir et de conserver vos données à
                        caractère personnel, notamment lorsque vous :
                    </Text>
                    <List withPadding>
                        <List.Item>naviguez sur le Site</List.Item>
                        <List.Item>nous contactez.</List.Item>
                    </List>

                    <Text>
                        Nous utilisons vos données à caractère personnel pour permettre la mise en
                        œuvre et la gestion des Services du Site et répondre à vos demandes
                        spécifiques. Nous utilisons également vos données à caractère personnel dans
                        le but d'exploiter et d'améliorer nos Services, notre Site et notre
                        démarche. Ces informations sont utilisées uniquement par nos soins et nous
                        permettent de mieux adapter nos Services à vos attentes.
                    </Text>

                    <Text>
                        Si vous avez décidé de recevoir des courriels et messages de notre part lors
                        de la création de votre Compte, vous recevrez alors des messages
                        électroniques et alphanumériques portant sur nos produits et promotions.
                        Nous utiliserons alors les données à caractère personnel que vous avez
                        fournies lors de votre enregistrement. Vous pouvez vous désabonner de ces
                        envois à tout moment.
                    </Text>

                    <Title order={3} size="h3" mt="lg" mb="sm">
                        1.1 Navigation sur le Site
                    </Title>
                    <Text>
                        <Text component="span" fw={600}>
                            Données de connexion.
                        </Text>{' '}
                        À chaque fois que vous vous connectez à notre Site, nous recueillons des
                        données à caractère personnel telles que, notamment, votre adresse IP et
                        l'adresse MAC de votre ordinateur, la date et l'heure de connexion, ainsi
                        que des informations sur le navigateur que vous utilisez.
                    </Text>

                    <Text>
                        <Text component="span" fw={600}>
                            Données de navigation.
                        </Text>{' '}
                        Nous recueillons également les informations permettant d'identifier de
                        quelle façon vous accédez au Site, quelles sont les pages consultées et
                        pendant combien de temps. Dans ce cadre, nous pouvons avoir recours à
                        l'utilisation de Cookies tel que précisé au paragraphe 5 ci-dessous.
                    </Text>

                    <Title order={3} size="h3" mt="lg" mb="sm">
                        1.2 Contacts
                    </Title>
                    <Text>
                        Afin de donner suite aux demandes que vous pourriez effectuer auprès de
                        notre Service Client et de confirmer les informations vous concernant, nous
                        pourrons utiliser vos nom, prénom, adresse de courrier électronique et
                        numéro de téléphone.
                    </Text>

                    <Title order={2} size="h2" mt="xl" mb="md">
                        2. Comment protégeons-nous vos données à caractère personnel ?
                    </Title>
                    <Text>
                        Nous avons mis en place des mesures de sécurité techniques et
                        organisationnelles en vue de garantir la sécurité, l'intégrité et la
                        confidentialité de toutes vos données à caractère personnel, afin d'empêcher
                        que celles-ci soient déformées, endommagées ou que des tiers non autorisés y
                        aient accès. Nous assurons un niveau de sécurité approprié, compte tenu de
                        l'état des connaissances, des coûts de mise en œuvre et de la nature, de la
                        portée, du contexte et des finalités du traitement ainsi que des risques et
                        de leur probabilité.
                    </Text>

                    <Text>
                        Toutefois, il est précisé qu'aucune mesure de sécurité n'étant infaillible,
                        nous ne sommes pas en mesure de garantir une sécurité absolue à vos données
                        à caractère personnel.
                    </Text>

                    <Title order={2} size="h2" mt="xl" mb="md">
                        3. Dans quels cas partageons-nous vos données à caractère personnel ?
                    </Title>

                    <Title order={3} size="h3" mt="lg" mb="sm">
                        3.1 Partage de vos données personnelles avec des sociétés tierces
                    </Title>
                    <Text>
                        Lors de votre navigation sur le Site, vos données à caractère personnel
                        peuvent être transmises à des prestataires extérieurs. Ces tiers assurent un
                        service pour notre compte et en notre nom dans le but de permettre le bon
                        fonctionnement des paiements par carte de crédit et autres Services.
                    </Text>

                    <Text>
                        Aucun transfert de données à caractère personnel n'est réalisé hors de
                        l'Union Européenne.
                    </Text>

                    <Text>
                        Sauf dans le cas où un tiers vous demande d'accepter une charte de
                        confidentialité et des conditions d'utilisations qui lui sont propres, les
                        sociétés tierces ayant reçu communication de vos données à caractère
                        personnel se sont engagées à traiter vos données à caractère personnel
                        uniquement pour la mise en œuvre de nos Services.
                    </Text>

                    <Text>
                        Nous ne partagerons jamais, sans avoir obtenu votre consentement préalable,
                        vos données à caractère personnel avec des sociétés tierces à des fins
                        marketings et/ou commerciales.
                    </Text>

                    <Title order={3} size="h3" mt="lg" mb="sm">
                        3.2 Partage avec les autorités
                    </Title>
                    <Text>
                        Nous pouvons être amené à divulguer vos données à caractère personnel aux
                        autorités administrative ou judiciaire lorsque leur divulgation est
                        nécessaire à l'identification, l'interpellation ou la poursuite en justice
                        de tout individu susceptible de porter préjudice à nos droits, de tout autre
                        utilisateur ou d'un tiers. Nous pouvons enfin être légalement tenu de
                        divulguer vos données à caractère personnel et ne pouvons dans ce cas nous y
                        opposer.
                    </Text>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                        4. Combien de temps conservons-nous vos données à caractère personnel ?
                    </h2>
                    <p>
                        Nous ne conserverons vos données à caractère personnel que le temps de votre
                        inscription sur le Site afin d'assurer votre identification lors de votre
                        connexion à votre Compte et de permettre la fourniture des Services.
                    </p>

                    <p>
                        Ainsi, si vous procédez à votre désinscription du Site, vos données à
                        caractère personnel seront effacées et uniquement conservées sous forme
                        d'archive aux fins d'établissement de la preuve d'un droit ou d'un contrat.
                    </p>

                    <p>
                        En tout état de cause, nous conserverons vos données à caractère personnel
                        pendant une durée n'excédant pas celle nécessaire au regard des finalités
                        pour lesquelles elles sont traitées conformément aux utilisations exposées
                        dans la présente Charte et dans le respect des lois et règlements.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                        5. Cookies : comment les utilisons-nous ?
                    </h2>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                        5.1 Qu'est-ce qu'un cookie ?
                    </h3>
                    <p>
                        Un cookie est un fichier texte susceptible d'être déposé dans un terminal
                        lors de la consultation d'un service en ligne avec un logiciel de
                        navigation. Un fichier cookie permet notamment à son émetteur, pendant sa
                        durée de validité, de reconnaître le terminal concerné à chaque fois que ce
                        terminal accède à un contenu numérique comportant des cookies du même
                        émetteur.
                    </p>

                    <p>
                        En tout état de cause, les cookies déposés sur votre terminal de navigation
                        avec votre accord sont détruits 13 mois après leur dépôt sur votre terminal.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                        5.2 A quoi servent les cookies émis sur notre Site ?
                    </h3>
                    <p>Les cookies que nous émettons nous permettent :</p>
                    <ul className="list-disc ml-6 mb-4">
                        <li>
                            d'établir des statistiques et volumes de fréquentation et d'utilisation
                            des divers éléments composant notre Site (rubriques et contenus visités,
                            parcours), nous permettant d'améliorer l'intérêt et l'ergonomie du Site
                            et, le cas échéant, de nos produits et services ;
                        </li>
                        <li>
                            d'adapter la présentation de notre Site aux préférences d'affichage de
                            votre terminal (langue utilisée, résolution d'affichage, système
                            d'exploitation utilisé, etc.) lors de vos visites sur notre Site, selon
                            les matériels et les logiciels de visualisation ou de lecture que votre
                            terminal comporte ;
                        </li>
                        <li>
                            de mémoriser des informations relatives à un formulaire que vous avez
                            rempli sur notre Site (inscription ou accès à votre compte) ou à des
                            produits, services ou informations que vous avez choisis sur notre Site
                            (service souscrit, contenu d'un panier de commande, etc.) ;
                        </li>
                        <li>
                            de vous permettre d'accéder à des espaces réservés et personnels de
                            notre Site, tels que votre Compte, grâce à des identifiants ou des
                            données que vous nous avez éventuellement antérieurement confiées et de
                            mettre en œuvre des mesures de sécurité, par exemple lorsqu'il vous est
                            demandé de vous connecter à nouveau à un contenu ou à un service après
                            une certain laps de temps.
                        </li>
                    </ul>

                    <Text>
                        Lors de votre première visite sur le Site, un bandeau cookies apparaîtra en
                        page d'accueil. Un lien cliquable permet d'en savoir plus sur la finalité et
                        le fonctionnement des cookies et renvoie vers la présente Charte. La
                        poursuite de la navigation sur une autre page du site ou la sélection d'un
                        élément du Site (notamment : image, texte, lien, etc.) matérialise votre
                        acceptation au dépôt des cookies visés sur votre ordinateur.
                    </Text>

                    <Title order={3} size="h3" mt="lg" mb="sm">
                        5.3 Comment pouvez-vous contrôler les cookies utilisés ?
                    </Title>
                    <Text>
                        Conformément à la réglementation applicable, vous pouvez refuser
                        l'utilisation des cookies qui ne sont pas strictement nécessaires.
                    </Text>

                    <Text>
                        Par ailleurs, vous pouvez à tout moment configurer votre logiciel de
                        navigation de manière à ce que des cookies soient enregistrés dans votre
                        terminal ou, au contraire, qu'ils soient rejetés (soit systématiquement,
                        soit selon leur émetteur). Vous pouvez également configurer votre logiciel
                        de navigation de manière à ce que l'acceptation ou le refus des cookies vous
                        soit proposé ponctuellement, avant qu'un cookie puisse être enregistré dans
                        votre terminal.
                    </Text>

                    <Text>
                        <Text component="span" fw={600}>
                            Attention :
                        </Text>{' '}
                        tout paramétrage est susceptible de modifier votre navigation sur Internet
                        et vos conditions d'accès à certains services nécessitant l'utilisation de
                        cookies. Nous déclinons toute responsabilité s'agissant des conséquences
                        liées au fonctionnement dégradé de nos services résultant de l'impossibilité
                        d'enregistrer ou de consulter les cookies nécessaires à leur fonctionnement
                        et que vous auriez refusés ou supprimés.
                    </Text>

                    <Title order={3} size="h3" mt="lg" mb="sm">
                        5.4 Comment configurer votre logiciel de navigation ?
                    </Title>
                    <Text>
                        Pour la gestion des cookies et de vos choix, la configuration de chaque
                        navigateur est différente. Elle est décrite dans le menu d'aide de votre
                        navigateur, qui vous permettra de savoir de quelle manière modifier vos
                        souhaits en matière de cookies.
                    </Text>

                    <Paper withBorder p="md" bg="gray.0" mt="md">
                        <Title order={4} size="h4" mb="sm">
                            Configuration par navigateur :
                        </Title>
                        <Stack gap="sm">
                            <Text>
                                <Text component="span" fw={600}>
                                    Internet Explorer / Edge :
                                </Text>{' '}
                                Cliquez sur le bouton Outils, puis sur Options Internet. Sous
                                l'onglet Général, sous Historique de navigation, cliquez sur
                                Paramètres. Cliquez sur le bouton Afficher les fichiers.
                            </Text>
                            <Text>
                                <Text component="span" fw={600}>
                                    Firefox :
                                </Text>{' '}
                                Allez dans l'onglet Outils du navigateur puis sélectionnez le menu
                                Options. Dans la fenêtre qui s'affiche, choisissez Vie privée et
                                cliquez sur Affichez les cookies.
                            </Text>
                            <Text>
                                <Text component="span" fw={600}>
                                    Safari :
                                </Text>{' '}
                                Accédez aux Paramètres via le menu du navigateur (Safari {'>'}{' '}
                                Préférences). Cliquez sur Confidentialité.
                            </Text>
                            <Text>
                                <Text component="span" fw={600}>
                                    Google Chrome :
                                </Text>{' '}
                                Accédez aux Paramètres via le bouton à droite de la barre d'URL ou
                                via le menu du navigateur (Chrome {'>'} Préférences). Sélectionnez
                                Paramètres Avancées. Cliquez sur Paramètres du contenu puis sur
                                Cookies.
                            </Text>
                        </Stack>
                        <Text size="sm" mt="sm">
                            Pour obtenir plus d'information sur les cookies, vous pouvez consulter
                            le site internet de la CNIL.
                        </Text>
                    </Paper>

                    <Title order={2} size="h2" mt="xl" mb="md">
                        6. Quels sont vos droits ?
                    </Title>
                    <Text>
                        Vous êtes seuls à nous avoir communiqué les données en notre possession, par
                        l'intermédiaire du Site. Vous disposez de droits sur vos données à caractère
                        personnel. Conformément à la réglementation en matière de protection des
                        données à caractère personnel, notamment les articles 15 à 22 du RGPD, et
                        après avoir justifié de votre identité, vous avez le droit de nous demander
                        l'accès aux données à caractère personnel vous concernant, la rectification
                        ou l'effacement de celles-ci.
                    </Text>

                    <Text>
                        En outre, dans les limites posées par la loi, vous disposez également du
                        droit de vous opposer au traitement, de le limiter, de décider du sort
                        post-mortem de vos données, de retirer votre consentement à tout moment et
                        du droit à la portabilité des données à caractère personnel fournies.
                    </Text>

                    <Text>
                        Vous pouvez contactez nos Services afin d'exercer vos droits à l'adresse
                        électronique suivante :{' '}
                        <Text component="span" fw={600}>
                            {SITE_CONFIG.company.email}
                        </Text>
                        ou à l'adresse postale suivante :{' '}
                        <Text component="span" fw={600}>
                            {SITE_CONFIG.company.address}
                        </Text>
                        , en joignant à votre demande une copie d'un titre d'identité.
                    </Text>

                    <Title order={2} size="h2" mt="xl" mb="md">
                        7. Pouvons-nous modifier la Charte ?
                    </Title>
                    <Text>
                        Nous nous réservons le droit de modifier la Charte à tout moment. Il est
                        vous est donc recommandé de la consulter régulièrement. En cas de
                        modification, nous publierons ces changements sur cette page et aux endroits
                        que nous jugerons appropriés en fonction de l'objet et de l'importance des
                        changements apportés.
                    </Text>

                    <Text>
                        Votre utilisation du Site après toute modification signifie que vous
                        acceptez ces modifications. Si vous n'acceptez pas certaines modifications
                        substantielles apportées à la présente Charte, vous devez arrêter d'utiliser
                        le Site.
                    </Text>

                    <Title order={2} size="h2" mt="xl" mb="md">
                        8. Délégué à la Protection des Données et contact
                    </Title>
                    <Text>
                        Pour toute question concernant vos données à caractère personnel ou si vous
                        souhaitez supprimer votre Compte, merci de nous contacter à l'adresse
                        postale suivante :{' '}
                        <Text component="span" fw={600}>
                            {SITE_CONFIG.company.address}
                        </Text>{' '}
                        (en indiquant "Vie Privée - Protection des Données"), ou par email à{' '}
                        <Text component="span" fw={600}>
                            {SITE_CONFIG.company.email}
                        </Text>
                        .
                    </Text>

                    <Title order={2} size="h2" mt="xl" mb="md">
                        9. La Commission Nationale de l'Informatique et des Libertés ("CNIL")
                    </Title>
                    <Text>
                        Nous vous rappelons que vous pouvez contacter la CNIL directement sur le
                        site internet de la CNIL ou par courrier à l'adresse suivante : Commission
                        Nationale de l'Informatique et des Libertés (CNIL), 3 Place de Fontenoy -
                        TSA 80715, 75334 PARIS CEDEX 07.
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
                            Joignez-vous aux entreprises qui ont choisi{' '}
                            <Anchor
                                href="https://www.hycreo.fr"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Hycreo
                            </Anchor>{' '}
                            pour les aider à trouver des solutions et réussir en ligne
                        </Text>
                    </Box>
                </Stack>
            </Stack>
        </Container>
    );
};

export default PolitiqueDeConfidientalite;
