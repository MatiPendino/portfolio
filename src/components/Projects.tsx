import { useTranslation } from 'react-i18next';
import { projectsData } from '../data';
import Card from './Card';



export default function Projects () {
    const { t } = useTranslation();

    return (
        <section className='projects scroll-mt-20 mt-20' id='projects'>
            <h3 className='text-center text-white text-4xl'>{t('some-projects')}</h3>

            <ol className='group/list mt-11 mx-auto w-9/10 md:w-4/6'>
                {projectsData.map((project) => (
                    <Card key={project.title}
                        title={project.title}
                        type='project'
                        url={project.url}
                        projectImg={project.img}
                        description={t(project.description)}
                        technologies={project.technologies}
                    />
                ))}
            </ol>
        </section>
    );
};
