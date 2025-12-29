/// <reference types='codeceptjs' />
type TodosPage = import('./todomvc-tests/pages/todos.page');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, TodosPage: TodosPage }
  interface Methods extends Playwright {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
