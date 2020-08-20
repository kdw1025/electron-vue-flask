module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        "win": {
          "target": "zip"
        },
        "extraResources": [
            {
                "from": "server/dist/server/",
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