import React,{Component} from 'react';
import {Tabs,Tab} from 'react-mdl';
import {Cell,Grid,Card,CardActions,CardTitle,Button,IconButton,CardMenu,CardText} from 'react-mdl';
import Main from './main';
import {Link} from 'react-router-dom';


class Project extends Component {
    constructor(props) {
      super(props);
      this.state = { activeTab: 0 };
    }
  
    toggleCategories() {
  
      if(this.state.activeTab === 0){
        return(
          <div className="projects-grid">
            {/* Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png) center / cover'}} ></CardTitle>
              <CardText style={{color: 'black',fontweight:'bold'}}>
               React Project 1

                             </CardText>

                             <CardText style={{color: 'purple',fontweight:'bold'}}>
               COVID-19 TRACKER APPLICATION

                             </CardText>
              <CardActions border>
                 
                <Button href="https://github.com/Prakshita12/React-Application">GitHub</Button>
               
                
                
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
  
            {/* Project 2 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://create-react-app.dev/img/logo-og.png) center / cover'}} ></CardTitle>
              <CardText style={{color: 'black',fontweight:'bold'}}>
               React Project 2

                             </CardText>

                             <CardText style={{color: 'purple',fontweight:'bold'}}>
              PORTFOLIO USING REACT

                             </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
  
            
          </div>
  
  
        )
      } else if(this.state.activeTab === 1) {
        return(
            <div className="projects-grid">
              {/* Project 1 */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://kinsta.com/wp-content/uploads/2018/05/what-is-php-3-1.png) center / cover'}} ></CardTitle>
                <CardText style={{color: 'black',fontweight:'bold'}}>
                     COURSE REGISTRATION WEBSITE
  
                               </CardText>
  
                               <CardText style={{color: 'purple',fontweight:'bold'}}>
                 This website is made using PHP,MYSQL,JQUERY,AJAX,JAVASCRIPT
  
                               </CardText>
                <CardActions border>
                   
                  <Button href="https://github.com/Prakshita12/Course-Registration-System" className="button-d">GitHub</Button>
                 
                  
                  
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
              </div>
              )
      } else if(this.state.activeTab === 2) {
        return (
            <div className="projects-grid">
            {/* Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}} ></CardTitle>
              <CardText style={{color: 'black',fontweight:'bold'}}>
                   BOX OFFICE FORECAST

                             </CardText>

                             <CardText style={{color: 'purple',fontweight:'bold'}}>
               Predictions about which movies are going to be profitable and which are not

                             </CardText>
              <CardActions border>
                 
                <Button href="https://github.com/Prakshita12/Machine-Learning-Project" className="button-d">GitHub</Button>
               
                
                
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

            
            {/* Project 2 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.pngitem.com/pimgs/m/346-3460443_machine-learning-course-near-me-machine-learning-logo.png) center / cover'}} ></CardTitle>
              <CardText style={{color: 'black',fontweight:'bold'}}>
                   SPOTIFY SONG CLASSIFIER

                             </CardText>

                             <CardText style={{color: 'purple',fontweight:'bold'}}>
                  Predicts what type of songs a person like

                             </CardText>
              <CardActions border>
                 
                <Button href="https://github.com/Prakshita12/Machine-Learning-Project" className="button-d">GitHub</Button>
               
                
                
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            </div>
           )
      } else if(this.state.activeTab === 3) {
        return (
            <div className="projects-grid">
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://w0.pngwave.com/png/165/182/computer-icons-pl-sql-symbol-database-symbol-png-clip-art.png) center / cover'}} ></CardTitle>
            <CardText style={{color: 'black',fontweight:'bold'}}>
                 TAXI-SERVICE SYSTEM

                           </CardText>

                           <CardText style={{color: 'purple',fontweight:'bold'}}>
                    A Database for Taxt-Service Management

                           </CardText>
            <CardActions border>
               
              <Button href="https://github.com/Prakshita12/Database-Design-Taxi-Service-System" className="button-d">GitHub</Button>
             
              
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          </div>
        )
      }
      else if(this.state.activeTab === 4) {
        return (
                     <div className="projects-grid">
                {/* Project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://image.slidesharecdn.com/ooadpptforslidesharepptx-170322082429/95/brief-introduction-to-object-oriented-analysis-and-design-1-638.jpg?cb=149017130) center/cover'}}></CardTitle>
                  <CardText style={{color: 'black',fontweight:'bold'}}>
                      RESTDOOR
    
                                 </CardText>
    
                                 <CardText style={{color: 'purple',fontweight:'bold'}}>
                   A Command-Line Application which help users to search for restaurants.
    
                                 </CardText>
                  <CardActions border>
                     
                    <Button href="https://github.com/Prakshita12/OOAD-Project" className="button-d">GitHub</Button>
                   
                    
                    
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
                </div>
    
        )
      }
  
    }
  
  
  
    render() {
      return(
        <div>
          <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple >
            <Tab style={{color:'black',fontSize:'bold'}}>React</Tab>
            <Tab style={{color:'black',fontSize:'bold'}}>PHP</Tab>
            <Tab style={{color:'black',fontSize:'bold'}}>Machine Learning</Tab>
            <Tab style={{color:'black',fontSize:'bold'}}>Database Design</Tab>
            <Tab style={{color:'black',fontSize:'bold'}}>Object oriented Analysis and Design</Tab>
            
           
          </Tabs>
  
  
            <Grid>
              <Cell col={12}>
                <div className="content">{this.toggleCategories()}</div>
              </Cell>
            </Grid>
  
  
        </div>
      )
    }
  }
  
  export default Project;