"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var addReviewUrl = require('./AddReviewUrl.js');

var core = require('@actions/core');

function run() {
  return _run.apply(this, arguments);
}

function _run() {
  _run = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    var host, headref, comment;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            try {
              host = core.getInput('host');
              headref = process.env.GITHUB_HEAD_REF.toString();
              comment = "You can see a private version of the changes made in this pull request here:\nhttp://".concat(headref, ".s.").concat(host, "/");
              console.log("before the actual call");
              console.log("addReviewUrl: ".concat(addReviewUrl)); //new addReviewUrl().addComment("Hello from check");

              new addReviewUrl(comment);
              console.log("before the actual call");
            } catch (error) {
              core.setFailed(error.message);
            }

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _run.apply(this, arguments);
}

run();