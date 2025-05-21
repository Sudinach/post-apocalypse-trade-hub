import React, { useState } from 'react';
import './index.css'; // Ensure your CSS is imported

function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [supplies, setSupplies] = useState([]);
    const [error, setError] = useState('');
    const [selectedItem, setSelectedItem] = useState(null);

    const handleLogin = async () => {
        const authString = btoa(`${username}:${password}`);
        try {
            const response = await fetch('/api/supplies/list', {
                headers: {
                    'Authorization': `Basic ${authString}`,
                },
            });
            if (response.ok) {
                const data = await response.json();
                setSupplies(data);
                setLoggedIn(true);
                setError('');
            } else {
                setError('Login failed. Invalid credentials.');
                setLoggedIn(false);
                setSupplies([]);
            }
        } catch (err) {
            setError('Failed to connect to the backend.');
            setLoggedIn(false);
            setSupplies([]);
        }
    };

    const handleLogout = () => {
        setLoggedIn(false);
        setSupplies([]);
        setUsername('');
        setPassword('');
        setError('');
        setSelectedItem(null); // Clear selected item on logout
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    const handleCloseDialog = () => {
        setSelectedItem(null);
    };

    if (!loggedIn) {
        return (
            <div className="login-container">
                <h2>Login to Trade Hub</h2>
                {error && <p className="error-message">{error}</p>}
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button onClick={handleLogin}>Login</button>
            </div>
        );
    }

    return (
        <div>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Tradable Supplies</h2>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <button onClick={handleLogout}>Logout</button>
            </div>
            {supplies.length > 0 ? (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <table style={{ borderCollapse: 'collapse', width: '80%', maxWidth: '800px' }}>
                        <thead>
                        <tr style={{ backgroundColor: '#555', color: '#eee' }}>
                            <th style={{ padding: '10px', borderBottom: '1px solid #666', textAlign: 'left' }}>Name</th>
                            <th style={{ padding: '10px', borderBottom: '1px solid #666', textAlign: 'left' }}>Type</th>
                            <th style={{ padding: '10px', borderBottom: '1px solid #666', textAlign: 'right' }}>Quantity</th>
                            <th style={{ padding: '10px', borderBottom: '1px solid #666', textAlign: 'center' }}>Image</th>
                        </tr>
                        </thead>
                        <tbody>
                        {supplies.map((item, index) => (
                            <tr key={index} style={{ borderBottom: '1px solid #777', cursor: 'pointer' }} onClick={() => handleItemClick(item)}>
                                <td style={{ padding: '8px', textAlign: 'left' }}>{item.name}</td>
                                <td style={{ padding: '8px', textAlign: 'left' }}>{item.type}</td>
                                <td style={{ padding: '8px', textAlign: 'right' }}>{item.quantity}</td>
                                <td style={{ padding: '8px', textAlign: 'center' }}>
                                    {item.imageUrl && <img src={item.imageUrl} alt={item.name} style={{ height: '50px' }} />}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p style={{ textAlign: 'center' }}>No supplies available.</p>
            )}

            {selectedItem && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3>{selectedItem.name}</h3>
                        <p>Type: {selectedItem.type}</p>
                        <p>Quantity Available: {selectedItem.quantity}</p>
                        {selectedItem.imageUrl && <img src={selectedItem.imageUrl} alt={selectedItem.name} style={{ maxWidth: '200px', maxHeight: '200px' }} />}
                        <button onClick={handleCloseDialog}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;