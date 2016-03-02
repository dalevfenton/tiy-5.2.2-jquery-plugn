var $, _;
window.jQuery = $ = require('jquery');
window._ = require('underscore');
window.Handlebars = require('handlebars');
require('./plugin.js');

// THIS IS CURRENTLY MY PREFERRED WAY TO USE HANDLEBARS WITH EXTERNAL TEMPLATES
// I use browserify-handlebars so that the template is precompiled by browserify
// into bundle.js at execution, has the benefit of the precompile so it reduces
// browser overhead, keeps our html files much cleaner looking, and makes the
// templates reusable on different pages once we get to that point
// does have the downside of separating your code from the main html page so
// if we lose the bundle.js we've lost most of our page
var template = require('./template.handlebars');
var context = [{link: 'http://google.com', title: 'Google'},
                {link: 'http://google.com', title: 'Google'},
                {link: 'http://google.com', title: 'Google'},
                {link: 'http://google.com', title: 'Google'},
                {link: 'http://google.com', title: 'Google'},
                {link: 'http://google.com', title: 'Google'}];
$('.container ul').html(template({items:context}));

var selector = "#template-will-be-overridden";
var headerContext = { context: { title: "Gallery", description: 'view a list of websites' } };
//note that if the same property is passed in multiple objects the one passed in
//last is the one that will ultimately be used
//(this seems counterintuitive and it may be better to reverse that behavior )
var config = { selector: selector, context: { title:'Finished Gallery' } };
var config2 = headerContext;

//we really only need to pass a selector and context object but allow for the
//potential need to pass multiple objects to fill those two params
$("#header").template(config, config2, { selector: "#template" });
