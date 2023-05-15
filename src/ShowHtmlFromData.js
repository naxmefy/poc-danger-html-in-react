import DangerouslySetHtmlContent from "dangerously-set-html-content";
import { useEffect, useState } from "react";

function ShowHtmlFromData({ item }) {
  const [html, setHtml] = useState();

  useEffect(() => {
    fetch(`/data/${item}`)
      .then((res) => res.text())
      .then(setHtml)
      .catch(console.error);
  }, [item]);

  if (!html) return <>loading html....</>;

  return (
    <>
      <DangerouslySetHtmlContent html={html} />
    </>
  );
}

export default ShowHtmlFromData;
