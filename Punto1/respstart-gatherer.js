'use strict';

const Gatherer = require('lighthouse').Gatherer;

class TimeToRespStart extends Gatherer {
    afterPass(options) {
        const driver = options.driver;

        return driver.evaluateAsync('window.apiRespTimeStart')
            .then(apiRespTime => {
                if (!apiRespTime) {

                    throw new Error('Unable to find resp start metrics in page');
                }
                return apiRespTime;
            });
    }
};

module.exports = TimeToRespStart;