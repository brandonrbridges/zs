// Types
import type { LayoutProps } from './Layout.props'

// Components
import CommandPalette from '../CommandPalette'
import Explorer from '../Explorer'
import LoginOverlay from '../LoginOverlay'
import Navbar from '../Navbar'

// Icons
import { VscAccount, VscQuestion } from 'react-icons/vsc'

const Layout = (props: LayoutProps) => {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
      <div className='flex flex-1 overflow-hidden'>
        <LeftSidebar />
        <Explorer />
        <div className='h-fit bg-neutral-900 flex-1 text-neutral-400 overflow-auto'>
          {props.children}
        </div>
        <RightSidebar />
      </div>
      <Footer />
      {/* <CommandPalette /> */}
      {/* <LoginOverlay /> */}
    </div>
  )
}

const LeftSidebar = () => {
  return (
    <div className='border-r bg-neutral-900 border-r-neutral-700 w-20'>
      <div className='flex flex-col h-full'>
        <div className='cursor-pointer flex flex-col space-y-2 bg-neutral-800 border-l-4 border-l-sky-400 h-16 text-center w-full text-neutral-100 items-center justify-center'>
          <VscAccount />
          <span className='text-xs scale-90'>Poker Stars</span>
        </div>
        <div className='bg-transparent border-l-transparent cursor-pointer flex flex-col space-y-2 border-l-4 h-16 text-center w-full text-neutral-400 items-center justify-center hover:text-neutral-200'>
          <VscAccount />
          <span className='text-xs scale-90'>50z</span>
        </div>
      </div>
    </div>
  )
}

const RightSidebar = () => {
  const pages = [
    {
      name: 'Support',
      href: '/support',
      icon: <VscQuestion />,
    },
    {
      name: 'Support',
      href: '/support-1',
      icon: <VscQuestion />,
    },
    {
      name: 'Support',
      href: '/support-2',
      icon: <VscQuestion />,
    },
    {
      name: 'Support',
      href: '/support-3',
      icon: <VscQuestion />,
    },
  ]

  return (
    <div className='border-l bg-neutral-900 border-l-neutral-700 w-12'>
      <div className='flex flex-col h-full space-y-8 py-4 text-neutral-400 items-center'>
        {pages.map((page) => (
          <div key={page.href} className='text-xl'>
            {page.icon}
          </div>
        ))}
      </div>
    </div>
  )
}

const Footer = () => {
  return <div className='border-t bg-neutral-900 border-t-neutral-700 h-6 w-full'></div>
}

export default Layout
