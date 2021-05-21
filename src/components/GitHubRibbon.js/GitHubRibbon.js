import React from "react";

function GithubRibbon() {
  return (
    <a href="https://github.com/Anupmor1998/chatify">
      <img
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          width: "149px",
          height: "149px",
          borderRadius: "0",
          margin: "0",
        }}
        loading="lazy"
        src="https://github.blog/wp-content/uploads/2008/12/forkme_right_orange_ff7600.png?resize=149%2C149"
        class="attachment-full size-full"
        alt="Fork me on GitHub"
        data-recalc-dims="1"
      />
    </a>
  );
}

export default GithubRibbon;
