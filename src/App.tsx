import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Iframe test</h1>
            <iframe
                title="Walls.io"
                allowFullScreen
                id="wallsio-iframe"
                src={`//my.walls.io/j4z3r?nobackground=1&amp;show_header=0`}
                style={{
                    border: 0,
                    height: '800px',
                    width: '600px',
                }}
                loading="lazy"
            ></iframe>
        </>
    );
}

export default App;
