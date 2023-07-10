/* 
*
*
* THIS WAS PULLED FROM A PERSONAL PROJECT AND WAS NOT CREATED FOR THIS TECHNCIAL TEST
* I wanted to save some time with typography styling
*
*
*/

import React from "react";

export const highlightToken = (
  src: string,
  highlight: string,
  className: string
): JSX.Element => {
  const reg = new RegExp(`(${escapeRegExp(highlight)})`, "g");
  const parts = src.split(reg);
  return (
    <span>
      {parts.map((part, index) =>
        part.match(reg) ? (
          <span className={className} key={index}>
            {part}
          </span>
        ) : (
          <React.Fragment key={index}>{part}</React.Fragment>
        )
      )}
    </span>
  );
};

function escapeRegExp(text?: string) {
  if (!text) return text;
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
