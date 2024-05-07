window.exports = {
  "kimi": {
    mode: "none",
    args: {
      enter: (action) => {
        window.utools.hideMainWindow()
        utools.ubrowser.goto('https://kimi.moonshot.cn/')
        .click('.myAgentToolIconHistory___GTLWk')
        .wait('[data-index="0"] .historyItem___PJP2b .contentBox___OrRSj', 3000)
        .click('[data-index="0"] .historyItem___PJP2b .contentBox___OrRSj')
        .run({width: 1000, height: 600})
        window.utools.outPlugin()
      },
    }
  }
}
