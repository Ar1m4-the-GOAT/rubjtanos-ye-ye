
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/Homepage.css';
import './css/Footer.css';
import './css/Header.css';
import './css/Categorie.css';
import './css/Prodotti.css';
import './css/Prodotto.css';
import './css/Carrello.css';
import reportWebVitals from './reportWebVitals';
import Homepage from './Pages/Homepage';
import Prodotti from './Pages/Prodotti';
import Categorie from './Pages/Categorie';
import ChiSiamo from './Pages/ChiSiamo';
import Carrello from './Pages/Carrello';
import Termini from './Pages/Termini';
import Privacy from './Pages/Privacy';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import Prodotto from './Pages/Prodotto';
import {CarrelloProvider} from './components/CarrelloContext'
import {TotaleProvider} from './components/TotaleContext';

const root = ReactDOM.createRoot(document.getElementById('root'));



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {  
        path: "/",
        element: <Homepage/>,
      },
      {  
        path: "/Prodotti",
        element: <Prodotti/>
      },
      {  
        path: "/Prodotti/:id",
        element: <Prodotto/>
      },
      {
        path: "/Categorie/:category",
        element: <Categorie/>
      },
      {
        path: "/ChiSiamo",
        element: <ChiSiamo/>
      },
      {
        path: "/Carrello",
        element: <Carrello/>
      },
      {
        path: "/Termini",
        element: <Termini/>
      },
      {
        path: "/Privacy",
        element: <Privacy/>
      },
    ]
    
  }
]);
root.render(
  // <React.StrictMode>
  <TotaleProvider>
    <CarrelloProvider>
      <RouterProvider router={router} />
    </CarrelloProvider>
  </TotaleProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
