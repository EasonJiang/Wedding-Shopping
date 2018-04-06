import React from 'react';
import {Dialog,Input} from 'react-toolbox/lib/';
import {getUserSession} from '../../utils/http/userInfoRequest'
class Login extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            name: '', phone: '', multiline: '', email: '', hint: '', label: '',
            active: true
        }
    }


    handleChange = (name, value) => {
        this.setState({ ...this.state, [name]: value });
    };

      handleToggle = () => {
        // this.setState({active: false});
        getUserSession();
        this.props.active();
      }
    
      actions = [
        { label: "Login", onClick: this.handleToggle }
      ];
    render() {
        return (
            <Dialog
                actions={this.actions}
                active={this.state.active}
                onEscKeyDown={this.handleToggle}
                onOverlayClick={this.handleToggle}
                title='Login'
            >
                <Input type='text' required label='Name' name='name' value={this.state.name} onChange={this.handleChange.bind(this, 'name')} maxLength={16} />
                <Input type='tel' required label='Pass Word' name='phone'  value={this.state.phone} onChange={this.handleChange.bind(this, 'phone')} />
            </Dialog>

        );
    }
}

export default Login;
