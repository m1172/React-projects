import React, { Component } from 'react';
import {data} from './mock';
// import Order from './o'

export default class App extends Component {
    state = {
        name: '',
        pw: '',
        select: 'id',
        data: data,
    };
    render() {
        const onChange = (e) => {
            const list = data.filter((value) => {
                if (Number.isInteger(value[this.state.select])) {
                    let name = value[this.state.select].toString().toLocaleLowerCase();
                    return name.includes(e.target.value.toLocaleLowercase());
                } else{
                    let name = value[this.state.select].toLocaleLowerCase();
                    return name.includes(e.target.value.toLocaleLowerCase());
                }
            });
           this.setState({[e.target.name]: e.target.value, data: list});
        };
        const onSelect =(e) => {
            this.setState({ select: e.target.value});
        };
        return (
            <div className='wrapper'>
                <div>
                    <h1>Username: {this.state.name}</h1>
                    <h1>Password: {this.state.pw}</h1>
                </div>
                <input name='name' placeholder='username' type="text" onChange={onChange} />
                <select name="" id="" onChange={onSelect}>
                    <option value="id">id</option>
                    <option value="name">name</option>
                    <option value="status">status</option>
                </select>
                <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((value) => {
                            return (
                                <tr>
                                    <td>{value.id}</td>
                                    <td>{value.name}</td>
                                    <td>{value.status}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
