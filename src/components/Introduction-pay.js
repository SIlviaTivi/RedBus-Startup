import React from 'react';

const InstructionPay = ({ dataInstruction }) => (
  <div className="col-md-8">
    <div >
      <h1>Instrucciones de pago</h1>
      <div>{dataInstruction.instructionpe}</div>
      <div>{dataInstruction.instruction2pe}</div>
      <div>{dataInstruction.instruction3pe}</div> 

      <div>{dataInstruction.intbi1}</div>
      <div>{dataInstruction.intbi2}</div>
     
    </div>
  </div>
)

export default InstructionPay
