import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Main } from './pages/main'
import { Liked } from './pages/liked'
import { Navbar } from './components/navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    },
  },
});

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Liked />} />



          </Routes>


        </Router>
        </QueryClientProvider>
    </div>
  );
}

export default App;
