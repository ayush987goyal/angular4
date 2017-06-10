import { TestingStartPage } from './app.po';

describe('testing-start App', () => {
  let page: TestingStartPage;

  beforeEach(() => {
    page = new TestingStartPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
