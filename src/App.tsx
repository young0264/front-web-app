import { Route, Routes, useNavigate } from 'react-router-dom';

import LoginPage from './page/LoginPage';
import PostPage from './page/PostPage';
import { useEffect } from 'react';

function App() {
 
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/post" element={<PostPage />} />
    </Routes>
  );
}

export default App;
