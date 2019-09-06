import React from 'react';
import ReactDOM from 'react-dom';
import Test from './components/test/testComponent'

class Home extends React.Component {
    constructor() {
        super()
    }


    render() {
        return (
            <div>
                <h1>This is an H1</h1>
                <Test user={{name: 'Tridev', age: '23', occupation: 'SD'}}/>
            </div>
        )
    }

}

ReactDOM.render(<Home/>, document.getElementById("root"));