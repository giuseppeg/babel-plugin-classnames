const assert = require('assert')
const transform = require("@babel/core").transform
const plugin = require('./')

transform(`
<div className={[a,b && fo]} />;
classNames(a, b && foo);
<div className="hhi" />;
<div className={hhi} />;
<div className={[a,b && fo].join('')} />;
`.trim(), { plugins: ["@babel/plugin-syntax-jsx", plugin] }, (err, result) => {
  if (err) {
    throw err
  }
  assert.equal(
    result.code,
    `
import _classNames from "classnames";
<div className={_classNames(a, b && fo)} />;
classNames(a, b && foo);
<div className="hhi" />;
<div className={hhi} />;
<div className={[a, b && fo].join('')} />;
    `.trim()
  )
})
