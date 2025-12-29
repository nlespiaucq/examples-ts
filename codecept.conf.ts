exports.config = {
  output: "./output",
  helpers: {
    Playwright: {
      url: "http://localhost",
      waitForTimeout: 5000,
      show: true,
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
