module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
          "extraResources": [
              {
                  "from": "./extraResources/server/dist/server/",
                  "to": "extraResources/server",
                  "filter": [
                      "**/*"
                  ]
              }
          ]
      }
    }
  }
}