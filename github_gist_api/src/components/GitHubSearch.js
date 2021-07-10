import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import './GitHubSearch.css';

class GitHubSearch extends Component {
    render(){
        return <div className='search'>
            <Form>
                <Form.Group>
                    <Form.Input placeholder='Github user' name='github user'/>
                    <Form.Button content='Search' />
                </Form.Group>
            </Form>
        </div>
    }
}

export default GitHubSearch;
