import Registration from './form/Registration';
import { Routes, Route, Link} from 'react-router-dom'

import HtmlAddBackup from './form/HtmlAddBackup';

function App() {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Registration/>}/>
        <Route exact path='/grid' element={<HtmlAddBackup/>}/>
        

      </Routes>
    

    </>
  );
}

export default App;