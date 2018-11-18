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
          percent = _props.percent;

      var items = [{
        header: goal + ' eth',
        meta: 'Fundraising goal',
        description: 'This is the amount the manager hopes to raise for their project',
        style: { overflowWrap: 'break-word' }
      }, {
        header: _web2.default.utils.fromWei(balance, 'ether') + ' eth',
        meta: 'Current Amount Funded',
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
            lineNumber: 71
          }
        }, _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        }, 'View Requests'))),
        description: 'A manager can create a request to withdraw money from the contract balance. Requests must be approved by the Sponsors'
      }];
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement(_CampaignDetail2.default, {
        title: this.props.title,
        description: this.props.description,
        percent: this.props.percent,
        manager: this.props.manager,
        address: this.props.address,
        showRequestsButton: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 11, __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 5, __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, minimumContribution: this.props.minimumContribution, __source: {
          fileName: _jsxFileName,
          lineNumber: 100
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
                percent = Math.floor(summary[4] / _web2.default.utils.toWei(summary[2], 'ether') * 100);
                return _context.abrupt('return', {
                  title: summary[0],
                  description: summary[1],
                  goal: summary[2],
                  minimumContribution: summary[3],
                  balance: summary[4],
                  requestsCount: summary[5],
                  approversCount: summary[6],
                  manager: summary[7],
                  totalRequestsAmount: [8],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIkNhcmQiLCJHcmlkIiwiQnV0dG9uIiwiU2VnbWVudCIsIkhlYWRlciIsIkNvbnRhaW5lciIsIlByb2dyZXNzIiwid2ViMyIsIkNvbnRyaWJ1dGVGb3JtIiwiTGluayIsIkNhbXBhaWduRGV0YWlsIiwiQ2FtcGFpZ25TaG93IiwicHJvcHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZ29hbCIsImJhbGFuY2UiLCJtYW5hZ2VyIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsInJlcXVlc3RzQ291bnQiLCJhcHByb3ZlcnNDb3VudCIsInRvdGFsUmVxdWVzdHNBbW91bnQiLCJwZXJjZW50IiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJ1dGlscyIsImZyb21XZWkiLCJleHRyYSIsImFkZHJlc3MiLCJyZW5kZXJDYXJkcyIsImNhbXBhaWduIiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5IiwiTWF0aCIsImZsb29yIiwidG9XZWkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFTLEFBQU0sQUFBTSxBQUFRLEFBQVMsQUFBUSxBQUFXOztBQUN6RCxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBb0I7Ozs7Ozs7OztJLEFBRXJCOzs7Ozs7Ozs7OztrQ0FxQlU7bUJBWVIsS0FaUSxBQVlIO1VBWkcsQUFFVixlQUZVLEFBRVY7VUFGVSxBQUdWLHFCQUhVLEFBR1Y7VUFIVSxBQUlWLGNBSlUsQUFJVjtVQUpVLEFBS1YsaUJBTFUsQUFLVjtVQUxVLEFBTVYsaUJBTlUsQUFNVjtVQU5VLEFBT1YsNkJBUFUsQUFPVjtVQVBVLEFBUVYsdUJBUlUsQUFRVjtVQVJVLEFBU1Ysd0JBVFUsQUFTVjtVQVRVLEFBVVYsNkJBVlUsQUFVVjtVQVZVLEFBV1YsaUJBWFUsQUFXVixBQUdGOztVQUFNO2dCQUVNLE9BRFYsQUFDaUIsQUFDZjtjQUZGLEFBRVEsQUFDTjtxQkFIRixBQUdlLEFBQ2I7ZUFBTyxFQUFFLGNBTEMsQUFDWixBQUlTLEFBQWdCO0FBSnpCLEFBQ0UsT0FGVTtnQkFRRixjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsU0FBbkIsQUFBNEIsV0FEdEMsQUFDaUQsQUFDL0M7Y0FGRixBQUVRLEFBQ047cUJBVlUsQUFPWixBQUdlO0FBSGYsQUFDRTtnQkFLUSxzQkFEVixBQUNnQyxBQUM5QjtjQUZGLEFBRVEsQUFDTjtxQkFmVSxBQVlaLEFBR2U7QUFIZixBQUNFO2dCQUlGLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQkFwQlUsQUFpQlosQUFHZTtBQUhmLEFBQ0U7Z0JBSUYsQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOOytCQUNFLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxVQUF0QztzQkFBQTt3QkFBQSxBQUNFO0FBREY7U0FBQSxrQkFDRSxjQUFBOztzQkFBQTt3QkFBQSxBQUNBO0FBREE7QUFBQSwyQkFDQSxBQUFDLHlDQUFPLFNBQVI7c0JBQUE7d0JBQUE7QUFBQTtXQU5OLEFBSUksQUFDRSxBQUNBLEFBSUo7cUJBaENKLEFBQWMsQUFzQlosQUFVZSxBQUdqQjtBQWJFLEFBQ0U7MkNBWUcsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtvQkFBbkI7c0JBQVAsQUFBTyxBQUNSO0FBRFE7T0FBQTs7Ozs2QkFHQSxBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQztlQUNRLEtBQUEsQUFBSyxNQURkLEFBQ29CLEFBQ2xCO3FCQUFhLEtBQUEsQUFBSyxNQUZwQixBQUUwQixBQUN4QjtpQkFBUyxLQUFBLEFBQUssTUFIaEIsQUFHc0IsQUFDcEI7aUJBQVMsS0FBQSxBQUFLLE1BSmhCLEFBSXNCLEFBQ3BCO2lCQUFTLEtBQUEsQUFBSyxNQUxoQixBQUtzQixBQUNwQjs0QkFORixBQU1zQjtvQkFOdEI7c0JBREYsQUFDRSxBQU9BO0FBUEE7QUFDRSwwQkFNRixBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7b0JBQXBCO3NCQUFBLEFBQ0c7QUFESDtjQURGLEFBQ0UsQUFDRyxBQUFLLEFBRVIsZ0NBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtvQkFBcEI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsMENBQWUsU0FBUyxLQUFBLEFBQUssTUFBOUIsQUFBb0MsU0FBUyxxQkFBcUIsS0FBQSxBQUFLLE1BQXZFLEFBQTZFO29CQUE3RTtzQkFoQlosQUFDRSxBQVFFLEFBQ0UsQUFJRSxBQUNFLEFBQ0UsQUFRYjtBQVJhOzs7Ozs7MkcsQUF6RmU7Ozs7O21CQUMzQjtBQUNNO0EsMkJBQVcsd0JBQVMsTUFBQSxBQUFNLE1BQWYsQUFBcUIsQTs7dUJBQ2hCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGEsQUFBakIsQUFBOEI7O21CQUE5QztBLG1DQUNBO0EsMEJBQVUsS0FBQSxBQUFLLE1BQVEsUUFBQSxBQUFRLEtBQUssY0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFNLFFBQWpCLEFBQWlCLEFBQVEsSUFBdkMsQUFBYyxBQUE2QixXQUF2RCxBQUFtRSxBOzt5QkFFMUUsUUFERixBQUNFLEFBQVEsQUFDZjsrQkFBYSxRQUZSLEFBRVEsQUFBUSxBQUNyQjt3QkFBTSxRQUhELEFBR0MsQUFBUSxBQUNkO3VDQUFxQixRQUpoQixBQUlnQixBQUFRLEFBQzdCOzJCQUFTLFFBTEosQUFLSSxBQUFRLEFBQ2pCO2lDQUFlLFFBTlYsQUFNVSxBQUFRLEFBQ3ZCO2tDQUFlLFFBUFYsQUFPVSxBQUFRLEFBQ3ZCOzJCQUFTLFFBUkosQUFRSSxBQUFRLEFBQ2pCO3VDQUFxQixDQVRoQixBQVNnQixBQUFDLEFBQ3RCOzJCQUFTLE1BQUEsQUFBTSxNQVZWLEFBVWdCLEFBQ3JCOzJCQVhLLEFBV0ksQTtBQVhKLEFBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFQcUIsQSxBQXFHM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9OaWdlbFdpdGhUaGVCcmllL0Jsb2NrY2hhaW5UdXRvcmlhbHMva2lja3N0YXJ0LWV0aGVyZXVtIn0=