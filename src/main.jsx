import React from 'react';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

import './index.css'
import App from './App.jsx'
import { MantineProvider } from '@mantine/core';

createRoot(document.getElementById('root')).render(
  <MantineProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </MantineProvider>
)
