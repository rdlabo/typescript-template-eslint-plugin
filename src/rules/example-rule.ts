import { TSESLint } from '@typescript-eslint/utils';

const rule: TSESLint.RuleModule<'disallowExample', []> = {
  defaultOptions: [],
  meta: {
    docs: {
      description: 'An example rule.',
      url: 'https://github.com/rdlabo/typescript-template-eslint-plugin/blob/master/docs/rules/example-rule.md',
    },
    messages: {
      disallowExample: "'example' identifier is forbidden.",
    },
    schema: [],
    type: 'suggestion',
  },

  create(context) {
    return {
      "Identifier[name='example']"(node) {
        context.report({
          node,
          messageId: 'disallowExample',
        });
      },
    };
  },
};

export default rule;
