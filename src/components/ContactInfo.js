import React from 'react';

class ContactInfo extends React.Component {

    handleClick(){
        this.props.onSelect(this.props.contactKey)
    }

    render() {
        return (
            <li onClick={this.handleClick.bind(this)}>
                {this.props.name} {this.props.phone}</li>
        )
    }
}

export default ContactInfo;