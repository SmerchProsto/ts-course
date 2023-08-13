import React from 'react';
import Card, {CardVariant} from "./components/Card";
import UserList from "./components/UserList";
import {IUser} from "./types/types";

const App = () => {
    const users: IUser[] = [
        {id: 1, name: 'Igor', email: 'asdfasd@mail.ru', address: {city: 'Moscow', street: 'Lenina', zipcode: '123'}},
        {id: 2, name: 'Ivan', email: 'asdfaaaaaasd@mail.ru', address: {city: 'Moscow', street: 'Lenina', zipcode: '143'}}
    ]
    return (
        <div>
            <Card variant={CardVariant.outlined} width='200px' height='200px'>
                <button>Кнопка</button>
            </Card>
            <UserList users={users}/>
        </div>
    );
};

export default App;