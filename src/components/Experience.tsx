import { useTranslation } from 'react-i18next';
import { experienceData } from '../data';
import Card from './Card';


export default function Experience () {
    const { t } = useTranslation();

    return (
        <section className='experience scroll-mt-20 mt-20' id='experience'>
            <h3 className='text-center text-white text-4xl'>{t('experience')}</h3>

            <ol className='group/list mt-11 mx-auto w-9/10 md:w-4/6'>
                {experienceData.map((exp) => (
                    <Card key={exp.companyName}
                        companyName={exp.companyName}
                        title={t(exp.title)}
                        startDate={`${t(exp.startDate)} ${exp.startDateSuffix}`}
                        endDate={`${t(exp.endDate)} ${exp.endDateSuffix ? ` ${exp.endDateSuffix}` : ''}`}
                        type='experience'
                        description={t(exp.description)}
                        technologies={exp.technologies}
                    />
                ))}
            </ol>
        </section>
    );
};