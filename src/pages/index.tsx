import React from "react"

import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  // headerFontFamily: ['Avenir Next', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Impact', 'Georgia', 'serif'],
  // See below for the full list of options.
  scaleRatio: 2,
})

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.)
typography.injectStyles()

export default function Home() {
  return (
    <div>
      <h1>Hello world!</h1>
      <p>What a world.</p>
      <p>It's a beautiful day today.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe odit natus obcaecati ad, nisi voluptatum ea magnam eius, cum, quibusdam fuga aliquid minima ipsa consequatur sit mollitia cumque repudiandae commodi.</p>
    </div>
  )
}
