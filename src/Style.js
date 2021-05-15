import { StyleSheet, Platform, StatusBar } from 'react-native';

const _spaceing = 10;
const _status_bar_hight = Platform.select({
    ios: 0 + _spaceing,
    android: StatusBar.currentHeight + _spaceing,
    default: 0,})
const _toast_color = { SUCCESS: '#76EFAA', ERROR: '#FE837A', INFO: '#17CFC3', WARNING: '#FEEFAB' }

export default StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    message_container: { position: 'absolute', left: 0, right: 0, top: 0, alignItems: 'center'},
    toast_list_container: { marginTop: _status_bar_hight, maxWidth: 800, width: '100%'},
    loading_container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#00000050' },
    safe_top: { flex: 0 },
    safe_bottom: { flex: 1 },
    message_box: {
        minHeight: 60,
        marginLeft: 10,
        marginTop: 5,
        marginRight: 10,
        marginBottom: 5,
        padding: 10,
        borderLeftWidth: 10,
        backgroundColor: '#ffffff',
        borderLeftColor: '#555555',
        justifyContent: 'center',
        shadowOffset: { width: 0, height: 0 },
        shadowColor: '#00000088',
        shadowOpacity: 1,
        shadowRadius: 3,
    },
    SUCCESS: { borderLeftColor: _toast_color.SUCCESS },
    ERROR: { borderLeftColor: _toast_color.ERROR },
    INFO: { borderLeftColor: _toast_color.INFO },
    WARNING: { borderLeftColor: _toast_color.WARNING }
})