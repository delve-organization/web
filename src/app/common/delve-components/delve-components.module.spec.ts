import { DelveComponentsModule } from './delve-components.module';

describe('DelveComponentsModule', () => {
  let delveComponentsModule: DelveComponentsModule;

  beforeEach(() => {
    delveComponentsModule = new DelveComponentsModule();
  });

  it('should create an instance', () => {
    expect(delveComponentsModule).toBeTruthy();
  });
});
