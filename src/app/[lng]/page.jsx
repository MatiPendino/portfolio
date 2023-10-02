import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import { Skill } from '../../components/Skill'
import { HeroTyped } from '../../utils/HeroTyped'
import { SocialMediaIcon } from '../../components/SocialMediaIcon'
import { Project } from '../../components/Project'
import { useTranslation } from '../i18n'

export default async function HomePage ({ params: {lng} }) {
  const {t} = await useTranslation(lng)
  return (
    <main>
      <section className='hero' id='hero'>
        <div className='row hero__container'>
          <div className='col-12 col-lg-10'>
            <h3>{t('presentation')}</h3>
            <h1>Matías Pendino</h1>
            <h3>{t('and-im')} <HeroTyped /></h3>

            <div className='hero__social-media'>
              <SocialMediaIcon link='https://www.linkedin.com/in/matias-pendino/' id='linkedin' iconClass='bi-linkedin' iconPath='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z' />
              <SocialMediaIcon link='https://github.com/MatiPendino' id='github' iconClass='bi-github' iconPath='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
              { /*<SocialMediaIcon link='https://www.youtube.com/@matipendino879/featured' id='youtube' iconClass='bi-youtube' iconPath='M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z' />
              <SocialMediaIcon link='https://www.tiktok.com/@matipendino6' id='tiktok' iconClass='bi-tiktok' iconPath='M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z' /> */}
            </div>

            <div className='mx-2 hero__cv'>
              <a href='/files/Matías Pendino Resume.pdf' download className='secondary-color button' id='download-cv'>{t('download-resume')}</a>
            </div>
          </div>
        </div>
      </section>

      <section className='about aos-animate' data-aos='zoom-in' data-aos-duration='500' id='about'>
        <div className='row about__container'>
          <div className='col-12 col-lg-6'>
            <div className='about__container-image' id='image-about-container'>
              <img src='/img/hero_img.HEIC' id='image-about' alt='About image' />
            </div>
          </div>

          <div className='about__container-text col-12 col-lg-6'>
            <h2 className='mb-3'>{t('about-me')}</h2>
            <p>{t('about-me-p1')}</p>
            <p>{t('about-me-p2')}</p>
            <p>{t('about-me-p3')}</p>
          </div>
        </div>
      </section>

      <section className='skills' id='skills'>
        <h3 className='text-center'>{t('skills')}</h3>

        <div className='row col-12 col-lg-9 skills__container'>
          <Skill languageName='Django' languageLevel={t('very-good')} languageIconPath='/img/logo-django.png' lng={lng} />
          <Skill languageName='Python' languageLevel={t('very-good')} languageIconPath='/img/logo-python.png' lng={lng} />
          <Skill languageName='Django REST' languageLevel={t('good')} languageIconPath='/img/logo-drf.png' lng={lng} />
          <Skill languageName='WordPress' languageLevel={t('good')} languageIconPath='/img/logo-wordpress.png' lng={lng} />
          <Skill languageName='Git' languageLevel={t('good')} languageIconPath='/img/logo-git.png' lng={lng} />
          <Skill languageName='GitHub' languageLevel={t('good')} languageIconPath='/img/logo-github.png' lng={lng} />
          <Skill languageName='MySQL' languageLevel={t('good')} languageIconPath='/img/logo-mysql.png' lng={lng} />
          <Skill languageName='HTML5' languageLevel={t('good')} languageIconPath='/img/logo-html5.png' lng={lng} />
          <Skill languageName='Bootstrap' languageLevel={t('good')} languageIconPath='/img/logo-bootstrap.png' lng={lng} />
          <Skill languageName='Flutter/Dart' languageLevel={t('intermediate')} languageIconPath='/img/logo-flutter.png' lng={lng} />
          <Skill languageName='CSS3' languageLevel={t('intermediate')} languageIconPath='/img/logo-css.png' lng={lng} />
          <Skill languageName='PHP' languageLevel={t('intermediate')} languageIconPath='/img/logo-php.png' lng={lng} />
          <Skill languageName='JavaScript' languageLevel={t('intermediate')} languageIconPath='/img/logo-js.png' lng={lng} />
          <Skill languageName='React' languageLevel={t('intermediate')} languageIconPath='/img/logo-react.png' />
          <Skill languageName='JQuery' languageLevel={t('intermediate')} languageIconPath='/img/logo-jquery.png' lng={lng} />
        </div>
      </section>

      <section className='experience' id='experience'>
        <h3 className='text-center mb-4'>{t('experience')}</h3>

        <div className='experience__container justify-content-center'>

          <div className='col-12 col-lg-4 aos-animate' data-aos='fade-left' data-aos-duration='600' data-aos-delay='200'>
            <div className='experience-flex-responsive-invert'>
              <ul className='nav nav-pills' id='myTab' role='tablist'>
                <li className='col-6 col-lg-12 nav-item mb-4'>
                  <a className='nav-link experience-tab active' id='muchticket-tab' data-bs-toggle='tab' href='#muchticket' role='tab' aria-controls='muchticket' aria-selected='true'>MuchTicket</a>
                </li>
                <li className='col-6 col-lg-12 nav-item mb-4'>
                  <a className='nav-link experience-tab' id='litoral-tab' data-bs-toggle='tab' href='#litoral' role='tab' aria-controls='litoral' aria-selected='false'>Litoral Celulares</a>
                </li>
                <li className='col-6 col-lg-12 nav-item mb-4'>
                  <a className='nav-link experience-tab' id='freelance-tab' data-bs-toggle='tab' href='#freelance' role='tab' aria-controls='freelance' aria-selected='false'>Freelance</a>
                </li>
              </ul>
            </div>
          </div>

          <div className='col-12 col-lg-7 aos-animate' data-aos='fade-right' data-aos-duration='800' data-aos-delay='200'>
            <div className='tab-content' id='myTabContent'>

              <div className='tab-pane fade show active experience-card' id='muchticket' role='tabpanel' aria-labelledby='muchticket-tab'>
                <h4>{t('experience-muchticket')}</h4>
                <p>{t('experience-muchticket-date')}</p>
                <ul>
                  <li className='mt-3'>{t('experience-muchticket-i1')}</li>
                  <li className='mt-3'>{t('experience-muchticket-i2')}</li>
                  <li className='mt-3'>{t('experience-muchticket-i3')}</li>
                </ul>
              </div>

              <div className='tab-pane fade show experience-card' id='litoral' role='tabpanel' aria-labelledby='litoral-tab'>
                <h4>{t('experience-litoral')}</h4>
                <p>{t('experience-litoral-date')}</p>
                <ul>
                  <li className='mt-3'>{t('experience-litoral-i1')}</li>
                  <li className='mt-3'>{t('experience-litoral-i2')}</li>
                  <li className='mt-3'>{t('experience-litoral-i3')}</li>
                </ul>
              </div>

              <div className='tab-pane fade show experience-card' id='freelance' role='tabpanel' aria-labelledby='freelance-tab'>
                <h4>{t('experience-freelance')}</h4>
                <p>{t('experience-freelance-date')}</p>
                <ul>
                  <li className='mt-3'>{t('experience-freelance-i1')}</li>
                  <li className='mt-3'>{t('experience-freelance-i2')}</li>
                  <li className='mt-3'>{t('experience-freelance-i3')}</li>
                  <li className='mt-3'>{t('experience-freelance-i4')}</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

      </section>

      <section className='portfolio pb-4' id='portfolio'>
        <h3 className='text-center'>{t('some-projects')}</h3>

        <div className='portfolio__container row col-10 col-lg-10'>
          <Project imagePath='/img/cocinasalud.png' projectId='cocinasalud' projectName='CocinaSalud' technologies='HTML, CSS, Bootstrap, Django, JavaScript, MySQL' demoUrl='https://cocinasalud.net' repoUrl='https://github.com/MatiPendino/cocina-salud' />
          {/*<Project imagePath='/img/league.png' projectId='league' projectName='CreateLeague' technologies='HTML, CSS, Bootstrap, Django, MySQL' repoUrl='https://github.com/MatiPendino/leagues-creator' /> */}
          <Project imagePath='/img/bespoke.png' projectId='bespoke' projectName='BeSpoke' technologies='WordPress' demoUrl='https://arquitecturabespoke.ar' />
          <Project imagePath='/img/cmaccesorios.png' projectId='cmaccesorios' projectName='CMAccesorios' technologies='WordPress' demoUrl='https://cmaccesorios.com/' />
          <Project imagePath='/img/gifapp.png' projectId='giphy' projectName='GifApp' technologies='React' repoUrl='https://github.com/MatiPendino/gif-app' demoUrl="https://matipendino.github.io/gif-app/" />
          <Project imagePath='/img/peliculas.png' projectId='peliculas' projectName='Peliculas' technologies='Dart/Flutter' repoUrl='https://github.com/MatiPendino/peliculas' />
          <Project imagePath='/img/votar-fms.png' projectId='fms' projectName='Votar FMS' technologies='Java, Android Studio, Firebase' demoUrl='https://play.google.com/store/apps/details?id=com.eddd.votarfms&hl=es_419' repoUrl='https://github.com/MatiPendino/VotarFMS' />
        </div>
      </section>
    </main>
  )
}
