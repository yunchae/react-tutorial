import React from 'react';
// import Header from './Header';
// import Content from './Content';
// import StateExample from './StateExample'
// import RandomNumber from './RandomNumber';
import Contacts from './Contacts'

class App extends React.Component {

    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         value: Math.round(Math.random()*100)
    //     };
    //     this.updateValue = this.updateValue.bind(this);
    // }
    //
    // updateValue(randomValue) {
    //     this.setState({
    //         value: randomValue
    //     })
    // }

    render() {
        return (
            <div>
                <Contacts/>
                {/*<Header title={this.props.headerTitle}/>*/}
                {/*<Content title={this.props.contentTitle}*/}
                {/*body={this.props.contentBody}></Content>*/}
                {/*/!*<StateExample/>*!/*/}
                {/*<RandomNumber number={this.state.value}*/}
                {/*onUpdate={this.updateValue}/>*/}
            </div>
        );
    }
}

App.defaultProps = {
    headerTitle: 'Default header',
    contentTitle: 'Default contentTitle',
    contentBody: 'Default contentBody'
}

export default App;