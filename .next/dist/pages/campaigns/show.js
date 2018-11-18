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
            lineNumber: 70
          }
        }, _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          }
        }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }, 'View Requests'))),
        description: 'A manager can create a request to withdraw money from the contract balance. Requests must be approved by the Sponsors'
      }];
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, this.props.title), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, this.props.description), _react2.default.createElement('h5', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, 'Project Progress:'), _react2.default.createElement(_semanticUiReact.Progress, { style: { marginTop: -5 }, percent: this.props.percent, color: 'teal', progress: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }), _react2.default.createElement(_semanticUiReact.Grid, { columns: 'two', __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react2.default.createElement('h5', { style: { marginBottom: 2 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, 'This project is managed by:'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, this.props.manager)), _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { floated: 'right', primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, 'View Requests'))))))), _react2.default.createElement(_semanticUiReact.Grid, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIkNhcmQiLCJHcmlkIiwiQnV0dG9uIiwiU2VnbWVudCIsIkhlYWRlciIsIkNvbnRhaW5lciIsIlByb2dyZXNzIiwid2ViMyIsIkNvbnRyaWJ1dGVGb3JtIiwiTGluayIsIkNhbXBhaWduU2hvdyIsInByb3BzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImdvYWwiLCJiYWxhbmNlIiwibWFuYWdlciIsIm1pbmltdW1Db250cmlidXRpb24iLCJyZXF1ZXN0c0NvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJ0b3RhbFJlcXVlc3RzQW1vdW50IiwicGVyY2VudCIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwidXRpbHMiLCJmcm9tV2VpIiwiZXh0cmEiLCJhZGRyZXNzIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwicmVuZGVyQ2FyZHMiLCJjYW1wYWlnbiIsInF1ZXJ5IiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSIsIk1hdGgiLCJmbG9vciIsInRvV2VpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBUyxBQUFNLEFBQU0sQUFBUSxBQUFTLEFBQVEsQUFBVzs7QUFDekQsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBb0I7Ozs7QUFDM0IsQUFBUyxBQUFZOzs7Ozs7O0lBRWYsQTs7Ozs7Ozs7Ozs7a0NBcUJVO21CQVlSLEtBWlEsQUFZSDtVQVpHLEFBRVYsZUFGVSxBQUVWO1VBRlUsQUFHVixxQkFIVSxBQUdWO1VBSFUsQUFJVixjQUpVLEFBSVY7VUFKVSxBQUtWLGlCQUxVLEFBS1Y7VUFMVSxBQU1W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QUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO29CQUFwQjtzQkFBQSxBQUNHO0FBREg7Y0FERixBQUNFLEFBQ0csQUFBSyxBQUVSLGdDQUFDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7b0JBQXBCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLDBDQUFlLFNBQVMsS0FBQSxBQUFLLE1BQTlCLEFBQW9DLFNBQVMscUJBQXFCLEtBQUEsQUFBSyxNQUF2RSxBQUE2RTtvQkFBN0U7c0JBaENaLEFBQ0UsQUF3QkUsQUFDRSxBQUlFLEFBQ0UsQUFDRSxBQVFiO0FBUmE7Ozs7OzsyRyxBQXpHZTs7Ozs7bUJBQzNCO0FBQ007QSwyQkFBVyx3QkFBUyxNQUFBLEFBQU0sTSxBQUFmLEFBQXFCOzt1QkFDaEIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsYUFBakIsQUFBOEIsQTs7bUJBQTlDO0EsbUNBQ0E7QSwwQkFBVSxLQUFBLEFBQUssTUFBUSxRQUFBLEFBQVEsS0FBSyxjQUFBLEFBQUssTUFBTCxBQUFXLE1BQU0sUUFBakIsQUFBaUIsQUFBUSxJQUF2QyxBQUFjLEFBQTZCLFdBQXZELEEsQUFBbUU7O3lCQUUxRSxRQURGLEFBQ0UsQUFBUSxBQUNmOytCQUFhLFFBRlIsQUFFUSxBQUFRLEFBQ3JCO3dCQUFNLFFBSEQsQUFHQyxBQUFRLEFBQ2Q7dUNBQXFCLFFBSmhCLEFBSWdCLEFBQVEsQUFDN0I7MkJBQVMsUUFMSixBQUtJLEFBQVEsQUFDakI7aUNBQWUsUUFOVixBQU1VLEFBQVEsQUFDdkI7a0NBQWUsUUFQVixBQU9VLEFBQVEsQUFDdkI7MkJBQVMsUUFSSixBQVFJLEFBQVEsQUFDakI7dUNBQXFCLENBVGhCLEFBU2dCLEFBQUMsQUFDdEI7MkJBQVMsTUFBQSxBQUFNLE1BVlYsQUFVZ0IsQUFDckI7MkJBWEssQUFXSSxBO0FBWEosQUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVBxQixBLEFBcUgzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL05pZ2VsV2l0aFRoZUJyaWUvQmxvY2tjaGFpblR1dG9yaWFscy9raWNrc3RhcnQtZXRoZXJldW0ifQ==