import React, { Component } from 'react'

class FilterForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Search');
    }

    handleChange = (e) => {
        this.setState({
            searchText: e.target.value
        })
    }

    render() {
        return (
            <div className="filter-form" style={filterStyle}>
                <form style={formStyle} onSubmit={this.handleSubmit}>
                    <input style={textInput} type="text" name="searchText" onChange={this.handleChange} placeholder="Search posts, users"/>
                    <input style={submitBtn} type="submit" value="Search"/>
                </form>
            </div>
        )
    }
}

const filterStyle = {
    padding: '5px 15px 15px 15px',
}
const formStyle = {
    display: 'grid',
    gridColumnGap: '15px',
    gridTemplateColumns: 'auto 25%'
}
const textInput = {
    background: 'transparent',
    border: 'none',
    borderBottom: '2px solid #fff',
    outline: 'none',
    color: '#fff',
    fontSize: '18px',
    padding: '10px',
}
const submitBtn = {
    border: 'none',
    fontSize: '20px',
    color: '#fff',
    background: '#da1b5f',
    cursor: 'pointer',
}

export default FilterForm
