import CodeceptJS from "codeceptjs";

const traceStep = (): void => {
  CodeceptJS.event.dispatcher.on(CodeceptJS.event.bddStep.before, (step) => {
    console.log(`${step.keyword}${step.text} from ${step.match}`);
  });
};

module.exports = traceStep;
