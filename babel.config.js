const presets = [
  [
    '@babel/env',
    {
      targets: {
        ie: '9'
      },
      modules: false
    }
  ]
]
// const plugins=["transform-runtime"]
module.exports = {
  presets
  // plugins
}
