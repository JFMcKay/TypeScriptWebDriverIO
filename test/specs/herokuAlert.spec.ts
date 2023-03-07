
describe('Fill a popup', () => {
    it('fill in alert', async () => {
        await browser.url("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        let banner = (await $("p=Congratulations! You must have the proper credentials."));
        console.log(banner.getText());
        expect(banner.getText()).toEqual('Congratulations! You must have the proper credentials.');
    });
});