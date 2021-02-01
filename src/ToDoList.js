import React from 'react';
import { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import Test from './Test';
import './App.css';

class ToDoList extends Component{

    constructor(props)
    {
        super(props);
        //當組件的state或者props發生改變的時候，render函數就會重新執行
        this.state = {
            inputValue: '',
            list:[]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    render(){
        console.log('render');
        return(
            <Fragment>
                    <label htmlFor="insertArea">輸入內容</label>
                    <input id="insertArea" className='input' onChange={this.handleChange} value={this.state.inputValue}/>
                    <button onClick={this.handleClick}>提交</button>
                    <ul>
                        {
                            this.getToDoItem()
                        }
                    </ul>
                    <Test content={this.state.inputValue}/>
            </Fragment>
        )
    }

    getToDoItem()
    {
        return this.state.list.map((item, index) => {
            return  (
                <div key={index}>
                    <TodoItem 
                              content={item} 
                              index={index} 
                              handleDelete={this.handleDelete.bind(this)}/>
                </div>
            )
        })
    }

    handleClick()
    {
        this.setState((prevState) => ({
            list:[...prevState.list, prevState.inputValue],
            input :''
        }));
    }

    handleChange(e)
    {
        const value = e.target.value;
        this.setState(() => ({
            inputValue: value
        }));
    }

    handleDelete(index)
    {
        this.setState((prevState) => {
            const list = [...prevState.list]
            list.splice(index,1);
            return {list}
        });
    }
}

export default ToDoList;
