import React from 'react';
import {BrowserRouter, Navigate, NavLink, Route, Routes} from 'react-router-dom';
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";

const App = () => {

    return (
        <BrowserRouter>
            <div>
                <div>
                    <NavLink to="/users">Пользователи</NavLink>
                    <NavLink to="/todos">Список дел</NavLink>
                </div>
                <Routes>
                    <Route path={'/users'} element={<UsersPage/>}/>
                    <Route path={'/todos'} element={<TodosPage/>}/>
                    <Route path={'/users/:id'} element={<UserItemPage/>}/>
                    <Route
                        path="*" element={<Navigate to="/users" replace/>}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;