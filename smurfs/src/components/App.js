import React, { useState, useEffect } from 'react';
import axios from "axios";
import {SmurfContext} from './context/SmurfContext';
import Smurfs from './Smurfs';
import SmurfCard from './SmurfCard';
import "./App.css";

function App() {

  const [smurfs, setSmurfs] = useState([]);
  
  
  useEffect(() => {
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(response => {
        console.log(response.data);
        setSmurfs(response.data);
      })
      .catch(error => {
        console.log("the data was not returned", error);
      });
  }, []);


	const addSmurf = item => {

      axios
        .post(`http://localhost:3333/smurfs`, item)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log("the data was not posted", error);
        });
    }
	
	
	return (
		<div className="App">
			<SmurfContext.Provider value={{ smurfs}}>
	     <Smurfs/>
       <SmurfCard addSmurf={addSmurf}/>
	
			</SmurfContext.Provider>
		</div>
	);
}

export default App;
