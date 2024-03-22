'use client'

import React, { useEffect, useState } from "react";
import {
  CELL_SIZE,
  getGrid,
  INTERVAL_IN_MS,
} from "./helper"

export default function Demo() {
  const [gridDom, setGridDom] = useState([])
  useEffect(() => {
    let intervalId
    if (document) {
      const grid = getGrid('.demo-root')
      const generateGridDom = (gridSource) => {
        return gridSource.map((row, i) => {
          return <div key={ i } className="flex flex-row"
          >
            {
              row.map((cell, j) => {
              const value = cell ? 2 : Math.round(Math.random())
              const key = `${i}-${j}`
              const style = {
                width: CELL_SIZE.width,
                height: CELL_SIZE.height,
                backgroundColor: value === 2
                  ? 'yellow'
                  : value
                    ? 'green'
                    : 'red',
              }
                return <div
                  key={ key } className="text-center" style={style}
                  data-row-number={i} data-column-number={j}
                >
                  {value}
                </div>
              })
            }
          </div>
        })
      }

      intervalId = setInterval(() => {
        setGridDom(generateGridDom(grid))
      }, INTERVAL_IN_MS)
    }

    return () => {
      clearInterval(intervalId)
    }
  }, []);

  return (
    <section className="demo-root flex min-h-screen flex-col items-center justify-center">
      { gridDom }
    </section>
  );
}
