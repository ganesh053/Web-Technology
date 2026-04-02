import React, { useState } from "react";

function ItemList({ items, removeItem }) {
  if (items.length === 0) {
    return <h3>No Items Available</h3>;
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.text}
          <button onClick={() => removeItem(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const addItem = () => {
    if (input === "") return;

    const newItem = {
      id: Date.now(),
      text: input
    };

    setItems([...items, newItem]);
    setInput("");
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Dynamic List</h2>

      <input
        type="text"
        placeholder="Enter item"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>

      <ItemList items={items} removeItem={removeItem} />
    </div>
  );
}

export default App;