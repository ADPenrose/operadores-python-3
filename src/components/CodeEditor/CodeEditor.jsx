import React from "react";

import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-python";
import "./custom-prism-theme.css";

function CodeEditor({ code }) {
  return (
    <Editor
      value={code}
      highlight={(code) => highlight(code, languages.py)}
      padding={30}
      style={{
        margin: "2.5rem 0",
        fontFamily: '"Source Code Pro", monospace',
        fontSize: 16,
        fontWeight: 500,
        borderRadius: 8,
        background: "var(--color-bg-code)",
      }}
      disabled={true}
    />
  );
}

export default CodeEditor;
