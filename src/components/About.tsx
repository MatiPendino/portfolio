import { useTranslation } from 'react-i18next';
import profilePicture from '../assets/profile-picture.png';


export default function About () {
    const { t } = useTranslation();

    return (
        <section 
            className='aos-animate scroll-mt-40 mx-auto w-5/6 mt-20' 
            data-aos='zoom-in' data-aos-duration='500' 
            id='about'
        >
            <div className='flex flex-col lg:flex-row gap-x-14'>
                <div className='
                    relative mx-auto after:content-[""] after-block after:absolute 
                    after:h-full after:lg:h-full 
                    after:w-9/10 after:md:w-75 after:lg:w-full 
                    after:transition-all after:duration-300
                    after:rounded-xl after:border-2 after:border-(--secondary)
                    after:-z-10 after:top-[15px] after:left-[15px]
                    hover:after:top-[10px] hover:after:left-[10px]
                '>
                    <img 
                        src={profilePicture} 
                        className='w-9/10 h-9/10 md:w-75 md:h-75 max-w-xl rounded-xl'
                        alt='About image' 
                    />
                </div>

                <div className='text-white text-base mt-10 lg:mt-0'>
                    <h2 className='text-4xl mb-3'>{t('about-me')}</h2>
                    <p>{t('about-me-p1')}</p>
                    <p className='my-3'>{t('about-me-p2')}</p>
                    <p>{t('about-me-p3')}</p>
                </div>
            </div>
        </section>
    );
};
