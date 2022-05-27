import React from "react";
import "./Cards.css";
import SchedulerImage from "../../assests/projectImages/calendarGUI.png";
import SmartTripodImage from "../../assests/projectImages/seniorProjec2.png";
import EyeOfLondonImage from "../../assests/projectImages/eyeOfLondon.JPG";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const Cards = () =>{


    return(
        <div className='cards'>
            <div className='cards-wrapper'>
                <Card className= "root">
                    <CardActionArea>
                        <CardMedia
                            className="media"
                            image={SchedulerImage}
                            title="Image of Scheduler GUI"
                        />
                        <CardContent>
                            <Typography className="cardHeaderText" gutterBottom variant="h5" component="h2">
                                Scheduler
                            </Typography>
                            <Typography className="cardTextArea" variant="body2" color="textSecondary" component="p">
                                This is a scheduler made specifically for the Lincoln Medical Center
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className="MuiCardActionsRoot">
                        <Button className="cardButton" size="medium" color="primary" href="https://github.com/Salas123/Medical-Scheduler">
                                Link to Github Repo
                        </Button>
                    </CardActions>
                </Card>
                <Card className="root">
                    <CardActionArea>
                        <CardMedia
                            className="media"
                            image={SmartTripodImage}
                            title="Image of Smart Tripod Phone App"
                        />
                        <CardContent>
                            <Typography className="cardHeaderText" gutterBottom variant="h5" component="h2">
                                Smart Tripod
                            </Typography>
                            <Typography className="cardTextArea" variant="body2" color="textSecondary" component="p">
                                This was an embedded systems project of a smart tripod controlled via an Android mobile app
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className="MuiCardActionsRoot">
                        <Button className="cardButton" size="medium" color="primary" href="https://github.com/Salas123/CS179J-Team10">
                            Link To Github Repo
                        </Button>
                    </CardActions>
                </Card>
                <Card className="root">
                    <CardActionArea>
                        <CardMedia
                            className="media"
                            image={EyeOfLondonImage}
                            title="Photography portfolio"
                        />
                        <CardContent>
                            <Typography className="cardHeaderText" gutterBottom variant="h5" component="h2">
                                Photo Portfolio
                            </Typography>
                            <Typography className="cardTextArea" variant="body2" color="textSecondary" component="p">
                                This is my photo portfolio that has been personally curated by me and shows some of my best shots
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className="MuiCardActionsRoot">
                        <Button className="cardButton" size="medium" color="primary" href="https://drive.google.com/drive/folders/1m-B5kam_C3Q6HZSLFa-BsLGE0lmyU2NX?usp=sharing">
                            Link To Google Drive
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}

export default Cards;