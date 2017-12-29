import React from 'react'
import update from 'react-addons-update'
import ContactInfo from './ContactInfo';
import ContactCreator from './ContactCreator';
import ContactRemover from './ContactRemover';

class Contacts extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            contactData: [
                {name: "Abet", phone: "010-0000-0001"},
                {name: "Betty", phone: "010-0000-0002"},
                {name: "Charlie", phone: "010-0000-0003"},
                {name: "David", phone: "010-0000-0004"}
            ],
            selectedKey: -1
        }
    }

    _onSelect(key) {
        if(key == this.state.selectedKey){
            console.log('key select cancelled');
            this.setState({
                selectedKey: -1
            });
            return;
        }

        this.setState({
            selectedKey: key
        })

        console.log(key + " is selected")
    }

    _isSelected(key) {
        if(this.state.selectedKey == key){
            return true;
        }else{
            return false;
        }
    }

    _insertContact(name, phone){
        let newState = update(this.state, {
            contactData: {
                $push: [{"name": name, "phone": phone}]
            }
        });
        this.setState(newState);
    }

    _removeContact() {

        console.log('this.state.selectedKey', this.state.selectedKey);

        if(this.state.selectedKey == -1){
            console.log("contact not selected");
            return;
        }



        this.setState({
            contactData: update(
                this.state.contactData,
                {
                    $splice: [[this.state.selectedKey, 1]]
                }
            ),
            selectedKey: -1
        });
    }

    render() {
        return (
            <div>
                <h1>Contacts</h1>
                <ul>
                    {this.state.contactData.map((contact, i) => {
                        return(
                            <ContactInfo name={contact.name}
                                        phone={contact.phone}
                                         key ={i}
                                         contactKey ={i}
                                         isSelected={this._isSelected.bind(this)(i)}
                                         onSelect={this._onSelect.bind(this)}
                            />)
                    })}
                </ul>
                <ContactCreator onInsert={this._insertContact.bind(this)}></ContactCreator>
                <ContactRemover onRemove={this._removeContact.bind(this)}></ContactRemover>
            </div>
        )
    }
}

export default Contacts;