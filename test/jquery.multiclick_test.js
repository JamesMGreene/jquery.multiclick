(function($, undefined) {

  module('jQuery#multiclick', {
    setup: function() {
      
    },
    teardown: function() {
      
    }
  });
    
  test('Should exist', function() {
    expect(1);
    ok($.event.special.multiclick);
  });

}(jQuery));
