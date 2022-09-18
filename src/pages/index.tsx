import React, { useEffect, useState } from "react"

import Typography from "typography"

// @ts-ignore
import YAMLData from "../../content/data.yaml"

// @ts-ignore
import yamlPages from "../../content/index.yaml"

import "./index.css"

import Headroom from "react-headroom"
import { InView } from "react-intersection-observer"

const typography = new Typography({
  baseFontSize: "25px",
  baseLineHeight: 1.45,
  headerFontFamily: [
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Calibri", "Georgia", "serif"],
  // See below for the full list of options.
  scaleRatio: 4,
})

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.)
typography.injectStyles()

export default function Home() {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      <Headroom onUnfix={() => console.log(`123`)}>
        <h1 className="ani-grani">Portfolio</h1>
        {/* <h1 className="ani-grani" style={{ display: "inline", whiteSpace: "break-spaces" }}>Stefan Ginev</h1> */}
        {/* <h2 className="ani-grani" style={{ display: "inline", whiteSpace: "break-spaces" }}>Portfolio</h2> */}
        {/* <pre onClick={goToTop}>Portfolio — Stefan Ginev</pre> */}
      </Headroom>

      <div id="app">
        <h1 className="section-header">
          <StaggerLetters>Hello world!</StaggerLetters>
        </h1>

        <AnimateIntoView as="section">
          <p>What a world.</p>
          <p>It's a beautiful day today.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe odit
            natus obcaecati ad, nisi voluptatum ea magnam eius, cum, quibusdam
            fuga aliquid minima ipsa consequatur sit mollitia cumque repudiandae
            commodi.
          </p>
        </AnimateIntoView>

        {/* <h1 className="ani-grani">YAML Data</h1> */}

        <h1 className="section-header">
          <StaggerLetters>YAML Data</StaggerLetters>
        </h1>

        {yamlPages.map((page, index) => {
          return (
            <AnimateIntoView as="section" key={index}>
              <h2>{page.name}</h2>
              {page.content.map((data, index) => {
                return <p> {data.item} </p>
              })}
              {page.links.map((data, index) => {
                return <a> {data.item} </a>
              })}
            </AnimateIntoView>
          )
        })}
      </div>
    </>
  )
}

const StaggerLetters = (
  props: { [key: string]: any } & { children: string }
) => (
  <>
    {props.children
      .replace(" ", "•")
      .split("")
      .map((letter, index) => (
        <AnimateIntoView
          as="span"
          className="letter"
          key={index}
          style={{ transitionDelay: `${index * 60}ms` }}
        >
          {letter}
        </AnimateIntoView>
      ))}
  </>
)

const AnimateIntoView = (props: { [key: string]: any }) => (
  <InView
    as="div"
    onChange={(inView, entry) => {
      entry.target.classList.toggle("--in-view", inView)
    }}
    {...props}
    className={"--hidden" + (props.className ? " " + props.className : "")}
  />
)
