import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
// import {bindActionCreators} from 'redux';

const Counter = ({counter, inc, dec, res}) => {
    return (
    <div className="wrapper">
        <div className="parent-div">
            <div className="main-div">
                <h1>{counter}</h1>
            </div>
    
        <div className="buttons-calc">
            <button 
            className="inc-button"
            onClick={inc}>
                <img src="icons/Plus.png" alt="plus"></img>
            </button>
            <button 
            className="dec-button"
            onClick={dec}>
                <img src="icons/minus.png" alt="minus"></img>
            </button>
            <button 
            className="zero-button"
            onClick={res}>
                <img src="icons/reset.png" alt="reset"></img>
            </button>
        </div>
        </div>
    </div>
    );

}
const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators(actions, dispatch);
   
// }

export default connect(mapStateToProps, actions)(Counter);



