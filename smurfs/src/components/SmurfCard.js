import React, {useState} from 'react';

export default function SmurfCard (props) {
    const [newSmurf, setNewSmurf] = useState({
        name:"",
        age:"",
        height:"" 

    });
    
  const handleChanges = e => {

    setNewSmurf({...newSmurf, 
        [e.target.name]:e.target.value});
  };

  const submitSmurf = () => {
    
    props.addSmurf(newSmurf);
    setNewSmurf({
        name:"",
        age:"",
        height:"" 

    });
  }



    return (
        <form>
            Name:
         <input
            className="name-input"
            type="text"
            name="name"
            value={newSmurf.name}
            onChange={handleChanges}
          />
         <p> Age:
            <input
            className="age-input"
            type="text"
            name="age"
            value={newSmurf.age}
            onChange={handleChanges}
          /> </p>
          <p>
               Height:
            <input
            className="height-input"
            type="text"
            name="height"
            value={newSmurf.height}
            onChange={handleChanges}
          /> </p>
         <button onClick={submitSmurf}>
				Add New Smurf
			</button>
        </form>
      );

}