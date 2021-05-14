import React from 'react';
import { ToastContext, LoadingContext } from './Context';
import SafeArea from './SafeArea';
import Toast from './Toast';
import LoadingModal from './LoadingModal';
import { toastHook, loadingHook } from './Hook';

const Component = props => {
    return <>
        <ToastContext.Provider value={toastHook()}>
            <LoadingContext.Provider value={loadingHook()}>
                <LoadingModal/>
                <SafeArea {...props} />
            </LoadingContext.Provider>
            <Toast />
        </ToastContext.Provider>
    </>
}

export default Component;