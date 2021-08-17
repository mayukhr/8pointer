import '../styles/globals.css';
import { useState, useEffect, createContext } from "react";
import { AuthProvider } from '../components/AuthProvider';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp;
