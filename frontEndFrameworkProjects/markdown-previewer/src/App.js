import React from "react";
let marked = require("marked");

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      markdown: "",
      preview: ""
    }
  }

  

  updateMarkdownState = (markdown) => {
    this.setState({markdown: markdown})
    this.updatePreview(markdown)
  }

  updatePreview = (inputText) => {
    console.log(inputText)
    // let preview = marked(inputText)
    this.setState({preview: marked(inputText)})
  }
  
  
  render(){
    
    

    let textAreaStyles = {
      height :"50vh"
    }
    return (
      <div className="App">
          <h1 className="text-center m-4">Markdown Editor</h1>
          <div className="flex m-2">
            <h2 className="text-center w-2/4">Markdown Input </h2>
            <h2 className="text-center w-2/4">Preview</h2>
          </div>
          <div className="flex">
            <textarea className="w-2/4 m-4 bg-green-300" value={this.state.markdown} onChange={(e) => {this.updateMarkdownState(e.target.value)}} style={textAreaStyles}>{console.log(this.state.markdown)}</textarea>
            <div className="w-2/4 m-4 bg-blue-300" dangerouslySetInnerHTML={{__html: this.state.preview}} style={textAreaStyles}></div>
          </div>
      </div>
    );
  }
}
