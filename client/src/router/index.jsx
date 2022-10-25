import { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Footer } from '../components';
import { Home, Login, Register, IsNotLogged, ListPage } from '../pages';
import { PrivateRoutesCheck, PublicRoutesCheck } from '../utils';
import { AuthContext } from '../context/auth.context';

export const AppRouter = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { isTokenValid, isLogged } = useContext(AuthContext);

  useEffect(() => {
    isTokenValid()
      .then(() => setIsLoaded(true))
      .catch((err) => { throw err });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <main>
        {!isLoaded ? (<div style={{ textAlign: 'center' }}>Loading...</div>) : (
          <Routes>
            <Route element={<PublicRoutesCheck isLogged={isLogged} />}>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/isnotlogged" element={<IsNotLogged />} />
              <Route path="*" element={<div>Page not found - Public</div>} />
            </Route>

            <Route element={<PrivateRoutesCheck isLogged={isLogged} />}>
              <Route path="/list" element={<ListPage />} />
              <Route path="*" element={<div>Page not found - Private</div>} />
            </Route>
          </Routes>
        )}
      </main>
      <Footer />
    </BrowserRouter>
  )
}