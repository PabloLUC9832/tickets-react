import React from 'react';
import { useMachine } from '@xstate/react';
import { Nav } from '../Components/Nav';
import { StepsLayout } from './StepsLayout';
import bookingMachine from '../Machines/bookingMachine';
import './BaseLayout.css';

function BaseLayout () {
    const [state, send] = useMachine(bookingMachine);

    console.log('nuestra maquina', state.value);

    return (
        <div className='BaseLayout'>
            <Nav state={state} send={send}/>
            <StepsLayout state={state} send={send}/>
        </div>
    );
};

export { BaseLayout };