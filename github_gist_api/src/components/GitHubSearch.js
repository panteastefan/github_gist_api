import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import './GitHubSearch.css';

class GitHubSearch extends Component {
    
    render(){
        return <div className='search'>
            <Form onSubmit={this.props.handleSubmit}>
                <Form.Group>
                    <Form.Input placeholder='Github user' name='github user' onChange={this.props.handleSearch}/>
                    <Form.Button content='Search' />
                </Form.Group>
            </Form>
        </div>
    }
}

export default GitHubSearch;
