const ProgressBar = require('../pageobjects/progress.page');

describe('Progress Test', () => {
    it('Should open url', async () => {
        await ProgressBar.open();
    });

    it('Should click on Start Button', async () => {
        await ProgressBar.clickOnStartButton();
    });

    it('Should wait for 75%', async () => {
        await ProgressBar.waitForProgressBar('75');
    });

    it('Should click on Stop Button', async () => {
        await ProgressBar.clickOnStopButton();
    });
});


