import { createBrowserRouter } from 'react-router-dom';
import App from '@/pages/App';
import Upload from '@/pages/Upload';

export const routes = createBrowserRouter([{
  path: "/",
  element: <App />,
}, {
  path: "/upload",
  element: <Upload />,
}])