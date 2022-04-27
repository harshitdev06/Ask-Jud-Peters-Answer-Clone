import React from 'react';
function PetitionInput(props){
  return(
    <input value={props.value} onChange={props.OnChange} type="text" className={( props.darkMode && " placeholder:text-black ") + " rounded  p-2  border-b border-gray-500 placeholder:font-semibold placeholder:text-xl " + (props.darkMode && " bg-gray-300 transition-color duration-500 delay-100  " ) }  placeholder="Petition.."/>
  );
}
export default PetitionInput;