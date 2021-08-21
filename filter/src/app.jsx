import React, { Component } from 'react';
import {data} from './mock'

export default class App extends Component {
    state = {
        name: '',
        pw: '',
    };
    render() {
        const onChange = (e) => {
            const list = data.filter((value) => {
                if (Number.isInteger(value[this.state.select])) {
                    let name = value[this.state.select].toString().toLocaleLowerCase();
                    return name.includes(e.target.value.toLocaleLowercase());
                } else{
                    let name = value[this.sstate.slelect].toLocaleLowerCase();
                    return name.includes(e.target.value.toLocaleLowerCase());
                }
            });
           this.setState({[e.target.name]: e.target.value, data: list});
        };
        return (
            <div className='wrapper'>
                <div>
                    <h1>Username: {this.state.name}</h1>
                    <h1>Password: {this.state.pw}</h1>
                </div>
                <input name='name' placeholder='username' type="text" onChange={onChange} />
                <input name='pw' placeholder='password' type="text" onChange={onChange}/>
                <input type="submit"  value='submit' />
            </div>
        )
    }
}
