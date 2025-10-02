import { useTranslation } from 'react-i18next';

export function Footer () {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className='bg-gray-800 py-10'>
      <div className='flex flex-row justify-around'>
        <div className='col-span-8 lg:col-span-5 my-auto'>
          <span className='text-white'>{t('created-by')} Matías Pendino &copy; {currentYear}</span>
        </div>
        <div className='col-span-4 lg:col-span-2'>
          <button type='button' id='top-button' className='cursor-pointer' onClick={scrollToTop}>
            <svg 
              xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='white' 
              className='bi bi-arrow-up-circle-fill' viewBox='0 0 16 16'
            >
              <path 
                d='M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z'
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};
