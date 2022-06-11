import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
function App() {
  return (
   <Routes>
      <Route index element={<MainPage/>} />
   </Routes>
  );
}

export default App;
