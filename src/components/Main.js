import React from 'react';
import Operation from './Operation';
import Payment from './Payment';
import Instruction from './Instruction'
import ButtonPay from './Button-pay';

const Main =() =>(
    <div>
        <Operation/>
        <Payment/>
        <Instruction/>
        <ButtonPay/>
    </div>
)
export default Main