import GlobalStyle from "./components/GlobalStyle"
import styled from "styled-components"
// import Login from "./components/Login"
import Cadastro from "./components/Cadastro"
function App() {
  return (
    <>
    <Body>
    
    <GlobalStyle/>
    {/* <Login/> */}
    <Cadastro/>
    </Body>

    </>
  )
}

export default App

const Body = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
`