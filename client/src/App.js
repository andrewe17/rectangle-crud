import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import DisplayPage from './pages/DisplayPage';
import AddPage from './pages/AddPage'
import AttributePage from './pages/AttributePage';
import {RectangleContext} from './context/RectangleContext'
import Header from './components/Header'
import EditPage from './pages/EditPage';

const App = () => {
    const [value, setValue] = useState(
        {
        id: "",
        width: "",
        height: "",
        color: "",
        name: "",
    }
    )
    return (
        <Router>
        <div>
        <Switch>
        <RectangleContext.Provider value={{value, setValue}}>
        <Header />
            <Route path="/" exact component={DisplayPage} />
            <Route path="/addpage" exact component={AddPage} />
            <Route path="/attributepage" exact component={AttributePage} />
            <Route path="/editpage" exact component={EditPage} />
        </RectangleContext.Provider>
        </Switch>
        </div>
        </Router>
    )
}

export default App
