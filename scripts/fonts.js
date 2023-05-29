if ('fonts' in document) {
  Promise.all([
    document.fonts.load('1em Italiana'),
    document.fonts.load('1em Italianno'),
  ]).then(_ => {
    document.documentElement.classList.add('fonts-loaded')
  })
}
