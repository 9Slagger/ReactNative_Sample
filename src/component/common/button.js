import React from 'react';
import {Text , TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types'
 
// init card component.
const Button = (props)=>{
    return (
        <TouchableOpacity style={stlyes.buttonStyle} onPress={props.onPress}> 
            <Text style={stlyes.textStyle}>
                {props.children} 
            </Text>
        </TouchableOpacity>
    );
};
 
Button.propTypes = {
    onPress : PropTypes.func
};
 
 
// style of button
const stlyes ={
    buttonStyle:{
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#27AE60',
        backgroundColor: '#2ECC71',
        padding: 6,
    },
    textStyle:{
        color:'#FFFFFF'
    }
 
};
 
// export to render
export {Button};
 