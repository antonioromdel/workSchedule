import { meses } from "./Meses"

export const btnright = (month, year) => {

    let id = meses.findIndex(index => index.mes === month)
    id+=1
    let newyear = parseInt(year)

    if(id >= meses.length){
        id = 0
        newyear += 1
    } 
    let newMonth = meses[id].mes

    return [newMonth, newyear]
}   

export const btnleft = (month, year) => {
    let id = meses.findIndex(index => index.mes === month)
    id-=1
    let newyear = parseInt(year)

    if(id < 0){
        id = meses.length -1
        newyear -= 1
    }
    let newMonth = meses[id].mes

    return [newMonth, newyear]
}