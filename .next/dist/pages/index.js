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
        return {
          header: _react2.default.createElement(_routes.Link, { route: '/campaigns/' + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            }
          }, _react2.default.createElement('h3', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            }
          }, summary[0]))),
          description: _react2.default.createElement(_semanticUiReact.Container, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            }
          }, _react2.default.createElement('div', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            }
          }, _react2.default.createElement(_semanticUiReact.Progress, { style: { marginTop: 10 }, value: summary[4], total: summary[2], progress: 'percent', color: 'teal', __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            }
          }), _react2.default.createElement('p', { style: { marginTop: -25 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            }
          }, summary[1]))),
          meta: _react2.default.createElement(_semanticUiReact.Container, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            }
          }, _react2.default.createElement('p', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            }
          }, 'Goal: ', summary[2], ' ETH', _react2.default.createElement(_semanticUiReact.Icon, { name: 'ethereum', __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            }
          }))),
          extra: _react2.default.createElement(_routes.Link, { route: '/campaigns/' + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            }
          }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'info circle', __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            }
          }), 'Learn more')),
          fluid: true
        };
      });
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', icon: true, textAlign: 'center', style: { marginTop: 50, marginBottom: 20 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'idea', circular: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }), _react2.default.createElement(_semanticUiReact.Header.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, 'Current Projects')), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        style: { marginLeft: 20 },
        floated: 'right',
        primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'add', __source: {
          fileName: _jsxFileName,
          lineNumber: 73
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY3RvcnkiLCJDYXJkIiwiQnV0dG9uIiwiSWNvbiIsIkhlYWRlciIsIlByb2dyZXNzIiwiQ29udGFpbmVyIiwiTGF5b3V0IiwiTGluayIsIkNhbXBhaWduIiwiQ2FtcGFpZ25JbmRleCIsIml0ZW1zIiwicHJvcHMiLCJzdW1tYXJpZXMiLCJtYXAiLCJzdW1tYXJ5IiwiaW5kZXgiLCJhZGRyZXNzIiwiY2FtcGFpZ25zIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJtYXJnaW5Ub3AiLCJtZXRhIiwiZXh0cmEiLCJmbHVpZCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJyZW5kZXJDYW1wYWlnbnMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJjYWxsIiwiYWxsIiwiY2FtcGFpZ24iLCJnZXRTdW1tYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBUyxBQUFNLEFBQVEsQUFBTSxBQUFRLEFBQVU7O0FBQy9DLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBYzs7Ozs7Ozs7O0ksQUFFZjs7Ozs7Ozs7Ozs7c0NBZWM7bUJBQ2hCOztVQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsVUFBWCxBQUFxQixJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUN6RDtZQUFNLFVBQVUsT0FBQSxBQUFLLE1BQUwsQUFBVyxVQUEzQixBQUFnQixBQUFxQixBQUNyQzs7a0NBRUcsQUFBQyw4QkFBSyx1QkFBTixBQUEyQjt3QkFBM0I7MEJBQUEsQUFDRztBQURIO1dBQUEsa0JBQ0csY0FBQTs7d0JBQUE7MEJBQUEsQUFBRztBQUFIO0FBQUEsNkJBQUcsY0FBQTs7d0JBQUE7MEJBQUEsQUFBSztBQUFMO0FBQUEscUJBSEYsQUFFSixBQUNHLEFBQUcsQUFBSyxBQUFRLEFBR3BCO3VDQUNFLEFBQUM7O3dCQUFEOzBCQUFBLEFBQ0U7QUFERjtBQUFBLFdBQUEsa0JBQ0UsY0FBQTs7d0JBQUE7MEJBQUEsQUFDQTtBQURBO0FBQUEsNkJBQ0EsQUFBQywyQ0FBUyxPQUFPLEVBQUMsV0FBbEIsQUFBaUIsQUFBWSxNQUFLLE9BQU8sUUFBekMsQUFBeUMsQUFBUSxJQUFJLE9BQU8sUUFBNUQsQUFBNEQsQUFBUSxJQUFJLFVBQXhFLEFBQWlGLFdBQVUsT0FBM0YsQUFBaUc7d0JBQWpHOzBCQURBLEFBQ0EsQUFDQTtBQURBOzhCQUNBLGNBQUEsT0FBRyxPQUFPLEVBQUMsV0FBVyxDQUF0QixBQUFVLEFBQWE7d0JBQXZCOzBCQUFBLEFBQTZCO0FBQTdCO3FCQVZDLEFBT0gsQUFDRSxBQUVBLEFBQTZCLEFBQVEsQUFJekM7Z0NBQ0UsQUFBQzs7d0JBQUQ7MEJBQUEsQUFDRTtBQURGO0FBQUEsV0FBQSxrQkFDRSxjQUFBOzt3QkFBQTswQkFBQTtBQUFBO0FBQUEsYUFBVSxrQkFBVixBQUFVLEFBQVEsSUFBTyx3QkFBQSxBQUFDLHVDQUFLLE1BQU4sQUFBVzt3QkFBWDswQkFoQnhCLEFBZUgsQUFDRSxBQUF5QixBQUc3QjtBQUg2Qjs7aUNBSTNCLEFBQUMsOEJBQUssdUJBQU4sQUFBMkI7d0JBQTNCOzBCQUFBLEFBQ0c7QUFESDtXQUFBLGtCQUNHLGNBQUE7O3dCQUFBOzBCQUFBLEFBQ0M7QUFERDtBQUFBLDZCQUNDLEFBQUMsdUNBQUssTUFBTixBQUFXO3dCQUFYOzBCQURELEFBQ0M7QUFBQTtjQXRCRCxBQW9CSCxBQUNHLEFBTUw7aUJBM0JGLEFBQU8sQUEyQkUsQUFFVjtBQTdCUSxBQUNMO0FBSEosQUFBYyxBQWdDZCxPQWhDYzsyQ0FnQ1AsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtvQkFBbkI7c0JBQVAsQUFBTyxBQUNSO0FBRFE7T0FBQTs7Ozs2QkFHQSxBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyx5Q0FBTyxJQUFSLEFBQVcsTUFBSyxNQUFoQixNQUFxQixXQUFyQixBQUErQixVQUFTLE9BQU8sRUFBQyxXQUFELEFBQVksSUFBSSxjQUEvRCxBQUErQyxBQUE4QjtvQkFBN0U7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsdUNBQUssTUFBTixBQUFXLFFBQU8sVUFBbEI7b0JBQUE7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0MsY0FBRCx3QkFBQSxBQUFROztvQkFBUjtzQkFBQTtBQUFBO0FBQUEsU0FISixBQUNFLEFBRUUsQUFFRixzQ0FBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQztlQUNRLEVBQUMsWUFEVixBQUNTLEFBQWEsQUFDcEI7aUJBRkYsQUFFVSxBQUNSO2lCQUhGO29CQUFBO3NCQUFBLEFBSUU7QUFKRjtBQUNFLHlCQUdBLEFBQUMsdUNBQUssTUFBTixBQUFXO29CQUFYO3NCQUpGLEFBSUU7QUFBQTtVQVhSLEFBS0UsQUFDRSxBQUNFLEFBU0gseUJBbEJQLEFBQ0UsQUFDRSxBQWdCRyxBQUFLLEFBSWI7OztTQXpFRDs7QUFDQTtBQUNBOzs7Ozs7Ozs7O3VCQUUwQixrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsdUJBQWhCLEFBQXVDLEE7O21CQUF6RDtBOzt5Q0FDa0IsQUFBUSxjQUM5QixBQUFVLElBQUksbUJBQVcsQUFDdkI7c0JBQU0sV0FBVyx3QkFBakIsQUFBaUIsQUFBUyxBQUMxQjt5QkFBTyxTQUFBLEFBQVMsUUFBVCxBQUFpQixhQUF4QixBQUFPLEFBQThCLEFBQ3RDO0FBSEQsQSxBQURzQixpQkFDdEIsQ0FEc0I7O21CQUFsQjtBO2lEQU1DLEVBQUUsV0FBRixXQUFhLFcsQUFBYjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVppQixBLEFBNkU1Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9OaWdlbFdpdGhUaGVCcmllL0Jsb2NrY2hhaW5UdXRvcmlhbHMva2lja3N0YXJ0LWV0aGVyZXVtIn0=