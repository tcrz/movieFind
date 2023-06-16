import { useState } from 'react'
import './App.css'
import Movies from './Movies/Movies';
import Homepage from './Homepage/Homepage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


function App() {
  const qClient = new QueryClient();
  return (
    <QueryClientProvider client={qClient}>
      <section className="h-screen border relative overflow-hidden">
        <Movies />
      </section>
    </QueryClientProvider>
  )
}

export default App
