
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

const PageLayout = () => {
  return (
    <div className='flex flex-col min-h-screen bg-white'>
        <Navbar/>
        <main className='flex-grow pt-[4.5rem] bg-white text-gray-800'>
            <Outlet/>
        </main>
       
    </div>
  )
}

export default PageLayout