import "./Button.css";
import {Link} from "react-router-dom";


export const Button = ({text}) => {
    return(
            <Link to="/quote" className="cover">
                {text}
                <img src={require("../../../static/images/arrow.svg").default} alt=""/>
            </Link>
    )
};

