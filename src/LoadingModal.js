import React from 'react';
import { View, Modal, ActivityIndicator, Button } from 'react-native';
import { LoadingContext } from './Context';
import css from './Style';

function Component() {
    const [loading] = React.useContext(LoadingContext);
    return <>
        <Modal transparent visible={loading}>
            <View style={[css.loading_container]}>
                <ActivityIndicator color={'white'} size={'large'}/>
            </View>
        </Modal>
    </>
}

export default Component