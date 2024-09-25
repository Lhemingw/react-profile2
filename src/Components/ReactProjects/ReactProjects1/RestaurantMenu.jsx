import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './Data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function RestaurantMenu() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories] = useState(allCategories);
  const [activeCategory, setActiveCategory] = useState('allCategories');

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          filterItems={filterItems}
          activeCategory={activeCategory}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default RestaurantMenu;