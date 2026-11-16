

/*
**/
const logg = (a, b="", c=null) => {
  if ('undefined' === typeof window) { return }
  c = "string" === typeof c ? c : b.replace(/\W/g, '')
  if (c.length) { window[c] = a }
  console.log(`+++ ${b}:`, a) // eslint-disable-line no-console
}

document.addEventListener("keydown", e => {
  if (e.code === "Space" && !["INPUT", "TEXTAREA"].includes(e.target.tagName)) {
    e.preventDefault()
  }
})

