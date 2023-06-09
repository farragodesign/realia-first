import '../styles/globals.css'
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link rel="apple-touch-icon" sizes="76x76" href="../assets/img/apple-icon.png" /> */}
        {/* <link rel="icon" type="image/png" href="../assets/img/favicon.png" /> */}
        <title>Soft UI Dashboard Tailwind</title>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
        <script src="https://kit.fontawesome.com/42d5adcbca.js" crossOrigin="anonymous"></script>
        <link href="../assets/css/nucleo-icons.css" rel="stylesheet" />
        <link href="../assets/css/nucleo-svg.css" rel="stylesheet" />
        <script src="https://unpkg.com/@popperjs/core@2"></script>
        <link href="../assets/css/soft-ui-dashboard-tailwind.css?v=1.0.5" rel="stylesheet" />
        <script defer data-site="YOUR_DOMAIN_HERE" src="https://api.nepcha.com/js/nepcha-analytics.js"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}