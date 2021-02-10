"use strict";

$(document).ready(function () {
  $('#sidebar').mCustomScrollbar({
    theme: 'minimal'
  });
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
  });
});