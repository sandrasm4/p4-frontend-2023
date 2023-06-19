import React from "react";


export const Welcome = (users: any) => {
    return <h1>Hello, {users.name}</h1>
}

export const WelcomeAge = (users: any) => {
    return <h1>tienes {users.age} años</h1>
}