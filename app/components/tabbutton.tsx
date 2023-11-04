import React from 'react';
import { motion } from 'framer-motion'

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" }
}

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
  const buttonClasses = active ? '' : '';

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-slate-600 ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className='h-1 bg-slate-700 mt-2 mr-3'
      
      ></motion.div>
    </button>
  );
}

export default TabButton;