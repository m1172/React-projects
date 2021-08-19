import React, { Component } from 'react'

export default class App extends Component {
    state = {
        list: 0,
    }
    render() {
        const onSearch = (e) => {
            this.setState({search: e.target.value});
            const newData =data.filter((value) => {
                let list =value.name.toLowerCase();
                return list.includes(e.target.value.toLowerCase());
            });
            this.setState({list: newData});
        };
        return (
            <div>
                <input type="text" onChange={onSearch} />
                <table 
                    border='1'
                    style={{borderCollapse: 'collapse', width: '400px'}}
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
                                <td>{value.id}</td>
                                <td>{value.id}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
