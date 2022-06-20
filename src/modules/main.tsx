import React from 'react'
import { default as MenuScreen } from '@modules/menu/containers/menu-screen-connected'
import { store } from '@store'
import { Provider } from 'react-redux'

const App = () => {
    return (
        <Provider store={store}>
            <MenuScreen />
        </Provider>
    )
}

export default App
