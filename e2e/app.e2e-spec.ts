import { SwimPage } from './app.po';

describe('swim App', function() {
  let page: SwimPage;

  beforeEach(() => {
    page = new SwimPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
