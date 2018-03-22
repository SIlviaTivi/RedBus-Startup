import React from 'react';
import Navbar from './Navbar';
import { Tabs, Tab } from 'react-bootstrap-tabs';
import Main from './Main';
import Main2 from './Main2';

const title = ['Banca por internet', 'Pagar en efectivo']

const Header = () => (
    <div>
        <p>logo</p>
        <Navbar Title={title} />
        <Tabs onSelect={(index, label) => console.log(label + ' selected')}>
            <Tab label="Banca por Internet">
             
                <Main/>
            </Tab>
            <Tab label="Pago en Efectivo"><Main2/></Tab>
        </Tabs>
    </div>
)

export default Header