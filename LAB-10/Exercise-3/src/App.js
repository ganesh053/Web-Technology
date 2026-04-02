import React, { useState, useEffect } from "react";

function DataList({ data }) {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <b>{item.title}</b>
          <p>{item.body}</p>
        </li>
      ))}
    </ul>
  );
}

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        return response.json();
      })
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // Runs only once

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>API Data Fetch</h2>

      {loading && <h3>Loading...</h3>}
      {error && <h3 style={{ color: "red" }}>{error}</h3>}

      {!loading && !error && <DataList data={data} />}
    </div>
  );
}

export default App;