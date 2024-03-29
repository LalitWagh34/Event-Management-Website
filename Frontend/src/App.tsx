import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SignUp, Signin } from "./pages/Login"
import { DashBored } from "./pages/Dashbored"

function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp/>} ></Route>
          <Route path="/signin" element={<Signin/>} ></Route>
          <Route path="/dashbored" element={<DashBored/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
