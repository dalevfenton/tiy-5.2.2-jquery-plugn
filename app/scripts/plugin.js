//HANDLEBARS TEMPLATING PLUGIN FOR JQUERY
//REQUIRES JQUERY AND HANDLEBARS TO BE AVAILABLE
//Handlebars template plugin for jQuery, accepts a list of config objects in the form
//{ selector: "#jQuerySelectorString", context: { title: "string", other: "moredata"}}
//this will select the template identified by the selector, populate it with
//the context object and insert it into the targeted jQuery element object
//also returns the jQuery object for chaining

//accepts multiple Objects that will be merged, will fail if any argument is not
//an object
(function($){
  $.fn.template = function(config){
    //this allows someone to pass us multiple objects if we need to merge more
    //than one to build the proper context, duplicate properties will be overwritten
    //such that the last object passed in will set any value (see jQuery extend() docs)
    config = _.reduce(arguments, function(memo, item){
      //throw error if we aren't passed an object to alert the user
      if (typeof item !== 'object') {
        throw new TypeError('$.template() requires objects as arguments');
      }

      return $.extend(memo, item);
    });

    //set options as default or as passed by config object
    var options = $.extend({ selector: "#template", context: {}}, config);

    //return processed object for chaining after setting template into html
    return this.html(Handlebars.compile($(options.selector).html())( options.context ));
    //functionally equivalent to the standard 4-line Handlebars process:
    //var source = $(options.selector).html();
    //var template = Handlebars.compile(source);
    //var newHTML = template(options.context);
    //this.html(newHTML);
  };
}(jQuery));
