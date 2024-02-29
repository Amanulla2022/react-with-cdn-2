const Header = () => {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Topics covered"),
    React.createElement(
      "p",
      null,
      "The following is a list of all the topics we cover in the MDN learning area."
    )
  );
};

const Details = () => {
  return React.createElement(
    "div",
    { className: "container" },
    React.createElement(Header),
    React.createElement(
      "dl",
      null,
      React.createElement(
        "dt",
        null,
        React.createElement(
          "a",
          { href: "https://developer.mozilla.org/en-US/", target: "_blank" },
          "Getting started with the web"
        )
      ),
      React.createElement(
        "dd",
        null,
        "Provides a practical introduction to web development for complete beginners."
      )
    ),
    React.createElement(
      "dl",
      null,
      React.createElement(
        "dt",
        null,
        React.createElement(
          "a",
          {
            href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
            target: "_blank",
          },
          "HTML — Structuring the web"
        )
      ),
      React.createElement(
        "dd",
        null,
        "HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail."
      )
    ),
    React.createElement(
      "dl",
      null,
      React.createElement(
        "dt",
        null,
        React.createElement(
          "a",
          {
            href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
            target: "_blank",
          },
          "CSS — Styling the web"
        )
      ),
      React.createElement(
        "dd",
        null,
        "CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS."
      )
    )
  );
};

ReactDOM.render(React.createElement(Details), document.getElementById("root"));
