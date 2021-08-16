import{ init} from 'emailjs-com';
import * as emailJs from "emailjs-com";
init("user_mmydYoH3id1SB7HG5vhIi");

export const sendMail = (params) =>{
    emailJs.send(process.env.REACT_SERVICE_ID, init, params).then((response) =>{
        console.log("SUCCESS!", response.status, response.text);
    }).then((error) =>{
        console.log("FAILED...", error);
    })
}