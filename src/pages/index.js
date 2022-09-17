import React from "react"

import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  // headerFontFamily: ['Avenir Next', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Impact', 'Georgia', 'serif'],
  // See below for the full list of options.
})

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.)
typography.injectStyles()

export default function Home() {
  return <div>Hello world!</div>
}
