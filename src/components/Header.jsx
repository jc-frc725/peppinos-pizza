import { react } from 'react';

export default function Header() {
    return (
        <header>
            <h1 className="site-title">Peppino's Pizza</h1>
            <div id="nav">
                <ul>
                    <li>Welcome, Guest</li>
                    <li>Sign In</li>
                </ul> 
            </div>
        </header>
        
    )
}