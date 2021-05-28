import React from 'react';
import './App.css';
import Header from './Header';
import Table from './Table';
import Infobox from './Infobox';
import Map from './Map';
import {Card,CardContent,Typography} from '@material-ui/core';



function App() {

  return (
    <div className="App">
    <Header/>
    <div className="App__container">
<div className="App__left">
<Card >
        <CardContent>
          <Map/>
        </CardContent>
        </Card>
</div>
     <div className="App__right">
     <Card >
        <CardContent>
          <Table/>
        </CardContent>
        </Card>
     </div>
       
        </div>
   
    </div>
  );
}

export default App;
