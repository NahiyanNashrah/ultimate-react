import { useState } from "react";
import { Form } from "./Form";
import { Logo } from "./Logo";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

export default function App() {
      const [items, setItem] = useState([]);

  const handleAddItem = (newItem) => {
    setItem(items => [...items, newItem]);
    };
    const handleDeleteItem = (itemId) => {
      setItem(items => items.filter(item => item.id !== itemId))
    }

    const handleToggleItem = (itemId) => {
      setItem(items => items.map(item => item.id === itemId ? {...item, packed: !item.packed} : item));
    }
      function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItem([]);
  }
  return <div className='app'>    
    <Logo />
    <Form onAddItems={handleAddItem} />
    <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearList={handleClearList} />
    <Stats items={items} />
  </div>
}


