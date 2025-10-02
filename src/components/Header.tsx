import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

export default function Example() {
  const { t, i18n } = useTranslation();

  const navigation = [
    { name: t('index').toUpperCase(), href: '#' },
    { name: t('about-me').toUpperCase(), href: '#about' },
    { name: t('skills').toUpperCase(), href: '#skills' },
    { name: t('experience').toUpperCase(), href: '#experience' },
    { name: t('projects').toUpperCase(), href: '#projects' },
  ];

  return (
    <Disclosure
      as='header'
      className='
        fixed w-full z-40 bg-gray-800 backdrop-blur-[10px] 
        dark:bg-gray-800/50 dark:after:pointer-events-none dark:after:inset-x-0
        dark:after:absolute dark:after:bottom-0 dark:after:h-px dark:after:bg-white/10
      '
    >
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-16 items-center justify-between'>
          <div className='flex flex-1 items-center justify-start sm:items-stretch'>
            <div className='flex shrink-0 items-center'>
              <a 
                className='text-[20px] w-auto font-semibold text-white' 
                href='#'
              >
                Matías Pendino
              </a>
            </div>
          </div>

          {/* Mobile menu button*/}
          <div className='inset-y-0flex items-center sm:hidden'>
            <DisclosureButton 
            className='
              group relative inline-flex items-center justify-center 
              rounded-md p-2 text-gray-400 
              hover:bg-white/5 hover:text-white focus:outline-2 
              focus:-outline-offset-1 focus:outline-indigo-500
            '>
              <span className='absolute -inset-0.5' />
              <Bars3Icon className='block size-6 group-data-open:hidden' />
              <XMarkIcon className='hidden size-6 group-data-open:block' />
            </DisclosureButton>
          </div>

          <div className='hidden sm:ml-6 sm:block'>
            <nav className='flex space-x-4'>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='
                    text-gray-300 hover:bg-white/5 hover:text-white font-semibold
                    rounded-md px-3 py-2 text-sm font-medium
                  '
                >
                  {item.name}
                </a>
              ))}
              <button 
                className='
                  text-gray-300 hover:bg-white/5 hover:text-white 
                  rounded-md px-3 py-2 text-sm font-medium
                ' 
                onClick={() => i18n.changeLanguage('es')}
              >
                ES
              </button>
              <button 
                className='
                  text-gray-300 hover:bg-white/5 hover:text-white 
                  rounded-md px-3 py-2 text-sm font-medium
                ' 
                onClick={() => i18n.changeLanguage('en')}
              >
                EN
              </button>
            </nav>
          </div>
        </div>
      </div>

      <DisclosurePanel className='sm:hidden'>
        <nav className='text-center space-y-1 px-2 pt-2 pb-3'>
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as='a'
              href={item.href}
              className='
                text-gray-300 hover:bg-white/5 hover:text-white block rounded-md 
                px-3 py-2 text-base font-medium
              '
            >
              {item.name}
            </DisclosureButton>
          ))}
          <button 
            className='
              w-full block text-center text-gray-300 font-medium
              rounded-md px-3 py-2 text-sm hover:bg-white/5 hover:text-white 
            ' 
            onClick={() => i18n.changeLanguage('es')}
          >
            ES
          </button>
          <button 
            className='
              w-full block text-center text-gray-300 font-medium
              rounded-md px-3 py-2 text-sm hover:bg-white/5 hover:text-white 
            ' 
            onClick={() => i18n.changeLanguage('en')}
          >
            EN
          </button>
        </nav>
      </DisclosurePanel>
    </Disclosure>
  );
};