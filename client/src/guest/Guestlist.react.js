import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actionGuestListGet} from "./Guest.actions";

class Guestlist extends Component {

    componentDidMount(){
        if(this.props.guests.length > 0)
            this.props.actionGuestListGet();
    }

    renderBody(){
        if(this.props.guests === null){
            return (
                <tr>
                    <td colSpan="3">Loading data...</td>
                </tr>
            )
        } else if(this.props.guests.length === 0){
            return (
                <tr>
                    <td colSpan="3">No records</td>
                </tr>
            )
        } else {
            return this.props.guests.map(item => {
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.surname}</td>
                    </tr>
                )
            });
        }
    }

    render(){
        return (<table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Surname</th>
                </tr>
            </thead>
            <tbody>
                {this.renderBody()}
            </tbody>
        </table>)
    }
}

const mapStateToProps = (state) => {
    return {
        guests: state.guests.list
    }
}

export default connect(mapStateToProps, {actionGuestListGet})(Guestlist);
