import React, { Component } from "react";
import './CardComponent.css';
import { Card, Image, Icon } from 'semantic-ui-react'

class CardComponent extends Component {
    render(){
        return <div className='card'>
            <Card>
                <Image src={this.props.avatar} wrapped ui={false}/>
                <Card.Content>
                    <Card.Header>{this.props.name}</Card.Header>
                    <Card.Header>{this.props.user_name}</Card.Header>
                </Card.Content>

                <Card.Content extra>
                <a>
                    <Icon name='user' />
                    {this.props.gists_url}
                </a>
                </Card.Content>
                
                <Card.Content extra>
                <a>
                    <Icon name='user' />
                    {this.props.followers} Followers
                </a>
                </Card.Content>
                
                <Card.Content extra>
                <a>
                    <Icon name='user' />
                    {this.props.public_repos} Repos
                </a>
                </Card.Content>

                <Card.Content extra>
                <a>
                    <Icon name='user' />
                    {this.props.public_gists} Gists
                </a>
                </Card.Content>
            </Card>
        </div>
    }
}
export default CardComponent;
