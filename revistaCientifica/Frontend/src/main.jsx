import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import './Styles/index.css';
import { ArticleCardEditor } from './Components/ArticleCardEditor.jsx';
import { EditorPage } from './Pages/EditorPage.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <EditorPage/>
)
