import React, { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import Card from "./Card.jsx"
import data from "./data.js"
import "./App.css"

function App() {
  
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div className="app">
      <header className="header">
        <img src="#" className="logo" alt="Logo"></img>
        <h1>Travel Wishboard</h1>
      </header>

      <main className="main">
        {cards}
      </main>
    </div>
  )
}

export default App
