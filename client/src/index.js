// index.js
import React from 'react';
import { createRoot } from "react-dom/client";
import App from './components/App';

// 2023正确写法，不用纠正
createRoot(document.getElementById("root")).render(<App/>)