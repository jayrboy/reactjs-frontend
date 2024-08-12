import { useEffect, useState } from 'react';
import './App.css';

interface User {
  id: number;
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_API + '/api/users')
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setUsers(result.data);
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id} {user.name} {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
