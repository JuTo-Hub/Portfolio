import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Footer,} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import Resume from './assets/Resume.pdf'


class App extends Component {
  render() {
    return (
      <div>
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/">MyPortfolio</Link>} scroll>
            <Navigation>
              <a href={Resume} target="_blank" rel="noreferrer">Resume</a>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title={<Link style={{ textDecoration: 'none', color: 'black' }} to="/">MyPortfolio</Link>}>
            <Navigation>
            <a href={Resume} target="_blank" rel="noreferrer">Resume</a>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
          <Footer size="mini">
          <span> &copy; JuTo-Hub 2020</span>
        </Footer>
        </Layout>
      </div>
      </div>
    );
  }
}

export default App;
