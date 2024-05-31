import { useState } from 'react'
import './App.css'
import Button from './components/button/button'


function App() {
  const [count, setCount] = useState(0)

  const [operation, setOperation]= useState("")

  const addValue = (value : String) => {
     setOperation(operation + value)
  }

  return (
    <>
      <div className='container'>
        <div className='container_input'>
          {operation}
        </div>
        <div className='container_button'>
          <div className='container_button_digits'>
            <Button operation={addValue} value="3" />
            <Button operation={addValue} value="2" />
            <Button operation={addValue} value="1" />
            <Button operation={addValue} value="0" />
          </div>
          <div className='container_button_digits'>
            <Button operation={addValue} value="7" />
            <Button operation={addValue} value="6" />
            <Button operation={addValue} value="5" />
            <Button operation={addValue} value="4" />
          </div>
          <div className='container_button_digits'>
            <Button operation={addValue} value="8"  />
            <Button operation={addValue} value="9"  />
            <Button operation={addValue} value="," />
          </div>
          <div className='container_button_digits'>
           <Button operation={addValue} value="+" />
            <Button operation={addValue} value="-" />
            <Button operation={addValue} value="/" />
            <Button operation={addValue} value="x" />
          </div>
        </div>
        <div className='container_result'>
          Result
        </div>
      </div>
    </>
  )
}

export default App
