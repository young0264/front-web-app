import { useState } from "react"

import "./LoginPage.css"
import axios from "axios";
import InputComponent from "../component/InputComponent";

const LoginPage = () => {
  // const [a, b, c] = [value, setValue]
  // const { first, second } = { first: "01", second: "02" }
  const [ id, setId ] = useState<string>('Minsung');
  const [ pw, setPw ] = useState<string>('test1234');

  const login = async () => {
    console.log(`id: ${id}`)
    console.log(`pw: ${pw}`)

    try {
      const resp = await axios.post("url", {
        id,
        pw
      })
    } catch(err) {
      console.log("login fail")
      return
    }

    // history("main page")
  }

  return (
    <div className="LoginBox">
      <h2>로그인 페이지</h2>
        <div>
          <InputComponent text={id} setText={setId} />
        </div>
        <div>
          <InputComponent text={pw} setText={setPw} />
        </div>
        <button onClick={login}>로그인</button>
    </div>
  )
}

export default LoginPage