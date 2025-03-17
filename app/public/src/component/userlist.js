import React from "react";
import useFetchAPI from "../customhook/usefetch";

function UsersList() {
  const { data, loading, error } = useFetchAPI("https://dummyjson.com/users");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Users List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {data.map((user) => (
            <li 
            key={user.id} 
            style={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "space-between", 
                borderBottom: "1px solid #ccc", 
                padding: "10px" 
            }}
            >
            <span>{user.firstName}</span>
            <img 
                src={user.image} 
                alt={user.firstName} 
                style={{ width: "50px", height: "50px", borderRadius: "50%" }} 
            />
            </li>
        ))}
</ul>

    </div>
  );
}

export default UsersList;
