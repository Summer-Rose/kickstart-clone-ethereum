webpackHotUpdate(5,{

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(69);

var _promise2 = _interopRequireDefault(_promise);

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

var _factory = __webpack_require__(741);

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = __webpack_require__(497);

var _Layout = __webpack_require__(1175);

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = __webpack_require__(733);

var _campaign = __webpack_require__(1194);

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
          description: summary[1], //description
          meta: 'Goal: ' + summary[2] + ' Eth', //goal
          fluid: true
        };
      });
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, 'Open Campaigns'), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        floated: 'right',
        content: 'Create Campaign',
        icon: 'add',
        primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }))), this.renderCampaigns()));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY3RvcnkiLCJDYXJkIiwiQnV0dG9uIiwiTGF5b3V0IiwiTGluayIsIkNhbXBhaWduIiwiQ2FtcGFpZ25JbmRleCIsIml0ZW1zIiwicHJvcHMiLCJzdW1tYXJpZXMiLCJtYXAiLCJzdW1tYXJ5IiwiaW5kZXgiLCJhZGRyZXNzIiwiY2FtcGFpZ25zIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJtZXRhIiwiZmx1aWQiLCJyZW5kZXJDYW1wYWlnbnMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJjYWxsIiwiYWxsIiwiY2FtcGFpZ24iLCJnZXRTdW1tYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBUyxBQUFNOztBQUNmLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBYzs7Ozs7Ozs7O0lBRWYsQTs7Ozs7Ozs7Ozs7c0NBZWM7bUJBQ2hCOztVQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsVUFBWCxBQUFxQixJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUN6RDtZQUFNLFVBQVUsT0FBQSxBQUFLLE1BQUwsQUFBVyxVQUEzQixBQUFnQixBQUFxQixBQUNyQzs7a0NBRUcsQUFBQyw4QkFBSyx1QkFBTixBQUEyQjt3QkFBM0I7MEJBQUEsQUFDRztBQURIO1dBQUEsa0JBQ0csY0FBQTs7d0JBQUE7MEJBQUEsQUFBRztBQUFIO0FBQUEsNkJBQUcsY0FBQTs7d0JBQUE7MEJBQUEsQUFBSztBQUFMO0FBQUEscUJBSEYsQUFFSixBQUNHLEFBQUcsQUFBSyxBQUFRLEFBR3BCO3VCQUFhLFFBTlIsQUFNUSxBQUFRLElBQUksQUFDekI7Z0JBQU0sV0FBVyxRQUFYLEFBQVcsQUFBUSxLQVBwQixBQU95QixRQUFRLEFBQ3RDO2lCQVJGLEFBQU8sQUFRRSxBQUVWO0FBVlEsQUFDTDtBQUhKLEFBQWMsQUFhZCxPQWJjOzJDQWFQLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQUFQLEFBQU8sQUFDUjtBQURRO09BQUE7Ozs7NkJBR0EsQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxtQ0FBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQztpQkFBRCxBQUNVLEFBQ1I7aUJBRkYsQUFFVSxBQUNSO2NBSEYsQUFHTyxBQUNMO2lCQUpGO29CQUFBO3NCQUpOLEFBRUUsQUFDRSxBQUNFLEFBT0g7QUFQRztBQUNFLGlCQVBaLEFBQ0UsQUFDRSxBQVdHLEFBQUssQUFJYjs7O1NBakREOztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7dUJBRTBCLGtCQUFBLEFBQVEsUUFBUixBQUFnQix1QkFBaEIsQUFBdUMsQTs7bUJBQXpEO0E7O3lDQUNrQixBQUFRLGNBQzlCLEFBQVUsSUFBSSxtQkFBVyxBQUN2QjtzQkFBTSxXQUFXLHdCQUFqQixBQUFpQixBQUFTLEFBQzFCO3lCQUFPLFNBQUEsQUFBUyxRQUFULEFBQWlCLGFBQXhCLEFBQU8sQUFBOEIsQUFDdEM7QSxBQUpxQixBQUN0QixpQkFBQSxDQURzQjs7bUJBQWxCO0E7aURBTUMsRUFBRSxXQUFGLFdBQWEsVyxBQUFiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWmlCLEEsQUFxRDVCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL05pZ2VsV2l0aFRoZUJyaWUvQmxvY2tjaGFpblR1dG9yaWFscy9raWNrc3RhcnQtZXRoZXJldW0ifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\NigelWithTheBrie\\BlockchainTutorials\\kickstart-ethereum\\pages\\index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\NigelWithTheBrie\\BlockchainTutorials\\kickstart-ethereum\\pages\\index.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5lODk0YTYxZTFjMWIyMjIxYzE2Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/YzY1OTU5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi9ldGhlcmV1bS9mYWN0b3J5JztcclxuaW1wb3J0IHsgQ2FyZCwgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL3JvdXRlcyc7XHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi9ldGhlcmV1bS9jYW1wYWlnbic7XHJcblxyXG5jbGFzcyBDYW1wYWlnbkluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAvL05leHRKcyBleGNsdXNpdmUgbWV0aG9kIC0tIGNhbGxlZCB3aGVuIGxvYWRpbmcgY29kZSBvbiBOZXh0IHNlcnZlclxyXG4gIC8vSWRlYWwgcGxhY2UgZm9yIGRhdGEgbG9hZGluZyBpbmZvIHRoYXQgd2lsbCBuZWVkIHRvIGJlIGRpc3BsYXllZCBvbiB0aGUgc2NyZWVuXHJcbiAgLy9zdGF0aWMgKHJlcS4gYnkgTmV4dEpzKSBhbGxvd3MgTmV4dCB0byBydW4gdGhlIG1ldGhvZCB3aXRob3V0IGhhdmluZyB0byByZW5kZXIgdGhlIGNvbXBvbmVudFxyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XHJcbiAgICBjb25zdCBjYW1wYWlnbnMgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZ2V0RGVwbG95ZWRDYW1wYWlnbnMoKS5jYWxsKCk7XHJcbiAgICBjb25zdCBzdW1tYXJpZXMgPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgICAgY2FtcGFpZ25zLm1hcChhZGRyZXNzID0+IHtcclxuICAgICAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKGFkZHJlc3MpO1xyXG4gICAgICAgIHJldHVybiBjYW1wYWlnbi5tZXRob2RzLmdldFN1bW1hcnkoKS5jYWxsKCk7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHsgY2FtcGFpZ25zLCBzdW1tYXJpZXMgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlckNhbXBhaWducygpIHtcclxuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5wcm9wcy5zdW1tYXJpZXMubWFwKChzdW1tYXJ5LCBpbmRleCkgPT4ge1xyXG4gICAgICBjb25zdCBhZGRyZXNzID0gdGhpcy5wcm9wcy5jYW1wYWlnbnNbaW5kZXhdO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGhlYWRlcjogKFxyXG4gICAgICAgICA8TGluayByb3V0ZT17YC9jYW1wYWlnbnMvJHthZGRyZXNzfWB9PlxyXG4gICAgICAgICAgICA8YT48aDM+e3N1bW1hcnlbMF19PC9oMz48L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogc3VtbWFyeVsxXSwgLy9kZXNjcmlwdGlvblxyXG4gICAgICAgIG1ldGE6ICdHb2FsOiAnICsgc3VtbWFyeVsyXSArICcgRXRoJywgLy9nb2FsXHJcbiAgICAgICAgZmx1aWQ6IHRydWVcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDM+T3BlbiBDYW1wYWlnbnM8L2gzPlxyXG4gICAgICAgICAgPExpbmsgcm91dGU9XCIvY2FtcGFpZ25zL25ld1wiPlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBmbG9hdGVkPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgY29udGVudD1cIkNyZWF0ZSBDYW1wYWlnblwiXHJcbiAgICAgICAgICAgICAgICBpY29uPVwiYWRkXCJcclxuICAgICAgICAgICAgICAgIHByaW1hcnkvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICB7dGhpcy5yZW5kZXJDYW1wYWlnbnMoKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25JbmRleDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBR0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFHQTtBQVRBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7O0FBSUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQU9BO0FBUEE7QUFDQTs7O0FBdkNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7O0FBRUE7QUFDQTtBQURBOzs7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUNBO0FBRkE7O0FBTUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==