import React from 'react';
export { useToast, useLoad } from './src/Hook';
export { ToastContext, LoadingContext } from './src/Context';
import App from './src/App';

const Component = props => <App {...props} />

export default Component;