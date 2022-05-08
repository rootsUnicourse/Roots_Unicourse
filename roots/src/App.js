import React, { Component, useEffect }  from 'react';
import {Container} from '@material-ui/core'
import Header from './components/Header/Header';
import { Routes, Route} from 'react-router-dom'
import Auth from './components/Auth/Auth';
import Content from './components/Content/Content'
import useStyles from './appStyles'
import { useDispatch } from 'react-redux';
import { getCompanys } from './actions/companys'
import Form from './components/Form/Form'
import Profile from './components/Profile/Profile';



function App() {
  const classes = useStyles()
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCompanys());
    }, [dispatch]);

    
  return (
    <Container maxWidth="lg">
      <Header/>
      <Routes>
        <Route path="/auth" exact element={<Auth/>}/>
        <Route path="/" exact element={<Content/>}/>
        <Route path="/form" exact element={<Form/>}/>
        <Route path="/profile" exact element={<Profile/>}/>
      </Routes>
    </Container>
  );
}

export default App;