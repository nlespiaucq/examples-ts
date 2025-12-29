exports.config = {
  require: ["tsx/esm"],
  output: "./output",
  helpers: {
    Playwright: {
      url: "http://localhost",
      waitForTimeout: 5000,
      show: true,
    },
  },
  plugins: {
    trace: {
      require: "./trace.plugin",
      enabled: true,
    },
  },

  gherkin: {
    features: "./todomvc-tests/features/*.feature",
    steps: ["./todomvc-tests/step-definitions/create-todos.steps.ts"],
  },

  include: {
    TodosPage: "./todomvc-tests/pages/todos.page.ts",
  },
  bootstrap: null,
  mocha: {},
  name: "codecept demo tests",
};
