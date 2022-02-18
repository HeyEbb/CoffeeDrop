import React, { useEffect, useState } from "react";

export default function Paginator(props) {
  const [getPages, SetPages] = useState(props.numberOfPages);
  const [listPages, setListPages] = useState([]);

  useEffect(() => {
    for (let i = 0; i < getPages; i++) {
      setListPages((listPages) => [...listPages, i + ", "]);
    }
    // console.log(pages);
  }, []);

  return (
    <>
      {listPages}
    </>
  );
}