import React from "react";
import {bookingMachine} from "../Machines/bookingMachine";
import {useMachine} from "@xstate/react";

function BaseLayout() {

    const [state,send] = useMachine(bookingMachine);

    return (
        <div>Gola</div>
    );
}

export { BaseLayout };