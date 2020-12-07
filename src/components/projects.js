import React, { Component } from 'react';
import { Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    render() {
          return(
          <div className="projects-grid">
              <Cell col={6}>
            {/* Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: '5px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(./assets/CareerMatch.PNG) center / cover'}} ></CardTitle>
              <CardText>
                <h4>Career Match -</h4> 
                <p>A job search engine to match managers with potential employees.</p>
              </CardText>
              <CardActions border>
                <Button colored href="https://github.com/JuTo-Hub/Project2_Career_Match">Github</Button>
                <Button colored href="https://career-match-proj-2.herokuapp.com/">App</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
  
            {/* Project 2 */}
            <Card shadow={5} style={{minWidth: '450', margin: '5px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(./assets/C&R.PNG) center / cover'}} >Career Match</CardTitle>
              <CardText>
                <h4>Cocktails & Reviews -</h4>
                <p>A PC game search engine with a special twist. Cocktails anyone?</p>
              </CardText>
              <CardActions border>
                <Button colored href="https://github.com/JuTo-Hub/Project1_Game_Search_Engine">GitHub</Button>
                <Button colored href="https://umutamac.github.io/Game-Search-Engine/">App</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            </Cell>

            <Cell col={6}>
            {/* Project 3 */}
            <Card shadow={5} style={{minWidth: '450', margin: '5px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(./assets/WeatherWizard.png) center / cover'}} >#3</CardTitle>
              <CardText>
                <h4>Weather Wizard -</h4>
                <p>This keeps track of multiple cities weather data at once, even 5 day forecast data!</p>
              </CardText>
              <CardActions border>
                <Button colored href="https://github.com/JuTo-Hub/06_Weather_Wizard">GitHub</Button>
                <Button colored href="https://juto-hub.github.io/06_Weather_Wizard/">App</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

             {/* Project 4 */}
             <Card shadow={5} style={{minWidth: '450', margin: '5px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url("./assets/DayScheduler.png") center / cover'}} ></CardTitle>
              <CardText>
                <h4>Day Scheduler -</h4>
                <p>A simple day scheduler that is color coded for cureent and future hours.
            Use it to keep track of meetings or other plans for the day.</p>
              </CardText>
              <CardActions border>
                <Button colored href="https://github.com/JuTo-Hub/05_-Day_Planner">GitHub</Button>
                <Button colored href="https://juto-hub.github.io/05_-Day_Planner/">App</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            </Cell>

            <Cell col={6}>  
            {/* Project 5 */}
            <Card shadow={5} style={{minWidth: '450', margin: '5px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(./assets/PasswordGen.png) center / cover'}} ></CardTitle>
              <CardText>
              <h4>Password Generator -</h4> 
              <p>This is a simple password generator that takes in user input to create a password.</p>
              </CardText>
              <CardActions border>
                <Button colored href="https://github.com/JuTo-Hub/03_Password_Generator">GitHub</Button>
                <Button colored href="https://juto-hub.github.io/03_Password_Generator/">App</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
  
            {/* Project 6 */}
            <Card shadow={5} style={{minWidth: '450', margin: '5px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(./assets/CodeQuiz.PNG) center / cover'}} ></CardTitle>
              <CardText>
                <h4>Code Quiz -</h4> 
                <p>This is a quick exam to test your basic knowledge of coding. 
                It even records your highscore at the end.</p>
              </CardText>
              <CardActions border>
                <Button colored href="https://github.com/JuTo-Hub/04_Code_Test">GitHub</Button>
                <Button colored href="https://juto-hub.github.io/04_Code_Test/">App</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            </Cell>
          </div>
  
  
        )
      }
  
    }
  export default Projects;