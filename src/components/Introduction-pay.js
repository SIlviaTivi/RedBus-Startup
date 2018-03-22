import React from 'react';

const InstructionPay = ({ dataInstruction }) => (
  <div className="intcenter">
    <div >
      <p className="intTitle">Instrucciones de pago</p>
      <div className = "int">{dataInstruction.instructionpe}</div>
      <div className = "int">{dataInstruction.instruction2pe}</div>
      <div className = "int">{dataInstruction.instruction3pe}</div> 

      <div className = "int">{dataInstruction.intbi1}</div>
      <div className = "int">{dataInstruction.intbi2}</div>
     
    </div>
  </div>
)

export default InstructionPay
