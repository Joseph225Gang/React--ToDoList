import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render(){
        const { test, content } = this.props;
        return(
            <div onClick={this.handleClick.bind(this)}>
                {test}-{content}
            </div>
        )
    }

    handleClick(){
        const {handleDelete, index} = this.props;
        handleDelete(index);
    }
}

TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.string,
    handleDelete: PropTypes.func,
    index: PropTypes.number
}

TodoItem.defaultProps = {
    test: 'hello world'
}
export default TodoItem;

