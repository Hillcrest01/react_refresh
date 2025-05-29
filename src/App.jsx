import Cart from "./Cart"
import Footer from "./components/Footer"
import Header from "./components/Header"
import MainComponent from "./components/MainComponent"
import UserList from "./components/UserList"
import Greeting from "./Greeting"

//for studying ternary operations
const ValidPassword = () => <h1>Valid Password</h1>
const InvalidPassword =() => <h1>Invalid Password</h1>
const Password = ({isValid}) =>
  isValid ? <ValidPassword /> : <InvalidPassword />


function App (){

  return <div>
    <Header heading = "Welcome to my website"/>
    <UserList />
    <MainComponent />
    <Greeting />
    <Cart />
    <Footer />
    <Password isValid={true} />
  </div>

}


export default App