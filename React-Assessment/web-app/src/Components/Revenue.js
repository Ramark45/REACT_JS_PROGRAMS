  import { useState,useEffect } from "react";
  const Products=()=>{
  const [users, setUsers] = useState([])
  const fetchData = () => {
    
    fetch("https://jsonplaceholder.typicode.com/photos")
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
    <div>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.title}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
export default Products;