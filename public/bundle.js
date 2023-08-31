const A = props => {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid red'
    },
    className: "descr"
  }, props.children);
};

/**
 * Example Flextable
**/
const Example = props => {
  // console.log(Flextable);

  /* this works */
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(A, null, "world?!"), "Hello 333!");
};

export { Example as default };
//# sourceMappingURL=bundle.js.map
