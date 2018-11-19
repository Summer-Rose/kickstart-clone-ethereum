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
        header: goal + ' eth',
        meta: 'Fundraising goal',
        description: 'This is the amount the manager hopes to raise for their project',
        style: { overflowWrap: 'break-word' }
      }, {
        header: _web2.default.utils.fromWei(totalSpentFunds + balance, 'ether') + ' eth',
        meta: 'Amount Earned',
        description: 'This is how much money this project has raised so far'
      }, {
        header: _web2.default.utils.fromWei(balance, 'ether') + ' eth',
        meta: 'Current Balance',
        description: 'The balance is how much money this campaign has left to spend'
      }, {
        header: _web2.default.utils.fromWei(totalSpentFunds, 'ether') + ' eth',
        meta: 'Spent Funds',
        description: 'The balance is how much money this campaign has left to spend'
      }, {
        header: minimumContribution + ' wei',
        meta: 'Minimum Sponsor Contribution',
        description: 'To gain \'Sponsor\' status you must contribute at least this much'
      }, {
        header: approversCount,
        meta: 'Number of Sponsors',
        description: 'Number of contributers with \'Sponsor\' status.'
      }, {
        header: requestsCount,
        meta: 'Number of Spending Requests',
        extra: _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          }
        }, _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          }
        }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          }
        }, 'View Requests'))),
        description: 'A manager can create a request to withdraw money from the contract balance. Requests must be approved by the Sponsors'
      }];
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { disabled: true, name: 'arrow left', __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }), ' Back')), _react2.default.createElement(_CampaignDetail2.default, {
        title: this.props.title,
        description: this.props.description,
        percent: this.props.percent,
        manager: this.props.manager,
        address: this.props.address,
        showRequestsButton: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 11, __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 5, __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, minimumContribution: this.props.minimumContribution, __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }))))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var campaign, summary, percent;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //get campaign address from url
                campaign = (0, _campaign2.default)(props.query.address);
                _context.next = 3;
                return campaign.methods.getSummary().call();

              case 3:
                summary = _context.sent;
                percent = Math.floor((summary[4] + summary[9] / _web2.default.utils.toWei(summary[2], 'ether')) * 100);
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

              case 6:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIkNhcmQiLCJHcmlkIiwiQnV0dG9uIiwiU2VnbWVudCIsIkhlYWRlciIsIkNvbnRhaW5lciIsIkljb24iLCJQcm9ncmVzcyIsIndlYjMiLCJDb250cmlidXRlRm9ybSIsIkxpbmsiLCJDYW1wYWlnbkRldGFpbCIsIkNhbXBhaWduU2hvdyIsInByb3BzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImdvYWwiLCJiYWxhbmNlIiwibWFuYWdlciIsIm1pbmltdW1Db250cmlidXRpb24iLCJyZXF1ZXN0c0NvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJ0b3RhbFJlcXVlc3RzQW1vdW50IiwidG90YWxTcGVudEZ1bmRzIiwicGVyY2VudCIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwidXRpbHMiLCJmcm9tV2VpIiwiZXh0cmEiLCJhZGRyZXNzIiwicmVuZGVyQ2FyZHMiLCJjYW1wYWlnbiIsInF1ZXJ5IiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSIsIk1hdGgiLCJmbG9vciIsInRvV2VpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBUyxBQUFNLEFBQU0sQUFBUSxBQUFTLEFBQVEsQUFBVyxBQUFNOztBQUMvRCxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBb0I7Ozs7Ozs7OztJLEFBRXJCOzs7Ozs7Ozs7OztrQ0FzQlU7bUJBYVIsS0FiUSxBQWFIO1VBYkcsQUFFVixlQUZVLEFBRVY7VUFGVSxBQUdWLHFCQUhVLEFBR1Y7VUFIVSxBQUlW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QkFDRSxBQUFDLDBDQUFlLFNBQVMsS0FBQSxBQUFLLE1BQTlCLEFBQW9DLFNBQVMscUJBQXFCLEtBQUEsQUFBSyxNQUF2RSxBQUE2RTtvQkFBN0U7c0JBbkJaLEFBQ0UsQUFXRSxBQUNFLEFBSUUsQUFDRSxBQUNFLEFBUWI7QUFSYTs7Ozs7OzJHQXhHZSxBOzs7OzttQkFDM0I7QUFDTTtBLDJCQUFXLHdCQUFTLE1BQUEsQUFBTSxNQUFmLEFBQXFCLEE7O3VCQUNoQixTQUFBLEFBQVMsUUFBVCxBQUFpQixhQUFhLEEsQUFBOUI7O21CQUFoQjtBLG1DQUNBO0EsMEJBQVUsS0FBQSxBQUFLLE1BQU8sQ0FBQyxRQUFBLEFBQVEsS0FBSyxRQUFBLEFBQVEsS0FBSyxjQUFBLEFBQUssTUFBTCxBQUFXLE1BQU0sUUFBakIsQUFBaUIsQUFBUSxJQUFwRCxBQUEyQixBQUE2QixZLEFBQXBFLEFBQWdGOzt5QkFFdkYsUUFERixBQUNFLEFBQVEsQUFDZjsrQkFBYSxRQUZSLEFBRVEsQUFBUSxBQUNyQjt3QkFBTSxRQUhELEFBR0MsQUFBUSxBQUNkO3VDQUFxQixRQUpoQixBQUlnQixBQUFRLEFBQzdCOzJCQUFTLFFBTEosQUFLSSxBQUFRLEFBQ2pCO2lDQUFlLFFBTlYsQUFNVSxBQUFRLEFBQ3ZCO2tDQUFlLFFBUFYsQUFPVSxBQUFRLEFBQ3ZCOzJCQUFTLFFBUkosQUFRSSxBQUFRLEFBQ2pCO3VDQUFxQixRQVRoQixBQVNnQixBQUFRLEFBQzdCO21DQUFpQixRQVZaLEFBVVksQUFBUSxBQUN6QjsyQkFBUyxNQUFBLEFBQU0sTUFYVixBQVdnQixBQUNyQjsyQkFaSyxBQVlJLEE7QUFaSixBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUHFCLEEsQUFvSDNCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvTmlnZWxXaXRoVGhlQnJpZS9CbG9ja2NoYWluVHV0b3JpYWxzL2tpY2tzdGFydC1ldGhlcmV1bSJ9