import React, { Component } from "react";
import "./CardComponent.css";
import { Card, Image, Icon } from "semantic-ui-react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

class CardComponent extends Component {
  getBadgesFromGist(gist) {
    const properties = Object.getOwnPropertyNames(gist.files);
    const fileTypes = [];
    properties.forEach((property) => {
      fileTypes.push(gist.files[property]?.language);
    });
    return fileTypes;
  }

  getRawURLFromGist(gist) {
    const properties = Object.getOwnPropertyNames(gist.files);
    const a = gist.files[properties[0]]?.raw_url;
    return a;
  }

  getOwnersUsernameFromFork(forkDict, gistId) {
    const forks = forkDict[gistId];
    const forkOwnerList = [];
    if (Array.isArray(forks)) {
      if (forks.length > 0) {
        const min_length = Math.min(forks.length, 3);
        for (let i = 0; i < min_length; i++) {
          forkOwnerList.push(forks[i].owner.login);
        }
      }
    }
    return forkOwnerList;
  }

  render() {
    return (
      <div className="card">
        <Card>
          <Image src={this.user_git.props.avatar} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{this.user_git.props.name}</Card.Header>
            <Card.Header>{this.user_git.props.user_name}</Card.Header>
          </Card.Content>

          <Card.Content extra>
            <a>
              <Icon name="user" />
              {this.props.user_git.followers} Followers
            </a>
          </Card.Content>

          <Card.Content extra>
            <a>{this.props.user_git.public_repos} Repos</a>
          </Card.Content>

          <Card.Content extra>
            <a>{this.props.user_git.public_gists} Gists</a>
          </Card.Content>

          <Card.Content>
            <h3> Public Gists </h3>
            <Card.Content>
              <div>
                {this.props.gists_array.map((gist, index) => (
                  <li>
                    <a href={this.getRawURLFromGist(gist)} target="_blank">
                      <Popup trigger={<p> {gist.description} </p>}>
                        <div>
                          <iframe
                            className="iframe"
                            title={gist.description}
                            src={this.getRawURLFromGist(gist)}
                          ></iframe>
                        </div>
                      </Popup>
                    </a>

                    {this.getBadgesFromGist(gist).map((language, index) => {
                      return (
                        <div key={index} className="badge">
                          <p className="badge-text">{language}</p>
                        </div>
                      );
                    })}

                    {this.getOwnersUsernameFromFork(
                      this.props.gist_forks,
                      gist.id
                    ).map((owner, index) => {
                      return (
                        <div key={index}>
                          <p>{owner}</p>
                        </div>
                      );
                    })}
                  </li>
                ))}
              </div>
            </Card.Content>
          </Card.Content>
        </Card>
      </div>
    );
  }
}
export default CardComponent;
