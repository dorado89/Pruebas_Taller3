'use strict';

const Gatherer = require('lighthouse').Gatherer;

class TimeToResp extends Gatherer {
    afterPass(options) {
        const driver = options.driver;

        return driver.evaluateAsync('window.apiRespTime')
            .then(apiRespTime => {
                if (!apiRespTime) {

                    throw new Error('Unable to find card load metrics in page');
                }
                return apiRespTime;
            });
    }
};

module.exports = TimeToResp;