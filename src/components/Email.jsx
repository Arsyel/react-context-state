import React from "react";

export const Email = React.memo(({ data, onClick }) => {
  return (
    <li onClick={() => onClick(data)}>
      <div className="subject">{data.subject}</div>
      <div className="preview">{data.preview}</div>
    </li>
  );
});