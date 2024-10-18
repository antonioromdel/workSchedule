import { useEffect, useState } from 'react';
import '../index.css'
import CreateDay from './CreateDay'

export default function CreateMonth ({diasDelMes, startDay, isToday, selectMonth, selectYear}) {

    const [selectedShift, setSelectedShift] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDayIndex, setSelectedDayIndex] = useState(null);

    useEffect(() => {
        setSelectedShift((prev) => {
            if (!prev[selectYear]) {
                return {
                    ...prev,
                    [selectYear]: {
                        [selectMonth]: Array(diasDelMes).fill(null),
                    },
                };
            } else if (!prev[selectYear][selectMonth]) {
                return {
                    ...prev,
                    [selectYear]: {
                        ...prev[selectYear],
                        [selectMonth]: Array(diasDelMes).fill(null),
                    },
                };
            }
            return prev;  // No changes needed
        });
    }, [diasDelMes, selectMonth, selectYear]);

    const handleDayClick = (index) => {
        setSelectedDayIndex(index);
        setIsModalOpen(true);
    };

    const handleShiftSelection = (shift) => {
        setSelectedShift((prev) => ({
          ...prev,
          [selectYear]: {
            ...prev[selectYear],
            [selectMonth]: prev[selectYear][selectMonth].map((item, i) => i === selectedDayIndex ? shift : item),
          },
        }));
        setIsModalOpen(false);
    };

    let arrayDays = Array(35).fill("");

    startDay = startDay === -1 ? 6 : startDay;

    for (let i = 0; i < diasDelMes; i++) {
        arrayDays[startDay] = i + 1;
        startDay += 1;
    }

    return (
        <>
            <header className='daysofweek'>
                <div className="dayweek"><p>L</p></div>
                <div className="dayweek"><p>M</p></div>
                <div className="dayweek"><p>X</p></div>
                <div className="dayweek"><p>J</p></div>
                <div className="dayweek"><p>V</p></div>
                <div className="dayweek"><p>S</p></div>
                <div className="dayweek"><p>D</p></div>
            </header>
            <section className="month">
                {
                    arrayDays.map((day, index) => (
                        <CreateDay
                            isToday={isToday}
                            day={day}
                            key={index}
                            onDayClick={handleDayClick}
                            shift={selectedShift[selectYear] && selectedShift[selectYear][selectMonth] ? selectedShift[selectYear][selectMonth][day] : null}
                        />
                    ))
                }
            </section>

            {isModalOpen && (
                <div className="modal">
                    <div className="close">
                        <svg onClick={() => { setIsModalOpen(false) }} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#02356b" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M18 6l-12 12" />
                            <path d="M6 6l12 12" />
                        </svg>
                    </div>

                    <h3>Selecciona un turno para el día {selectedDayIndex}</h3>
                    <div className='modalbtns'>
                        <button className='btnModal' onClick={() => handleShiftSelection('Mmorning')}>Turno de Mañana</button>
                        <button className='btnModal' onClick={() => handleShiftSelection('Tafternoon')}>Turno de Tarde</button>
                        <button className='btnModal' onClick={() => handleShiftSelection('DdayOff')}>Día Libre</button>
                        <button className='btnModal' onClick={() => handleShiftSelection('Vacaciones')}>Vacaciones</button>
                    </div>
                </div>
            )}
        </>
    )
}
