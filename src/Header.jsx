import React from 'react';
function Header (props){
  return(
    <>
      <h1 className={"text-3xl font-semibold py-5 " + (props.darkMode && " text-white  transition-color duration-500 delay-100  " )} >{props.children}</h1>
    </>
  );
}
export default Header;