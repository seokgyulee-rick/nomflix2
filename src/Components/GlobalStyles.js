import {createGlobalSyle} from "styled-components"
import reset from "styled-reset"

const globalStyles = createGlobalSyle`
${reset};
a{
    text-decoration:none;
    color:inherit;
}
*{
    box-sizing:border-box;
}
body{
    font-family: 
}
`