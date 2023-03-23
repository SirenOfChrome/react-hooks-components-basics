import React from "react";

function Article() {
  return (
    <div>Dear Reader: Bjarne Stroustrup has the perfect lecture oration.</div>
  );
}
function Comment() {
  return <div> Naturally, I agree with this article.</div>
}

export default Article;

//The minimum requirement for a React component is that it must be a function that starts with a capital letter and returns JSX.#