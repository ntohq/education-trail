import React, { Component } from 'react';

class Test extends Component {
    static displayName = Test.name;

    componentDidMount() {
        document.title =  "Test - Education Trail";
    }

    render(): React.ReactNode {
        return (
            <p>Welcome to Testing</p>
        )
    }
}

export default Test;