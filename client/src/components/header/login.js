import React from 'react';
import { Dialog, Input } from 'react-toolbox/lib/';
import { login, singup } from '../../utils/http/userInfoRequest';
import { connect } from 'react-redux';
import { userLoginAction } from '../../redux/action/appState';
import { bindActionCreators } from 'redux';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '', phone: '', password: '', email: '', hint: '', label: '', error: null,
            active: true,
            signup: false,
        }
    }

    handleChange = (name, value) => {
        this.setState({ ...this.state, [name]: value });
    };

    getUserInput= ()=>({
            userName: this.state.name || '',
            password: this.state.password || '',
            email: this.state.email,
            phone: this.state.phone,
    })

    showTheError(result){
        console.log('failed:', result);
            this.setState({
                ...this.state,
                error: result.message
            });
            setTimeout(() => {
                this.setState({
                    ...this.state,
                    error: ''
                });
            }, 1500);
    }

    async handleToggleSingup() {
        this.setState({
                    ...this.state,
                    signup: true
                });
        

    }

    async handleToggleLogin() {
            if (this.state.signup) {
                this.setState({
                    ...this.state,
                    signup: false
                });
                return;
            }
            
            const result = await login(this.getUserInput());
            console.log('result:',result);
            if(result.code < 0){
                this.showTheError(result);
                return;
            }
            this.props.active();
    }

    actions = [
        { label: "Login", raised: true, accent: true, floating: true, onClick: this.handleToggleLogin.bind(this) },
        { label: "Dont't have an account?Signup", onClick: this.handleToggleSingup.bind(this) }
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
                <Input type='password' required label='Pass Word' name='password' value={this.state.password} onChange={this.handleChange.bind(this, 'password')} />
                {
                    this.state.signup ?
                        <div>
                            <Input type='email' label='email' name='email' value={this.state.email} onChange={this.handleChange.bind(this, 'email')} />
                            <Input type='tel' label='phone' name='phone' value={this.state.phone} onChange={this.handleChange.bind(this, 'phone')} />
                        </div>
                        : null
                }
                {this.state.error ? <p style={{ color: 'red' }}>{'*' + this.state.error}</p> : null}
            </Dialog>

        );
    }
}
// const mapStateToProps = (state) => {
//     return { userInfo: state.userReducer.userInfo.data }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         userLoginAction: bindActionCreators(userLoginAction, dispatch),
//         userSignUpAction: bindActionCreators(userLoginAction, dispatch)
//     }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(Login);
