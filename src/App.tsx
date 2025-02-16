import React from 'react';
import {MainPage} from './pages/index';
import {IContentUnit} from './types';

type AppPropsType = {
    store: IContentUnit[]
}

function App(props: AppPropsType) {
    const {store} = props;

    return (
        <MainPage store={store}/>
    );
};

export default App;
