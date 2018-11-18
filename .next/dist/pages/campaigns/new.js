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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\NigelWithTheBrie\\BlockchainTutorials\\kickstart-ethereum\\pages\\campaigns\\new.js?entry';


var CampaignNew = function (_Component) {
  (0, _inherits3.default)(CampaignNew, _Component);

  function CampaignNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CampaignNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      title: '',
      description: '',
      goal: '',
      minimumContribution: '',
      errorMessage: '',
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this.setState({ loading: true, errorMessage: '' });
                _context.prev = 2;
                _context.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context.sent;
                _context.next = 8;
                return _factory2.default.methods.createCampaign(_this.state.title, _this.state.description, _this.state.goal, _this.state.minimumContribution).send({
                  from: accounts[0]
                });

              case 8:
                _routes.Router.pushRoute('/');
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](2);

                _this.setState({ errorMessage: _context.t0.message });

              case 14:
                _this.setState({ loading: false });

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 11]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CampaignNew, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, 'Create a campaign'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, 'What is your project called?'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.title,
        placeholder: 'Project title',
        onChange: function onChange(event) {
          return _this3.setState({ title: event.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, 'Describe your project'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.description,
        placeholder: 'Project description',
        onChange: function onChange(event) {
          return _this3.setState({ description: event.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 51
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
      }, 'How much Ether are you hoping to raise for your project?'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.goal,
        placeholder: 'Goal',
        onChange: function onChange(event) {
          return _this3.setState({ goal: event.target.value });
        },
        label: 'Ether',
        labelPosition: 'right',
        type: 'number', __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, 'What\'s the least amount of money someone can contribute to become one of your Approvers?'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.minimumContribution,
        placeholder: 'Minimum contribution to gain approver status',
        onChange: function onChange(event) {
          return _this3.setState({ minimumContribution: event.target.value });
        },
        label: 'Wei',
        labelPosition: 'right',
        type: 'number', __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      })), _react2.default.createElement(_semanticUiReact.Message, {
        error: true,
        header: 'Oops!',
        content: this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }), _react2.default.createElement(_semanticUiReact.Button, {
        disabled: this.state.loading,
        loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, 'Create')));
    }
  }]);

  return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXG5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk1lc3NhZ2UiLCJmYWN0b3J5Iiwid2ViMyIsIlJvdXRlciIsIkNhbXBhaWduTmV3Iiwic3RhdGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZ29hbCIsIm1pbmltdW1Db250cmlidXRpb24iLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZUNhbXBhaWduIiwic2VuZCIsImZyb20iLCJwdXNoUm91dGUiLCJtZXNzYWdlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBTSxBQUFRLEFBQU87O0FBQzlCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFjOzs7Ozs7O0lBRWpCLEE7Ozs7Ozs7Ozs7Ozs7OztzTixBQUNKO2FBQVEsQUFDQyxBQUNQO21CQUZNLEFBRU8sQUFDYjtZQUhNLEFBR0EsQUFDTjsyQkFKTSxBQUllLEFBQ3JCO29CQUxNLEFBS1EsQUFDZDtlQU5NLEEsQUFNRztBQU5ILEFBQ04sYSxBQVFGOzJGQUFXLGlCQUFBLEFBQU8sT0FBUDtZQUFBO3NFQUFBO29CQUFBOzZDQUFBO21CQUNUO3NCQUFBLEFBQU0sQUFDTjtzQkFBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsTUFBTSxjQUZ0QixBQUVULEFBQWMsQUFBK0I7Z0NBRnBDO2dDQUFBO3VCQUlnQixjQUFBLEFBQUssSUFKckIsQUFJZ0IsQUFBUzs7bUJBQTFCO0FBSkMsb0NBQUE7Z0NBQUE7eUNBS0QsQUFBUSxRQUFSLEFBQ0wsZUFBZSxNQUFBLEFBQUssTUFEZixBQUNxQixPQUFPLE1BQUEsQUFBSyxNQURqQyxBQUN1QyxhQUMzQyxNQUFBLEFBQUssTUFGRCxBQUVPLE1BQU0sTUFBQSxBQUFLLE1BRmxCLEFBRXdCLHFCQUZ4QixBQUdMO3dCQUNPLFNBVEQsQUFLRCxBQUdBLEFBQ0UsQUFBUztBQURYLEFBQ0osaUJBSkk7O21CQU1OOytCQUFBLEFBQU8sVUFYQSxBQVdQLEFBQWlCO2dDQVhWO0FBQUE7O21CQUFBO2dDQUFBO2dEQWFQOztzQkFBQSxBQUFLLFNBQVMsRUFBRSxjQUFjLFlBYnZCLEFBYVAsQUFBYyxBQUFvQjs7bUJBRXBDO3NCQUFBLEFBQUssU0FBUyxFQUFFLFNBZlAsQUFlVCxBQUFjLEFBQVc7O21CQWZoQjttQkFBQTtnQ0FBQTs7QUFBQTtpQ0FBQTtBOzs7Ozs7Ozs7OzZCQWtCRjttQkFDUDs7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0Esc0NBQUEsQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCLFVBQVUsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQTdDLEFBQW1EO29CQUFuRDtzQkFBQSxBQUNFO0FBREY7eUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsaURBQUEsQUFBQztlQUNRLEtBQUEsQUFBSyxNQURkLEFBQ29CLEFBQ2xCO3FCQUZGLEFBRWMsQUFDWjtrQkFBVSx5QkFBQTtpQkFDUixPQUFBLEFBQUssU0FBUyxFQUFDLE9BQU8sTUFBQSxBQUFNLE9BRHBCLEFBQ1IsQUFBYyxBQUFxQjtBQUp2QztvQkFBQTtzQkFISixBQUNFLEFBRUUsQUFNRjtBQU5FO0FBQ0UsMkJBS0gsY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsMENBQUEsQUFBQztlQUNRLEtBQUEsQUFBSyxNQURkLEFBQ29CLEFBQ2xCO3FCQUZGLEFBRWMsQUFDWjtrQkFBVSx5QkFBQTtpQkFDUixPQUFBLEFBQUssU0FBUyxFQUFDLGFBQWEsTUFBQSxBQUFNLE9BRDFCLEFBQ1IsQUFBYyxBQUEyQjtBQUo3QztvQkFBQTtzQkFYSixBQVNFLEFBRUUsQUFNRjtBQU5FO0FBQ0UsMkJBS0gsY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsNkVBQUEsQUFBQztlQUNRLEtBQUEsQUFBSyxNQURkLEFBQ29CLEFBQ2xCO3FCQUZGLEFBRWMsQUFDWjtrQkFBVSx5QkFBQTtpQkFDUixPQUFBLEFBQUssU0FBUyxFQUFDLE1BQU0sTUFBQSxBQUFNLE9BRG5CLEFBQ1IsQUFBYyxBQUFvQjtBQUp0QyxBQUtFO2VBTEYsQUFLUSxBQUNOO3VCQU5GLEFBTWdCLEFBQ2Q7Y0FQRixBQU9PO29CQVBQO3NCQW5CSixBQWlCRSxBQUVFLEFBU0Y7QUFURTtBQUNFLDJCQVFILGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLDhHQUFBLEFBQUM7ZUFDUSxLQUFBLEFBQUssTUFEZCxBQUNvQixBQUNsQjtxQkFGRixBQUVjLEFBQ1o7a0JBQVUseUJBQUE7aUJBQ1IsT0FBQSxBQUFLLFNBQVMsRUFBQyxxQkFBcUIsTUFBQSxBQUFNLE9BRGxDLEFBQ1IsQUFBYyxBQUFtQztBQUpyRCxBQUtFO2VBTEYsQUFLUSxBQUNOO3VCQU5GLEFBTWdCLEFBQ2Q7Y0FQRixBQU9PO29CQVBQO3NCQTlCSixBQTRCRSxBQUVFLEFBU0Y7QUFURTtBQUNFLDJCQVFKLEFBQUM7ZUFBRCxBQUVFO2dCQUZGLEFBRVMsQUFDUDtpQkFBUyxLQUFBLEFBQUssTUFIaEIsQUFHc0I7O29CQUh0QjtzQkF2Q0YsQUF1Q0UsQUFLQTtBQUxBO0FBQ0UsMEJBSUYsQUFBQztrQkFDVyxLQUFBLEFBQUssTUFEakIsQUFDdUIsQUFDckI7aUJBQVMsS0FBQSxBQUFLLE1BRmhCLEFBRXNCLFNBQVMsU0FGL0I7b0JBQUE7c0JBQUE7QUFBQTtBQUNFLFNBaERSLEFBQ0UsQUFFRSxBQTRDRSxBQU1QOzs7OztBQWxGdUIsQSxBQXFGMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL05pZ2VsV2l0aFRoZUJyaWUvQmxvY2tjaGFpblR1dG9yaWFscy9raWNrc3RhcnQtZXRoZXJldW0ifQ==