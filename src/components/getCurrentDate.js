import { meses } from "./Meses"
const date = new Date()

export let currentDay = date.getDate()
export let currentMonthNumber = date.getMonth()
export let currentMonthWord = meses[currentMonthNumber].mes
export let currentYear = date.getFullYear()
export let dayOfWeek = date.getDay()
export let currentNumberDays = meses[currentMonthNumber].dias

export let checkBisiesto = (year) => {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
          return true;
        } else {
          return false;
        }      
} 

export let getDayMonth = (year, month) => {
    const date = new Date(year, month -1) 
    const diasemana = date.getDay()
    return diasemana
}