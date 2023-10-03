import React from 'react'

 const Address = props => {
  return (
    <div className="fixed w-full h-screen left-0 top-4 bg-black bg-opacity-80">
    <div className="relative w-[80%] h-auto max-h-[70vh] mt-[calc(100vh_-_85vh_-_20px)] rounded-2xl border overflow-auto mx-auto my-10 p-5 border-solid border-[#999] bg-white">
      <span className="content-['x'] mt-6 cursor-pointer fixed right-[calc(15%_-_30px)] top-[calc(100vh_-_85vh_-_33px)] w-[25px] h-[25px] leading-5 text-center border text-xl rounded-[50%] border-solid border-[#999] bg-[#ededed]" onClick={props.handleClose}>x</span>
      {props.content}
    
    
    </div>
    
 
  </div>




  )
}
export default Address;