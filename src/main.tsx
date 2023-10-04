
import "reflect-metadata";
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from 'app';

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);


if(import.meta.env.VITE_APP_ENV === 'development'){
  root.render(
    <React.StrictMode> 
      <App></App>
    </React.StrictMode>
  )
}else{
  root.render(<App></App>)
}

