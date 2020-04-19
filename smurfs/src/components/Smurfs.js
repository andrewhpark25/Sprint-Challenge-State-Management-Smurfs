import React, { useContext } from 'react';
import {SmurfContext} from './context/SmurfContext';
import Smurf from './Smurf';



const Smurfs = () => {
	const { smurfs, removeSmurf} = useContext(SmurfContext);
	return (
		<div className="smurfs-container">
			{smurfs.map(smurf => (
				<Smurf
					key={smurf.id}
					smurf={smurf}
					{...smurf}
					removeSmurf={removeSmurf}
				/>
			))}
		</div>
	);
};

export default Smurfs;
