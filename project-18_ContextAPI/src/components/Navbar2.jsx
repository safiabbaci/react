import { useContext } from "react"
import { ThemeDataContext } from "../context/ThemeCotext"

const Navbar2 = () => {

  const [theme] = useContext(ThemeDataContext);

  return (
    <div className='flex items-center justify-center gap-8'>
      <h4 className='w-15 cursor-pointer text-lg'>Home</h4>
      <h4 className='w-15 cursor-pointer text-lg'>About</h4>
      <h4 className='w-15 cursor-pointer text-lg'>Contact</h4>
      <h4 className='w-15 cursor-pointer text-lg'>Services</h4>
      <h4 className='w-15 cursor-pointer text-lg capitalize'>{theme}</h4>
    </div>
  )
}

export default Navbar2