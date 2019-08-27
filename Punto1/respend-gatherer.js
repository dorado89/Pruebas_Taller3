'use strict';

const Gatherer = require('lighthouse').Gatherer;

class TimeToRespEnd extends Gatherer {
    afterPass(options) {
        const driver = options.driver;

        return driver.evaluateAsync('window.apiRespTimeEnd')
            .then(apiRespTime => {
                if (!apiRespTime) {

                    throw new Error('Unable to find resp end metrics in page');
                }
                return apiRespTime;
            });
    }
};

module.exports = TimeToRespEnd;