import React from 'react';

interface Greeting {
    name: string
}

const Hello = (props: Greeting)=> <h1>hello {props.name}</h1>

export default Hello;