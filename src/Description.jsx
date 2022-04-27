import React from "react";

function Description (props){
  return(
    <>
      <p className= {" py-8 " + (props.darkMode  && " text-white transition-color duration-500 delay-100  " ) }>Do you need to ask a question? Are you looking for answers? CodeYogi offers you a space to ask anything you want. However, before each question you must write a petition. If the answer is not what you expected, at least you make catharsis and ask again.</p>
      
    </>
  );
}
export default Description;