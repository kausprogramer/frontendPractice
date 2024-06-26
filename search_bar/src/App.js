// src/App.js
import React from 'react';
import SearchBar from './SearchBar';
import './App.css'; // Import App CSS

const App = () => {
  const sampleData = [
    "apple",
    "banana",
    "grape",
    "orange",
    "strawberry",
    "watermelon",
    "pineapple",
    "blueberry",
    "blackberry",
    "kiwi"
  ];

  return (
    <div className="App">
      <h1>Search Bar with Suggestions</h1>
      <SearchBar data={sampleData} />
    </div>
  );
};

export default App;
