
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import HomePage from './components/HomePage/HomePage ';
import Profile from './components/Profile';
import { WithAuthentication } from './hocs/WithAuthentication';



const AuthProfile = WithAuthentication(Profile);

function App() {
   return (
    <div className="p-0 flex justify-center">
      {/* 🚨 Cambia este valor entre true/false para probar la ruta protegida 🚨 */}
      <AuthContext.Provider value={true}>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />

            {/* Usamos una ruta normal, pero con el componente protegido */}
            <Route path="profile" element={<AuthProfile />} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  )
}

export default App
