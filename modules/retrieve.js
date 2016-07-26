// Copyright (c) 2016, Herman Bergwerf. All rights reserved.
// Use of this source code is governed by an AGPL-3.0-style license
// that can be found in the LICENSE file.

var $builtinmodule = function (name) {
  var mod = {}

  mod.retrieve = new Sk.builtin.func(function (url) {
    var xhttp = new XMLHttpRequest()
    xhttp.open('GET', url.v, false)
    xhttp.send()
    return xhttp.responseText
  })

  return mod
}
