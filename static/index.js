import { DEFAULT_HEADER, MEDIUM_HEADER, NARROW_HEADER } from '/static/headers.js';

jQuery(function($) {
  $('html').terminal(function(cmd, term) {
    if (cmd == 'help') {
      term.echo("Available commands are:");
      term.echo("\u2003\u2003[[;#d74f62;]+ about]");
      term.echo("\u2003\u2003[[;#d74f62;]+ experience]");
      term.echo("\u2003\u2003[[;#d74f62;]+ skills]");
      term.echo("\u2003\u2003[[;#d74f62;]+ hobbies]");
      term.echo("\u2003\u2003[[;#d74f62;]+ funfacts]");
      term.echo("\u2003\u2003[[;#d74f62;]+ contact]");
    } 
    else if (cmd == 'about') {
      term.echo(green("First Name") + " Lung (Teresa)");
      term.echo(green("Last Name") + " Lin");
      term.echo(green("Location") + " Orange County, California");
      term.echo(green("Degree") + " Bachelor's in Computer science; minor in Math and Cyber Security");
      term.echo("-----------------------------------------------------------------------------");
      term.echo("A Full Stack Engineer who enjoys playing video games and lifting heavy things");
      term.echo("-----------------------------------------------------------------------------");
    }
    else if (cmd == 'experience') {
      term.echo(green("Jul 2021 - Present") + " Full Stack Software Engineer @ Curavit");
      term.echo(green("Apr 2020 - Jul 2021") + " Full Stack Engineer @ KPMG");
      term.echo(green("Jan 2018 - Apr 2020") + " Associate Advisory @ KPMG");
      term.echo(green("Jul 2017 - Dec 2017") + " Associate Consultant @ Collabralink");
    }
    else if (cmd == 'skills') {
      term.echo(green("Programming") + " Java, C#, C, Python, SQL, TypeScript, JavaScript, ReactJS, Angular, Node.js");
      term.echo(green("Others") + " Debugging and running efficient meetings");
    }
    else if (cmd == 'hobbies') {
      term.echo(green("==>") + " Lifting");
      term.echo(green("==>") + " Streaming");
      term.echo(green("==>") + " Martial arts");
      term.echo(green("==>") + " Playing video games");
    }
    else if (cmd == 'funfacts') {
      term.echo(green("==>") + " I was born and raised in Taiwan");
      term.echo(green("==>") + " I love Irish and Ethiopian food");
      term.echo(green("==>") + " I almost got deported from Iceland");
    }
    else if (cmd == 'contact') {
      term.echo(green("Phone") + " (540) 449-8594");
      term.echo(green("Email") + " linlung0321@gmail.com");
    }
    else if (cmd.trim() == '') {
      // Do nothing
    }
    else {
      term.echo("Oops! Unknown command " + cmd);
    }
  }, {
    greetings: false,
    onInit: function(term) {
      term.pause();
      setTimeout(function() {
        term.resume();
        if ($(window).width() < 390) {
          term.echo(NARROW_HEADER);
        }
        else if ($(window).width() < 800) {
          term.echo(MEDIUM_HEADER);
        }
        else {
          term.echo(DEFAULT_HEADER);
        }
        term.echo("Welcome! Start typing a command to get to know me. Use help to see available commands");
      }, 1);
    }
  });
});

function green(message) {
  return "[[;#00ee11;]" + message + "]";
}
