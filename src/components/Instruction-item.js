import React from 'react';

const InstructionItem = ({instruction}) => (
  <div>
  {instruction.map(e=>
      <span key={e.payment}{...e}>
      <p>{e.text1}</p><p>{e.text2}</p><p>{e.text3}</p>
      </span>)
  }
  </div>
)
export default InstructionItem

