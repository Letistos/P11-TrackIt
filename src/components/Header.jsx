import styled from "styled-components";
function Header(){
    return(
        <>
            <HeaderBox> 
                
            <p>TrackIt</p>
            <img src="https://i0.wp.com/i.pinimg.com/originals/b0/1e/bf/b01ebfc52eeeb6c31e57c9fec0651481.jpg?resize=160,120" alt="imagem de perfil do usuário"/>
                
            </HeaderBox>
        </>
    );
}
export default Header

const HeaderBox = styled.div`
    width:100%;
    height:70px;
    position:fixed;
    left:0;
    top:0;
    background-color:#126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-left:18px;
    padding-right:18px;


    p{
        font-weight:400;
        font-size:38.98px;
        line-height:48.73px;
        color:#FFFFFF;
        font-family: 'Playball';
    }
    img{
        width:51px;
        height:51px;
        border-radius:98.5px;
    }
`