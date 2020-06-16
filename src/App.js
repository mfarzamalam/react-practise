import React, {Fragment} from 'react';
import './App.css';
import Student from './Student';
import Teacher from './Teacher';
import Class from './Class';

function App() {
  return (
    // <React.Fragment>
        
    //     <h1>starting</h1>
    //     <h2>from react fragment</h2>    

    // </React.Fragment>

    // <Fragment>
    //     <h1>Creating with react fragment</h1>   {/* it is same as div  */}
    //      <Student name="farzam"></Student>       
    // </Fragment>

    <Fragment>

        <Student></Student>
        <Teacher>
        </Teacher>
        <br/>

        <Class status="Ongoing" numofkids={2}></Class>
        
        <Class numofkids={0}></Class>
    
    </Fragment>

  );
}

export default App;
