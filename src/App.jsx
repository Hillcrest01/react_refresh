import Button from "./Button"
import Footer from "./components/Footer"
import Header from "./components/Header"
import MainComponent from "./components/MainComponent"
import UserList from "./components/UserList"
import Greeting from "./Greeting"

function App (){

  return <div>
    <Header heading = "Welcome to my website"/>
    <br />
    <Button />
    <br />
    <UserList />
    <MainComponent />
    <Greeting />
    <Footer />
  </div>

}


export default App