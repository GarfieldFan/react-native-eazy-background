import { StyleSheet, Platform, StatusBar } from 'react-native';

const _spaceing = 10;
const _status_bar_hight = Platform.select({
    ios: 0 + _spaceing,
    android: StatusBar.currentHeight + _spaceing,
    default: 0,
})
const _toast_color = { SUCCESS: '#76EFAA', ERROR: '#FE837A', INFO: '#17CFC3', WARNING: '#FEEFAB' }

export default StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    message_container: { position: 'absolute', left: 0, right: 0, top: 0, alignItems: 'center' },
    toast_list_container: { marginTop: _status_bar_hight, maxWidth: 800, width: '100%' },
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

export const css = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', },
    center: { justifyContent: 'center', alignItems: 'center' },
    relative: { position: 'relative' },
    absolute: { position: 'absolute' },
    absolute_fluid: { position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 },
    top: (value = 0) => { return { top: value } },
    right: (value = 0) => { return { right: value } },
    bottom: (value = 0) => { return { bottom: value } },
    left: (value = 0) => { return { left: value } },
    flex: (value = 0) => { return { flex: value } },
    flex_basis: (value = 0) => { return { flexBasis: value } },
    flex_grow: (value = 0) => { return { flexGrow: value } },
    flex_shrink: (value = 0) => { return { flexShrink: value } },
    flex_wrap: { flexWrap: 'wrap' },
    direction: (value = 'row') => { return { flexDirection: value } },
    flex_row: { flexDirection: 'row' },
    flex_column: { flexDirection: 'column' },
    justify_content: (value = 'center') => { return { justifyContent: value } },
    align_items: (value = 'center') => { return { alignItems: value } },
    align_self: (value = 'center') => { return { alignSelf: value } },
    align_content: (value = 'center') => { return { alignContent: value } },
    w: (value = 'auto') => { return { width: value }; },
    min_w: (value = 10) => { return { minWidth: value }; },
    max_w: (value = 50) => { return { maxWidth: value } },
    h: (value = 'auto') => { return { height: value } },
    min_h: (value = 10) => { return { minHeight: value }; },
    max_h: (value = 50) => { return { maxHeight: value }; },
    p: (value = 0) => {
        if (!Array.isArray(value) && !Number.isInteger(value)) {
            console.warn('padding value invalid');
            return;
        }
        if (Number.isInteger(value)) return { padding: value };
        switch (value.length) {
            case 1:
                return { padding: value[0] }
            case 2:
                return {
                    paddingTop: value[0],
                    paddingRight: value[1],
                    paddingBottom: value[0],
                    paddingLeft: value[1],
                }
            case 3:
                return {
                    paddingTop: value[0],
                    paddingRight: value[1],
                    paddingBottom: value[2],
                    paddingLeft: value[1],
                }
            case 4:
                return {
                    paddingTop: value[0],
                    paddingRight: value[1],
                    paddingBottom: value[2],
                    paddingLeft: value[3],
                }
            default:
                return {
                    paddingTop: 'auto',
                    paddingRight: 'auto',
                    paddingBottom: 'auto',
                    paddingLeft: 'auto',
                }
        }
    },
    pt: (value = 0) => { return { paddingTop: value } },
    pr: (value = 0) => { return { paddingRight: value } },
    pb: (value = 0) => { return { paddingBottom: value } },
    pl: (value = 0) => { return { paddingLeft: value } },
    py: (value = 0) => { return { paddingTop: value, paddingBottom: value } },
    px: (value = 0) => { return { paddingLeft: value, paddingRight: value } },
    m: (value = 0) => {
        if (!Array.isArray(value) && !Number.isInteger(value)) {
            console.warn('margin value invalid');
            return;
        }
        if (Number.isInteger(value)) return { margin: value }
        switch (value.length) {
            case 1:
                return { margin: value[0] }
            case 2:
                return {
                    marginTop: value[0],
                    marginRight: value[1],
                    marginBottom: value[0],
                    marginLeft: value[1],
                }
            case 3:
                return {
                    marginTop: value[0],
                    marginRight: value[1],
                    marginBottom: value[2],
                    marginLeft: value[1],
                }
            case 4:
                return {
                    marginTop: value[0],
                    marginRight: value[1],
                    marginBottom: value[2],
                    marginLeft: value[3],
                }
            default:
                return {
                    marginTop: 'auto',
                    marginRight: 'auto',
                    marginBottom: 'auto',
                    marginLeft: 'auto',
                }
        }
    },
    mt: (value = 0) => { return { marginTop: value } },
    mr: (value = 0) => { return { marginRight: value } },
    mb: (value = 0) => { return { marginBottom: value } },
    ml: (value = 0) => { return { marginLeft: value } },
    my: (value = 0) => { return { marginTop: value, marginBottom: value } },
    mx: (value = 0) => { return { marginLeft: value, marginRight: value } },
    bg: (value = 'white') => { return { backgroundColor: value, } },
    text_color: (value = 'black') => { return { color: value, } },
    text_fs: (value = 14) => { return { fontSize: value } },
    text_align: (value = 'left') => { return { textAlign: value } },
    text_center: { textAlign: 'center' },
    text_left: { textAlign: 'left' },
    text_right: { textAlign: 'right' },
    text_justify: { textAlign: 'justify' },
    text_deco: (value = 'none') => { return { textDecorationLine: value } },
    text_under: { textDecorationLine: 'underline' },
    text_throught: { textDecorationLine: 'line-through' },
    text_lh: (value = 0) => { return { lineHeight: value } },
    text_fw: (value = 100) => { return { fontWeight: value } },
    text_ls: (value = 0) => { return { letterSpacing: value } },
    text_italic: { fontStyle: 'italic' },
    text_bold: { fontWeight: 'bold' },
    text_transform: (value = 'none') => { return { textTransform: value } },
    text_uppercase: { textTransform: 'uppercase' },
    text_lowercase: { textTransform: 'lowercase' },
    text_capitalize: { textTransform: 'capitalize' },
    border: (v1 = 1, v2 = 'solid', v3 = 'gainsboro') => {
        var width = v1, style = v2, color = v3;
        if (typeof width === 'string' && _isColor(width)) { width = 1; color = v1 };
        return { borderWidth: width, borderStyle: style, borderColor: color };
    },
    border_left: (v1 = 1, v2 = 'solid', v3 = 'gainsboro') => {
        var width = v1, style = v2, color = v3;
        if (typeof width === 'string' && _isColor(width)) { width = 1; color = v1 };
        return { borderLeftWidth: width, borderStyle: style, borderLeftColor: color };
    },
    border_right: (v1 = 1, v2 = 'solid', v3 = 'gainsboro') => {
        var width = v1, style = v2, color = v3;
        if (typeof width === 'string' && _isColor(width)) { width = 1; color = v1 };
        return { borderRightWidth: width, borderStyle: style, borderRightColor: color };
    },
    border_top: (v1 = 1, v2 = 'solid', v3 = 'gainsboro') => {
        var width = v1, style = v2, color = v3;
        if (typeof width === 'string' && _isColor(width)) { width = 1; color = v1 };
        return { borderTopWidth: width, borderStyle: style, borderTopColor: color };
    },
    border_bottom: (v1 = 1, v2 = 'solid', v3 = 'gainsboro') => {
        var width = v1, style = v2, color = v3;
        if (typeof width === 'string' && _isColor(width)) { width = 1; color = v1 };
        return { borderBottomWidth: width, borderStyle: style, borderBottomColor: color };
    },
    border_radius: (value = 10) => { return { borderRadius: value }; },
    shaodw: (color = 'black', width = 3, height = 3) => {
        return {
            shadowOffset: {
                width: width,
                height: height
            },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            shadowColor: color,
            elevation: 3,
        }
    },
    overflow_visible: { overflow: 'visible' },
    overflow_hidden: { overflow: 'hidden' },
    opacity: (value = 1) => { return { opacity: value } },
    zindex: (value = 0) => { return { zindex: value } }
})

