import React ,{useState} from 'react'
import Cards from 'react-credit-cards'
import './App.css'
import 'react-credit-cards/es/styles-compiled.css'

function App() {
  const[number,setNumber] = useState('')
  const [name, setName] = useState('')
  const [cvc , setCvc] = useState('')
  const [focus, setFocus] = useState('')



  function cardInputKeyUp(e , l) {
    if (e.target.value.length >= l) {
      e.target.value = e.target.value.substring(0, l)
    }
    let s = e.target.value.split(" ").join("")
    s = s.match(new RegExp('.{1,4}', 'g'))
    if (s === null) s = []
    e.target.value = s.join(' ')
  }

  return (
    <div className='block'>
     
      <form>
        <div className='card'>
            <Cards
              cvc={cvc}
              focused={focus}
              name={name}
              number={number}
              />
        </div>
      <p><small>Card Number</small></p>
        <input
          id='card_number'
          className='cardNumber'
        name='number'
        value={number}
          placeholder='Enter Number'
          onChange={e => setNumber(e.target.value)}
          onInput={e => cardInputKeyUp(e ,19 )}
        onFocus={e=>setFocus(e.target.name)}
        />
         <p><small>Card Name</small></p>
        <input
          className='cardName'
          type='tel'
          name='name'
          value={name}
          placeholder='Enter Name'
          onChange={e=>setName(e.target.value)}
          onFocus={e=>setFocus(e.target.name)}
        />
        <div className='cardDateCvv'>
          <div>
            <div className='labels'>
              <p><small>Date</small></p>
              <p><small>CVV</small></p>
            </div>
            <div className='date'>
              <select
                className=' cardDate' >
                  <option>Month</option>
                
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                  <option>04</option>
                  <option>05</option>
                  <option>06</option>
                  <option>07</option>
                  <option>08</option>
                  <option>09</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>



                </select>
                <select
                  className=' cardDate' >
                  <option>Year</option>
                  <option>2021</option>
                  <option>2022</option>
                  <option>2023</option>

                  </select>
                <input
                  className='cardCvv'
                  type='tel'
                  name='cvc'
                  value={cvc}
                  placeholder='Enter CVV'
                  onInput={e => cardInputKeyUp(e ,3 )}
                  onChange={e=>setCvc(e.target.value)}
                  onFocus={e=>setFocus(e.target.name)}
                />
            </div>
          </div>
      </div>
      <button className='btn'>Submit</button>
  </form>
        
    </div>

    // davidkhan khadjaye app
  );
}

export default App;
