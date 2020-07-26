module.exports = async (page, scenario, vp) => {
    await require('./loadCookies')(page, scenario);
    const raceData = require("../../mockData/raceCardData.json");
    const Mocker = require("../../../utils/Mocker");
    var mocker = new Mocker(page);

    mocker.mocker();
    mocker.mock(false, "/api/v2/racing/races/6950855", raceData);
    await page.setDefaultNavigationTimeout(30000);
};
