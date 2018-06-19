import React, {Component} from 'react';

class Field extends Component {
    render(){
        if(this.props.type === 'text'){
            return (
                <div className="form-group">
                    <label htmlFor={this.props.name}>{this.props.label}</label>
                    <input value={this.props.value} onChange={(e) => this.props.onChange(e.currentTarget.value, this.props.name)} type="text" id={this.props.name} className="form-control" />
                </div>
            )
        } else if(this.props.type === 'submit'){
            return (
                <div className="form-group">
                     <input type="submit" className="btn" value={this.props.label} onClick={this.props.onClick ? this.props.onClick : null} />
                </div>
            )
        } else {
            throw new Error(this.props.type);
        }
    }
}

export default Field;