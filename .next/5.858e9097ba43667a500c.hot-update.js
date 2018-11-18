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

var _Layout = __webpack_require__(1174);

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = __webpack_require__(734);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY3RvcnkiLCJDYXJkIiwiQnV0dG9uIiwiSWNvbiIsIkhlYWRlciIsIlByb2dyZXNzIiwiQ29udGFpbmVyIiwiTGF5b3V0IiwiTGluayIsIkNhbXBhaWduIiwiQ2FtcGFpZ25JbmRleCIsIml0ZW1zIiwicHJvcHMiLCJzdW1tYXJpZXMiLCJtYXAiLCJzdW1tYXJ5IiwiaW5kZXgiLCJhZGRyZXNzIiwiY2FtcGFpZ25zIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJtYXJnaW5Ub3AiLCJtZXRhIiwiZXh0cmEiLCJmbHVpZCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJyZW5kZXJDYW1wYWlnbnMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJjYWxsIiwiYWxsIiwiY2FtcGFpZ24iLCJnZXRTdW1tYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBUyxBQUFNLEFBQVEsQUFBTSxBQUFRLEFBQVU7O0FBQy9DLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBYzs7Ozs7Ozs7O0ksQUFFZjs7Ozs7Ozs7Ozs7c0NBZWM7bUJBQ2hCOztVQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsVUFBWCxBQUFxQixJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUN6RDtZQUFNLFVBQVUsT0FBQSxBQUFLLE1BQUwsQUFBVyxVQUEzQixBQUFnQixBQUFxQixBQUNyQzs7a0NBRUcsQUFBQyw4QkFBSyx1QkFBTixBQUEyQjt3QkFBM0I7MEJBQUEsQUFDRztBQURIO1dBQUEsa0JBQ0csY0FBQTs7d0JBQUE7MEJBQUEsQUFBRztBQUFIO0FBQUEsNkJBQUcsY0FBQTs7d0JBQUE7MEJBQUEsQUFBSztBQUFM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

 ;(function register() { // eslint-disable-line no-extra-semi /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\NigelWithTheBrie\\BlockchainTutorials\\kickstart-ethereum\\pages\\index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\NigelWithTheBrie\\BlockchainTutorials\\kickstart-ethereum\\pages\\index.js"); } } })();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS44NThlOTA5N2JhNDM2NjdhNTAwYy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZjkyODg3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi9ldGhlcmV1bS9mYWN0b3J5JztcclxuaW1wb3J0IHsgQ2FyZCwgQnV0dG9uLCBJY29uLCBIZWFkZXIsIFByb2dyZXNzLCBDb250YWluZXIgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vcm91dGVzJztcclxuaW1wb3J0IENhbXBhaWduIGZyb20gJy4uL2V0aGVyZXVtL2NhbXBhaWduJztcclxuXHJcbmNsYXNzIENhbXBhaWduSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIC8vTmV4dEpzIGV4Y2x1c2l2ZSBtZXRob2QgLS0gY2FsbGVkIHdoZW4gbG9hZGluZyBjb2RlIG9uIE5leHQgc2VydmVyXHJcbiAgLy9JZGVhbCBwbGFjZSBmb3IgZGF0YSBsb2FkaW5nIGluZm8gdGhhdCB3aWxsIG5lZWQgdG8gYmUgZGlzcGxheWVkIG9uIHRoZSBzY3JlZW5cclxuICAvL3N0YXRpYyAocmVxLiBieSBOZXh0SnMpIGFsbG93cyBOZXh0IHRvIHJ1biB0aGUgbWV0aG9kIHdpdGhvdXQgaGF2aW5nIHRvIHJlbmRlciB0aGUgY29tcG9uZW50XHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcclxuICAgIGNvbnN0IGNhbXBhaWducyA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5nZXREZXBsb3llZENhbXBhaWducygpLmNhbGwoKTtcclxuICAgIGNvbnN0IHN1bW1hcmllcyA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgICBjYW1wYWlnbnMubWFwKGFkZHJlc3MgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24oYWRkcmVzcyk7XHJcbiAgICAgICAgcmV0dXJuIGNhbXBhaWduLm1ldGhvZHMuZ2V0U3VtbWFyeSgpLmNhbGwoKTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgICByZXR1cm4geyBjYW1wYWlnbnMsIHN1bW1hcmllcyB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyQ2FtcGFpZ25zKCkge1xyXG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLnByb3BzLnN1bW1hcmllcy5tYXAoKHN1bW1hcnksIGluZGV4KSA9PiB7XHJcbiAgICAgIGNvbnN0IGFkZHJlc3MgPSB0aGlzLnByb3BzLmNhbXBhaWduc1tpbmRleF07XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaGVhZGVyOiAoXHJcbiAgICAgICAgIDxMaW5rIHJvdXRlPXtgL2NhbXBhaWducy8ke2FkZHJlc3N9YH0+XHJcbiAgICAgICAgICAgIDxhPjxoMz57c3VtbWFyeVswXX08L2gzPjwvYT5cclxuICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICksXHJcbiAgICAgICAgZGVzY3JpcHRpb246IChcclxuICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxQcm9ncmVzcyBzdHlsZT17e21hcmdpblRvcDogMTB9fSB2YWx1ZT17c3VtbWFyeVs0XX0gdG90YWw9e3N1bW1hcnlbMl19IHByb2dyZXNzPSdwZXJjZW50JyBjb2xvcj1cInRlYWxcIiAvPlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17e21hcmdpblRvcDogLTI1fX0+e3N1bW1hcnlbMV19PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICksXHJcbiAgICAgICAgbWV0YTogKFxyXG4gICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPHA+R29hbDoge3N1bW1hcnlbMl19IEVUSDxJY29uIG5hbWU9J2V0aGVyZXVtJy8+PC9wPlxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgKSxcclxuICAgICAgICBleHRyYTogKFxyXG4gICAgICAgICAgPExpbmsgcm91dGU9e2AvY2FtcGFpZ25zLyR7YWRkcmVzc31gfT5cclxuICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxJY29uIG5hbWU9J2luZm8gY2lyY2xlJyAvPlxyXG4gICAgICAgICAgICAgIExlYXJuIG1vcmVcclxuICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApLFxyXG4gICAgICAgIGZsdWlkOiB0cnVlXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPEhlYWRlciBhcz0naDInIGljb24gdGV4dEFsaWduPSdjZW50ZXInIHN0eWxlPXt7bWFyZ2luVG9wOiA1MCwgbWFyZ2luQm90dG9tOiAyMH19PlxyXG4gICAgICAgICAgICA8SWNvbiBuYW1lPSdpZGVhJyBjaXJjdWxhci8+XHJcbiAgICAgICAgICAgIDxIZWFkZXIuQ29udGVudD5DdXJyZW50IFByb2plY3RzPC9IZWFkZXIuQ29udGVudD5cclxuICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgPExpbmsgcm91dGU9XCIvY2FtcGFpZ25zL25ld1wiPlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6IDIwfX1cclxuICAgICAgICAgICAgICAgIGZsb2F0ZWQ9XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICBwcmltYXJ5PlxyXG4gICAgICAgICAgICAgICAgPEljb24gbmFtZT0nYWRkJy8+XHJcbiAgICAgICAgICAgICAgICBTdGFydCBQcm9qZWN0XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIHt0aGlzLnJlbmRlckNhbXBhaWducygpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnbkluZGV4O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBSEE7O0FBSUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUtBO0FBRUE7QUE1QkE7QUE2QkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7O0FBSUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBRUE7QUFIQTtBQUFBO0FBSUE7QUFKQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBS0E7OztBQXJFQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFDQTtBQUZBOztBQU1BO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0VBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=