import "./Button.css";

const STYLES = [
    "btn--primary",
    "btn--outline"
];

const SIZES = [
    "btn--medium",
    "btn--large"
];


export const Button = ({children, type, onclick, buttonStyle, buttonSize}) => {

    const checkButtonStyled = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return(
        <button className={`btn ${checkButtonStyled} ${checkButtonSize}`} onClick={onclick} type={type}>
            {children}
        </button>
    )
};

