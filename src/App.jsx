
import ArrayMovies from "./arrayMovies"
import Button from "./Button"

import Cart from "./Cart"

import Footer from "./components/Footer"
import Header from "./components/Header"
import MainComponent from "./components/MainComponent"
import UserList from "./components/UserList"
import Greeting from "./Greeting"
import Movies from "./Movies"

//for studying ternary operations
const ValidPassword = () => <h1>Valid Password</h1>
const InvalidPassword =() => <h1>Invalid Password</h1>
const Password = ({isValid}) =>
  isValid ? <ValidPassword /> : <InvalidPassword />


function App (){

  return <div>
    <Header heading = "Welcome to my website"/>
    <br />
    <Button />
    <br />
    <UserList />
    <MainComponent />
    <Greeting />
    <Cart />
    <Footer />
    <Movies />
    <Password isValid={true} />
    <ArrayMovies />
  </div>

}


export default App