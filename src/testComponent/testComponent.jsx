import React, {useState} from 'react'
import './testComponent.css'

const Test = () => {

  const textInput = React.createRef();
  const textOut = React.createRef();

  const [output, setOutput] = useState({
    text: '',
    age: ''
  })
  

  const func1 = (arg) => {
    console.log('func1 work' + arg);
  }

  const showInput = (event) => {
    console.log('event', event.target.value);
  }

  const showInput1 = () => {
    console.log('textInput', textInput.current?.value);
    textOut.current.innerHTML = textInput.current?.value
  }

  const showInput2 = (e) => {
    const {name, value} = e.target
    console.log(e.target.name);
    if(isNaN(name)) {
      output[name] = value
    }
    // setOutput({[e.target.name]: e.target.value})
    setOutput({...output})
  }

  const submitForm = (e) => {
    e.preventDefault();
    console.log(output);
    
    
  }

  let pp
  if (output) {
    console.log('output', output);
    
    pp = <p>Вы ввели текст: {output}</p>
  } else {
    pp = ''
  }
  
  return (
    <div className="wrap">
      <h1>вывод значений формы</h1>
      <section>
        <button onClick={() => func1(1)}>Push</button>
      </section>
      <section>
        <div className="test" onMouseMove={() => func1(2)}></div>
      </section>
      <section>
        <input type="text" onInput={showInput}/>
      </section>
      <section>
      <h3>Использование Ref</h3>
        <input type="text" onInput={showInput1} ref = {textInput}/>
        <p ref={textOut}></p>
      </section>
      <section>
        <h3>Использование useState</h3>
        <input type="text" onInput={showInput2}/>
        {/* <p>{output}</p> */}
        {pp}
      </section>
      <section>
        <h3>Форма</h3>
        <form onSubmit={submitForm}>
          <input type="text" onChange={showInput2}/>
          {pp}
          <input type='submit' />
        </form>
      </section>
      <section>
        <h3>Форма с многими полями</h3>
        <form onSubmit={submitForm}>
          <input type="text" onChange={showInput2} name='text'/>
          <input type='number' onChange={showInput2} name='age' />
          {pp}
          <input type='submit' />
          <p>Age: {output}</p>
        </form>
      </section>
    </div>
  )
}

export default Test