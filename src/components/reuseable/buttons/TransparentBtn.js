import React from 'react';
import {Link} from "react-router-dom";

const TransparentBtn = ({text}) => {
    return (
        <Link to="/quote" class="trans path-link">
            {text}
            <img src={require("../../../static/images/arrow2.svg").default} alt=""/>
        </Link>
    );
};

export default TransparentBtn;