import { Angular4MaterialPage } from './app.po';

describe('angular4-material App', () => {
  let page: Angular4MaterialPage;

  beforeEach(() => {
    page = new Angular4MaterialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
