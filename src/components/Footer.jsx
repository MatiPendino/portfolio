'use client'
import { useTranslation } from '../app/i18n/client'


export function Footer ({lng}) {
  const {t} = useTranslation(lng)
  // Function scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Get current year
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className='footer__container row w-100 justify-content-between'>
        <div className='col-8 col-lg-5 footer__copyright'>
          <span>{t('created-by')} Matías Pendino &copy; {currentYear}</span>
        </div>
        <div className='col-4 col-lg-2'>
          <button type='button' id='top-button' onClick={scrollToTop}>
            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-caret-up-fill' viewBox='0 0 16 16'>
              <path d='m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z' />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  )
}
