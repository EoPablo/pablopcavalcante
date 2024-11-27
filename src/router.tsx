import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/home/Home';
import Sobre from './pages/sobre/Sobre';
import Cursos from './pages/cursos/Cursos';
import Projetos from './pages/projetos/Projetos';
import Notfound from './pages/notfound/Notfound';

import Layout from './components/layout/Layout';

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path:'/sobre',
                element: <Sobre/>
            },
            {
                path:'/cursos',
                element: <Cursos/>
            },
            {
                path: '/projetos',
                element: <Projetos/>
            },
            {
                path:'*',
                element: <Notfound/>
            }
        ]
    }
])

export { router }