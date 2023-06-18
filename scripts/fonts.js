if ('fonts' in document && !document.documentElement.classList.contains('fonts-loaded')) {
  Promise.all([
    document.fonts.load('1em Italiana'),
    document.fonts.load('1em Italianno'),
  ]).then(_ => {
    document.documentElement.classList.add('fonts-loaded')
  })
}
