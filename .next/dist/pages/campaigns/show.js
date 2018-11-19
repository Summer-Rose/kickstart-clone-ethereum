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

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = require('../../routes');

var _CampaignDetail = require('../../components/CampaignDetail');

var _CampaignDetail2 = _interopRequireDefault(_CampaignDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\NigelWithTheBrie\\BlockchainTutorials\\kickstart-ethereum\\pages\\campaigns\\show.js?entry';


var CampaignShow = function (_Component) {
  (0, _inherits3.default)(CampaignShow, _Component);

  function CampaignShow() {
    (0, _classCallCheck3.default)(this, CampaignShow);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignShow, [{
    key: 'renderCards',
    value: function renderCards() {
      var _props = this.props,
          title = _props.title,
          description = _props.description,
          goal = _props.goal,
          balance = _props.balance,
          manager = _props.manager,
          minimumContribution = _props.minimumContribution,
          requestsCount = _props.requestsCount,
          approversCount = _props.approversCount,
          totalRequestsAmount = _props.totalRequestsAmount,
          totalSpentFunds = _props.totalSpentFunds,
          percent = _props.percent;

      var items = [{
        key: 1,
        header: goal + ' ETH',
        meta: 'Fundraising goal',
        description: 'This is the amount the manager hopes to raise for their project',
        style: { overflowWrap: 'break-word' }
      }, {
        key: 2,
        header: _web2.default.utils.fromWei(totalSpentFunds + balance, 'ether') + ' ETH',
        meta: 'Amount Earned',
        description: 'This is how much money this project has raised so far'
      }, {
        key: 3,
        header: _web2.default.utils.fromWei(balance, 'ether') + ' ETH',
        meta: 'Current Balance',
        description: 'The balance is how much money this campaign has left to spend'
      }, {
        key: 4,
        header: _web2.default.utils.fromWei(totalSpentFunds, 'ether') + ' ETH',
        meta: 'Spent Funds',
        description: 'The balance is how much money this campaign has left to spend'
      }, {
        key: 5,
        header: minimumContribution + ' wei',
        meta: 'Minimum Sponsor Contribution',
        description: 'To gain \'Sponsor\' status you must contribute at least this much'
      }, {
        key: 6,
        header: approversCount,
        meta: 'Number of Sponsors',
        description: 'Number of contributers with \'Sponsor\' status.'
      }, {
        key: 7,
        header: requestsCount,
        meta: 'Number of Spending Requests',
        extra: _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          }
        }, _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          }
        }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          }
        }, 'View Requests'))),
        description: 'A manager can create a request to withdraw money from the contract balance. Requests must be approved by the Sponsors'
      }];
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { disabled: true, name: 'arrow left', __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }), ' Back')), _react2.default.createElement(_CampaignDetail2.default, {
        title: this.props.title,
        description: this.props.description,
        percent: this.props.percent,
        manager: this.props.manager,
        address: this.props.address,
        showRequestsButton: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 11, __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 5, __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, minimumContribution: this.props.minimumContribution, __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }))))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var campaign, summary, totalRaised, percent;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = (0, _campaign2.default)(props.query.address);
                _context.next = 3;
                return campaign.methods.getSummary().call();

              case 3:
                summary = _context.sent;
                totalRaised = parseInt(summary[4]) + parseInt(summary[9]);
                percent = Math.floor(totalRaised / _web2.default.utils.toWei(summary[2], 'ether') * 100);
                return _context.abrupt('return', {
                  title: summary[0],
                  description: summary[1],
                  goal: summary[2],
                  minimumContribution: summary[3],
                  balance: summary[4],
                  requestsCount: summary[5],
                  approversCount: summary[6],
                  manager: summary[7],
                  totalRequestsAmount: summary[8],
                  totalSpentFunds: summary[9],
                  address: props.query.address,
                  percent: percent
                });

              case 7:
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

  return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIkNhcmQiLCJHcmlkIiwiQnV0dG9uIiwiU2VnbWVudCIsIkhlYWRlciIsIkNvbnRhaW5lciIsIkljb24iLCJQcm9ncmVzcyIsIndlYjMiLCJDb250cmlidXRlRm9ybSIsIkxpbmsiLCJDYW1wYWlnbkRldGFpbCIsIkNhbXBhaWduU2hvdyIsInByb3BzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImdvYWwiLCJiYWxhbmNlIiwibWFuYWdlciIsIm1pbmltdW1Db250cmlidXRpb24iLCJyZXF1ZXN0c0NvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJ0b3RhbFJlcXVlc3RzQW1vdW50IiwidG90YWxTcGVudEZ1bmRzIiwicGVyY2VudCIsIml0ZW1zIiwia2V5IiwiaGVhZGVyIiwibWV0YSIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwidXRpbHMiLCJmcm9tV2VpIiwiZXh0cmEiLCJhZGRyZXNzIiwicmVuZGVyQ2FyZHMiLCJjYW1wYWlnbiIsInF1ZXJ5IiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSIsInRvdGFsUmFpc2VkIiwicGFyc2VJbnQiLCJNYXRoIiwiZmxvb3IiLCJ0b1dlaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQVMsQUFBTSxBQUFNLEFBQVEsQUFBUyxBQUFRLEFBQVcsQUFBTTs7QUFDL0QsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBb0I7Ozs7QUFDM0IsQUFBUyxBQUFZOztBQUNyQixBQUFPLEFBQW9COzs7Ozs7Ozs7SSxBQUVyQjs7Ozs7Ozs7Ozs7a0NBc0JVO21CQWFSLEtBYlEsQUFhSDtVQWJHLEFBRVYsZUFGVSxBQUVW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