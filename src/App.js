import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './Main/Main';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import Blog from './component/Blog/Blog';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/blog',
          element: <Blog></Blog>
        },
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
