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
        var totalRaised = parseInt(summary[4]) + parseInt(summary[9]);
        var percent = Math.floor(totalRaised / _web2.default.utils.toWei(summary[2], 'ether') * 100);
        return {
          key: index,
          header: _react2.default.createElement(_routes.Link, { route: '/campaigns/' + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            }
          }, _react2.default.createElement('h3', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            }
          }, summary[0]))),
          description: _react2.default.createElement(_semanticUiReact.Container, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          }, _react2.default.createElement('div', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          }, _react2.default.createElement(_semanticUiReact.Progress, { style: { marginTop: 10 }, percent: percent, progress: true, color: 'teal', __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            }
          }), _react2.default.createElement('p', { style: { marginTop: -25 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            }
          }, summary[1]))),
          meta: _react2.default.createElement(_semanticUiReact.Container, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            }
          }, _react2.default.createElement('p', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            }
          }, 'Goal: ', summary[2], ' ETH', _react2.default.createElement(_semanticUiReact.Icon, { name: 'ethereum', __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            }
          }))),
          extra: _react2.default.createElement(_routes.Link, { route: '/campaigns/' + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            }
          }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'info circle', __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            }
          }), 'Learn more')),
          fluid: true
        };
      });
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', icon: true, textAlign: 'center', style: { marginTop: 50, marginBottom: 20 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'idea', circular: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }), _react2.default.createElement(_semanticUiReact.Header.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, 'Current Projects')), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        style: { marginLeft: 20 },
        floated: 'right',
        primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'add', __source: {
          fileName: _jsxFileName,
          lineNumber: 77
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY3RvcnkiLCJDYXJkIiwiQnV0dG9uIiwiSWNvbiIsIkhlYWRlciIsIlByb2dyZXNzIiwiQ29udGFpbmVyIiwiTGF5b3V0IiwiTGluayIsIkNhbXBhaWduIiwid2ViMyIsIkNhbXBhaWduSW5kZXgiLCJpdGVtcyIsInByb3BzIiwic3VtbWFyaWVzIiwibWFwIiwic3VtbWFyeSIsImluZGV4IiwiYWRkcmVzcyIsImNhbXBhaWducyIsInRvdGFsUmFpc2VkIiwicGFyc2VJbnQiLCJwZXJjZW50IiwiTWF0aCIsImZsb29yIiwidXRpbHMiLCJ0b1dlaSIsImtleSIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwibWFyZ2luVG9wIiwibWV0YSIsImV4dHJhIiwiZmx1aWQiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5MZWZ0IiwicmVuZGVyQ2FtcGFpZ25zIiwibWV0aG9kcyIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwiY2FsbCIsImFsbCIsImNhbXBhaWduIiwiZ2V0U3VtbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQVMsQUFBTSxBQUFRLEFBQU0sQUFBUSxBQUFVOztBQUMvQyxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFZOztBQUNyQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7Ozs7Ozs7SSxBQUVYOzs7Ozs7Ozs7OztzQ0FlYzttQkFDaEI7O1VBQU0sYUFBUSxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFVLEFBQ3pEO1lBQU0sVUFBVSxPQUFBLEFBQUssTUFBTCxBQUFXLFVBQTNCLEFBQWdCLEFBQXFCLEFBQ3JDO1lBQU0sY0FBZSxTQUFTLFFBQVYsQUFBQyxBQUFTLEFBQVEsTUFBUSxTQUFTLFFBQXZELEFBQThDLEFBQVMsQUFBUSxBQUMvRDtZQUFNLFVBQVUsS0FBQSxBQUFLLE1BQU8sY0FBYyxjQUFBLEFBQUssTUFBTCxBQUFXLE1BQU0sUUFBakIsQUFBaUIsQUFBUSxJQUF4QyxBQUFlLEFBQTZCLFdBQXZFLEFBQWdCLEFBQW1FLEFBQ25GOztlQUFPLEFBQ0EsQUFDTDtrQ0FDQyxBQUFDLDhCQUFLLHVCQUFOLEFBQTJCO3dCQUEzQjswQkFBQSxBQUNHO0FBREg7V0FBQSxrQkFDRyxjQUFBOzt3QkFBQTswQkFBQSxBQUFHO0FBQUg7QUFBQSw2QkFBRyxjQUFBOzt3QkFBQTswQkFBQSxBQUFLO0FBQUw7QUFBQSxxQkFKRixBQUdKLEFBQ0csQUFBRyxBQUFLLEFBQVEsQUFHcEI7dUNBQ0UsQUFBQzs7d0JBQUQ7MEJBQUEsQUFDRTtBQURGO0FBQUEsV0FBQSxrQkFDRSxjQUFBOzt3QkFBQTswQkFBQSxBQUNBO0FBREE7QUFBQSw2QkFDQSxBQUFDLDJDQUFTLE9BQU8sRUFBQyxXQUFsQixBQUFpQixBQUFZLE1BQUssU0FBbEMsQUFBMkMsU0FBUyxVQUFwRCxNQUE2RCxPQUE3RCxBQUFtRTt3QkFBbkU7MEJBREEsQUFDQSxBQUNBO0FBREE7OEJBQ0EsY0FBQSxPQUFHLE9BQU8sRUFBQyxXQUFXLENBQXRCLEFBQVUsQUFBYTt3QkFBdkI7MEJBQUEsQUFBNkI7QUFBN0I7cUJBWEMsQUFRSCxBQUNFLEFBRUEsQUFBNkIsQUFBUSxBQUl6QztnQ0FDRSxBQUFDOzt3QkFBRDswQkFBQSxBQUNFO0FBREY7QUFBQSxXQUFBLGtCQUNFLGNBQUE7O3dCQUFBOzBCQUFBO0FBQUE7QUFBQSxhQUFVLGtCQUFWLEFBQVUsQUFBUSxJQUFPLHdCQUFBLEFBQUMsdUNBQUssTUFBTixBQUFXO3dCQUFYOzBCQWpCeEIsQUFnQkgsQUFDRSxBQUF5QixBQUc3QjtBQUg2Qjs7aUNBSTNCLEFBQUMsOEJBQUssdUJBQU4sQUFBMkI7d0JBQTNCOzBCQUFBLEFBQ0c7QUFESDtXQUFBLGtCQUNHLGNBQUE7O3dCQUFBOzBCQUFBLEFBQ0M7QUFERDtBQUFBLDZCQUNDLEFBQUMsdUNBQUssTUFBTixBQUFXO3dCQUFYOzBCQURELEFBQ0M7QUFBQTtjQXZCRCxBQXFCSCxBQUNHLEFBTUw7aUJBNUJGLEFBQU8sQUE0QkUsQUFFVjtBQTlCUSxBQUNMO0FBTEosQUFBYyxBQW1DZCxPQW5DYzsyQ0FtQ1AsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtvQkFBbkI7c0JBQVAsQUFBTyxBQUNSO0FBRFE7T0FBQTs7Ozs2QkFHQSxBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyx5Q0FBTyxJQUFSLEFBQVcsTUFBSyxNQUFoQixNQUFxQixXQUFyQixBQUErQixVQUFTLE9BQU8sRUFBQyxXQUFELEFBQVksSUFBSSxjQUEvRCxBQUErQyxBQUE4QjtvQkFBN0U7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsdUNBQUssTUFBTixBQUFXLFFBQU8sVUFBbEI7b0JBQUE7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0MsY0FBRCx3QkFBQSxBQUFROztvQkFBUjtzQkFBQTtBQUFBO0FBQUEsU0FISixBQUNFLEFBRUUsQUFFRixzQ0FBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQztlQUNRLEVBQUMsWUFEVixBQUNTLEFBQWEsQUFDcEI7aUJBRkYsQUFFVSxBQUNSO2lCQUhGO29CQUFBO3NCQUFBLEFBSUU7QUFKRjtBQUNFLHlCQUdBLEFBQUMsdUNBQUssTUFBTixBQUFXO29CQUFYO3NCQUpGLEFBSUU7QUFBQTtVQVhSLEFBS0UsQUFDRSxBQUNFLEFBU0gseUJBbEJQLEFBQ0UsQUFDRSxBQWdCRyxBQUFLLEFBSWI7OztTQTVFRDs7QUFDQTtBQUNBOzs7Ozs7Ozs7O3VCQUUwQixrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsdUJBQWhCLEFBQXVDLEE7O21CQUF6RDtBOzt5Q0FDa0IsQUFBUSxjQUM5QixBQUFVLElBQUksbUJBQVcsQUFDdkI7c0JBQU0sV0FBVyx3QkFBakIsQUFBaUIsQUFBUyxBQUMxQjt5QkFBTyxTQUFBLEFBQVMsUUFBVCxBQUFpQixhQUF4QixBQUFPLEFBQThCLEFBQ3RDO0EsQUFKcUIsQUFDdEIsaUJBQUEsQ0FEc0I7O21CQUFsQjtBO2lEQU1DLEVBQUUsV0FBRixXQUFhLFcsQUFBYjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVppQixBLEFBZ0Y1Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9OaWdlbFdpdGhUaGVCcmllL0Jsb2NrY2hhaW5UdXRvcmlhbHMva2lja3N0YXJ0LWV0aGVyZXVtIn0=