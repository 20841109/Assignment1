// ## Content.js ##
//
const React = require('react');

// Define the Content  component
const Content = (props) => {
  const element = (
    <div>
      <h1>{ props.heading }</h1>
      This is the content of HTML body
    </div>
  );
  return element;
};

// Export the Content component
module.exports = Content;
