var header = 
" __  __     ______     __         __         ______        __     __     ______     ______     __         _____    \n/\\ \\_\\ \\   /\\  ___\\   /\\ \\       /\\ \\       /\\  __ \\      /\\ \\  _ \\ \\   /\\  __ \\   /\\  == \\   /\\ \\       /\\  __-.  \n\\ \\  __ \\  \\ \\  __\\   \\ \\ \\____  \\ \\ \\____  \\ \\ \\/\\ \\     \\ \\ \\/ \".\\ \\  \\ \\ \\/\\ \\  \\ \\  __<   \\ \\ \\____  \\ \\ \\/\\ \\ \n \\ \\_\\ \\_\\  \\ \\_____\\  \\ \\_____\\  \\ \\_____\\  \\ \\_____\\     \\ \\__/\".~\\_\\  \\ \\_____\\  \\ \\_\\ \\_\\  \\ \\_____\\  \\ \\____- \n  \\/_/\\/_/   \\/_____/   \\/_____/   \\/_____/   \\/_____/      \\/_/   \\/_/   \\/_____/   \\/_/ /_/   \\/_____/   \\/____/ \n                                                                                                                   ";

jQuery(function($) {
  $('html').terminal(function(cmd, term) {
    if (cmd == 'help') {
      term.echo("available commands are [[u;#00ee11;]about], [[u;#00ee11;]experience], [[u;#00ee11;]skills], [[u;#00ee11;]hobbies], [[u;#00ee11;]funfacts], [[u;#00ee11;]contact]");
    } 
    else if (cmd == 'about') {
      term.echo("[[ub;white;teal] First Name ]\tLung (Teresa)" +
        "\n[[ub;white;teal] Last Name ]\tLin" +
        "\n[[ub;white;teal] Location ]\tOrange County, California" +
        "\n[[ub;white;teal] Degree ]\tBachelor's in Computer science; minor in Math and Cyber Security" + 
        "\n-----------------------------------------------------------------------------" + 
        "\nA Full Stack Engineer who enjoys playing video games and lifting heavy things" + 
        "\n-----------------------------------------------------------------------------");
    }
    else if (cmd == 'experience') {
      term.echo("[[ub;white;teal] Jul 2021 - Present ]\tFull Stack Software Engineer @ Curavit" + 
        "\n[[ub;white;teal] Apr 2020 - Jul 2021 ]\tFull Stack Engineer @ KPMG" + 
        "\n[[ub;white;teal] Jan 2018 - Apr 2020 ]\tAssociate Advisory @ KPMG" + 
        "\n[[ub;white;teal] Jul 2017 - Dec 2017]\tAssociate Consultant @ Collabralink");
    }
    else if (cmd == 'skills') {
      term.echo("[[ub;white;teal] Programming ]\tJava, C#, TypeScript, Python, JavaScript" + 
        "\n[[ub;white;teal] Others ]\tProblem Solving, Logical Thinking, Debugging, Googling");
    }
    else if (cmd == 'hobbies') {
      term.echo("[[u;#00ee11;]=>] Lifting\n[[u;#00ee11;]=>] Playing video games\n[[u;#00ee11;]=>] Snowboarding");
    }
    else if (cmd == 'funfacts') {
      term.echo("[[u;#00ee11;]=>] I was born and raised in Taiwan" + 
        "\n[[u;#00ee11;]=>] I love Irish and Ethiopian food" + 
        "\n[[u;#00ee11;]=>] I almost got deported from Iceland");
    }
    else if (cmd == 'contact') {
      term.echo("[[ub;white;teal] Phone ]\t(540) 449-8594" + 
        "\n[[ub;white;teal] Email ]\tlinlung0321@gmail.com");
    }
    else {
      term.echo("unknown command " + cmd);
    }
  }, {
    greetings: header + "\nWelcome! Start typing a command to get to know me."+
      " Use help to see available commands"});
});

function teal(message) {
    return "[[b;teal;black]" + message + "]";
}