module.exports = {
  printWidth: 160,
  tabWidth: 4, // tab缩进大小, 默认2
  useTabs: false, // 使用tab缩进, 默认false
  semi: false, // 使用分号, 默认true
  singleQuote: true, // 使用单引号, 默认false
  vueIndentScriptAndStyle: true, // 是否缩进Vue文件中<script>和<style>标记中的代码, 默认false
  bracketSpacing: true, // 对象中的空格 默认true
  trailingComma: 'es5', // 多行时尽可能打印尾随逗号
  jsxBracketSameLine: false, // JSX标签闭合位置 默认false
  jsxSingleQuote: false, // 在jsx中使用单引号代替双引号
  arrowParens: 'avoid', // 尽可能省略箭头函数的参数括号 x => x , 默认 always (x) => x
  proseWrap: 'always',
  htmlWhitespaceSensitivity: 'strict',
  endOfLine: 'crlf',
  overrides: [
    {
      files: '*.md',
      options: {
        tabWidth: 2,
      },
    },
  ],
};

/*
 * 详情查看官网配置
 * https://prettier.io/docs/en/options.html
*/