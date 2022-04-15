import Homepage from "./pages/Homepage";
import { Routes, Route, Link } from "react-router-dom";
import Mydashboard from './pages/Mydashboard';
import Privacypage from "./pages/Privacypage";
import Productpage from "./pages/Productpage";
import Myaccountpage from './pages/Myaccountpage';
import FashionCategorypage from './pages/FashionCategorypage';
import Termspage from './pages/Termspage';
import MyPostAdPage from './pages/MyPostAdPage';
import Staysafepage from './pages/Staysafepage';
function App() {
  return (
    
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Mydashboard />} />
        <Route path="/privacy" element={<Privacypage />} />
        <Route path="/productpage" element={<Productpage />} />
        <Route path="/myaccount" element={<Myaccountpage />} />
        <Route path="/fashioncategory" element={<FashionCategorypage />} />
        <Route path="/terms" element={<Termspage />} />
        <Route path="/mypostad" element={<MyPostAdPage />} />
        <Route path="/staysafe" element={<Staysafepage />} />
     </Routes>
    </>
  );
}

export default App;
