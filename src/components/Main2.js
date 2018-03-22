import React from 'react';
import Operation from './Operation';
import Payment from '../containers/container_paymet2';
import InstructionPay from '../containers/container_introduction_pay';

import ButtonPay from './Button-pay';

const Main2 =() =>(
    <div>
        <Operation/>
        <Payment/>
        <InstructionPay />
        <ButtonPay/>
    </div>
)
export default Main2