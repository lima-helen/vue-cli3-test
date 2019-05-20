module.exports = {
  presets: [
    '@vue/app',
    ["env", {
      "targets": {
        "browsers": ["last 2 versions", "safari >= 7"]
      }
    }]
  ],

}
