import React, { useState, useEffect } from "react";
import VSCodeTab from "../VSCodeTab";
import MonacoEditor from "@monaco-editor/react";
import * as Babel from "@babel/standalone";

export default function UserProfile() {
  const [code, setCode] = useState(`
    import React from 'react';

    function App() {
      return (
        <div>
          {/* Inline CSS styles */}
          <style>{\`
            .body {
              color: white;
              font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
              font-weight: 400;
              letter-spacing: 0.5px;
            }
            .main-title {
              color: white;
              font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
              font-size: 2.5em;
              margin-top: 0;
            }
            .subtitle {
              color: white;
              font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
              font-size: 1.6em;
              font-weight: 500;
            }
            .name {
              color: #d17752; /* Your desired style */
            }
            body {
              background-color: none;
            }
          \`}</style>
          <h1 className="main-title">
            Hi! I'm <span class="name">Teresa 👋</span>
          </h1>
          <p className="body">I'm a Full Stack Software Engineer who enjoys creativity, debugging, and pushing things to their limits.</p>
          <h3 className="subtitle">My Background</h3>
          <p className="body">
            It all began when I stumbled across a blog called Wretch back in 2009, 
            where I discovered I could create my own custom themes and widgets with HTML, CSS, and Javascript.
            I did not know it was called Web Development back then; I just knew I loved what I was doing and couldn’t get enough of it. 
            Fast-forward to today, my hobby has taken me from consulting for government clients to leading tech projects at a Big 4 accounting firm, 
            and now to being the sole engineer at a healthcare startup.
          </p>
          <h3 className="subtitle">Current Focus</h3>
          <p className="body">
            These days, I’m all about crafting clinical trial solutions that make a real difference for our customers. 
            Outside of work, I’m all about improving my skills by building fun and meaningful things.
            What I love most about coding is that there is always something new to learn and figure out -- kind of like being on a never-ending quest to level up. 
            And even though I once promised myself I wouldn’t be that person who codes in their free time… well, here I am.
          </p>
          <h3 className="subtitle">Hobbies</h3>
          <p className="body">
            When I’m not deep in code, you’ll probably find me lifting things up and then putting them down repeatedly at the gym, 
            dragging my friends to hot yoga and laughing at their suffering, attempting to tame a crow by walking around my neighborhood with a bag of oats, 
            or tilting my face off on Summoner's Rift.
          </p>
        </div>
      );
    }

    export default App;
  `);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const transpileCode = (inputCode) => {
    try {
      let transpiledCode = Babel.transform(inputCode, {
        presets: ["react"],
      }).code;
      transpiledCode = transpiledCode.replace(/export default App;/, "");
      transpiledCode = transpiledCode.replace(/import React[^;]*;/g, "");
      return transpiledCode;
    } catch (error) {
      console.error("Error transpiling code:", error);
      return "";
    }
  };

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Conditionally render the code editor only if the window width is 768px or more */}
      {windowWidth >= 768 && (
        <div className="w-1/2 border-r border-[#252526] h-screen">
          <VSCodeTab tabNames={["Code Editor"]}>
            <MonacoEditor
              height="100vh"
              theme="vs-dark"
              defaultLanguage="javascript"
              value={code}
              onChange={handleEditorChange}
            />
          </VSCodeTab>
        </div>
      )}

      {/* Right Panel: Live Preview */}
      <div className={windowWidth < 768 ? "w-full" : "w-1/2"}>
        <VSCodeTab
          tabNames={windowWidth < 768 ? ["About Me"] : ["Live Preview"]}
        >
          <iframe
            srcDoc={`
              <!DOCTYPE html>
              <html>
                <head>
                  <meta charset="UTF-8">
                  <title>Live Preview</title>
                  <script crossorigin src="https://unpkg.com/react/umd/react.development.js"></script>
                  <script crossorigin src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
                </head>
                <body>
                  <div id="root"></div>
                  <script>
                    ${transpileCode(code)}
                    ReactDOM.render(React.createElement(App), document.getElementById('root'));
                  </script>
                </body>
              </html>
            `}
            className="w-full h-screen" // Set height to screen height
            sandbox="allow-scripts"
            title="Live Preview"
          />
        </VSCodeTab>
      </div>
    </div>
  );
}
