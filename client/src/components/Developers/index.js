import React from "react";
import { Grid, List, Image, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import ProfilePlaceholder from "../../assets/images/Tim_Allen_headshot.jpg"

import "./style.css";

const Developers = props => (
    <Grid id="developers-container">
        <Grid.Column width={6}>
            <List id="developers-list">
                <List.Item>
                    <Image circular size="small" src={ProfilePlaceholder}/>
                    <List.Content>
                        <List.Header id="paul-header">Paul Han</List.Header>
                        <br />
                        <List.Description>Back-end development, Socket.IO, MongoDB</List.Description>
                        <List.Description>
                            <Icon name="github"/>
                            <Link>https://github.com/paulmhan</Link>
                        </List.Description>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <Image circular size="small" src={ProfilePlaceholder}/>
                    <List.Content>
                        <List.Header id="suneetha-header">Suneetha Burla</List.Header>
                        <br />
                        <List.Description>Back-end development, Socket.IO, MongoDB</List.Description>
                        <List.Description>
                            <Icon name="github"/>
                            <Link>https://github.com/suneethaburla</Link>
                        </List.Description>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <Image circular size="small" src={ProfilePlaceholder}/>
                    <List.Content>
                        <List.Header id="james-header">James Geib</List.Header>
                        <br />
                        <List.Description>Front-end development</List.Description>
                        <List.Description>
                            <Icon name="github"/>
                            <Link>https://github.com/jpgeib</Link>
                        </List.Description>
                        <List.Description>
                            <Icon name="linkedin"/>
                            <Link>https://linkedin.com/in/james-geib-0b6493160</Link>
                        </List.Description>
                    </List.Content>
                </List.Item>
            </List>
        </Grid.Column>
        <Grid.Column width={10}>

        </Grid.Column>
    </Grid>
);

export default Developers;