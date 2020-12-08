import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import JT_Cartoon_2 from "../assets/JT_Cartoon_2.png"

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={2}></Cell>
                    <Cell col={8}>
                    <div className="floatText">
                        <img
                            src={JT_Cartoon_2}
                            alt="avatar"
                        />
                        <p>Hailing from the depths of Brookyln, New York... I've put my all into 
                everything that I've attempted and web developement is no different. I intend to 
                shine bright in the coding world and amongst my peers. No syntax error is going to 
                stop me from reaching the pinnacle and competing for the top spot. Stay tuned, there 
                is so much more to look forward to...</p>
                </div>

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                            <hr />

                            <p>HTML/CSS | Bootstrap | Foundation | JavaScript | React | SQL | NodeJS | Express | MongoDB</p>

                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/justin-torres-011840108/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="https://github.com/JuTo-Hub" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;