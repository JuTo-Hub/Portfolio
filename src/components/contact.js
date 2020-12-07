import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Justin Torres</h2>
                        <img
                            src="./assets/JT_Cartoon_2.png"
                            alt="avatar"
                            style={{ height: '250px', opacity: '1'}}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Click-A-Link To Find Me</p>

                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                    <p>Phone # (347) 645-8687</p>
                  </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                    <p>Email: JustinTorres1@outlook.com</p>
                  </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                        <ListItem>
                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/justin-torres-011840108/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="https://github.com/JuTo-Hub" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                            </div>
                        </ListItem>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;