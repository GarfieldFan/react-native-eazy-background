import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native'
import css from './Style'

const Component = props => {

    const _topBarRender = () => <StatusBar barStyle={props.barStyle} hidden={props.barHidden} />

    if (props.safeArea === false)
        return <>{_topBarRender()}{props.children}</>

    return <>
        {_topBarRender()}
        <SafeAreaView style={[css.safe_top, { backgroundColor: props.topColor }]}></SafeAreaView>
        <SafeAreaView style={[css.safe_bottom, { backgroundColor: props.bottomColor }]}>
            {props.children}
        </SafeAreaView>
    </>
}

export default Component