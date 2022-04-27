import React from "react";
import Header from "./Header"
import Description from "./Description"
import Applause from "./Applause"
import { AiOutlineLoading } from "react-icons/ai";
import PetitionInput from "./PetitionInput";
import QuestionInput from "./QuestionInput";
import matrix from "./matrix.mp4";
import defaultAnwer from "./DefaultAnswer"

let fixedMessage = "Hey CodeYogi, please answer my question";

function CodeYogiAnswerPage(){
  const [isDarkModeEnable , setDarkModeEnale] = React.useState(false)
  let [petition , setPetition ] = React.useState('')
  const [answer , setAnswer] = React.useState('')
  let [tarotMode , setTarotMode] = React.useState(false)
  let [ isPopUpIsVisible , setisPopUpIsVisible] = React.useState(false);
  let[question , setQuestion] = React.useState('')
  // const [ answersArray , setAnswerArray ]= React.useState(defaultAnwer)


  let darkModeIcon = " https://img.icons8.com/ios-filled/24/000000/do-not-disturb-2.png "


  
  if(isDarkModeEnable){
    darkModeIcon = "  https://img.icons8.com/material-outlined/24/000000/sun--v1.png "
  }
  
  let toToggleDarkMode=()=>{
    setDarkModeEnale(!isDarkModeEnable)
  }
  
  const onQuestionChange=(event)=>{
    const newQuestion = event.target.value
    setQuestion(newQuestion)
    if(newQuestion.includes('?')){
      setisPopUpIsVisible(true)
    }
  }
  

   
  const onPetitionChange =(event)=>{
    
    let newPetition = event.target.value;
    
    const newLength = newPetition.length;
    const oldLength = petition.length;
    
    if(newPetition.includes('[')){
        setTarotMode(!tarotMode)
        setPetition( fixedMessage.substring( 0 , newLength ))
      } else if(tarotMode){
        setPetition( fixedMessage.substring( 0 , newLength ))
       if(newLength < oldLength){
         setAnswer( answer.substring( 0 , answer.length - 1 ))
       }else{
         setAnswer( answer + newPetition.substring(newPetition.length - 1 ))
       }
    } else{
       setPetition(newPetition)
    }

  }
  const resetQuestion=()=>{
    setisPopUpIsVisible(false)
    setQuestion('')
    setAnswer('')
    setPetition('')
  }
  
  let randomNumber;
  for(let i = 0 ; i < defaultAnwer.length; i++){
    randomNumber = Math.ceil((Math.random() * defaultAnwer.length) - 1);
  }

  
  
  return(
    <>
      <div className={ (isPopUpIsVisible && " blur " ) +" p-10 sm:px-96 sm:py-10 h-screen " + (isDarkModeEnable && " bg-zinc-900  transition-color duration-500 delay-100  " )} >

        <div className=" flex justify-between items-center ">
         <Header darkMode={isDarkModeEnable} >ASK, CodeYogi</Header>
          <button className={"  rounded h-10 border px-2 drop-shadow-lg " + (isDarkModeEnable && " bg-gray-500 transition-color duration-500 delay-100  " ) } onClick={toToggleDarkMode}><img src={darkModeIcon}/></button>
        </div>
        
      <Description darkMode={isDarkModeEnable} ></Description>
        
      <div className="flex flex-col space-y-4 py-4 mb-10">
        <PetitionInput value={petition} OnChange={onPetitionChange} darkMode={isDarkModeEnable}></PetitionInput>
        <QuestionInput value={question} OnChange={onQuestionChange} darkMode={isDarkModeEnable}></QuestionInput>    
      </div> 
       
        <Applause darkMode={isDarkModeEnable} name=" Dag Hammarskjöld"> We are not permitted to choose the frame of our destiny. But what we put into it is ours.</Applause>
        
    </div>
      
      { isPopUpIsVisible && <div className={"transition-all pop-up duration-500 delay-700  fixed flex justify-center items-center top-0 left-0 h-screen w-full " }>
         <div className={ "rounded-md fixed bg-gray-200 text-center drop-shadow-lg border  border-gray-500 " }>
            <div className={"top-0 right-0 fixed p-4 "}>
              <button className="underline font-bold " onClick={resetQuestion} >New Question</button>
            </div>
            <div className={" sm:px-48 sm:py-20 px-32 py-12"}>
                <h1 className={" text-3xl font-bold text-center underline  "}>CodeYogi Answers</h1>
                { answer && <h1 className={" text-xl font-bold text-center "}>"{answer}"</h1> }
                { !answer && <h1 className={" text-xl font-bold text-center "}>"{ defaultAnwer[randomNumber] }"</h1>}
            </div>
          </div>}
     </div> }
  </>
  );

}
export default CodeYogiAnswerPage;