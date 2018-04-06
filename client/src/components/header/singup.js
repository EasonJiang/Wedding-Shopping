import React from 'react';
import {Dialog,Input} from 'react-toolbox/lib/';

class Signup extends React.Component {
    state = {  };

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
        this.setState({active: !this.state.active});
      }
    
      actions = [
        { label: "Cancel", onClick: this.handleToggle },
        { label: "Save", onClick: this.handleToggle }
      ];
    render() {
        return (
            <Dialog
                actions={this.actions}
                active={this.state.active}
                onEscKeyDown={this.handleToggle}
                onOverlayClick={this.handleToggle}
                title='My awesome dialog'
            >
                <Input type='text' required label='Name' name='name' value={this.state.name} onChange={this.handleChange.bind(this, 'name')} maxLength={16} />
                <Input type='text' multiline label='Multiline' maxLength={20} value={this.state.multiline} onChange={this.handleChange.bind(this, 'multiline')} />
                <Input type='email' label='Email address'  value={this.state.email} onChange={this.handleChange.bind(this, 'email')} />
                <Input type='tel' label='Phone' name='phone'  value={this.state.phone} onChange={this.handleChange.bind(this, 'phone')} />
                <Input type='text' label='error' error={<span>Error!! <a href="#!" onClick={e => { e.preventDefault(); console.log('some help'); }}>?</a></span>} />
            </Dialog>

        );
    }
}

export default Signup;
