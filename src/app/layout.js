import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Header from '@components/Header';
import ThemeRegistry from '@theme/ThemeRegistry';
import './app.css';
import { BaseGridContainer } from '@components/BaseComponents';
import StoreProvider from '@app/StoreProvider';


export const metadata = {
  title: 'BKrental',
  description: 'Generated by Next.js',
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='app'>
        <AppRouterCacheProvider >
          <ThemeRegistry>
            <StoreProvider>
              {/* Header goes here */}
              <Header className="header" />
              {children}
            </StoreProvider>
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
