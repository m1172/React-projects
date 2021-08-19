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
            const onAdd = () => {
                console.log(this.state.name, this.state.status);
                const newData = [
                    ...this.state.data,
                    {
                        id: this.state.data.length + 1,
                        name: this.state.name,
                        status: this.state.status, 
                    },
                ];
                this.setState({data: newData});
            };

            const onChangeName = (e) => {
                this.setState({name: e.target.value});
            };
            const onChangeStatus = (e) => {
                this.setState({ status: e.target.value});
            };
            const onEdit = (value) => {
                this.setState({
                    selected: value.id,
                    editName: value.name,
                    editStatus: value.status,
                });
            };
            const onSave =() => {
                this.setState({editName: e.target.value});
            };
            const onEditName =(e) => {
                this.setState({editName: e.target.value});
            };
            const onEditStatus =(e) => {
                this.setState({editStatus: e.target.value});
            };
            return(
                <div>
                    <h1>seleted: {this.state.selected}</h1>
                    <input onchange={onChangeName} placeholder='name' type="text" />
                    <input onChange={onChangeStatus} placeholder='status' type="text" />
                    <button onClick={onAdd}>add</button>
                      <table border='1' style={{borderCollapse: 'collapse'}}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Status</th>
                                <th>action</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((value) => {
                                return (
                                    <tr key={value.id}>
                                        <td>{value.id}</td>
                                        <td>
                                            {this.state.selected === value.id ? (
                                                <input
                                                onChange={onEditName}
                                                type='text'
                                                value={this.state.editName}
                                                />
                                            ) : (
                                                value.name
                                            )}
                                        </td>
                                        <td>
                                            {this.state.selected === value.id ? (
                                                <input 
                                                 onChange={onEditStatus}
                                                 type="text"
                                                 value={this.state.editStatus}
                                                 />
                                            ):(
                                                value.status
                                            )}
                                        </td>
                                        <td>
                                            <button onClick={()=> onDelete(value.id)}>delete</button>
                                        </td>
                                        <td>
                                            {this.state.selected === value.id ? (
                                                <button onClick={onSave}>save</button>
                                            ): (
                                                <button onClick={() => onEdit(value)}>edit</button>
                                            )}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                      </table>
                    
                </div>
            );
        }
    }