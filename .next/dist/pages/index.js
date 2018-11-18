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
        var percent = Math.floor(summary[4] / _web2.default.utils.toWei(summary[2], 'ether') * 100);
        return {
          header: _react2.default.createElement(_routes.Link, { route: '/campaigns/' + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            }
          }, _react2.default.createElement('h3', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            }
          }, summary[0]))),
          description: _react2.default.createElement(_semanticUiReact.Container, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            }
          }, _react2.default.createElement('div', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            }
          }, _react2.default.createElement(_semanticUiReact.Progress, { style: { marginTop: 10 }, percent: percent, progress: true, color: 'teal', __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          }), _react2.default.createElement('p', { style: { marginTop: -25 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          }, summary[1]))),
          meta: _react2.default.createElement(_semanticUiReact.Container, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            }
          }, _react2.default.createElement('p', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            }
          }, 'Goal: ', summary[2], ' ETH', _react2.default.createElement(_semanticUiReact.Icon, { name: 'ethereum', __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            }
          }))),
          extra: _react2.default.createElement(_routes.Link, { route: '/campaigns/' + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            }
          }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'info circle', __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            }
          }), 'Learn more')),
          fluid: true
        };
      });
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', icon: true, textAlign: 'center', style: { marginTop: 50, marginBottom: 20 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'idea', circular: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }), _react2.default.createElement(_semanticUiReact.Header.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, 'Current Projects')), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        style: { marginLeft: 20 },
        floated: 'right',
        primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'add', __source: {
          fileName: _jsxFileName,
          lineNumber: 75
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY3RvcnkiLCJDYXJkIiwiQnV0dG9uIiwiSWNvbiIsIkhlYWRlciIsIlByb2dyZXNzIiwiQ29udGFpbmVyIiwiTGF5b3V0IiwiTGluayIsIkNhbXBhaWduIiwid2ViMyIsIkNhbXBhaWduSW5kZXgiLCJpdGVtcyIsInByb3BzIiwic3VtbWFyaWVzIiwibWFwIiwic3VtbWFyeSIsImluZGV4IiwiYWRkcmVzcyIsImNhbXBhaWducyIsInBlcmNlbnQiLCJNYXRoIiwiZmxvb3IiLCJ1dGlscyIsInRvV2VpIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJtYXJnaW5Ub3AiLCJtZXRhIiwiZXh0cmEiLCJmbHVpZCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJyZW5kZXJDYW1wYWlnbnMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJjYWxsIiwiYWxsIiwiY2FtcGFpZ24iLCJnZXRTdW1tYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBUyxBQUFNLEFBQVEsQUFBTSxBQUFRLEFBQVU7O0FBQy9DLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7Ozs7OztJQUVYLEE7Ozs7Ozs7Ozs7O3NDQWVjO21CQUNoQjs7VUFBTSxhQUFRLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDekQ7WUFBTSxVQUFVLE9BQUEsQUFBSyxNQUFMLEFBQVcsVUFBM0IsQUFBZ0IsQUFBcUIsQUFDckM7WUFBTSxVQUFVLEtBQUEsQUFBSyxNQUFRLFFBQUEsQUFBUSxLQUFLLGNBQUEsQUFBSyxNQUFMLEFBQVcsTUFBTSxRQUFqQixBQUFpQixBQUFRLElBQXZDLEFBQWMsQUFBNkIsV0FBdkUsQUFBZ0IsQUFBbUUsQUFDbkY7O2tDQUVHLEFBQUMsOEJBQUssdUJBQU4sQUFBMkI7d0JBQTNCOzBCQUFBLEFBQ0c7QUFESDtXQUFBLGtCQUNHLGNBQUE7O3dCQUFBOzBCQUFBLEFBQUc7QUFBSDtBQUFBLDZCQUFHLGNBQUE7O3dCQUFBOzBCQUFBLEFBQUs7QUFBTDtBQUFBLHFCQUhGLEFBRUosQUFDRyxBQUFHLEFBQUssQUFBUSxBQUdwQjt1Q0FDRSxBQUFDOzt3QkFBRDswQkFBQSxBQUNFO0FBREY7QUFBQSxXQUFBLGtCQUNFLGNBQUE7O3dCQUFBOzBCQUFBLEFBQ0E7QUFEQTtBQUFBLDZCQUNBLEFBQUMsMkNBQVMsT0FBTyxFQUFDLFdBQWxCLEFBQWlCLEFBQVksTUFBSyxTQUFsQyxBQUEyQyxTQUFTLFVBQXBELE1BQTZELE9BQTdELEFBQW1FO3dCQUFuRTswQkFEQSxBQUNBLEFBQ0E7QUFEQTs4QkFDQSxjQUFBLE9BQUcsT0FBTyxFQUFDLFdBQVcsQ0FBdEIsQUFBVSxBQUFhO3dCQUF2QjswQkFBQSxBQUE2QjtBQUE3QjtxQkFWQyxBQU9ILEFBQ0UsQUFFQSxBQUE2QixBQUFRLEFBSXpDO2dDQUNFLEFBQUM7O3dCQUFEOzBCQUFBLEFBQ0U7QUFERjtBQUFBLFdBQUEsa0JBQ0UsY0FBQTs7d0JBQUE7MEJBQUE7QUFBQTtBQUFBLGFBQVUsa0JBQVYsQUFBVSxBQUFRLElBQU8sd0JBQUEsQUFBQyx1Q0FBSyxNQUFOLEFBQVc7d0JBQVg7MEJBaEJ4QixBQWVILEFBQ0UsQUFBeUIsQUFHN0I7QUFINkI7O2lDQUkzQixBQUFDLDhCQUFLLHVCQUFOLEFBQTJCO3dCQUEzQjswQkFBQSxBQUNHO0FBREg7V0FBQSxrQkFDRyxjQUFBOzt3QkFBQTswQkFBQSxBQUNDO0FBREQ7QUFBQSw2QkFDQyxBQUFDLHVDQUFLLE1BQU4sQUFBVzt3QkFBWDswQkFERCxBQUNDO0FBQUE7Y0F0QkQsQUFvQkgsQUFDRyxBQU1MO2lCQTNCRixBQUFPLEFBMkJFLEFBRVY7QUE3QlEsQUFDTDtBQUpKLEFBQWMsQUFpQ2QsT0FqQ2M7MkNBaUNQLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQUFQLEFBQU8sQUFDUjtBQURRO09BQUE7Ozs7NkJBR0EsQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMseUNBQU8sSUFBUixBQUFXLE1BQUssTUFBaEIsTUFBcUIsV0FBckIsQUFBK0IsVUFBUyxPQUFPLEVBQUMsV0FBRCxBQUFZLElBQUksY0FBL0QsQUFBK0MsQUFBOEI7b0JBQTdFO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHVDQUFLLE1BQU4sQUFBVyxRQUFPLFVBQWxCO29CQUFBO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBCQUNDLGNBQUQsd0JBQUEsQUFBUTs7b0JBQVI7c0JBQUE7QUFBQTtBQUFBLFNBSEosQUFDRSxBQUVFLEFBRUYsc0NBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7b0JBQVo7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7ZUFDUSxFQUFDLFlBRFYsQUFDUyxBQUFhLEFBQ3BCO2lCQUZGLEFBRVUsQUFDUjtpQkFIRjtvQkFBQTtzQkFBQSxBQUlFO0FBSkY7QUFDRSx5QkFHQSxBQUFDLHVDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFKRixBQUlFO0FBQUE7VUFYUixBQUtFLEFBQ0UsQUFDRSxBQVNILHlCQWxCUCxBQUNFLEFBQ0UsQUFnQkcsQUFBSyxBQUliOzs7U0ExRUQ7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozt1QkFFMEIsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLHVCQUFoQixBLEFBQXVDOzttQkFBekQ7QTs7eUNBQ2tCLEFBQVEsY0FDOUIsQUFBVSxJQUFJLG1CQUFXLEFBQ3ZCO3NCQUFNLFdBQVcsd0JBQWpCLEFBQWlCLEFBQVMsQUFDMUI7eUJBQU8sU0FBQSxBQUFTLFFBQVQsQUFBaUIsYUFBeEIsQUFBTyxBQUE4QixBQUN0QztBLEFBSnFCLEFBQ3RCLGlCQUFBLENBRHNCOzttQkFBbEI7QTtpREFNQyxFQUFFLFdBQUYsV0FBYSxXLEFBQWI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFaaUIsQSxBQThFNUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvTmlnZWxXaXRoVGhlQnJpZS9CbG9ja2NoYWluVHV0b3JpYWxzL2tpY2tzdGFydC1ldGhlcmV1bSJ9