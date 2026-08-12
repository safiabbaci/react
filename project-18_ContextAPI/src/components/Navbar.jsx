import { useContext } from 'react';
import Navbar2 from './Navbar2'
import { ThemeDataContext } from '../context/ThemeCotext';

const Navbar = () => {
  const [theme] = useContext(ThemeDataContext);
  return (
    <div  style={{backgroundColor: theme == 'light' ? 'oklch(71.5% 0.143 215.221)' : 'oklch(45% 0.085 224.283)'}} className='flex items-center justify-between bg-cyan-800 px-9 py-7'>
      <h1 className='font-bold text-4xl'>Logo</h1>
      <Navbar2 />
    </div>
  )
}

export default Navbar