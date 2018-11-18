'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\NigelWithTheBrie\\BlockchainTutorials\\kickstart-ethereum\\components\\CampaignDetail.js';


var CampaignDetail = function (_Component) {
  (0, _inherits3.default)(CampaignDetail, _Component);

  function CampaignDetail() {
    (0, _classCallCheck3.default)(this, CampaignDetail);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignDetail.__proto__ || (0, _getPrototypeOf2.default)(CampaignDetail)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignDetail, [{
    key: 'renderShowRequestsButton',
    value: function renderShowRequestsButton(show) {
      if (show) {
        return _react2.default.createElement(_semanticUiReact.Grid.Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        }, _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        }, _react2.default.createElement(_semanticUiReact.Button, { floated: 'right', primary: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        }, 'View Requests'))));
      } else {
        return;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          description = _props.description,
          percent = _props.percent,
          manager = _props.manager,
          address = _props.address,
          showRequestsButton = _props.showRequestsButton;

      return _react2.default.createElement(_semanticUiReact.Segment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, title), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, description), _react2.default.createElement('h5', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, 'Project Progress:'), _react2.default.createElement(_semanticUiReact.Progress, { style: { marginTop: -5 }, percent: percent, color: 'teal', progress: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), _react2.default.createElement(_semanticUiReact.Grid, { columns: 'two', __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement('h5', { style: { marginBottom: 2 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, 'This project is managed by:'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, manager)), this.renderShowRequestsButton(showRequestsButton))));
    }
  }]);

  return CampaignDetail;
}(_react.Component);

exports.default = CampaignDetail;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXENhbXBhaWduRGV0YWlsLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQnV0dG9uIiwiU2VnbWVudCIsIkhlYWRlciIsIlByb2dyZXNzIiwiR3JpZCIsIndlYjMiLCJDYW1wYWlnbiIsIkxpbmsiLCJDYW1wYWlnbkRldGFpbCIsInNob3ciLCJwcm9wcyIsImFkZHJlc3MiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicGVyY2VudCIsIm1hbmFnZXIiLCJzaG93UmVxdWVzdHNCdXR0b24iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJyZW5kZXJTaG93UmVxdWVzdHNCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBUSxBQUFTLEFBQVEsQUFBVTs7QUFDNUMsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFTLEFBQVk7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7Ozs2Q0FDcUIsQSxNQUFNLEFBQzdCO1VBQUEsQUFBSSxNQUFNLEFBQ1I7K0JBQ0csY0FBRCxzQkFBQSxBQUFNOztzQkFBTjt3QkFBQSxBQUNFO0FBREY7QUFBQSxTQUFBLGtCQUNFLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxVQUF0QztzQkFBQTt3QkFBQSxBQUNFO0FBREY7MkJBQ0UsY0FBQTs7c0JBQUE7d0JBQUEsQUFDRTtBQURGO0FBQUEsMkJBQ0UsQUFBQyx5Q0FBTyxTQUFSLEFBQWdCLFNBQVEsU0FBeEI7c0JBQUE7d0JBQUE7QUFBQTtXQUpSLEFBQ0UsQUFDRSxBQUNFLEFBQ0UsQUFLVDtBQVZELGFBVU8sQUFDTDtBQUNEO0FBQ0Y7Ozs7NkJBRVE7bUJBQ3VFLEtBRHZFLEFBQzRFO1VBRDVFLEFBQ0MsZUFERCxBQUNDO1VBREQsQUFDUSxxQkFEUixBQUNRO1VBRFIsQUFDcUIsaUJBRHJCLEFBQ3FCO1VBRHJCLEFBQzhCLGlCQUQ5QixBQUM4QjtVQUQ5QixBQUN1QyxpQkFEdkMsQUFDdUM7VUFEdkMsQUFDZ0QsNEJBRGhELEFBQ2dELEFBQ3ZEOzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUMseUNBQU8sSUFBUixBQUFXO29CQUFYO3NCQUFBLEFBQ0c7QUFESDtTQURGLEFBQ0UsQUFHQSx3QkFBQSxjQUFBOztvQkFBQTtzQkFBQSxBQUFJO0FBQUo7QUFBQSxTQUpGLEFBSUUsQUFDQSw4QkFBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FMRixBQUtFLEFBQ0Esc0NBQUEsQUFBQywyQ0FBUyxPQUFPLEVBQUMsV0FBVyxDQUE3QixBQUFpQixBQUFhLEtBQUksU0FBbEMsQUFBMkMsU0FBUyxPQUFwRCxBQUEwRCxRQUFPLFVBQWpFO29CQUFBO3NCQU5GLEFBTUUsQUFDQTtBQURBOzBCQUNBLEFBQUMsdUNBQUssU0FBTixBQUFjO29CQUFkO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQSxRQUFJLE9BQU8sRUFBQyxjQUFaLEFBQVcsQUFBZTtvQkFBMUI7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFDQSxnREFBQSxjQUFBOztvQkFBQTtzQkFBQSxBQUFJO0FBQUo7QUFBQSxTQUhKLEFBQ0UsQUFFRSxBQUVELGdCQUFBLEFBQUsseUJBZGQsQUFDRSxBQU9FLEFBQ0UsQUFLRyxBQUE4QixBQUt4Qzs7Ozs7QUF0QzBCLEEsQUF5QzdCOztrQkFBQSxBQUFlIiwiZmlsZSI6IkNhbXBhaWduRGV0YWlsLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL05pZ2VsV2l0aFRoZUJyaWUvQmxvY2tjaGFpblR1dG9yaWFscy9raWNrc3RhcnQtZXRoZXJldW0ifQ==