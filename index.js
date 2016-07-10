var scrollElement = function (element, scrollPosition, duration) {
  var style = element.style;

  // setup CSS transition duration and easing function
  style.webkitTransition =
        style.transition = duration + 's';
  style.webkitTransitionTimingFunction =
        style.TransitionTimingFunction = 'ease-in-out';

  // use translate3d to force hardware acceleration
  style.webkitTransform =
        style.Transform = 'translate3d(0, ' + -scrollPosition + 'px, 0)';
}

var scrollBody = scrollElement.bind(null,
                                    document.getElementsByTagName('body')[0]);

<script language="JavaScript">
var frmvalidator  = new Validator("contactform");
frmvalidator.addValidation("name","req","Please provide your name");
frmvalidator.addValidation("email","req","Please provide your email");
frmvalidator.addValidation("email","email",
  "Please enter a valid email address");
</script>