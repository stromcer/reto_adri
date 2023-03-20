import React, {createContext, useContext, useState} from "react";
import {defaultList , mayusList ,numberList ,signList} from "./Listas.js"



const Context = createContext();

export const AppProvider = ({children}) => {
    const [labelOneChecked, setLabelOneChecked] = useState(false)
    const [labelTwoChecked, setLabelTwoChecked] = useState(false)
    const [labelThreeChecked, setLabelThreeChecked] = useState(false)
    const [currentPassword, setCurrentPassword] = useState("")

    const handleNewPassword = () => {
        let newPassword = ""
        let usedList = getCharacter()
        for(let i=0; i<=12 ; i++ ){
            newPassword += usedList[Math.floor(Math.random()*(usedList.length-1))]
        }
        setCurrentPassword(newPassword)

    }

    const getCharacter = () => {
        let array = [...defaultList];
        array = labelOneChecked ? array.concat(mayusList) : array ;
        array = labelTwoChecked ? array.concat(numberList) : array ;
        array = labelThreeChecked ? array.concat(signList) : array ;
        return array
    }

    const handleFirst = () => {
        setLabelOneChecked(prev => !prev)
    } 

    const handleSecond = () => {
        console.log("HOLA")
        setLabelTwoChecked(prev => !prev)
    } 

    const handleThird = () => {
        setLabelThreeChecked(prev => !prev)
    } 

const store = {labelOneChecked,labelTwoChecked,labelThreeChecked,currentPassword }
const actions = {handleNewPassword, handleFirst, handleSecond, handleThird }
    
    return (
    <Context.Provider value={{store,actions}}> {children} </Context.Provider>
    )
}

const useAppProvider = () => {
    return (useContext(Context)) 
}

export default useAppProvider