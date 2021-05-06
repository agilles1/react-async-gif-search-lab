import React from 'react'

class GifSearch extends React.Component{

    state ={
        query: ""
    }

    handleChange = (e) => {
        this.setState({
            query: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.fetch(this.state.query)
    }

render(){
    console.log(this.state.query)
    return(
    <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.query} onChange={this.handleChange}></input>
    </form>)
}


}

export default GifSearch