import { useState } from "react";
import "./date.css";
import DateDisplay from "./DateDisplay";


const DateInput = () => {
    const [date, setDate] = useState(Date.now());
    return ( 
        <div>
            <input type="date" className="date-input" onChange={(e) => setDate(e.target.value)} />
            {console.log(date)}
            <DateDisplay date={date}/>
        </div>
     );
}
 
export default DateInput;