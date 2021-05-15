import React from 'react';
import { View, FlatList, SafeAreaView, Platform } from 'react-native'
import { ToastContext } from './Context';
import ToastItem from './ToastItem';
import css from './Style';

function Component(props) {
    const Context = React.useContext(ToastContext);

    const renderItem = ({ item }) => <ToastItem type={item.type} message={item.message} id={item.id} />

    return <>
        <View style={[css.message_container]} pointerEvents={'none'}>
            {Platform.OS === 'ios' && <SafeAreaView style={css.safe_top} />}
            <FlatList 
            data={Context.messages} 
            renderItem={renderItem} 
            keyExtractor={item => item.id}
            style={[css.toast_list_container]} />
        </View>
    </>
}

export default Component