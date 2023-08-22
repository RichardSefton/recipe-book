import React, { useMemo, useEffect, useState , useRef} from 'react';


import { openDb, createTables } from './datastore';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import Navigator from './Navigator';

const App = () => (
    <Provider store={store}>
        <Navigator />
    </Provider>
);

export default App;
