import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';

var CustomCron =
/*#__PURE__*/
function (_Component) {
  _inherits(CustomCron, _Component);

  function CustomCron(props) {
    var _this;

    _classCallCheck(this, CustomCron);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CustomCron).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(CustomCron, [{
    key: "onChange",
    value: function onChange(e) {
      if (e.target.value > 0 && e.target.value < 60 || e.target.value == '') {
        var val = ['0', '*', '*', '*', '*', '?', '*'];

        if (e.target.value == '') {
          val[1] = '';
        } else {
          val[1] = "0/".concat(e.target.value);
        }

        this.props.onChange(val);
      }
    }
  }, {
    key: "render",
    value: function render() {
      this.state.value = this.props.value;
      return React.createElement("div", {
        className: "well"
      }, "Every ", React.createElement("input", {
        type: "Number",
        onChange: this.onChange.bind(this),
        value: this.state.value[1].split('/')[1],
        min: 1,
        max: 60
      }), " minute(s)'");
    }
  }]);

  return CustomCron;
}(Component);

export { CustomCron as default };