import React, {FC, useState} from 'react';
import {Simulate} from "react-dom/test-utils";
import click = Simulate.click;

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('')
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value)
    }

    return (
        <div>
            <input value={value} onChange={changeHandler} type="text"/>
            <button onClick={clickHandler}>dsfsd</button>
        </div>
    );
};

export default EventsExample;