'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\NigelWithTheBrie\\BlockchainTutorials\\kickstart-ethereum\\pages\\campaigns\\requests\\new.js?entry';


var RequestNew = function (_Component) {
  (0, _inherits3.default)(RequestNew, _Component);

  function RequestNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestNew.__proto__ || (0, _getPrototypeOf2.default)(RequestNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      briefDescription: '',
      detailedDescription: '',
      value: '',
      recipient: '',
      loading: false,
      errorMessage: ''
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var campaign, _this$state, briefDescription, detailedDescription, value, recipient, accounts;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                campaign = (0, _campaign2.default)(_this.props.address);
                _this$state = _this.state, briefDescription = _this$state.briefDescription, detailedDescription = _this$state.detailedDescription, value = _this$state.value, recipient = _this$state.recipient;

                _this.setState({ loading: true, errorMessage: '' });
                _context.prev = 4;
                _context.next = 7;
                return _web2.default.eth.getAccounts();

              case 7:
                accounts = _context.sent;
                _context.next = 10;
                return campaign.methods.createRequest(briefDescription, detailedDescription, _web2.default.utils.toWei(value, 'ether'), recipient).send({ from: accounts[0] });

              case 10:
                _routes.Router.pushRoute('/campaigns/' + _this.props.address + '/requests');
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context['catch'](4);

                _this.setState({ errorMessage: _context.t0.message });

              case 16:
                _this.setState({ loading: false });

              case 17:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[4, 13]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestNew, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, 'Back')), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, 'Create a Request'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, 'What is this request for?'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.briefDescription,
        onChange: function onChange(event) {
          return _this3.setState({ briefDescription: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, 'Give a little more information about this spending request'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.detailedDescription,
        onChange: function onChange(event) {
          return _this3.setState({ detailedDescription: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, 'Value in Ether'), _react2.default.createElement(_semanticUiReact.Input, {
        type: 'number',
        value: this.state.value,
        onChange: function onChange(event) {
          return _this3.setState({ value: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, 'Recipient'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.recipient,
        onChange: function onChange(event) {
          return _this3.setState({ recipient: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }), _react2.default.createElement(_semanticUiReact.Button, {
        primary: true,
        loading: this.state.loading,
        disabled: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, 'Submit')));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var address;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                address = props.query.address;
                return _context2.abrupt('return', { address: address });

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x2) {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RequestNew;
}(_react.Component);

exports.default = RequestNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHJlcXVlc3RzXFxuZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiTWVzc2FnZSIsIklucHV0IiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiTGluayIsIlJvdXRlciIsIkxheW91dCIsIlJlcXVlc3ROZXciLCJzdGF0ZSIsImJyaWVmRGVzY3JpcHRpb24iLCJkZXRhaWxlZERlc2NyaXB0aW9uIiwidmFsdWUiLCJyZWNpcGllbnQiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlUmVxdWVzdCIsInV0aWxzIiwidG9XZWkiLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBUSxBQUFTOztBQUNoQyxBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBTSxBQUFjOztBQUM3QixBQUFPLEFBQVk7Ozs7Ozs7OztJQUViLEE7Ozs7Ozs7Ozs7Ozs7OztvTkFDSixBO3dCQUFRLEFBQ1ksQUFDbEI7MkJBRk0sQUFFZSxBQUNyQjthQUhNLEFBR0MsQUFDUDtpQkFKTSxBQUlLLEFBQ1g7ZUFMTSxBQUtHLEFBQ1Q7b0JBTk0sQUFNUSxBO0FBTlIsQUFDTixhLEFBYUY7MkZBQVcsaUJBQUEsQUFBTSxPQUFOOzRGQUFBOztzRUFBQTtvQkFBQTs2Q0FBQTttQkFDVDtzQkFBQSxBQUFNLEFBQ0E7QUFGRywyQkFFUSx3QkFBUyxNQUFBLEFBQUssTUFGdEIsQUFFUSxB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QUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSw4QkFBQSxBQUFDO2VBQ1EsS0FBQSxBQUFLLE1BRGQsQUFDb0IsQUFDbEI7a0JBQVUseUJBQUE7aUJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxXQUFXLE1BQUEsQUFBTSxPQUExQyxBQUFTLEFBQWMsQUFBMEI7QUFGN0Q7O29CQUFBO3NCQXpCSixBQXVCRSxBQUVFLEFBS0Y7QUFMRTtBQUNFLDJCQUlKLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsU0FBUSxTQUFTLEtBQUEsQUFBSyxNQUE1QyxBQUFrRDtvQkFBbEQ7c0JBOUJGLEFBOEJFLEFBQ0E7QUFEQTswQkFDQSxBQUFDO2lCQUFELEFBRUU7aUJBQVMsS0FBQSxBQUFLLE1BRmhCLEFBRXNCLEFBQ3BCO2tCQUFVLEtBQUEsQUFBSyxNQUhqQixBQUd1QjtvQkFIdkI7c0JBQUE7QUFBQTtBQUNFLFNBdENSLEFBQ0UsQUFLRSxBQStCRSxBQU9QOzs7Ozs2RyxBQXJFNEI7Ozs7O21CQUNuQjtBLDBCQUFZLE1BQU0sQSxNQUFsQixBO2tEQUNELEVBQUUsU0FBRixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWmMsQSxBQWtGekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL05pZ2VsV2l0aFRoZUJyaWUvQmxvY2tjaGFpblR1dG9yaWFscy9raWNrc3RhcnQtZXRoZXJldW0ifQ==