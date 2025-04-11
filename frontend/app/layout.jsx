import { AppProvider } from './context';

export const metadata = {
  title: 'AI Security Scanner',
  description: 'Gratis website beveiliging scan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  )
}
