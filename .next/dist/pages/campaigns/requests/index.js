'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../../routes');

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _RequestRow = require('../../../components/RequestRow');

var _RequestRow2 = _interopRequireDefault(_RequestRow);

var _CampaignDetail = require('../../../components/CampaignDetail');

var _CampaignDetail2 = _interopRequireDefault(_CampaignDetail);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\NigelWithTheBrie\\BlockchainTutorials\\kickstart-ethereum\\pages\\campaigns\\requests\\index.js?entry';


var RequestIndex = function (_Component) {
  (0, _inherits3.default)(RequestIndex, _Component);

  function RequestIndex() {
    (0, _classCallCheck3.default)(this, RequestIndex);

    return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(RequestIndex, [{
    key: 'renderRows',
    value: function renderRows() {
      var _this2 = this;

      return this.props.requests.map(function (request, index) {
        return _react2.default.createElement(_RequestRow2.default, {
          key: index,
          id: index,
          approversCount: _this2.props.approversCount,
          request: request,
          address: _this2.props.address,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { disabled: true, name: 'arrow left', __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }), ' Back')), _react2.default.createElement(_CampaignDetail2.default, {
        title: this.props.title,
        description: this.props.description,
        percent: this.props.percent,
        manager: this.props.manager,
        address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, 'Spending Requests'), _react2.default.createElement(_semanticUiReact.List, { items: ['Managers create spending requests to purhcase necessary products and servives to reach their goal.', 'The amount specified in the request is only sent to the listed recipient if the spending request is approved', 'Only Sponsors are able to approve spending requests', 'Managers CANNOT send money to their own account', 'The request can only be finalized once 51% or more of Sponsors approve the request'], __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }), _react2.default.createElement('div', { style: { marginBottom: 5, marginTop: 25 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, 'Found ', this.props.requestCount, ' requests.'), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: 'right', style: { marginBottom: 10 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, 'Add Request'))), _react2.default.createElement(_semanticUiReact.Card.Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, this.renderRows()));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var address, campaign, approversCount, requestCount, summary, percent, requests;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = props.query.address;
                campaign = (0, _campaign2.default)(address);
                _context.next = 4;
                return campaign.methods.approversCount().call();

              case 4:
                approversCount = _context.sent;
                _context.next = 7;
                return campaign.methods.getRequestsCount().call();

              case 7:
                requestCount = _context.sent;
                _context.next = 10;
                return campaign.methods.getSummary().call();

              case 10:
                summary = _context.sent;
                percent = Math.floor(summary[4] / _web2.default.utils.toWei(summary[2], 'ether') * 100);
                _context.next = 14;
                return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
                  return campaign.methods.requests(index).call();
                }));

              case 14:
                requests = _context.sent;
                return _context.abrupt('return', {
                  address: address,
                  requests: requests,
                  requestCount: requestCount,
                  approversCount: approversCount,
                  percent: percent,
                  title: summary[0],
                  description: summary[1],
                  manager: summary[7]
                });

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RequestIndex;
}(_react.Component);

// <Table basic="very">
//   <Header>
//     <Row>
//       <HeaderCell width="six">ID</HeaderCell>
//       <HeaderCell width={2}>Description</HeaderCell>
//       <HeaderCell width={6}>More information</HeaderCell>
//       <HeaderCell width={1}>Amount</HeaderCell>
//       <HeaderCell width={2}>Recipient</HeaderCell>
//       <HeaderCell width={1}>Approval Count</HeaderCell>
//       <HeaderCell width={1}>Approve</HeaderCell>
//       <HeaderCell width={1}>Finalize</HeaderCell>
//     </Row>
//   </Header>
//   <Body>
//     {this.renderRows()}
//   </Body>
// </Table>

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHJlcXVlc3RzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkJ1dHRvbiIsIkNhcmQiLCJJY29uIiwiSGVhZGVyIiwiTGlzdCIsIkxpbmsiLCJDYW1wYWlnbiIsIlJlcXVlc3RSb3ciLCJDYW1wYWlnbkRldGFpbCIsIndlYjMiLCJSZXF1ZXN0SW5kZXgiLCJwcm9wcyIsInJlcXVlc3RzIiwibWFwIiwicmVxdWVzdCIsImluZGV4IiwiYXBwcm92ZXJzQ291bnQiLCJhZGRyZXNzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInBlcmNlbnQiLCJtYW5hZ2VyIiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwicmVxdWVzdENvdW50IiwicmVuZGVyUm93cyIsInF1ZXJ5IiwiY2FtcGFpZ24iLCJtZXRob2RzIiwiY2FsbCIsImdldFJlcXVlc3RzQ291bnQiLCJnZXRTdW1tYXJ5Iiwic3VtbWFyeSIsIk1hdGgiLCJmbG9vciIsInV0aWxzIiwidG9XZWkiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVEsQUFBTSxBQUFNLEFBQVE7O0FBQ3JDLEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFPLEFBQVU7Ozs7Ozs7OztJQUVYLEE7Ozs7Ozs7Ozs7O2lDQTBCUzttQkFDWDs7a0JBQU8sQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQixJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUNqRDsrQkFBTSxBQUFDO2VBQUQsQUFDQyxBQUNMO2NBRkksQUFFQSxBQUNKOzBCQUFnQixPQUFBLEFBQUssTUFIakIsQUFHdUIsQUFDM0I7bUJBSkksQUFJSyxBQUNUO21CQUFTLE9BQUEsQUFBSyxNQUxWLEFBS2dCOztzQkFMaEI7d0JBQU4sQUFBTSxBQU9QO0FBUE87QUFDSixTQURJO0FBRFIsQUFBTyxBQVNSLE9BVFE7Ozs7NkJBV0EsQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxVQUF0QztvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFBRztBQUFIO0FBQUEseUJBQUcsQUFBQyx1Q0FBSyxVQUFOLE1BQWUsTUFBZixBQUFvQjtvQkFBcEI7c0JBQUgsQUFBRztBQUFBO1VBRlAsQUFDRSxBQUNFLEFBRUYsMkJBQUEsQUFBQztlQUNRLEtBQUEsQUFBSyxNQURkLEFBQ29CLEFBQ2xCO3FCQUFhLEtBQUEsQUFBSyxNQUZwQixBQUUwQixBQUN4QjtpQkFBUyxLQUFBLEFBQUssTUFIaEIsQUFHc0IsQUFDcEI7aUJBQVMsS0FBQSxBQUFLLE1BSmhCLEFBSXNCLEFBQ3BCO2lCQUFTLEtBQUEsQUFBSyxNQUxoQixBQUtzQjtvQkFMdEI7c0JBSkYsQUFJRSxBQU1BO0FBTkE7QUFDRSwwQkFLRixBQUFDLHlDQUFPLElBQVIsQUFBVztvQkFBWDtzQkFBQTtBQUFBO1NBVkYsQUFVRSxBQUNBLHNDQUFBLEFBQUMsdUNBQUssT0FBTyxDQUFBLEFBQ1gsc0dBRFcsQUFFWCxnSEFGVyxBQUdYLHVEQUhXLEFBSVgsbURBSkYsQUFBYSxBQUtYO29CQUxGO3NCQVhGLEFBV0UsQUFNQTtBQU5BOzBCQU1BLGNBQUEsU0FBSyxPQUFPLEVBQUMsY0FBRCxBQUFlLEdBQUcsV0FBOUIsQUFBWSxBQUE2QjtvQkFBekM7c0JBQUE7QUFBQTtTQUFxRCxlQUFBLEFBQUssTUFBMUQsQUFBZ0UsY0FqQmxFLEFBaUJFLEFBQ0EsK0JBQUEsQUFBQyw4QkFBSyx1QkFBcUIsS0FBQSxBQUFLLE1BQTFCLEFBQWdDLFVBQXRDO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsU0FBaEIsQUFBd0IsU0FBUSxPQUFPLEVBQUMsY0FBeEMsQUFBdUMsQUFBYztvQkFBckQ7c0JBQUE7QUFBQTtTQXBCTixBQWtCRSxBQUNFLEFBQ0UsQUFHSixrQ0FBQyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0c7QUFESDtBQUFBLGNBeEJKLEFBQ0UsQUF1QkUsQUFDRyxBQUFLLEFBSWI7Ozs7OzJHLEFBbkU0Qjs7Ozs7bUJBQ25CO0EsMEJBQVksTUFBTSxBLE1BQWxCLEEsQUFDRjtBLDJCQUFXLHdCQUFBLEFBQVMsQTs7dUJBQ0csU0FBQSxBQUFTLFFBQVQsQUFBaUIsaUJBQWpCLEEsQUFBa0M7O21CQUF6RDtBOzt1QkFDcUIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsbUJBQW1CLEEsQUFBcEM7O21CQUFyQjtBOzt1QkFDZ0IsU0FBQSxBQUFTLFFBQVQsQUFBaUIsYUFBakIsQUFBOEIsQTs7bUJBQTlDO0EsbUNBQ0E7QSwwQkFBVSxLQUFBLEFBQUssTUFBUSxRQUFBLEFBQVEsS0FBSyxjQUFBLEFBQUssTUFBTCxBQUFXLE1BQU0sUUFBakIsQUFBaUIsQUFBUSxJQUF2QyxBQUFjLEFBQTZCLFcsQUFBdkQsQUFBbUU7O3lDQUM1RCxBQUFRLFVBQ3ZCLFNBQU4sQUFBTSxBQUFTLGVBQWYsQUFBOEIsT0FBOUIsQUFBcUMsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDM0Q7eUJBQU8sU0FBQSxBQUFTLFFBQVQsQUFBaUIsU0FBakIsQUFBMEIsT0FBakMsQUFBTyxBQUFpQyxBQUN6QztBQUhvQixBLEFBQ3JCLGlCQUFBLENBRHFCOzttQkFBakI7QTs7MkJBTUMsQUFFTDs0QkFGSyxBQUdMO2dDQUhLLEFBSUw7a0NBSkssQUFLTDsyQkFMSyxBQU1MO3lCQUFPLFFBTkYsQUFNRSxBQUFRLEFBQ2Y7K0JBQWEsUUFQUixBQU9RLEFBQVEsQUFDckI7MkJBQVMsUUFSSixBQVFJLEFBQVEsQTtBQVJaLEFBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFmcUIsQTs7QUF1RTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQUFFQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9OaWdlbFdpdGhUaGVCcmllL0Jsb2NrY2hhaW5UdXRvcmlhbHMva2lja3N0YXJ0LWV0aGVyZXVtIn0=