import Home from './pages/home/Home.jsx'
import Login from './pages/login/Login'
import List from './pages/list/List'
import New from './pages/new/New.jsx';
import Single from './pages/single/Single.jsx';
import './app.scss'


//passing the appropriate inputs
import {User_inputs} from './formInputs'

//context
import {useContext} from 'react'
import {DarkContext} from './context/darkModeContext'

//react-router
import {Routes, Route} from 'react-router-dom'


function App() {

  const {darkMode} = useContext(DarkContext)


  return (
            <div className={darkMode ? "App Night" : "App"} >

              <Routes >
                <Route path='/'>
                <Route index element={<Home/>}/>
                <Route path='users'>
                    <Route index element={<List/>}/>
                    <Route path='login' element={<Login/>}/>
                    <Route path='new' element={<New inputs={User_inputs} title='add new user'/>}/>
                    <Route path=':userId' element={<Single/>}/>
                </Route>

                <Route path='products'>
                  <Route index element={<List/>}/>
                  <Route path='new' element={<New />}/>
                  <Route path=':productId' element={<Single/>}/>
                </Route>


                </Route>
                
              </Routes>
              
            </div>


  );
}

export default App;