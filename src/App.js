import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';

import { connect } from 'react-redux';
import addArticle from './redux/actions/actions';

const mapStateToProps = state => {
  return { articles: state.articles };
}

const ConnectedList = ({ articles }) => (
  <>
    <ul>
      {articles.map(i => (
        <li key={i.id} > {i.title} </li>
      ))}
    </ul>
    <Form />
  </>
)

const App = connect(mapStateToProps)(ConnectedList);

export default App;
