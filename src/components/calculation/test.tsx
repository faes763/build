"use client";

import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function ClassicCKEditor({
  data,
  onChange,
}: {
  data: string;
  onChange: (event: any, editor: ClassicEditor) => void;
}) {
  return (
    <CKEditor
      editor={ClassicEditor}
      data={data}
      onReady={(editor) => {
        console.log("ClassicCKEditor is ready to use!", editor);
      }}
      onChange={(event, editor) => {
        const data = editor.getData();
        console.log({ event, editor, data });
        onChange(event, editor);
      }}
      onBlur={(event, editor) => {
        console.log("Blur.", editor);
      }}
      onFocus={(event, editor) => {
        console.log("Focus.", editor);
      }}
    />
  );
}

export default ClassicCKEditor;