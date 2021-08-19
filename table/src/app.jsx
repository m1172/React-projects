import React, { Component } from 'react';
import './App.css'

export default class App extends Component {
    state = {
        list: [
            { id: 1, name: 'Joe', status: 'low'},
            { id: 2, name: 'Jack', status: 'high'},
            { id: 3, name: 'Bruno', status: 'low'},
            { id: 4, name: 'Muiller', status: 'high'},
            { id: 5, name: 'Mack', status: 'medium'},
            { id: 6, name: 'Gulbashakar', status: 'high'},
            { id: 7, name: 'Mirshakar', status: 'low'},
            { id: 8, name: 'Shakartoy', status: 'medium'},
            { id: 9, name: 'Shakarbek', status: 'high'},
        ],
    }
    render() {
        const onSearch = (e) => {
            this.setState({search: e.target.value});
            const newData =this.state.list.filter((value) => {
                let list =value.name.toLowerCase();
                return list.includes(e.target.value.toLowerCase());
            });
            this.setState({list: newData});
        };
        return (
            <div className='wrapper'>
                <input type="text" onChange={onSearch} />
                <table 
                    border='1'
                    style={{borderCollapse: 'collapse', width: '400px' }}
                >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.list.map((value) => (
                            <tr>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
