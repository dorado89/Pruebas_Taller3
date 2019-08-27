'use strict';

const Audit = require('lighthouse').Audit;

const MAX_RESP_TIME = 3000;

class LoadAudit extends Audit {
    static get meta() {
        return {
            category: 'MyPerformance',
            name: 'resp-audit',
            description: 'Schedule API response initialized and ready',
            failureDescription: 'Schedule API response slow to initialize',
            helpText: 'Used to measure time from getSchedule to when the response',
            requiredArtifacts: ['TimeToRespEnd','TimeToRespStart']
        };
    }

    static audit(artifacts) {
        const loadedTime = artifacts.TimeToRespEnd - artifacts.TimeToRespStart;

        const belowThreshold = loadedTime <= MAX_RESP_TIME;

        return {
            rawValue: loadedTime,
            score: belowThreshold
        };
    }
};

module.exports = LoadAudit;