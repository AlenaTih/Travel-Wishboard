import React, { useState } from "react"
import Header from "./components/Header.jsx"
import Card from "./components/Card.jsx"
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
        <Header />
      </header>

      <main className="main">
        {cards}
      </main>
    </div>
  )
}

export default App
