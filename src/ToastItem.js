import React from 'react';
import { Text, Animated } from 'react-native';
import { toastItemHook } from './Hook';
import css from './Style';

const Component = props => {
    const { animatedValue, animatedAction, show } = toastItemHook(props.id);
    React.useEffect(() => {
        animatedAction();
    }, [])

    return show && <>
        <Animated.View style={[css.message_box, css[props.type], animatedValue]}>
            <Text>{props.message}</Text>
        </Animated.View>
    </>
};

export default Component