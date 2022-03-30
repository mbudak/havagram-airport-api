module.exports = function(app) {

    function testMe(who) {
        return 'you are ' + who;
    }
    
    function generateAPIKey() {
    const { randomBytes } = require('crypto');
    const apiKey = randomBytes(16).toString('hex');
    const hashedAPIKey = hashedAPIKey(apiKey);

    // Ensure it is unique
    if (apiKeys[hashedAPIKey]) {
        generateAPIKey();
    } else {
        return { hashedAPIKey, apiKey};
    }
}

}