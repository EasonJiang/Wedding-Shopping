import React from 'react';
import { Button, Avatar,Drawer,Card,CardTitle,CardMedia,CardActions,CardText } from 'react-toolbox/lib';
import { login, singup } from '../../utils/http/userInfoRequest';
import { connect } from 'react-redux';
import { userLoginAction } from '../../redux/action/appState'
import { bindActionCreators } from 'redux'

export default class MyProfile extends React.Component {
    constructor() {
        super();
        this.state = {
          userInfo: JSON.parse(localStorage.getItem('userInfo')),
        }
      }

      handleClick(){
        localStorage.removeItem('userInfo');
        this.props.active()
      }

    userCards() {
        return (
            <Card style={{ width: '350px' }}>
                <CardTitle
                    avatar="https://placeimg.com/80/80/animals"
                    title="Welcome"
                    subtitle={this.state.userInfo.userName}
                />
                <CardMedia
                    aspectRatio="wide"
                    image="https://placeimg.com/800/450/nature"
                />
                <CardActions>
                    <Button accent={true} raised onClick={this.handleClick.bind(this)} label="Logout" />
                </CardActions>
            </Card>
        )
    };
    
    render() {
        return (
            <Drawer type= 'right' active={true} onOverlayClick={()=>this.props.active()}>
                    {this.userCards()}
            </Drawer>
        );
    }
}
