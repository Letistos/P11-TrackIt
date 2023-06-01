import GlobalStyle from "./components/GlobalStyle"
import styled from "styled-components"
// import Login from "./components/Login"
// import Cadastro from "./components/Cadastro"
import Habitos from "./components/Habitos"
function App() {
  return (
    <>
    <Body>
    
    <GlobalStyle/>
    {/* <Login/> */}
    {/* <Cadastro/> */}
    <Habitos/>
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