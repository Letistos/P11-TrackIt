import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
function Habitos(){
    return(
        <>
        <HabitosBox>
        <Header/>
        <Footer/>
        </HabitosBox>
        </>
    );
}
export default Habitos;

const HabitosBox=styled.div`

    background-color:#F2F2F2;
    height:667px;
    width: 375px;
`