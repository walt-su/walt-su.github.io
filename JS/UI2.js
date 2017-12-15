// globally inherited on init
$.fn.dropdown.onChange = function(){...};

// during init
$('.myDropdown').dropdown({
 onChange: function() {...}
});

// after init
$('.myDropdown').dropdown('setting', 'onChange', function(){...});