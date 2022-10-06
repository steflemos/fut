import React from 'react'
import '../pages/styles.css'
import canada from '../assets/canada.png'
import cuba from '../assets/cuba.png'
import vs from '../assets/vs.png'

function Fut() {
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
                <img src={cuba}  alt='bandeira' width={'200px'} />
              </div>
              <div className="div-input">
                <input className='input-palpite' type={'number'}/>
              </div>
              

            </div>
            <div className="section">
              <div className="image">
                <img src={vs}  alt='bandeira'  width={'100px'} />
              </div>
             
            </div>
           
            
            <div className="section1">
              <div className="div-input">
                <input className='input-palpite2' type={'number'}/>
              </div>
              <div className="image">
                <img src={canada} alt='bandeira' width={'200px'} />
              </div>
              

            </div>
          </div>
          <div className="text">
            <button>Enviar</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fut;
