// Client Components
import { NavbarUser } from './Navbar.client'

// Icons
import {
  VscAccount,
  VscCreditCard,
  VscPlay,
  VscSearch,
  VscSettings,
  VscSettingsGear,
} from 'react-icons/vsc'

const Navbar = () => {
  const pages = [
    {
      name: 'Home',
      href: '/',
      icon: <VscPlay />,
    },
    {
      name: 'Configurations',
      href: '/configurations',
      icon: <VscSettings />,
    },
    {
      name: 'Add Credits',
      href: '/add-credits',
      icon: <VscCreditCard />,
    },
  ]

  return (
    <div className='border-y flex bg-neutral-900 border-neutral-700 w-full p-4 items-center justify-between'>
      <ul className='flex space-x-4 text-neutral-500 items-center'>
        {pages.map((page) => (
          <li key={page.href}>
            <a href={page.href}>{page.icon}</a>
          </li>
        ))}
      </ul>
      <div className='flex space-x-4 text-neutral-500 items-center'>
        <VscSearch />
        <VscSettingsGear />
        <NavbarUser />
      </div>
    </div>
  )
}

export default Navbar
