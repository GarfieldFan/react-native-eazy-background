import React from 'react';
import { View, FlatList } from 'react-native'
import { ToastContext } from './Context';
import ToastItem from './ToastItem';
import css from './Style';

function Component(props) {
    const Context = React.useContext(ToastContext);

    const renderItem = ({ item }) => <ToastItem type={item.type} message={item.message} id={item.id} />

    return <>
        <View style={[css.message_container]} pointerEvents={'none'}>
            <FlatList data={Context.messages} renderItem={renderItem} keyExtractor={item => item.id} />
        </View>
    </>
}

export default Component