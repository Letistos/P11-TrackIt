import styled from "styled-components";
import logo from '../assets/login-image.png'

function Cadastro(){
    return(
        <>
        <LoginBox>
            <img src={logo} alt='logo trackIt'/>
            <form>
                <LoginInput data-test="email-input" type='email' placeholder="email"></LoginInput>
                <LoginInput data-test="password-input" type='password' placeholder="senha"></LoginInput>
                <LoginInput data-test="user-name-input" type='name' placeholder="nome"></LoginInput>
                <LoginInput data-test="user-image-input" type='url' placeholder="foto"></LoginInput>
                <LoginButton data-test="signup-btn">Entrar</LoginButton>
                <Join data-test="login-link" >Já tem uma conta? Faça login!</Join>
            </form>
        </LoginBox>
        </>
    );
}
export default Cadastro

const LoginBox = styled.div`
    background-color:#FFFFFF;
    height:667px;
    width: 375px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    img{
        width:180px;
        height: 178.38px;
        margin:20px;

    }
    form{

    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    }
`
const LoginInput = styled.input`



    width:303px;
    height:45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius:5px;
    padding:11px;
    margin: 6px;

   ::placeholder{

    font-family:'Lexend Deca';
    font-size:19.98px;
    color:#DBDBDB;
    font-weight:400;
    }
`

const LoginButton = styled.button`
    width:303px;
    height:45px;
    margin-top:6px;
    margin-bottom:30px;
    background-color:#52B6FF;
    border-radius:4.64px;
    border:none;

    font-family:'Lexend Deca';
    font-weight:400;
    font-size:20.98px;
    color:#FFFFFF;
`
const Join = styled.p`
    font-family:'Lexend Deca';
    color:#52B6FF;
    font-weight:400;
    font-size:13.98px;

`