import React from "react"

import Typography from "typography"

// @ts-ignore
import YAMLData from "../../content/data.yaml"

// @ts-ignore
import yamlPages from "../../content/index.yaml"

import "./index.scss"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  headerFontFamily: ['Avenir Next', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ["Calibri", "Georgia", "serif"],
  // See below for the full list of options.
  scaleRatio: 4,
})

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.)
typography.injectStyles()

export default function Home() {
  return (
    <div className="app">
      <h1>Hello world!</h1>
      <p>What a world.</p>
      <p>It's a beautiful day today.</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe odit
        natus obcaecati ad, nisi voluptatum ea magnam eius, cum, quibusdam fuga
        aliquid minima ipsa consequatur sit mollitia cumque repudiandae commodi.
      </p>

      <h1>YAML Data</h1>

      <div>
        {yamlPages.map((page, index) => {
          return (
            <section>
              <h2>{page.path}</h2>
              {page.content.map((data, index) => {
                return <p> {data.item} </p>
              })}
              {page.links.map((data, index) => {
                return <a> {data.item} </a>
              })}
            </section>
          )
        })}
      </div>

      {/* <YAMLbuildtime /> */}
    </div>
  )
}

const YAMLbuildtime = () => (
  <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
    <h1>{YAMLData.title}</h1>
    <ul>
      {YAMLData.content.map((data, index) => {
        return <li key={`content_item_${index}`}>{data.item}</li>
      })}
    </ul>
  </div>
)
