import React, { Component } from "react";
import './CardComponent.css';
import { Card, Image, Icon } from 'semantic-ui-react'
import { Badge } from 'reactstrap';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


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
                    {this.props.followers} Followers
                </a>
                </Card.Content>
                
                <Card.Content extra>
                <a>
                    {this.props.public_repos} Repos
                </a>
                </Card.Content>

                <Card.Content extra>
                <a>
                    {this.props.public_gists} Gists
                </a>
                </Card.Content>

                <Card.Content>
                <h3> Public Gists </h3>
                    <Card.Content>
                        <div>
                            {this.props.description.map((descr, index) => (
                            <li>
                                <Popup trigger={<a> {descr}</a>}><div>Popup content here !!</div></Popup>
                                 <br/>
                                <Badge color="secondary">{this.props.badges[index]}</Badge> <br/>
                            </li>
                            ))}

                            {/* {this.props.description.map(description => (
                                <li>{description}</li>
                            ))} */}
                        </div>
                    </Card.Content>
                </Card.Content>

            </Card>
        </div>
    }
}
export default CardComponent;
