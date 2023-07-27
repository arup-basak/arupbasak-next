'use client'

import { useState } from 'react';
import NavButton from './NavButton';
import { useRouter } from 'next/navigation';

const NavBar = () => {
  const router = useRouter()
  const buttons = [
    { id: '', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
    { id: 'about', label: 'About' },
  ];

  const [activeButton, setActiveButton] = useState('home');

  const handleOnClick = (id: string) => {
    setActiveButton(id)
    router.push(`/${id}`)
  }

  return (
    <div className='w-fit m-auto'>
      <div className='my-3 px-2 flex rounded-full backdrop-blur-lg backdrop-brightness-105 transition shadow-sm'>
        {buttons.map((button) => (
          <NavButton
            key={button.id}
            active={activeButton === button.id}
            onClick={() => handleOnClick(button.id)}
          >
            {button.label}
          </NavButton>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
