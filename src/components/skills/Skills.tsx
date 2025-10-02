import { useTranslation } from 'react-i18next';
import InfiniteLogoSlider from './InfiniteLogoSlider';

export default function Skills () {
    const { t } = useTranslation();

    return (
        <section className='skills scroll-mt-20 mx-6 mt-25 mb-13' id='skills'>
            <h3 className='text-center text-white text-4xl mb-7'>{t('skills')}</h3>
            <InfiniteLogoSlider  />
        </section>
    );
};