function _isColor(string){
    if(_react_color_names.indexOf(string) >= 0) return true;
    if(string.charAt(0) === '#' && string.split("#").length-1 === 1 &&
        (string.length === 7 || string.length === 9)) return true;
    if(((string.substring(0,4) === "rgb(" && string.split(",").length-1 === 2) || 
        (string.substring(0,5) === "rgba(" && string.split(",").length-1 === 3)) &&
        string.slice(-1) === ')') return true;
    return false;
}

const _react_color_names = ['aliceblue','antiquewhite','aqua',
'aquamarine','azure','beige','bisque','black','blanchedalmond',
'blue','blueviolet','brown','burlywood','cadetblue','chartreuse',
'chocolate','coral','cornflowerblue','cornsilk','crimson','cyan',
'darkblue','darkcyan','darkgoldenrod','darkgray','darkgreen',
'darkgrey','darkkhaki','darkmagenta','darkolivegreen','darkorange',
'darkorchid','darkred','darksalmon','darkseagreen','darkslateblue',
'darkslategrey','darkturquoise','darkviolet','deeppink','deepskyblue',
'dimgray','dimgrey','dodgerblue','firebrick','floralwhite','forestgreen',
'fuchsia','gainsboro','ghostwhite','gold','goldenrod','gray','green',
'greenyellow','grey','honeydew','hotpink','indianred','indigo','ivory',
'khaki','lavender','lavenderblush','lawngreen','lemonchiffon','lightblue',
'lightcoral','lightcyan','lightgoldenrodyellow','lightgray','lightgreen',
'lightgrey','lightpink','lightsalmon','lightseagreen','lightskyblue',
'lightslategrey','lightsteelblue','lightyellow','lime','limegreen',
'linen','magenta','maroon','mediumaquamarine','mediumblue','mediumorchid',
'mediumpurple','mediumseagreen','mediumslateblue','mediumspringgreen',
'mediumturquoise','mediumvioletred','midnightblue','mintcream','mistyrose',
'moccasin','navajowhite','navy','oldlace','olive','olivedrab','orange',
'orangered','orchid','palegoldenrod','palegreen','paleturquoise','palevioletred',
'papayawhip','peachpuff','peru','pink','plum','powderblue','purple',
'rebeccapurple','red','rosybrown','royalblue','saddlebrown','salmon',
'sandybrown','seagreen','seashell','sienna','silver','skyblue','slateblue',
'slategray','snow','springgreen','steelblue','tan','teal','thistle',
'tomato','turquoise','violet','wheat','white','whitesmoke','yellow','yellowgreen']