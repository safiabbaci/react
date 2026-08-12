import { useContext } from 'react'
import Button from './components/Button'
import Navbar from './components/Navbar'
import { ThemeDataContext } from './context/ThemeCotext'

const App = () => {

  const [theme] = useContext(ThemeDataContext);

  return (
    <div style={{backgroundColor: theme == 'light' ? '#fef3c6' : '#ffb900'}} className='min-h-screen w-full text-white'>
      <Navbar />
      <Button />
    </div>
  )
}

export default App