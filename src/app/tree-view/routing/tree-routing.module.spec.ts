import { TreeRoutingModule } from './tree-routing.module';

describe('TreeRoutingModule', () => {
  let treeRoutingModule: TreeRoutingModule;

  beforeEach(() => {
    treeRoutingModule = new TreeRoutingModule();
  });

  it('should create an instance', () => {
    expect(treeRoutingModule).toBeTruthy();
  });
});
