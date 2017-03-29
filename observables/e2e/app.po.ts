import { browser, element, by } from 'protractor';

export class ObservablesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('o-root h1')).getText();
  }
}
