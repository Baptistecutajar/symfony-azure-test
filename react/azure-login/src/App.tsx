import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Test} from '@fui/components/Test'
import { UiThemeProvider } from '@fui/themes/provider'
import { hopsTheme } from '@fui/themes/base-themes'
import { UiButton } from '@fui/components/atoms/button/UiButton'

function App() {
  const [count, setCount] = useState(0)
  const handleChange = (e:any) => {
    console.log("E",e.target.value)
    document.querySelector<HTMLInputElement>(".entry input#email")!.value = e.target.value
  }
  const handleChangePassword = (e:any) => {
    console.log("E",e.target.value)
    document.querySelector<HTMLInputElement>(".entry input#password")!.value = e.target.value
  }
  const handleSubmit = () => {
    document.querySelector<HTMLButtonElement>("#next")!.click()
  }
  return (
    <UiThemeProvider theme={hopsTheme}>
      <input type="text" onInput={(e)=>handleChange(e)} />
      <input type="password" onInput={(e)=>handleChangePassword(e)} />
      <button onClick={()=>handleSubmit()}>Submit</button>
      <UiButton>Button example</UiButton>
    </UiThemeProvider>
  )
}

export default App
