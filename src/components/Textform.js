import React, { useState } from "react";

export default function Textform(props) {
	const handleUpClick = () => {
		let newText = text.toUpperCase();
		setText(newText);
		props.showAlert("Converted to Upper Case", "success");
	};
	const handleOnChange = (event) => {
		setText(event.target.value);
	};

	const clearText = () => {
		let newText = "";
		setText(newText);
		props.showAlert("Erased all text", "success");
	};

	const copyText = () => {
		var text = document.getElementById("myBox");
		text.select();
		navigator.clipboard.writeText(text.value);
		props.showAlert("Copied text to clipboard", "success");
	};
	const handleLowerClick = () => {
		let newText = text.toLowerCase();
		setText(newText);
		props.showAlert("Converted to Lower Case", "success");
	};

	const removeExtraSpace = () => {
		let newText = text.split(/[ ]+/);
		setText(newText.join(" "));
		props.showAlert("Removed Extra space", "success");
	};
	const [text, setText] = useState("");
	return (
		<>
			<div className="container" style={{ color: props.mode === "dark" ? "white" : "#233142" }}>
				<h1>{props.heading}</h1>
				<div className="mb-3">
					<textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "#042783" }} id="myBox" rows="8"></textarea>
				</div>
				<button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>
					Upper Case
				</button>
				<button type="button" className="btn btn-primary " onClick={handleLowerClick}>
					Lower Case
				</button>
				<button type="button" className="btn btn-primary mx-1" onClick={clearText}>
					Clear Text
				</button>
				<button type="button" className="btn btn-primary mx-1" onClick={copyText}>
					Copy Text
				</button>
				<button type="button" className="btn btn-primary mx-1" onClick={removeExtraSpace}>
					Remove Extra Space
				</button>
			</div>
			<div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "#042783" }}>
				<h2>Text Summary</h2>
				<p>
					Your text contains {text.length === 0 ? 0 : text.split(" ").length} words and {text.length} characters
				</p>
				<p>{text.length === 0 ? 0 : text.split(" ").length * 0.008} Minutes read</p>
				<h2>Preview</h2>
				<p>{text.length > 0 ? text : "Enter something to preview here"}</p>
			</div>
		</>
	);
}
