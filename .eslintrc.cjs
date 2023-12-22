module.exports = {
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    ignorePatterns: ["/*", "!/src"],
    root: true,
    globals: {
        it: true,
        describe: true,
        setTimeout: true,
    },
    rules: {
        "no-extra-semi": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-unused-vars": ["error", { vars: "all", args: "none" }],
    },
};
