// Copyright (c) 2016, Herman Bergwerf. All rights reserved.
// Use of this source code is governed by an AGPL-3.0-style license
// that can be found in the LICENSE file.

// Implementation of the http.client Python module using the JS Fetch API.
var $builtinmodule = function (name) {
  var mod = {}

  // Class http.client.HTTPConnection
  mod.HTTPConnection = Sk.misceval.buildClass(mod, function ($gbl, $loc) {
    // Constuctor
    $loc.__init__ = new Sk.builtin.func(function (self, hostname) {
      self.hostname = hostname
    })

    // Execute request.
    $loc.request = new Sk.builtin.func(function (self, method, path) {
      // We will not actually do the request here because the request promise is
      // returned in the getresponse function. But hey, we want to learn these
      // kids real Python.
      self.method = method
      self.path = path
    })

    // Get response.
    $loc.getresponse = new Sk.builtin.func(function (self) {
      // We secretly use HTTPS here, which is fine for the specific Oppia course
      // requirements. But it's not really valid, just so you know ;-).
      return {
        type: Sk.promise,
        promise: new Promise(function (resolve, reject) {
          fetch('https://' + self.hostname + self.path, {
            method: method,
            mode: 'cors',
            cache: 'default'
          }).then(function (response) {
            self.response = response
            resolve({
              status: response.status,
              reason: response.statusText
            })
          }).catch(function (err) {
            throw new Sk.builtin.IOError(err.message)
          })
        })
      }
    })

    // Read response data.
    $loc.read = new Sk.builtin.func(function (self) {
      return {
        type: Sk.promise,
        promise: self.response.text()
      }
    })
  }, 'HTTPConnection', [])

  return mod
}
