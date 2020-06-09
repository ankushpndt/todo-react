import React, {Component} from 'react';
class AddTodo extends Component{
state={
content: ''
}
change=(e)=>{
 this.setState({
     content: e.target.value
 })
}
submit=(e)=>{
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
        content:''
    });
}


    render(){
        return(
            <form action="" onSubmit={this.submit}>
                <label htmlFor="">Add new Todo</label>
                <input type="text" onChange={this.change} value={this.state.content}/>
            </form>
        )
    }
}

export default AddTodo;