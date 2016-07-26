// Copyright (c) 2016, Herman Bergwerf. All rights reserved.
// Use of this source code is governed by an AGPL-3.0-style license
// that can be found in the LICENSE file.

function __logJson (msg) {
  console.log('[Skulpt json module] ' + msg)
}

// Python wrapper of the JS Fetch API.
var $builtinmodule = function (name) {
  var mod = {}

  // Fetch API
  mod.loads = new Sk.builtin.func(function (str) {
    var json = JSON.parse(str)
    __logJson(json)
    return Sk.ffi.remapToPy(json)
  })

  return mod
}
