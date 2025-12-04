import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
/*
Vite - tool that we used to set up this project
-Vite also helps us "build" the website
-Vite also created a server
(A Server puts our website at a url)
-Vite server also refreshes the website When we change the code

-Vite Server is a replacement for Live server


*/