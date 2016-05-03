##jQuery plugin for Handlebars.js
plugin adds a $.template() function that populates a handlebars template
and inserts it into the dom

#### $.template( { selector: string, context: {} } );
$.template() takes a config object or objects which need to at least have a
selector that is used to grab the Handlebars template from the html file, and a
context object used to populate the template
_Returns_: `$`, returns jQuery object for chaining
