import Card from './components/Card';
import { useEffect, useState } from 'react';

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const user = async () => {
      try {
        const res = await fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
        const data = await res.json();
        setUserData(data.results[0])
      } catch (error) {
        console.log("Error while fetching user info", error)
      }
    }

    user();
  }, [])

  return (
    <div className='flex justify-center items-center h-screen w-full overflow-hidden bg-red-100'>
      {userData ? <Card user={userData} /> : <p>Loading...</p>}
    </div>
  );
}

export default App;