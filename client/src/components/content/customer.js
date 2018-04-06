import React, { Component } from 'react';
import './customer.css';
import userInfoRequest from '../../utils/http/userInfoRequest'
class Main extends Component {
    constructor() {
        super();
        this.state = {
            customers: []
        }
        this.state = { userName: '', email: '', password: '' };
    }


    handleChange(event, type) {
        this.setState({
            userName: type === 1 ? event.target.value : this.state.userName,
            email: type === 2 ? event.target.value : this.state.email,
            password: type === 3 ? event.target.value : this.state.password,
        });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.userName);
        event.preventDefault();
    }

    componentDidMount() {

        // fetch('/api/user/').then((res)=>{
        //     return res.json();
        // }).then((customerInfo)=>{
        //     console.log('customer.js customerInfo:',customerInfo);
        // })
        // .catch((err)=>{
        //     console.log('err:',err);
        // });
    }

    postData() {
        const userInfo = {
            'userName': this.state.userName,
            'email': this.state.email,
            'password': this.state.password,
        };

        let result = userInfoRequest.login(userInfo);
        console.log("result:::",result);
    }
    click(){
        const userInfo = {
            'userName': this.state.userName,
            'email': this.state.email,
            'password': this.state.password,
        };

        let result = userInfoRequest.singup(userInfo);
        console.log("result:::",result);
    }

    render() {
        return (
            <div >
                <form action="/api/user/login"  onSubmit={()=>this.postData()}>
                    <input type="text" name="userName" value={this.state.userName} onChange={(event) => this.handleChange(event, 1)} />
                    <input type="text" name="email" value={this.state.email} onChange={(event) => this.handleChange(event, 2)} />
                    <input type="text" name="password" value={this.state.password} onChange={(event) => this.handleChange(event, 3)} />
                    <input type="submit" value="Submit" />
                </form>
                <button onClick={()=>{this.click()}}></button>
            </div>
        );
    }
}

export default Main;
