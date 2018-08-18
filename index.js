function babelPluginClassNames({ types: t }) {
  const cloneNode = t.cloneNode || t.cloneDeep
  return {
    name: "babel-plugin-classnames",
    visitor: {
      Program: {
        enter(path, state) {
          state.classNamesIdentifier = path.scope.generateUidIdentifier('classNames')
        },
        exit(path, state) {
          if (state.hasClassNames) {
            const importDeclaration = t.importDeclaration(
              [
                state.opts.importName
                ? t.importSpecifier(
                  state.classNamesIdentifier,
                  t.identifier(state.opts.importName)
                )
                : t.importDefaultSpecifier(state.classNamesIdentifier)
              ],
              t.stringLiteral(state.opts.packageName || 'classnames')
            )

            path.node.body.unshift(importDeclaration)
          }
        }
      },
      JSXAttribute(path, state) {
        if (path.node.name.name !== 'className') {
          return
        }

        const value = path.get('value')
        if (!value.isJSXExpressionContainer()) {
          return
        }

        const expression = value.get('expression')
        if (!expression.isArrayExpression()) {
          return
        }

        expression.replaceWith(
          t.callExpression(
            cloneNode(state.classNamesIdentifier),
            expression.get('elements').map(e => cloneNode(e.node)),
          )
        )

        state.hasClassNames = true
      }
    }
  }
}

exports = module.exports = babelPluginClassNames
exports.default = babelPluginClassNames
Object.defineProperty(exports, "__esModule", {
  value: true
})
