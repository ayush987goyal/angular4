import { FileDownloadTestPage } from './app.po';

describe('file-download-test App', () => {
  let page: FileDownloadTestPage;

  beforeEach(() => {
    page = new FileDownloadTestPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
