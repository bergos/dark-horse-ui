var context = require('dark-horse-thing/context')
var hydraFetch = require('hydra-fetch')
var SimpleRDF = require('simplerdf/dist/lite').SimpleRDF

function fetch (iri, options) {
  options = options || {}
  options.context = options.context || context

  return hydraFetch(iri, options)
}

function objectFactory (iri) {
  return new SimpleRDF(context, iri)
}

module.exports = {
  context: context,
  fetch: fetch,
  Object: objectFactory
}
