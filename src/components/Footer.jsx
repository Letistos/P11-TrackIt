import styled from "styled-components";
function Footer(){
    return(
        <>
            <FooterBox> 
                
            <p>Hábitos</p>
            <BlueCircle><p>Hoje</p></BlueCircle>
            <p>Histórico</p>
                
            </FooterBox>
        </>
    );
}
export default Footer

const FooterBox = styled.div`
    width:100%;
    height:70px;
    position:fixed;
    left:0;
    bottom:0;
    background-color:#FFFFFF;;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-left:18px;
    padding-right:18px;


    p{
        font-family:'Lexend Deca';
        font-weight:400;
        font-size:17.98px;
        line-height:22.47px;
        color:#52B6FF;
    }
`
const BlueCircle = styled.div`
    width:91px;
    height:91px;
    background-color:#52B6FF;
    border-radius:50px;
    position:absolute;
    z-index:2;
    margin-bottom:35px;
    margin-left:33%;
    display:flex;
    align-items:center;
    justify-content:center;
    p{
        font-family:'Lexend Deca';
        font-weight:400;
        font-size:17.98px;
        line-height:22.47px;
        color:#FFFFFF;
    }
   
`