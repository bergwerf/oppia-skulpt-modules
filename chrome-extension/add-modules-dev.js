// Copyright (c) 2016, Herman Bergwerf. All rights reserved.
// Use of this source code is governed by an AGPL-3.0-style license
// that can be found in the LICENSE file.

fetch('http://localhost/hermanbergwerf/oppia-skulpt-modules/modules/main-dev.js').then(function (response) {
  response.text().then(function (text) {
    var script = document.createElement('script')
    script.textContent = text
    document.head.appendChild(script)
    script.remove()
  })
})
