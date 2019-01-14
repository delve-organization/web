import { TreeBoardModule } from './tree-board.module';

describe('TreeBoardModule', () => {
  let treeBoardModule: TreeBoardModule;

  beforeEach(() => {
    treeBoardModule = new TreeBoardModule();
  });

  it('should create an instance', () => {
    expect(treeBoardModule).toBeTruthy();
  });
});
