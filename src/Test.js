import React, {Component} from 'react';

class Test extends Component{
    //當父組件的render函數被運行時，它的子組件都會重新render
    render(){
        console.log('Test render');
        return <div>{this.props.content}</div>
    }
}

export default Test;