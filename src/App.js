import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllNews from './components/AllNews';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
    <Navbar />
     <Router>
      
       <Routes>
       
         <Route exact path="/" element={<AllNews key={"general"} pageSize={9} country="in" category="general"/>}>
         </Route>
         <Route  path="/Business" element={<AllNews key={"business"} pageSize={9} country="in" category="business"/>}>
         </Route>
         <Route  path="/Science" 
           element={<AllNews key={"science"} pageSize={9} country="in" category="science" />}>
           </Route>

         <Route  path="/Entertainment" element={<AllNews key={"entertainment"} pageSize={9} country="in" category="entertainment" />} >
           
         </Route>
         <Route  path="/Sports" element={<AllNews key={"sports"} pageSize={9} country="in" category="sports" />}>
           
         </Route>
         <Route  path="/Tech" element={<AllNews key={"tech"} pageSize={9} country="in" category="technology" />}>
           
         </Route>
         <Route  path="/Health" element={ 
           <AllNews  key={"health"} pageSize={9} country="in" category="health" />

         }>
         </Route>
       </Routes>
     </Router>
   </>
  );
}

export default App;
