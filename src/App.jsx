import React, { useState } from "react"
import Card from "./Card.jsx"
import data from "./data.js"
import Logo from "./assets/logo.png"
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
        <img src={Logo} className="logo" alt="Logo"></img>
        <h1 className="header-title">Travel Wishboard</h1>
      </header>

      <main className="main">
        {cards}
      </main>
    </div>
  )
}

export default App
