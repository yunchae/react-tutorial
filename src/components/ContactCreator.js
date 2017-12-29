import React from 'react'

class ContactCreator extends React.Component {

    constructor(props){
        super(props);

        this.state= {
            name: '',
            phone: ''
        }
    }
    
    
    // 입력시 onChange
    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    // insert 클릭시 추가  && name, phone 공백 입력
    handleClick() {
        this.props.onInsert(this.state.name, this.state.phone);
        this.setState({
            name: "",
            phone: ""
        });
    }

    render() {
        return (
            <div>
                <p>
                    <input type="text" name="name"
                           placeholder="name" value={this.state.name}
                            onChange={this.handleChange.bind(this)}/>
                    <input type="text" name="phone"
                           placeholder="phone" value={this.state.phone}
                           onChange={this.handleChange.bind(this)}/>
                    <button onClick={this.handleClick.bind(this)}>Insert</button>
                </p>
            </div>
        )
    }
}

export default ContactCreator;