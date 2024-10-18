import { currentDay } from "./getCurrentDate"
import '../index.css'

export default function CreateDay ({day, isToday, onDayClick, shift}) {

    return(
        <>
        <div onClick={() => day === "" ? undefined : onDayClick(day)} className="day">
            <div className={`today ${isToday && day === currentDay ? 'istoday' : ''}`}>
                <p className="pDay">{day}</p>
            </div>
            <div className={`shift ${shift}`}>
                {shift && <span>{shift.charAt(0)}</span>}
            </div>

        </div>
        </>
    )

}