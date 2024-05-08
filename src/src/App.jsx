import React, { Component } from 'react'
import {Graph2D} from 'graph2d.js'

function App() {
  return (
    <div className="App">
        <Graph2D width={400} height={400} 

        htmlStyle={{"border": "1px solid red"}} // for html
        canvasStyle={{
          function: {shadowBlur: 10, shadowColor: "red"}
        }} // for getContext("2d")
        functions={[ 
          [x => 0.5 * x * x, "red"],
          [x => x - 2, "white"]
        ]}
          />
    </div>
  )
}

export default App;
