import React from "react";
function Applause (props){
  return(
    <>
      <div className={" text-center " + (props.darkMode && " text-white  transition-color duration-500 delay-100  " )}>
        <h1 className="">"{props.children}"</h1>
        <h1 className="m-2 ">-<i> {props.name}</i></h1>
      </div>
    </>
  );
}
export default Applause;