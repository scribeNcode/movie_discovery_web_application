import './Header.css'
import Navbar from './Navbar/Navbar'
import DescriptionBox from './DescriptionBox/DescriptionBox'

function Header() {
  return (
    <div className='HeaderContainer'>
         <Navbar/>
         <DescriptionBox/> 
    </div>
  )
}
export default Header