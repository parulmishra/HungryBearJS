import { HungryBear } form './../js/hungrybear.js';

$(document).ready(function()
{
  ("#animatedImage").click(function(event))
  {
    event.preventDefault();
    function()
    {
      $(this).attr("src","hungrybear.gif");
    },
    function()
    {
      $(this).attr("src", "img/hungrybear.jpg");
    });
  });

});
