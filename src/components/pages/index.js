import React, { useState } from 'react'
import '../pages/styles.css'
import canada from '../assets/canada.png'
import cuba from '../assets/cuba.png'
import vs from '../assets/vs.png'

function Fut() {
  const [time1, setTime1] = useState('')
  const [time2, setTime2] = useState('')
  const images = [
    '../assets/cuba.png',
    '../assets/canada.png'
  ]

  function sendAnswer() {
    const result1 = Math.floor(Math.random() * 8)
    const result2 = Math.floor(Math.random() * 8)

    if ((time1, time2) == '') {
      alert('Preencha os dois campos!')

    } else if (time1 == result1 && time2 == result2) {
      alert(`Parabéns, você acertou completamente! Sua resposta foi ${time1} x ${time2} \nE o resultado foi: ${result1} x ${result2}`)

    } else if (time1 == result1 || time2 == result2) {
      alert(`Quase lá! Sua resposta foi ${time1} x ${time2} \nE o resultado foi: ${result1} x ${result2}`)

    } else {
      alert(`Não foi dessa vez. O resultado foi: ${result1} x ${result2}`)
    }
  }

  return (
    <>
      <div className="fut">
        <div className="container-fut">
          <div className="text">
            <h1 className="title-1">DÊ SEU PALPITE</h1>
          </div>

          <div className="container-fut2">
            <div className="section1">
              <div className="image">
                <img src={cuba} alt='bandeira' width={'200px'} />
              </div>
              <div className="div-input">
                <input className='input-palpite' type={'number'} onChange={e => setTime1(e.target.value)} />
              </div>


            </div>
            <div className="section">
              <div className="image">
                <img src={vs} alt='bandeira' width={'100px'} />
              </div>

            </div>


            <div className="section1">
              <div className="div-input">
                <input className='input-palpite2' type={'number'} onChange={e => setTime2(e.target.value)} />
              </div>
              <div className="image">
                <img src={canada} alt='bandeira' width={'200px'} />
              </div>


            </div>
          </div>
          <div className="text">
            <button onClick={() => sendAnswer()}>Enviar</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fut;
