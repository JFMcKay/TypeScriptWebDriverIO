describe('Wiki Home Page', () => {
    it('should have the correct title', async () => {
        await browser.url('https://www.wikipedia.org/');

        await browser.waitUntil(async () => {
            const title = await browser.getTitle();
            return title === 'Wikipedia';
        }, {
            timeout: 5000,
            timeoutMsg: 'expected title to be different after 5s'
        });

        await expect(browser).toHaveTitle('Wiskipedia');
    });
});