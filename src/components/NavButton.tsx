import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode;
  active: boolean;
  onClick: () => void;
}

const NavButton = (props: Props) => {
  return (
    <motion.div
      className={`m-2 px-4 p-2 transition cursor-pointer rounded-full ${props.active ? 'bg-[#ffffff6b]' : 'hover:bg-[#ffffff49]'}`}
      onClick={props.onClick}
    >
      {props.children}
    </motion.div>
  );
};

export default NavButton;
