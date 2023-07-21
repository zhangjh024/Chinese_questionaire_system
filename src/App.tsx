import {RouterProvider} from 'react-router-dom'
import routerConfig from './router/index'
// import Father from "./contextDemo/Father";
function App() {
  return <RouterProvider router={routerConfig}></RouterProvider>
  // return <Father></Father>
}

export default App
