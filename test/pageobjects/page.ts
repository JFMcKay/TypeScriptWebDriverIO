/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open (path: string) {
        return browser.url(`http://htmlpreview.github.io/?https://github.com/adamranieri/inFormed/blob/main/${path}.html`)
    }

    public isAlertPresent() {
        return async function() {
          try {
            await this.getAlertText();
      
            return true;
          } catch (error) {
            if (error.name === 'no such alert') {
              return false;
            } else {
              throw error;
            }
          }
        };
      }

}
