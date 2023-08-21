import { Route, Routes } from 'react-router-dom'
import Home from '../containers/Home'

// import DefaultLayout from '../layout/index'
import NewUserForm from '../containers/cadastro'
import Header from '../components/Header'

function Router() {
  return (
    <Routes>
      <Route element={<Header />}>
      <Route path="/" element={<Home />} />
      <Route path="/students" element={<NewUserForm />} />
      </Route>
    </Routes>
  )
}

export default Router