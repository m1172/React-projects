import React, { Component } from 'react';
import {getdata} from './data'
import './App.css';

export default class Table extends Component{
    constructor(props){
        super(props)
        this.state= {
            datas : getdata()
        }
    };

    delete= (value) => {
        const {id} = value;
        const datas= this.state.datas.filter((value) => value.id !== id);
        this.setState({datas});
    };
        render(){
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