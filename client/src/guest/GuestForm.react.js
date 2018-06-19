// @flow
import React, {Component} from 'react';
import Field from '../UI/Field.react'
import {actionAddGuest} from "./Guest.actions";
import {connect} from 'react-redux';

type State = {
    id: string,
    name: string,
    surname: string
}

class GuestForm extends Component<null, State> {

    state = {
        id: '',
        name: '',
        surname: ''
    }

    handleSetValue = (value, name) => {
        const s = {};
        s[name] = value;
        this.setState(s);
    }

    render(){
        return (
            <form onSubmit={e => e.preventDefault()}>
                <Field type="text" value={this.state.id} label="id" onChange={this.handleSetValue} name="id" />
                <Field type="text" value={this.state.name} label="First name" onChange={this.handleSetValue} name="name" />
                <Field type="text" value={this.state.surname} label="Surname" onChange={this.handleSetValue} name="surname" />
                <Field type="submit" label="Create user" onClick={this.handleFormSubmit} />
            </form>
        )
    }

    handleFormSubmit = () => {
        this.props.actionAddGuest(this.state.id, this.state.name, this.state.surname);
        this.props.history.push('/');
    }

}



export default connect(null, {actionAddGuest})(GuestForm);