import React, { Component } from 'react';
import {getdata} from './data'
import './App.css';

export default class Table extends Component{
    constructor(props){
        super(props)
        this.state= {
            name: '',
            status: '',
            editName: '',
            editStatus: '',
            selected: null,
            data: [
                {id: 1, name: 'Jumanazar', status: 'low'},
                {id: 2, name: 'Ali', status: 'Medium'},
                {id: 3, name: 'Jack', status: 'High'},
                {id: 4, name: 'George', status: 'Low'},
            ]
        }
    };
        render(){
            const onDelete = (id) =>{
                console.log('deleted', id);

                const newData = this.state.data.filter((value) => value.id !==id);
                this.setState({data: newData});
            };
            cosnt onAdd = () => {
                console.log(this.state.name, this.state.status);
                cosnt newData = [
                    ...this.state.data,
                    {
                        id: this.state.data.length + 1,
                        name: this.state.name,
                        status: this.state.status, 
                    },
                ];
                this.setState({data: newData});
            }
            return(
                <div>
                    <table>

                        <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Level</th>
                        
                        </tr>
                        <tr>
                            <td>0</td>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                            <td><button>Save</button></td>
                            <td><button>Delete</button></td>
                        </tr>
                        {
                            this.state.datas.map((value, index)=>{
                                    return(<div>
                        <tr key={value.id}>
                           
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.job}</td>
                            <td>
                               <button className='bt'>Edit</button>
                                </td>
                            <td> 
                                <button className='btn' onClick={() => this.delete(value)}>
                                    Delete</button>
                                </td>
                        
                        </tr>
                        </div>
                            )
                                })
                            }
                    </table>
                </div>
            );
        }
    }