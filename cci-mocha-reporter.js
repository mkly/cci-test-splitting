const mocha = require('mocha');
const Base = mocha.reporters.Base;

const STATE_FAILED = 'failed';

function CciMochaReporter(runner, options) {
  mocha.reporters.XUnit.call(this, runner, options);
}

/**
 * Output tag for the given `test.`
 *
 * @param {Test} test
 */
CciMochaReporter.prototype.test = function(test) {
  Base.useColors = false;
  var attrs = {
    classname: test.parent.fullTitle(),
    name: test.title,
    file: test.file,
    time: test.duration / 1000 || 0
  };
  if (test.state === STATE_FAILED) {
    var err = test.err;
    var diff =
      !Base.hideDiff && Base.showDiff(err)
        ? '\n' + Base.generateDiff(err.actual, err.expected)
        : '';
    this.write(
      tag(
        'testcase',
        attrs,
        false,
        tag(
          'failure',
          {},
          false,
         mocha.utils.escape(err.message) + mocha.utils.escape(diff) + '\n' + mocha.utils.escape(err.stack)
        )
      )
    );
  } else if (test.isPending()) {
    this.write(tag('testcase', attrs, false, tag('skipped', {}, true)));
  } else {
    this.write(tag('testcase', attrs, true));
  }
};

/**
 * HTML tag helper.
 *
 * @param name
 * @param attrs
 * @param close
 * @param content
 * @return {string}
 */
function tag(name, attrs, close, content) {
  var end = close ? '/>' : '>';
  var pairs = [];
  var tag;
  for (var key in attrs) {
    if (Object.prototype.hasOwnProperty.call(attrs, key)) {
      pairs.push(key + '="' + mocha.utils.escape(attrs[key]) + '"');
    }
  }
  tag = '<' + name + (pairs.length ? ' ' + pairs.join(' ') : '') + end;
  if (content) {
    tag += content + '</' + name + end;
  }
  return tag;
}

mocha.utils.inherits(CciMochaReporter, mocha.reporters.XUnit);

module.exports = CciMochaReporter;
