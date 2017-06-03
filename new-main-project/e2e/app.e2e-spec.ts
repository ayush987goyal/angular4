import { NewMainProjectPage } from './app.po';

describe('new-main-project App', () => {
  let page: NewMainProjectPage;

  beforeEach(() => {
    page = new NewMainProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
