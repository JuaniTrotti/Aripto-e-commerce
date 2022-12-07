import { Context } from './context/userContext'
import { Route, Routes, Navigate} from 'react-router-dom'
import { MainLayout } from './components/layout/mainLayout'
import { UserLayout } from './components/layout/userLayout'
import { NotFound } from './components/generics/404'
import { HeaderLayout } from './components/layout/headerLayout'
import { ItemLayout } from './components/layout/itemLayout'
import { Login } from './components/users/login'
import { SignUp } from './components/users/sign'
import './style.css'

function App() {
  return (
    <Context>
      <Routes>
        <Route path='/' element={<Navigate to="/main" replace/>}/>
        <Route path="/main" element={<HeaderLayout/>}>
          <Route index element={<MainLayout/>}/>
          <Route path="item/:id" element={<ItemLayout/>}/>
        </Route>
        <Route path='/user' element={<UserLayout/>}>
          <Route path='create-user' element={<SignUp/>}/>
          <Route path='login' element={<Login/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Context>
  )
}

export default App