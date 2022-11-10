import React from "react";

// editor
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";

// data
import { EditorData } from "../data/dummy";

// Header
import { Header } from "../components";

const Editor = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 dark:bg-secondary-dark-bg bg-white rounded-3xl">
      <Header category="App" title="Editor" />
      {/* editor */}
      <RichTextEditorComponent>
        {/* External Data */}
        <EditorData />

        <Inject services={[HtmlEditor, Image, Link, QuickToolbar, Toolbar]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
