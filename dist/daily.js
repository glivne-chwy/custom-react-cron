import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
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
    _this.state = {
      hour: 0,
      minute: 0
    };
    _this.onDayChange = _this.onDayChange.bind(_assertThisInitialized(_this));
    _this.onAtHourChange = _this.onAtHourChange.bind(_assertThisInitialized(_this));
    _this.onAtMinuteChange = _this.onAtMinuteChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CustomCron, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.state.value = this.props.value;

      if (this.state.value[3] === '?') {
        this.state.every = false;
      } else {
        this.state.every = true;
      }
    }
  }, {
    key: "onDayChange",
    value: function onDayChange(e) {
      if (e.target.value > 0 && e.target.value < 32 || e.target.value == '') {
        var val = ['0', this.state.value[1] === '*' ? '0' : this.state.value[1], this.state.value[2] === '*' ? '0' : this.state.value[2], '*', '*', '?', '*'];

        if (e.target.value == '') {
          val[3] = '';
        } else {
          val[3] = "1/".concat(e.target.value);
        }

        this.props.onChange(val);
      }
    }
  }, {
    key: "onAtHourChange",
    value: function onAtHourChange(e) {
      var val = this.state.value;
      val[2] = "".concat(e.target.value);
      this.props.onChange(val);
    }
  }, {
    key: "onAtMinuteChange",
    value: function onAtMinuteChange(e) {
      var val = this.state.value;
      val[1] = "".concat(e.target.value);
      this.props.onChange(val);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this.state.value = this.props.value;
      return React.createElement("div", {
        className: "tab-pane"
      }, React.createElement("div", {
        className: "well well-small"
      }, React.createElement("input", {
        type: "radio",
        onClick: function onClick(e) {
          _this2.setState({
            every: true
          });

          _this2.props.onChange();
        },
        value: "1",
        name: "DailyRadio",
        checked: this.state.every ? true : false
      }), "\xA0 Every \xA0", React.createElement("input", {
        disabled: this.state.every ? false : true,
        type: "Number",
        onChange: this.onDayChange,
        value: this.state.value[3].split('/')[1] ? this.state.value[3].split('/')[1] : ''
      }), "\xA0 day(s)"), React.createElement("div", {
        className: "well well-small"
      }, React.createElement("input", {
        onClick: function onClick(e) {
          _this2.setState({
            every: false
          });

          _this2.props.onChange(['0', _this2.state.value[1], _this2.state.value[2], '?', '*', 'MON-FRI', '*']);
        },
        type: "radio",
        value: "2",
        name: "DailyRadio",
        checked: this.state.every ? false : true
      }), "\xA0 Every week day\xA0"), "\xA0 Start time\xA0", React.createElement("select", {
        id: "DailyHours",
        className: "hours",
        onChange: this.onAtHourChange,
        value: this.state.value[2]
      }, this.getHours()), React.createElement("select", {
        id: "DailyMinutes",
        className: "minutes",
        onChange: this.onAtMinuteChange,
        value: this.state.value[1]
      }, this.getMinutes()));
    }
  }, {
    key: "getHours",
    value: function getHours() {
      var hours = [];
      var leap = parseInt(this.props.hours) || 1;

      for (var i = 0; i < 24; i = i + leap) {
        hours.push(React.createElement("option", {
          id: i,
          value: i < 10 ? "0".concat(i) : i
        }, i < 10 ? "0".concat(i) : i));
      }

      return hours;
    }
  }, {
    key: "getMinutes",
    value: function getMinutes() {
      var minutes = [];
      var leap = parseInt(this.props.minutes) || 1;

      for (var i = 0; i < 60; i = i + leap) {
        minutes.push(React.createElement("option", {
          id: i,
          value: i < 10 ? "0".concat(i) : i
        }, i < 10 ? "0".concat(i) : i));
      }

      return minutes;
    }
  }]);

  return CustomCron;
}(Component);

export { CustomCron as default };