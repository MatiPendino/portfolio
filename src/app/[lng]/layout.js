import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Ubuntu, Karla, Nunito } from '@next/font/google'
import { dir } from 'i18next'

const languages = ['es', 'en']

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

const ubuntu = Ubuntu({
  weight: ['300', '500', '400'],
  variable: '--font-ubuntu',
  subsets: ['latin']
})
const karla = Karla({
  weight: ['400', '600', '700'],
  variable: '--font-karla',
  subsets: ['latin']
})
const nunito = Nunito({
  weight: ['400', '500', '700'],
  variable: '--font-nunito',
  subsets: ['latin']
})

export const metadata = {
  title: 'Matías Pendino - Portfolio',
  description: 'Portfolio created using Next.JS 13'
}

export default function RootLayout ({ children, params: {lng} }) {
  return (
    <html lang={lng} dir={dir(lng)} className={`${nunito.variable} ${karla.variable} ${ubuntu.variable}`}>
      <head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <title>Matías Pendino - Portfolio</title>
      </head>
      <body>
        <Header lng={lng} />
        {children}
        <Footer lng={lng} />
      </body>
    </html>
  )
}
