import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import Link from 'next/link'
import { GiMatchTip } from 'react-icons/gi'

export default function TopNav() {
  return (
    <Navbar
      maxWidth='xl'
      className=' bg-gradient-to-r from-purple-400 to-purple-700'
      classNames={{
        item: ['text-xl', 'text-white', 'uppercase'],
      }}
    >
      <NavbarBrand as={Link} href={'/'}>
        <GiMatchTip size={40} className='text-gray-200' />
        <div className='font-bold text-3xl'>
          <span className='text-gray-900'>Next</span>
          <span className='text-gray-200'>Match</span>
        </div>
      </NavbarBrand>
      <NavbarContent justify='center'>
        <NavbarItem as={Link} href={'/members'}>
          Matches
        </NavbarItem>
        <NavbarItem as={Link} href={'/lists'}>
          Lists
        </NavbarItem>
        <NavbarItem as={Link} href={'/messages'}>
          Messages
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <Button as={Link} href='/login' variant='bordered' className='text-white'>
          Login
        </Button>
        <Button as={Link} href='/register' variant='bordered' className='text-white'>
          Register
        </Button>
      </NavbarContent>
    </Navbar>
  )
}
