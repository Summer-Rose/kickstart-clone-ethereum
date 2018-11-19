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
    key: 'renderButtons',
    value: function renderButtons(complete) {
      if (complete) {
        return _react2.default.createElement(_semanticUiReact.Message, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }, 'Request complete');
      } else {
        return _react2.default.createElement(_semanticUiReact.Button.Group, { size: 'large', __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }, _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, onClick: this.onApprove, __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }, 'Approve'), _react2.default.createElement(_semanticUiReact.Button.Or, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }), _react2.default.createElement(_semanticUiReact.Button, { color: 'red', basic: true, onClick: this.onFinalize, __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        }, 'Finalize'));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          id = _props.id,
          request = _props.request,
          approversCount = _props.approversCount,
          manager = _props.manager;

      var readyToFinalize = request.approvalCount > approversCount / 2;

      return _react2.default.createElement(_semanticUiReact.Card, { fluid: true, raised: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement(_semanticUiReact.Statistic, { size: 'mini', floated: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement(_semanticUiReact.Statistic.Value, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _web2.default.utils.fromWei(request.value, 'ether'), ' ETH'), _react2.default.createElement(_semanticUiReact.Statistic.Label, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, 'Requested Amount')), _react2.default.createElement(_semanticUiReact.Card.Header, { style: { marginTop: 25 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, request.briefDescription), _react2.default.createElement(_semanticUiReact.Card.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, request.detailedDescription), _react2.default.createElement(_semanticUiReact.Header, { as: 'h5', style: { marginTop: 5 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, 'Recipient: ', request.recipient)), _react2.default.createElement(_semanticUiReact.Divider, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }), _react2.default.createElement(_semanticUiReact.Grid, { columns: 'two', __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { style: { paddingLeft: 40 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement(_semanticUiReact.Statistic, { size: 'mini', __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement(_semanticUiReact.Statistic.Value, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, request.approvalCount, '/', approversCount), _react2.default.createElement(_semanticUiReact.Statistic.Label, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, 'Approvals'))), _react2.default.createElement(_semanticUiReact.Grid.Column, { floated: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, this.renderButtons(request.complete))))));

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
            lineNumber: 95
          }
        }, 'Approve');
      }
      //     </Cell>
      //     <Cell>
      {
        request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', basic: true, onClick: this.onFinalize, __source: {
            fileName: _jsxFileName,
            lineNumber: 100
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
                console.log('HII');
                _context3.next = 3;
                return _web2.default.eth.getAccounts();

              case 3:
                accounts = _context3.sent;
                campaign = (0, _campaign2.default)(this.props.address);
                _context3.next = 7;
                return campaign.methods.manager().call();

              case 7:
                manager = _context3.sent;

                console.log("ACCOUNTS ", accounts);
                return _context3.abrupt('return', { account: accounts[0], manager: manager });

              case 10:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFJlcXVlc3RSb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCdXR0b24iLCJDYXJkIiwiSGVhZGVyIiwiR3JpZCIsIkRpdmlkZXIiLCJTdGF0aXN0aWMiLCJNZXNzYWdlIiwid2ViMyIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsIm9uQXBwcm92ZSIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJhcHByb3ZlUmVxdWVzdCIsImlkIiwic2VuZCIsImZyb20iLCJvbkZpbmFsaXplIiwiZmluYWxpemVSZXF1ZXN0IiwiY29tcGxldGUiLCJyZXF1ZXN0IiwiYXBwcm92ZXJzQ291bnQiLCJtYW5hZ2VyIiwicmVhZHlUb0ZpbmFsaXplIiwiYXBwcm92YWxDb3VudCIsInV0aWxzIiwiZnJvbVdlaSIsInZhbHVlIiwibWFyZ2luVG9wIiwiYnJpZWZEZXNjcmlwdGlvbiIsImRldGFpbGVkRGVzY3JpcHRpb24iLCJyZWNpcGllbnQiLCJwYWRkaW5nTGVmdCIsInJlbmRlckJ1dHRvbnMiLCJjb25zb2xlIiwibG9nIiwiY2FsbCIsImFjY291bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFRLEFBQU0sQUFBUSxBQUFNLEFBQVMsQUFBVzs7QUFDekQsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYzs7Ozs7Ozs7O0lBRWYsQTs7Ozs7Ozs7Ozs7Ozs7O29OLEFBVUoscUZBQVksbUJBQUE7b0JBQUE7b0VBQUE7a0JBQUE7MkNBQUE7aUJBQ0o7QUFESSx5QkFDTyx3QkFBUyxNQUFBLEFBQUssTUFEckIsQUFDTyxBQUFvQjs4QkFEM0I7cUJBRWEsY0FBQSxBQUFLLElBRmxCLEFBRWEsQUFBUzs7aUJBQTFCO0FBRkksa0NBQUE7OEJBQUE7OEJBR0osQUFBUyxRQUFULEFBQWlCLGVBQWUsTUFBQSxBQUFLLE1BQXJDLEFBQTJDLElBQTNDLEFBQStDO3NCQUM3QyxTQUpFLEFBR0osQUFBb0QsQUFDbEQsQUFBUztBQUR5QyxBQUN4RCxlQURJOztpQkFISTtpQkFBQTs4QkFBQTs7QUFBQTtrQkFBQTtBLGVBUVosQSxzRkFBYSxvQkFBQTtvQkFBQTtzRUFBQTtrQkFBQTs2Q0FBQTtpQkFDTDtBQURLLHlCQUNNLHdCQUFTLE1BQUEsQUFBSyxNQURwQixBQUNNLEFBQW9COytCQUQxQjtxQkFFWSxjQUFBLEFBQUssSUFGakIsQUFFWSxBQUFTOztpQkFBMUI7QUFGSyxtQ0FBQTsrQkFBQTs4QkFHTCxBQUFTLFFBQVQsQUFBaUIsZ0JBQWdCLE1BQUEsQUFBSyxNQUF0QyxBQUE0QyxJQUE1QyxBQUFnRDtzQkFDOUMsU0FKRyxBQUdMLEFBQXFELEFBQ25ELEFBQVM7QUFEMEMsQUFDekQsZUFESTs7aUJBSEs7aUJBQUE7K0JBQUE7O0FBQUE7bUJBQUE7QTs7Ozs7a0NBUUMsQSxVQUFVLEFBQ3RCO1VBQUEsQUFBSSxVQUFVLEFBQ1o7K0JBQ0UsQUFBQzs7c0JBQUQ7d0JBQUE7QUFBQTtBQUFBLFNBQUEsRUFERixBQUNFLEFBRUg7QUFKRCxhQUlPLEFBQ0w7K0JBQ0csY0FBRCx3QkFBQSxBQUFRLFNBQU0sTUFBZCxBQUFtQjtzQkFBbkI7d0JBQUEsQUFDRTtBQURGO1NBQUEsa0JBQ0UsQUFBQyx5Q0FBTyxPQUFSLEFBQWMsU0FBUSxPQUF0QixNQUE0QixTQUFTLEtBQXJDLEFBQTBDO3NCQUExQzt3QkFBQTtBQUFBO1dBREYsQUFDRSxBQUNBLDBDQUFBLEFBQUMsd0JBQUQsQUFBUTs7c0JBQVI7d0JBRkYsQUFFRSxBQUNBO0FBREE7QUFBQSw0QkFDQSxBQUFDLHlDQUFPLE9BQVIsQUFBYyxPQUFNLE9BQXBCLE1BQTBCLFNBQVMsS0FBbkMsQUFBd0M7c0JBQXhDO3dCQUFBO0FBQUE7V0FKSixBQUNFLEFBR0UsQUFHTDtBQUNGOzs7OzZCQUVRO21CQUMwQyxLQUQxQyxBQUMrQztVQUQvQyxBQUNDLFlBREQsQUFDQztVQURELEFBQ0ssaUJBREwsQUFDSztVQURMLEFBQ2Msd0JBRGQsQUFDYztVQURkLEFBQzhCLGlCQUQ5QixBQUM4QixBQUNyQzs7VUFBTSxrQkFBa0IsUUFBQSxBQUFRLGdCQUFnQixpQkFBaEQsQUFBaUUsQUFFakU7OzZCQUNFLEFBQUMsdUNBQUssT0FBTixNQUFZLFFBQVo7b0JBQUE7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLDRDQUFVLE1BQVgsQUFBZ0IsUUFBTyxTQUF2QixBQUErQjtvQkFBL0I7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQsMkJBQUEsQUFBVzs7b0JBQVg7c0JBQUEsQUFBa0I7QUFBbEI7QUFBQSx1QkFBa0IsQUFBSyxNQUFMLEFBQVcsUUFBUSxRQUFuQixBQUEyQixPQUE3QyxBQUFrQixBQUFrQyxVQUR0RCxBQUNFLEFBQ0EseUJBQUMsY0FBRCwyQkFBQSxBQUFXOztvQkFBWDtzQkFBQTtBQUFBO0FBQUEsU0FISixBQUNFLEFBRUUsQUFFRixzQ0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFPLEVBQUMsV0FBckIsQUFBb0IsQUFBWTtvQkFBaEM7c0JBQUEsQUFBc0M7QUFBdEM7aUJBTEYsQUFLRSxBQUE4QyxBQUM5QyxtQ0FBQyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQUk7QUFBSjtBQUFBLGlCQURGLEFBQ0UsQUFBWSxBQUNaLHNDQUFBLEFBQUMseUNBQU8sSUFBUixBQUFXLE1BQUssT0FBTyxFQUFDLFdBQXhCLEFBQXVCLEFBQVk7b0JBQW5DO3NCQUFBO0FBQUE7U0FBbUQsdUJBUnZELEFBTUUsQUFFRSxBQUEyRCxBQUU3RCw2QkFBQSxBQUFDOztvQkFBRDtzQkFWRixBQVVFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLEFBQUMsdUNBQUssU0FBTixBQUFjO29CQUFkO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQU8sRUFBQyxhQUFyQixBQUFvQixBQUFjO29CQUFsQztzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyw0Q0FBVSxNQUFYLEFBQWdCO29CQUFoQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0csY0FBRCwyQkFBQSxBQUFXOztvQkFBWDtzQkFBQSxBQUFrQjtBQUFsQjtBQUFBLGlCQUFBLEFBQTBCLGVBQWdCLEtBRDVDLEFBQ0UsQUFDQSxpQ0FBQyxjQUFELDJCQUFBLEFBQVc7O29CQUFYO3NCQUFBO0FBQUE7QUFBQSxTQUpOLEFBQ0UsQUFDRSxBQUVFLEFBR0osZ0NBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sU0FBYixBQUFxQjtvQkFBckI7c0JBQUEsQUFDRztBQURIO2NBQ0csQUFBSyxjQUFjLFFBdEJoQyxBQUNFLEFBQ0UsQUFXRSxBQUNFLEFBT0UsQUFDRyxBQUEyQixBQVF4Qzs7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTTtBQUFDO2dCQUFBLEFBQVEsV0FBUixBQUFtQix1QkFDbEIsQUFBQyx5Q0FBTyxPQUFSLEFBQWMsU0FBUSxPQUF0QixNQUE0QixTQUFTLEtBQXJDLEFBQTBDO3NCQUExQzt3QkFBQTtBQUFBO1NBQUEsRUFERCxBQUNDLEFBQ0E7QUFDUjtBQUNBO0FBQ007QUFBQztnQkFBQSxBQUFRLFdBQVIsQUFBbUIsdUJBQ2xCLEFBQUMseUNBQU8sT0FBUixBQUFjLFFBQU8sT0FBckIsTUFBMkIsU0FBUyxLQUFwQyxBQUF5QztzQkFBekM7d0JBQUE7QUFBQTtTQUFBLEVBREQsQUFDQyxBQUNBO0FBQ1I7QUFDQTtBQUNBO0FBQ0Q7Ozs7OzZHQWxHNEIsQTs7Ozs7bUJBQzNCO3dCQUFBLEFBQVEsSUFBUixBQUFZOzt1QkFDVyxjQUFBLEFBQUssSUFBTCxBQUFTLEE7O21CQUExQjtBLHFDQUNBO0EsMkJBQVcsd0JBQVMsS0FBQSxBQUFLLE1BQWQsQUFBb0IsQTs7dUJBQ2YsU0FBQSxBQUFTLFFBQVQsQUFBaUIsVUFBakIsQUFBMkIsQTs7bUJBQTNDO0Esb0NBQ047O3dCQUFBLEFBQVEsSUFBUixBQUFZLGFBQVosQUFBeUI7a0RBQ2xCLEVBQUUsU0FBUyxTQUFYLEFBQVcsQUFBUyxJQUFJLFNBQXhCLEFBQWlDLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFQbkIsQSxBQXNHekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiUmVxdWVzdFJvdy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9OaWdlbFdpdGhUaGVCcmllL0Jsb2NrY2hhaW5UdXRvcmlhbHMva2lja3N0YXJ0LWV0aGVyZXVtIn0=