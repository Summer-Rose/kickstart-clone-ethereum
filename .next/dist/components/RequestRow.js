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

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\NigelWithTheBrie\\BlockchainTutorials\\kickstart-ethereum\\components\\RequestRow.js';


var RequestRow = function (_Component) {
  (0, _inherits3.default)(RequestRow, _Component);

  function RequestRow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var campaign, accounts;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              campaign = (0, _campaign2.default)(_this.props.address);
              _context.next = 3;
              return _web2.default.eth.getAccounts();

            case 3:
              accounts = _context.sent;
              _context.next = 6;
              return campaign.methods.approveRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var campaign, accounts;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              campaign = (0, _campaign2.default)(_this.props.address);
              _context2.next = 3;
              return _web2.default.eth.getAccounts();

            case 3:
              accounts = _context2.sent;
              _context2.next = 6;
              return campaign.methods.finalizeRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestRow, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          id = _props.id,
          request = _props.request,
          approversCount = _props.approversCount,
          manager = _props.manager;

      var readyToFinalize = request.approvalCount > approversCount / 2;

      return _react2.default.createElement(_semanticUiReact.Card, { fluid: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement(_semanticUiReact.Statistic, { size: 'mini', floated: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement(_semanticUiReact.Statistic.Value, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _web2.default.utils.fromWei(request.value, 'ether'), ' ETH'), _react2.default.createElement(_semanticUiReact.Statistic.Label, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, 'Requested Amount')), _react2.default.createElement(_semanticUiReact.Card.Header, { style: { marginTop: 25 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, request.briefDescription), _react2.default.createElement(_semanticUiReact.Card.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, request.detailedDescription), _react2.default.createElement(_semanticUiReact.Header, { as: 'h5', style: { marginTop: 5 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, 'Recipient: ', request.recipient)), _react2.default.createElement(_semanticUiReact.Divider, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }), _react2.default.createElement(_semanticUiReact.Grid, { columns: 'two', __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { style: { paddingLeft: 40 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(_semanticUiReact.Statistic, { size: 'mini', __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_semanticUiReact.Statistic.Value, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, request.approvalCount, '/', approversCount), _react2.default.createElement(_semanticUiReact.Statistic.Label, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, 'Approvals'))), _react2.default.createElement(_semanticUiReact.Grid.Column, { floated: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement(_semanticUiReact.Button.Group, { size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, onClick: this.onApprove, __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, 'Approve'), _react2.default.createElement(_semanticUiReact.Button.Or, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { color: 'red', basic: true, onClick: this.onFinalize, __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, 'Finalize')))))));

      //// ID
      //BUTTONS

      // return (
      //   <Row disabled={request.complete} positive={readyToFinalize && !request.complete}>
      //     <Cell>{id}</Cell>
      //     <Cell>{request.briefDescription}</Cell>
      //     <Cell>{request.detailedDescription}</Cell>
      //     <Cell>{web3.utils.fromWei(request.value, 'ether')}</Cell>
      //     <Cell>{request.recipient}</Cell>
      //     <Cell>{request.approvalCount}/{approversCount}</Cell>
      //     <Cell>
      {
        request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, onClick: this.onApprove, __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        }, 'Approve');
      }
      //     </Cell>
      //     <Cell>
      {
        request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', basic: true, onClick: this.onFinalize, __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          }
        }, 'Finalize');
      }
      //     </Cell>
      //   </Row>
      // );
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(props) {
        var accounts, campaign, manager;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _web2.default.eth.getAccounts();

              case 2:
                accounts = _context3.sent;
                campaign = (0, _campaign2.default)(this.props.address);
                _context3.next = 6;
                return campaign.methods.manager().call();

              case 6:
                manager = _context3.sent;
                return _context3.abrupt('return', { account: accounts[0], manager: manager });

              case 8:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getInitialProps(_x) {
        return _ref4.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFJlcXVlc3RSb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCdXR0b24iLCJDYXJkIiwiSGVhZGVyIiwiR3JpZCIsIkRpdmlkZXIiLCJTdGF0aXN0aWMiLCJ3ZWIzIiwiQ2FtcGFpZ24iLCJSZXF1ZXN0Um93Iiwib25BcHByb3ZlIiwiY2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImFwcHJvdmVSZXF1ZXN0IiwiaWQiLCJzZW5kIiwiZnJvbSIsIm9uRmluYWxpemUiLCJmaW5hbGl6ZVJlcXVlc3QiLCJyZXF1ZXN0IiwiYXBwcm92ZXJzQ291bnQiLCJtYW5hZ2VyIiwicmVhZHlUb0ZpbmFsaXplIiwiYXBwcm92YWxDb3VudCIsInV0aWxzIiwiZnJvbVdlaSIsInZhbHVlIiwibWFyZ2luVG9wIiwiYnJpZWZEZXNjcmlwdGlvbiIsImRldGFpbGVkRGVzY3JpcHRpb24iLCJyZWNpcGllbnQiLCJwYWRkaW5nTGVmdCIsImNvbXBsZXRlIiwiY2FsbCIsImFjY291bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFRLEFBQU0sQUFBUSxBQUFNLEFBQVM7O0FBQzlDLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWM7Ozs7Ozs7OztJQUVmLEE7Ozs7Ozs7Ozs7Ozs7OztvTixBQU9KLHFGQUFZLG1CQUFBO29CQUFBO29FQUFBO2tCQUFBOzJDQUFBO2lCQUNKO0FBREkseUJBQ08sd0JBQVMsTUFBQSxBQUFLLE1BRHJCLEFBQ08sQUFBb0I7OEJBRDNCO3FCQUVhLGNBQUEsQUFBSyxJQUZsQixBQUVhLEFBQVM7O2lCQUExQjtBQUZJLGtDQUFBOzhCQUFBOzhCQUdKLEFBQVMsUUFBVCxBQUFpQixlQUFlLE1BQUEsQUFBSyxNQUFyQyxBQUEyQyxJQUEzQyxB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