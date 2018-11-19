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

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\NigelWithTheBrie\\BlockchainTutorials\\kickstart-ethereum\\pages\\index.js?entry';


var CampaignIndex = function (_Component) {
  (0, _inherits3.default)(CampaignIndex, _Component);

  function CampaignIndex() {
    (0, _classCallCheck3.default)(this, CampaignIndex);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignIndex, [{
    key: 'renderCampaigns',
    value: function renderCampaigns() {
      var _this2 = this;

      var items = this.props.summaries.map(function (summary, index) {
        var address = _this2.props.campaigns[index];
        var percent = Math.floor((summary[4] + summary[9] / _web2.default.utils.toWei(summary[2], 'ether')) * 100);
        return {
          key: index,
          header: _react2.default.createElement(_routes.Link, { route: '/campaigns/' + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          }, _react2.default.createElement('h3', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          }, summary[0]))),
          description: _react2.default.createElement(_semanticUiReact.Container, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            }
          }, _react2.default.createElement('div', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          }, _react2.default.createElement(_semanticUiReact.Progress, { style: { marginTop: 10 }, percent: percent, progress: true, color: 'teal', __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          }), _react2.default.createElement('p', { style: { marginTop: -25 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            }
          }, summary[1]))),
          meta: _react2.default.createElement(_semanticUiReact.Container, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            }
          }, _react2.default.createElement('p', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            }
          }, 'Goal: ', summary[2], ' ETH', _react2.default.createElement(_semanticUiReact.Icon, { name: 'ethereum', __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            }
          }))),
          extra: _react2.default.createElement(_routes.Link, { route: '/campaigns/' + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            }
          }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'info circle', __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            }
          }), 'Learn more')),
          fluid: true
        };
      });
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', icon: true, textAlign: 'center', style: { marginTop: 50, marginBottom: 20 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'idea', circular: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }), _react2.default.createElement(_semanticUiReact.Header.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, 'Current Projects')), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        style: { marginLeft: 20 },
        floated: 'right',
        primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'add', __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }), 'Start Project'))), this.renderCampaigns()));
    }
  }], [{
    key: 'getInitialProps',

    //NextJs exclusive method -- called when loading code on Next server
    //Ideal place for data loading info that will need to be displayed on the screen
    //static (req. by NextJs) allows Next to run the method without having to render the component
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var campaigns, summaries;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeployedCampaigns().call();

              case 2:
                campaigns = _context.sent;
                _context.next = 5;
                return _promise2.default.all(campaigns.map(function (address) {
                  var campaign = (0, _campaign2.default)(address);
                  return campaign.methods.getSummary().call();
                }));

              case 5:
                summaries = _context.sent;
                return _context.abrupt('return', { campaigns: campaigns, summaries: summaries });

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY3RvcnkiLCJDYXJkIiwiQnV0dG9uIiwiSWNvbiIsIkhlYWRlciIsIlByb2dyZXNzIiwiQ29udGFpbmVyIiwiTGF5b3V0IiwiTGluayIsIkNhbXBhaWduIiwid2ViMyIsIkNhbXBhaWduSW5kZXgiLCJpdGVtcyIsInByb3BzIiwic3VtbWFyaWVzIiwibWFwIiwic3VtbWFyeSIsImluZGV4IiwiYWRkcmVzcyIsImNhbXBhaWducyIsInBlcmNlbnQiLCJNYXRoIiwiZmxvb3IiLCJ1dGlscyIsInRvV2VpIiwia2V5IiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJtYXJnaW5Ub3AiLCJtZXRhIiwiZXh0cmEiLCJmbHVpZCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJyZW5kZXJDYW1wYWlnbnMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJjYWxsIiwiYWxsIiwiY2FtcGFpZ24iLCJnZXRTdW1tYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBUyxBQUFNLEFBQVEsQUFBTSxBQUFRLEFBQVU7O0FBQy9DLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7Ozs7OztJLEFBRVg7Ozs7Ozs7Ozs7O3NDQWVjO21CQUNoQjs7VUFBTSxhQUFRLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDekQ7WUFBTSxVQUFVLE9BQUEsQUFBSyxNQUFMLEFBQVcsVUFBM0IsQUFBZ0IsQUFBcUIsQUFDckM7WUFBTSxVQUFVLEtBQUEsQUFBSyxNQUFPLENBQUMsUUFBQSxBQUFRLEtBQUssUUFBQSxBQUFRLEtBQUssY0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFNLFFBQWpCLEFBQWlCLEFBQVEsSUFBcEQsQUFBMkIsQUFBNkIsWUFBcEYsQUFBZ0IsQUFBZ0YsQUFDaEc7O2VBQU8sQUFDQSxBQUNMO2tDQUNDLEFBQUMsOEJBQUssdUJBQU4sQUFBMkI7d0JBQTNCOzBCQUFBLEFBQ0c7QUFESDtXQUFBLGtCQUNHLGNBQUE7O3dCQUFBOzBCQUFBLEFBQUc7QUFBSDtBQUFBLDZCQUFHLGNBQUE7O3dCQUFBOzBCQUFBLEFBQUs7QUFBTDtBQUFBLHFCQUpGLEFBR0osQUFDRyxBQUFHLEFBQUssQUFBUSxBQUdwQjt1Q0FDRSxBQUFDOzt3QkFBRDswQkFBQSxBQUNFO0FBREY7QUFBQSxXQUFBLGtCQUNFLGNBQUE7O3dCQUFBOzBCQUFBLEFBQ0E7QUFEQTtBQUFBLDZCQUNBLEFBQUMsMkNBQVMsT0FBTyxFQUFDLFdBQWxCLEFBQWlCLEFBQVksTUFBSyxTQUFsQyxBQUEyQyxTQUFTLFVBQXBELE1BQTZELE9BQTdELEFBQW1FO3dCQUFuRTswQkFEQSxBQUNBLEFBQ0E7QUFEQTs4QkFDQSxjQUFBLE9BQUcsT0FBTyxFQUFDLFdBQVcsQ0FBdEIsQUFBVSxBQUFhO3dCQUF2QjswQkFBQSxBQUE2QjtBQUE3QjtxQkFYQyxBQVFILEFBQ0UsQUFFQSxBQUE2QixBQUFRLEFBSXpDO2dDQUNFLEFBQUM7O3dCQUFEOzBCQUFBLEFBQ0U7QUFERjtBQUFBLFdBQUEsa0JBQ0UsY0FBQTs7d0JBQUE7MEJBQUE7QUFBQTtBQUFBLGFBQVUsa0JBQVYsQUFBVSxBQUFRLElBQU8sd0JBQUEsQUFBQyx1Q0FBSyxNQUFOLEFBQVc7d0JBQVg7MEJBakJ4QixBQWdCSCxBQUNFLEFBQXlCLEFBRzdCO0FBSDZCOztpQ0FJM0IsQUFBQyw4QkFBSyx1QkFBTixBQUEyQjt3QkFBM0I7MEJBQUEsQUFDRztBQURIO1dBQUEsa0JBQ0csY0FBQTs7d0JBQUE7MEJBQUEsQUFDQztBQUREO0FBQUEsNkJBQ0MsQUFBQyx1Q0FBSyxNQUFOLEFBQVc7d0JBQVg7MEJBREQsQUFDQztBQUFBO2NBdkJELEFBcUJILEFBQ0csQUFNTDtpQkE1QkYsQUFBTyxBQTRCRSxBQUVWO0FBOUJRLEFBQ0w7QUFKSixBQUFjLEFBa0NkLE9BbENjOzJDQWtDUCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBUCxBQUFPLEFBQ1I7QUFEUTtPQUFBOzs7OzZCQUdBLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHlDQUFPLElBQVIsQUFBVyxNQUFLLE1BQWhCLE1BQXFCLFdBQXJCLEFBQStCLFVBQVMsT0FBTyxFQUFDLFdBQUQsQUFBWSxJQUFJLGNBQS9ELEFBQStDLEFBQThCO29CQUE3RTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyx1Q0FBSyxNQUFOLEFBQVcsUUFBTyxVQUFsQjtvQkFBQTtzQkFERixBQUNFLEFBQ0E7QUFEQTswQkFDQyxjQUFELHdCQUFBLEFBQVE7O29CQUFSO3NCQUFBO0FBQUE7QUFBQSxTQUhKLEFBQ0UsQUFFRSxBQUVGLHNDQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDO2VBQ1EsRUFBQyxZQURWLEFBQ1MsQUFBYSxBQUNwQjtpQkFGRixBQUVVLEFBQ1I7aUJBSEY7b0JBQUE7c0JBQUEsQUFJRTtBQUpGO0FBQ0UseUJBR0EsQUFBQyx1Q0FBSyxNQUFOLEFBQVc7b0JBQVg7c0JBSkYsQUFJRTtBQUFBO1VBWFIsQUFLRSxBQUNFLEFBQ0UsQUFTSCx5QkFsQlAsQUFDRSxBQUNFLEFBZ0JHLEFBQUssQUFJYjs7O1NBM0VEOztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7dUJBRTBCLGtCQUFBLEFBQVEsUUFBUixBQUFnQix1QkFBaEIsQUFBdUMsQTs7bUJBQXpEO0E7O3lDQUNrQixBQUFRLGNBQzlCLEFBQVUsSUFBSSxtQkFBVyxBQUN2QjtzQkFBTSxXQUFXLHdCQUFqQixBQUFpQixBQUFTLEFBQzFCO3lCQUFPLFNBQUEsQUFBUyxRQUFULEFBQWlCLGFBQXhCLEFBQU8sQUFBOEIsQUFDdEM7QSxBQUpxQixBQUN0QixpQkFBQSxDQURzQjs7bUJBQWxCO0E7aURBTUMsRUFBRSxXQUFGLFdBQWEsVyxBQUFiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWmlCLEEsQUErRTVCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL05pZ2VsV2l0aFRoZUJyaWUvQmxvY2tjaGFpblR1dG9yaWFscy9raWNrc3RhcnQtZXRoZXJldW0ifQ==