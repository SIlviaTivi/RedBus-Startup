import React from 'react';

const InstructionPay = ({ dataInstruction }) => (
  <div className="col-md-8">
    <div >
      <h1>Instrucciones de pago</h1>
      <div>{dataInstruction.instruction}</div>
      <div>{dataInstruction.instruction2}</div>
      <div>{dataInstruction.instruction3}</div>

      <div>
        <img src={dataInstruction.link} alt={dataInstruction.name}/>
      </div>
    </div>
  </div>
)

export default InstructionPay
