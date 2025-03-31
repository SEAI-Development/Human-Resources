import React, { useState } from "react";

const TextEditor: React.FC = () => {
  const [text, setText] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <textarea
        className="w-full p-4 border rounded"
        rows={10}
        value={text}
        onChange={handleChange}
        placeholder="Scrivi qualcosa..."
      />
      <div className="mt-4">
        <h3 className="text-lg">Cronologia</h3>
        <div className="border p-4">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
