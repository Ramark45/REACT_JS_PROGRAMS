import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import Revenue from "./Revenue";
import ListProducts from "./ListProducts";
const Dashboard=()=>{
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.clear();
        navigate('/Login')
    }
    const [users, setUsers] = useState([])
  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
    <div className="container">
    <button onClick={logout}>LOGOUT</button><br/>
    <h1>Welcome to Dashboard</h1>
    <h2>Clients List</h2>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
</div>
<div className="container">
<h2>Top 5 Products</h2>
            <ListProducts/>
            <h2>Revenue Genertaed</h2>
            <Revenue/>
</div>
</>
  );
}
export default Dashboard;