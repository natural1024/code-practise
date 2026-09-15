export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "script",
      globals: {
        console: "readonly",
        module: "writable",
        require: "readonly",
      },
    },
    rules: {
      // 行尾多余空格（保存即自动删除）
      "no-trailing-spaces": "error",
      // 文件末尾保留一个换行
      "eol-last": ["error", "always"],
      // 2 空格缩进
      indent: ["error", 2, { SwitchCase: 1 }],
      // 双引号
      quotes: ["error", "double", { avoidEscape: true }],
      // 语句末尾分号
      semi: ["error", "always"],
      // 关键字后留空格：if (...) {
      "keyword-spacing": "error",
      "space-before-blocks": "error",
      // 运算符两侧空格
      "space-infix-ops": "error",
      // 逗号后空格、行尾禁止逗号外的多余逗号
      "comma-spacing": "error",
      // 大括号内侧空格：{ a } 而非 {a}
      "object-curly-spacing": ["error", "always"],
      // 禁止多个空行
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
    },
  },
];
