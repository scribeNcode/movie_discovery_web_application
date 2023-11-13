
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Movies from './pages/Movies/Movies'

function App() {
  

  return (
     <div className='appWrapper'>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/movies/:id' element={<Movies/>}/>
</Routes>
    </div>
  )
}

export default App















// import { Route, Routes } from 'react-router-dom'
// import './App.css'
// import Home from './pages/Home/Home'
// import Movies from './pages/Movies/Movies'

// function App() {
  

//   return (
//     <div className=''>
// <Routes>
//   <Route path='/' element={<Home/>} />
//   <Route path='/movies' element={<Movies/>}/>
// </Routes>
//     </div>
//   )
// }

// export default App




