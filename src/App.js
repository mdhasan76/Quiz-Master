import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './component/Main/Main';
import Home from './component/Home/Home';
import Header from './component/Header/Header';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/header',
          element: <Header></Header>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
