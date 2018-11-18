webpackHotUpdate(7,{

/***/ 1199:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(1174);

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = __webpack_require__(1194);

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = __webpack_require__(497);

var _web = __webpack_require__(539);

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = __webpack_require__(1200);

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = __webpack_require__(734);

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

 ;(function register() { // eslint-disable-line no-extra-semi /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\NigelWithTheBrie\\BlockchainTutorials\\kickstart-ethereum\\pages\\campaigns\\show.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\NigelWithTheBrie\\BlockchainTutorials\\kickstart-ethereum\\pages\\campaigns\\show.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns\\show")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5iZTYyNDM4OGU4MTM3ZWNmZDRmMi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanM/YjdiNjhkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IENhbXBhaWduIGZyb20gJy4uLy4uL2V0aGVyZXVtL2NhbXBhaWduJztcclxuaW1wb3J0IHsgQ2FyZCwgR3JpZCwgQnV0dG9uLCBTZWdtZW50LCBIZWFkZXIsIENvbnRhaW5lciwgUHJvZ3Jlc3MgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uL2V0aGVyZXVtL3dlYjMnO1xyXG5pbXBvcnQgQ29udHJpYnV0ZUZvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db250cmlidXRlRm9ybSc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi8uLi9yb3V0ZXMnO1xyXG5cclxuY2xhc3MgQ2FtcGFpZ25TaG93IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKSB7XHJcbiAgICAvL2dldCBjYW1wYWlnbiBhZGRyZXNzIGZyb20gdXJsXHJcbiAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKHByb3BzLnF1ZXJ5LmFkZHJlc3MpO1xyXG4gICAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZ2V0U3VtbWFyeSgpLmNhbGwoKTtcclxuICAgIGNvbnN0IHBlcmNlbnQgPSBNYXRoLmZsb29yKCgoc3VtbWFyeVs0XSAvIHdlYjMudXRpbHMudG9XZWkoc3VtbWFyeVsyXSwgJ2V0aGVyJykpICogMTAwKSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0aXRsZTogc3VtbWFyeVswXSxcclxuICAgICAgZGVzY3JpcHRpb246IHN1bW1hcnlbMV0sXHJcbiAgICAgIGdvYWw6IHN1bW1hcnlbMl0sXHJcbiAgICAgIG1pbmltdW1Db250cmlidXRpb246IHN1bW1hcnlbM10sXHJcbiAgICAgIGJhbGFuY2U6IHN1bW1hcnlbNF0sXHJcbiAgICAgIHJlcXVlc3RzQ291bnQ6IHN1bW1hcnlbNV0sXHJcbiAgICAgIGFwcHJvdmVyc0NvdW50OnN1bW1hcnlbNl0sXHJcbiAgICAgIG1hbmFnZXI6IHN1bW1hcnlbN10sXHJcbiAgICAgIHRvdGFsUmVxdWVzdHNBbW91bnQ6IFs4XSxcclxuICAgICAgYWRkcmVzczogcHJvcHMucXVlcnkuYWRkcmVzcyxcclxuICAgICAgcGVyY2VudDogcGVyY2VudFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlckNhcmRzKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICB0aXRsZSxcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIGdvYWwsXHJcbiAgICAgIGJhbGFuY2UsXHJcbiAgICAgIG1hbmFnZXIsXHJcbiAgICAgIG1pbmltdW1Db250cmlidXRpb24sXHJcbiAgICAgIHJlcXVlc3RzQ291bnQsXHJcbiAgICAgIGFwcHJvdmVyc0NvdW50LFxyXG4gICAgICB0b3RhbFJlcXVlc3RzQW1vdW50LFxyXG4gICAgICBwZXJjZW50XHJcbiAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICBjb25zdCBpdGVtcyA9IFtcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogZ29hbCArICcgZXRoJyxcclxuICAgICAgICBtZXRhOiAnRnVuZHJhaXNpbmcgZ29hbCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIHRoZSBhbW91bnQgdGhlIG1hbmFnZXIgaG9wZXMgdG8gcmFpc2UgZm9yIHRoZWlyIHByb2plY3QnLFxyXG4gICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogd2ViMy51dGlscy5mcm9tV2VpKGJhbGFuY2UsICdldGhlcicpICsgJyBldGgnLFxyXG4gICAgICAgIG1ldGE6ICdDdXJyZW50IEFtb3VudCBGdW5kZWQnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIGJhbGFuY2UgaXMgaG93IG11Y2ggbW9uZXkgdGhpcyBjYW1wYWlnbiBoYXMgbGVmdCB0byBzcGVuZCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogbWluaW11bUNvbnRyaWJ1dGlvbiArICcgd2VpJyxcclxuICAgICAgICBtZXRhOiAnTWluaW11bSBTcG9uc29yIENvbnRyaWJ1dGlvbicsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdUbyBnYWluIFxcJ1Nwb25zb3JcXCcgc3RhdHVzIHlvdSBtdXN0IGNvbnRyaWJ1dGUgYXQgbGVhc3QgdGhpcyBtdWNoJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogYXBwcm92ZXJzQ291bnQsXHJcbiAgICAgICAgbWV0YTogJ051bWJlciBvZiBTcG9uc29ycycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdOdW1iZXIgb2YgY29udHJpYnV0ZXJzIHdpdGggXFwnU3BvbnNvclxcJyBzdGF0dXMuJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyOiByZXF1ZXN0c0NvdW50LFxyXG4gICAgICAgIG1ldGE6ICdOdW1iZXIgb2YgU3BlbmRpbmcgUmVxdWVzdHMnLFxyXG4gICAgICAgIGV4dHJhOiAoXHJcbiAgICAgICAgICA8TGluayByb3V0ZT17YC9jYW1wYWlnbnMvJHt0aGlzLnByb3BzLmFkZHJlc3N9L3JlcXVlc3RzYH0+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHByaW1hcnk+VmlldyBSZXF1ZXN0czwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0EgbWFuYWdlciBjYW4gY3JlYXRlIGEgcmVxdWVzdCB0byB3aXRoZHJhdyBtb25leSBmcm9tIHRoZSBjb250cmFjdCBiYWxhbmNlLiBSZXF1ZXN0cyBtdXN0IGJlIGFwcHJvdmVkIGJ5IHRoZSBTcG9uc29ycydcclxuICAgICAgfVxyXG4gICAgXTtcclxuICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8U2VnbWVudD5cclxuICAgICAgICAgIDxIZWFkZXIgYXM9J2gxJz5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMudGl0bGV9XHJcbiAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgIDxwPnt0aGlzLnByb3BzLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgIDxoNT5Qcm9qZWN0IFByb2dyZXNzOjwvaDU+XHJcbiAgICAgICAgICA8UHJvZ3Jlc3Mgc3R5bGU9e3ttYXJnaW5Ub3A6IC01fX0gcGVyY2VudD17dGhpcy5wcm9wcy5wZXJjZW50fSBjb2xvcj1cInRlYWxcIiBwcm9ncmVzcyAvPlxyXG4gICAgICAgICAgPEdyaWQgY29sdW1ucz1cInR3b1wiPlxyXG4gICAgICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7bWFyZ2luQm90dG9tOiAyfX0+VGhpcyBwcm9qZWN0IGlzIG1hbmFnZWQgYnk6PC9oNT5cclxuICAgICAgICAgICAgICAgIDxwPnt0aGlzLnByb3BzLm1hbmFnZXJ9PC9wPlxyXG4gICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e2AvY2FtcGFpZ25zLyR7dGhpcy5wcm9wcy5hZGRyZXNzfS9yZXF1ZXN0c2B9PlxyXG4gICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBmbG9hdGVkPVwicmlnaHRcIiBwcmltYXJ5PlZpZXcgUmVxdWVzdHM8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezExfT5cclxuICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDYXJkcygpfVxyXG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezV9PlxyXG4gICAgICAgICAgICAgIDxTZWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPENvbnRyaWJ1dGVGb3JtIGFkZHJlc3M9e3RoaXMucHJvcHMuYWRkcmVzc30gbWluaW11bUNvbnRyaWJ1dGlvbj17dGhpcy5wcm9wcy5taW5pbXVtQ29udHJpYnV0aW9ufSAvPlxyXG4gICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIClcclxuXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnblNob3c7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2NhbXBhaWducy9zaG93LmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBO0FBWUE7QUFWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUhBO0FBTUE7QUFFQTtBQUFBO0FBRkE7QUFLQTtBQUVBO0FBQUE7QUFGQTtBQU1BO0FBQ0E7QUFBQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQUdBO0FBWkE7QUFZQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7O0FBSUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUVBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFPQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQVFBO0FBUkE7Ozs7Ozs7Ozs7O0FBeEdBO0FBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVRBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=