
export default function RootLayout ({children}) {
  return (
    <html>
      <head>
      <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <title>Matías Pendino - Portfolio</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
