import { AliveOrDeadPipe } from './alive-or-dead.pipe';

describe('AliveOrDeadPipe', () => {
  it('create an instance', () => {
    const pipe = new AliveOrDeadPipe();
    expect(pipe).toBeTruthy();
  });
});
