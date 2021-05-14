import React from 'react';
import { Animated, Easing } from 'react-native';
import { ToastContext, LoadingContext } from './Context';

export function useToast() {
    const context = React.useContext(ToastContext);
    return context.toastMessage;
}

export function toastHook() {
    const [messages, setMsg] = React.useState([]);
    const lastIdRef = React.useRef(null);
    function toastMessage(message, type = '') {
        if (typeof message !== 'string' || message.trim() === "")
            return console.warn('Toast Message undefined');
        const id = createId();
        lastIdRef.current = id;
        setMsg([{ type, message, id }, ...messages]);
    };
    function removeMessage(id) {
        if (id === lastIdRef.current) {
            setMsg([]);
            lastIdRef.current = null;
        }
    }
    return { messages, toastMessage, removeMessage }
}

export function toastItemHook(id) {
    const Context = React.useContext(ToastContext);
    const removeMessage = Context.removeMessage;
    const [show, setShow] = React.useState(true)
    const [animation] = React.useState(new Animated.Value(0));
    const animatedValue = {
        opacity: animation,
        transform: [{ translateY: animation.interpolate({ inputRange: [0, 1], outputRange: [-20, 0] }) }]
    }
    function animatedAction() {
        Animated.sequence(
            [
                Animated.parallel([
                    Animated.spring(animation,
                        { toValue: 1, duration: 250, useNativeDriver: false, easing: Easing.easeinout, }),
                    Animated.timing(animation,
                        { toValue: 1, duration: 250, useNativeDriver: false, easing: Easing.easeinout, })
                ]),
                Animated.timing(animation,
                    { toValue: 1, duration: 2000, useNativeDriver: false, easing: Easing.easeinout, }),
                Animated.parallel([
                    Animated.spring(animation,
                        { toValue: 0, duration: 250, useNativeDriver: false, easing: Easing.easeinout, }),
                    Animated.timing(animation,
                        { toValue: 0, duration: 250, useNativeDriver: false, easing: Easing.easeinout, })
                ]),
            ]
        ).start(() => { setShow(false); removeMessage(id) })
    }
    return { animatedValue, animatedAction, show };
}

export function useLoad() {
    const [, setLoading] = React.useContext(LoadingContext);
    return setLoading;
}

export function loadingHook() {
    const [loading, setLoading] = React.useState(false);
    function setLoad(bool) {
        if (typeof bool !== 'boolean')
            return console.warn('show loading modal value is boolean')
        setLoading(bool);
    }
    return [loading, setLoad]
}

function createId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}