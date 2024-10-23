import React, { useState, useEffect } from 'react';
import Data from '../components/MenuItem';
import Data from "src/Components/ReactProjects/ReactProjects1/Data.jsx"

const MenuPage = () => {
  const [menuItems, setData] = useState([]);

  useEffect(() => {
    // Fetch menu items from an API or local data
    // For now, we'll use dummy data
    setData([
      { id: 1, name: 'Pizza', description: 'Delicious pizza', price: 10.99, image: 'pizza.jpg' },
      { id: 2, name: 'Burger', description: 'Juicy burger', price: 8.99, image: 'burger.jpg' },
    ]);
  }, []);

  return (
    <div className="menu-page">
      <h2>Our Menu</h2>
      {menuItems.map(item => (
        <MenuItem key={item.id} item={item} addToCart={() => {}} />
      ))}
    </div>
  );
};

export default MenuPage;