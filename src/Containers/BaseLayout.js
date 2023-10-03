import React from 'react';
import { useMachine } from '@xstate/react';
import { Nav } from '../Components/Nav';
import { StepsLayout } from './StepsLayout';
import bookingMachine from '../Machines/bookingMachine';
import './BaseLayout.css';
import {Welcome} from "../Components/Welcome";
import {Search} from "../Components/Search";
import {Tickets} from "../Components/Tickets";
import {Passengers} from "../Components/Passengers";

function BaseLayout () {
    const [state, send] = useMachine(bookingMachine);

    console.log('nuestra maquina', state.value, state.context);

    return (
        <div className='BaseLayout'>
            <Nav state={state} send={send}/>

            {/*<StepsLayout state={state} send={send}/>*/}

            <StepsLayout state={state} send={send}>
                {state.matches('initial') && <Welcome send={send} />}
                {state.matches('search') && <Search send={send} />}
                {state.matches('tickets') && <Tickets send={send} />}
                {state.matches('passengers') && <Passengers send={send} />}
            </StepsLayout>

        </div>
    );
};

export { BaseLayout };