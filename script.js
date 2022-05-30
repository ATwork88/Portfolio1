var header = 
" __  __     ______     __         __         ______        __     __     ______     ______     __         _____    \n/\\ \\_\\ \\   /\\  ___\\   /\\ \\       /\\ \\       /\\  __ \\      /\\ \\  _ \\ \\   /\\  __ \\   /\\  == \\   /\\ \\       /\\  __-.  \n\\ \\  __ \\  \\ \\  __\\   \\ \\ \\____  \\ \\ \\____  \\ \\ \\/\\ \\     \\ \\ \\/ \".\\ \\  \\ \\ \\/\\ \\  \\ \\  __<   \\ \\ \\____  \\ \\ \\/\\ \\ \n \\ \\_\\ \\_\\  \\ \\_____\\  \\ \\_____\\  \\ \\_____\\  \\ \\_____\\     \\ \\__/\".~\\_\\  \\ \\_____\\  \\ \\_\\ \\_\\  \\ \\_____\\  \\ \\____- \n  \\/_/\\/_/   \\/_____/   \\/_____/   \\/_____/   \\/_____/      \\/_/   \\/_/   \\/_____/   \\/_/ /_/   \\/_____/   \\/____/ \n                                                                                                                   ";

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
      term.echo("[[;#00ee11;]First Name] Lung (Teresa)");
      term.echo("[[;#00ee11;]Last Name] Lin");
      term.echo("[[;#00ee11;]Location] Orange County, California");
      term.echo("[[;#00ee11;]Degree] Bachelor's in Computer science; minor in Math and Cyber Security");
      term.echo("-----------------------------------------------------------------------------");
      term.echo("A Full Stack Engineer who enjoys playing video games and lifting heavy things");
      term.echo("-----------------------------------------------------------------------------");
    }
    else if (cmd == 'experience') {
      term.echo("[[;#00ee11;]Jul 2021 - Present] Full Stack Software Engineer @ Curavit");
      term.echo("[[;#00ee11;]Apr 2020 - Jul 2021] Full Stack Engineer @ KPMG");
      term.echo("[[;#00ee11;]Jan 2018 - Apr 2020] Associate Advisory @ KPMG");
      term.echo("[[;#00ee11;]Jul 2017 - Dec 2017] Associate Consultant @ Collabralink");
    }
    else if (cmd == 'skills') {
      term.echo("[[;#00ee11;]Programming] Java, C#, C, Python, SQL, TypeScript, JavaScript, ReactJS, Angular, Node.js");
      term.echo("[[;#00ee11;]Others] Debugging and running efficient meetings");
    }
    else if (cmd == 'hobbies') {
      term.echo("[[;#00ee11;]==>] Lifting");
      term.echo("[[;#00ee11;]==>] Streaming");
      term.echo("[[;#00ee11;]==>] Martial arts");
      term.echo("[[;#00ee11;]==>] Playing video games");
    }
    else if (cmd == 'funfacts') {
      term.echo("[[;#00ee11;]==>] I was born and raised in Taiwan");
      term.echo("[[;#00ee11;]==>] I love Irish and Ethiopian food");
      term.echo("[[;#00ee11;]==>] I almost got deported from Iceland");
    }
    else if (cmd == 'contact') {
      term.echo("[[;#00ee11;]Phone] (540) 449-8594");
      term.echo("[[;#00ee11;]Email] linlung0321@gmail.com") ;
    }
    else if (cmd.trim() == '') {
      
    }
    else {
      term.echo("Oops! Unknown command " + cmd);
    }
  }, {
    greetings: header + "\nWelcome! Start typing a command to get to know me."+
      " Use help to see available commands"});
});

function teal(message) {
    return "[[b;teal;black]" + message + "]";
}

function green(message) {
  return "[[;#00ee11;]" + message + "]";
}
