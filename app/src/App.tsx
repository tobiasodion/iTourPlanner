import React from 'react';
import Router from './router/Router';
import AppLayout from './layout/AppLayout';

function App() {
  return (
    <AppLayout>
      <Router />
    </AppLayout>
  );
}

export default App;
