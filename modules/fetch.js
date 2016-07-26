// Copyright (c) 2016, Herman Bergwerf. All rights reserved.
// Use of this source code is governed by an AGPL-3.0-style license
// that can be found in the LICENSE file.

function log (msg) {
  console.log('[Skulpt fetch module] ' + msg)
}

// Python wrapper of the JS Fetch API.
var $builtinmodule = function (name) {
  var mod = {}

  // Fetch API
  mod.fetch = new Sk.builtin.func(function (url) {
    log('Fetch: ' + url)
    return {
      type: Sk.promise,
      promise: new Promise(function (resolve, reject) {
        fetch(url.v, {
          method: 'GET',
          mode: 'cors',
          cache: 'default'
        }).then(function (response) {
          response.text().then(function (text) {
            log('Fetch complete: ' + text)
            resolve(text)
          })
        }).catch(function (err) {
          throw new Sk.builtin.IOError(err.message)
        })
      })
    }
  })

  return mod
}
