import { IconArrowRight } from '@tabler/icons-react';
import Hero from '../Hero';
import './AccueilHero.scss';
import PocketButton from '../PocketButton';

const AccueilHero = () => {
    return (
        <Hero
            title="AccueilHeroTitre"
            description="AccueilHeroDescription"
            backgroundImage="AccueilBackgroundImage"
        >
            <PocketButton
                className="hero-button"
                variant="filled"
                rightSection={<IconArrowRight />}
                size="md"
                mt={'md'}
                mr={'auto'}
                fieldId="AccueilHeroButton"
                to="/contact"
                bg={'rosePoudre.7'}
            />
        </Hero>
    );
};

export default AccueilHero;
