export const CELL_SIZE = {
  width: 20,
  height: 20,
}
export const INTERVAL_IN_MS = 1000

const getAvailableArea = (selector = 'body') => {
  const element = document.querySelector(selector)
  return {
    width: element.clientWidth ?? element.offsetWidth,
    height: element.clientHeight ?? element.offsetHeight,
  }
}

export const getGridConfig = (selector = 'body') => {
  const availableArea = getAvailableArea(selector)
  return {
    rows: Math.floor(availableArea.height / CELL_SIZE.height) - 1,
    columns: Math.floor(availableArea.width / CELL_SIZE.width) - 1,
  }
}


export const getGrid = (selector = 'body') => {
  const gridConfig = getGridConfig(selector)
  return (new Array(gridConfig.rows))
    .fill((new Array(gridConfig.columns))
      .fill(null))
}
