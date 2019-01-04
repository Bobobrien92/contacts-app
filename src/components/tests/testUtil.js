import sinon from 'sinon';

export function stubConsoleError() {
  beforeEach(() => {
    sinon.stub(console, 'error');
  });

  afterEach(() => {
    console.error.restore();
  });
}

export const expectMissingProp = (prop, component) => {
  sinon.assert.calledWithMatch(console.error,
    new RegExp(`Warning: Failed prop type: The prop \`${prop}\` is marked as required in \`${component}\`, but its value is \`undefined\`.`))
}