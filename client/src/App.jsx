import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homme from './pagess/Homme';
import SignInn from './pagess/SignInn';
import SignUpp from './pagess/SignUpp';
import Aboutt from './pagess/Aboutt';
import Profille from './pagess/Profille';
import Headerr from './component/Headerr';


export default function App(){
   return ( 
       <BrowserRouter>
       <Headerr/>
      <Routes>   
         <Route path="/" element={<Homme />} />
         <Route path="/sign-inn" element={<SignInn />} />
         <Route path="/sign-upp" element={<SignUpp />} />
         <Route path="/aboutt" element={<Aboutt />} />
         <Route path="/profille" element={<Profille />} />
      </Routes>
   </BrowserRouter>
   );
}