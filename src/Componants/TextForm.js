import React, { useState } from "react";

export default function TextForm(props) {
  
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleTitleClick = () => {
    function toTitleCase(str) {
      return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }
    setText(toTitleCase(text));
    props.showAlert("Converted to Titlecase!", "success");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleClear = () => {
    setText("");
    props.showAlert("Text Cleared!", "success");
  }

  const handleExSpaClick = () => {
    var newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  }

   return (
     <>
       <div
         className="container"
         style={{ color: props.mode === "dark" ? "white" : "#111111" }}
       >
         <h1 className="mb-4">{props.heading}</h1>
         <div className="mb-3">
           <textarea
             className="form-control"
             value={text}
             onChange={handleOnChange}
             style={{
               backgroundColor: props.mode === "dark" ? "#222222" : "white",
               color: props.mode === "dark" ? "white" : "#042743",
             }}
             id="myBox"
             rows="8"
           ></textarea>
         </div>
         <button
           disabled={text.length === 0}
           className="btn btn-primary mx-1 my-1"
           onClick={handleUpClick}
         >
           Convert to Uppercase
         </button>
         <button
           disabled={text.length === 0}
           className="btn btn-primary mx-1 my-1"
           onClick={handleLoClick}
         >
           Convert to Lowercase
         </button>
         <button
           disabled={text.length === 0}
           className="btn btn-primary mx-1 my-1"
           onClick={handleTitleClick}
         >
           Convert to Titlecase
         </button>
         <button
           disabled={text.length === 0}
           className="btn btn-primary mx-1 my-1"
           onClick={handleClear}
         >
           Clear Text
         </button>
         <button
           disabled={text.length === 0}
           className="btn btn-primary mx-1 my-1"
           onClick={handleCopyClick}
         >
           Copy Text
         </button>
         <button
           disabled={text.length === 0}
           className="btn btn-primary mx-1 my-1"
           onClick={handleExSpaClick}
         >
           Remove Extra Spaces
         </button>
       </div>
       <div
         className="container my-3"
         style={{ color: props.mode === "dark" ? "white" : "#042743" }}
       >
         <h2>Your text summary</h2>
         <p>
           {
             text.split(/\s+/).filter((element) => {
               return element.length !== 0;
             }).length
           }{" "}
           words and {text.length} characters
         </p>
         <p>
           {0.008 *
             text.split(/\s+/).filter((element) => {
               return element.length !== 0;
             }).length}{" "}
           Minutes read
         </p>
         <h2>Preview</h2>
         <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
       </div>
     </>
   );
}
