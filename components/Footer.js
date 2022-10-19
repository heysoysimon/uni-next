import React from 'react'
import {FaTwitter , FaInstagram} from "react-icons/fa"
const Footer = () => {
  return (
    <>
           <div className='table w-full bg-blue-500'>
              {/* guarda todo los elemnetos  */}
              <div className='table-header-group'>
                <div className="table-row">
                <div className='table-cell text-left text-white'>inicio</div>
                <div className='table-cell text-left text-white'>inicio</div>
                <div className='table-cell text-left text-white'>inicio</div>
                <div className='table-cell text-left text-white'>redes</div>
              </div>
              </div>

              <div className='table-row-group'>
                  <div className='table-row'>
                  <div className='table-cell  text-white'>inicio</div>
                  <div className='table-cell  text-white'>inicio</div>
                  <div className='table-cell  text-white'>inicio</div>
                  <div className='table-cell  text-white'>
                    <a href='#'><FaTwitter/></a>
                  </div>
                  </div>

                <div className='table-row'>
                <div className='table-cell  text-white'>inicio</div>
                <div className='table-cell  text-white'>inicio</div>
                <div className='table-cell  text-white'>inicio</div>
                <div className='table-cell  text-white'>
                  <a href='#'><FaInstagram/>
                </a></div>
                </div>

                <div className='table-row'>
                <div className='table-cell  text-white'>inicio</div>
                <div className='table-cell  text-white'>inicio</div>
                <div className='table-cell  text-white'>inicio</div>
                </div>

                <div className='table-row'>
                <div className='table-cell  text-white'>inicio</div>
                <div className='table-cell  text-white'>inicio</div>
                <div className='table-cell  text-white'>inicio</div>
                </div>

                
                </div>

                

           </div>
    </>
  )
}

export default Footer
