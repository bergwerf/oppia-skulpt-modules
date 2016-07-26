// Copyright (c) 2016, Herman Bergwerf. All rights reserved.
// Use of this source code is governed by an AGPL-3.0-style license
// that can be found in the LICENSE file.

// listen for our browerAction to be clicked
chrome.webNavigation.onCompleted.addListener(function (tab) {
  if (tab.url.startsWith('https://www.oppia.org/')) {
    chrome.tabs.executeScript(tab.id, {
      file: 'add-modules-dev.js'
    })
  }
})
