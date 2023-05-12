// Context
import { AuthProvider } from '@/context/auth.context'
import { TabsProvider } from '@/context/tabs.context'

// Components
import { Layout } from '@/components'

// Styles
import './globals.scss'

export const metadata = {
  title: 'Zerosolver',
  description: 'AI Generated Poker Solver',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <AuthProvider>
          <TabsProvider>
            <Layout>{children}</Layout>
          </TabsProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
