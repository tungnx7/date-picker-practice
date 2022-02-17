import "./date.css";
import moment from "moment";

const DateDisplay = (props) => {
    const {date} = props;
    return ( 
        <section className="date-display">
            Date Display: {moment(date).format('LL')}
        </section>
     );
}
 
export default DateDisplay;