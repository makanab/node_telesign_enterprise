const Telesign = require('telesignsdk');

/***
 * The Verify API delivers phone-based verification and two-factor authentication using a time-based, one-time passcode
 * sent via SMS message, Voice call or Push Notification.
 */
class PhoneID {

    constructor(customerId,
                apiKey,
                restEndpoint="https://rest-ww.telesign.com",
                timeout=10000,
                userAgent=null) {

        this.rest = new Telesign(customerId, apiKey, restEndpoint, timeout, userAgent).rest;

        this.standardResource = "/v1/phoneid/standard/${phoneNumber}"
        this.scoreResource = "/v1/phoneid/score/${phoneNumber}"
        this.contactResource = "/v1/phoneid/contact/${phoneNumber}"
        this.liveResource = "/v1/phoneid/live/${phoneNumber}"
        this.numberDeactivationResource = "/v1/phoneid/number_deactivation/${phoneNumber}"
    }

    /***
     * The PhoneID Standard API that provides phone type and telecom carrier information to identify which phone
     * numbers can receive SMS messages and/or a potential fraud risk.
     *
     * See https://developer.telesign.com/docs/rest_phoneid-standard for detailed API documentation.
     *
     * @param callback: Callback method to handle response.
     * @param phoneNumber: Phone number associated with the event.
     * @param optionalParams: Dictionary of all optional parameters.
     * transaction.
     */
    standard(callback, phoneNumber, optionalParams=null) {
        var params = {
            phone_number: phoneNumber
        };
        if (optionalParams != null) {
            params = Object.assign(params, optionalParams)
        }

        this.rest.execute(callback, "GET", this.standardResource, params);
    }

    /***
     * Score is an API that delivers reputation scoring based on phone number intelligence, traffic patterns, machine
     * learning, and a global data consortium.
     *
     * See https://developer.telesign.com/docs/rest_api-phoneid-score for detailed API documentation.
     *
     * @param callback: Callback method to handle response.
     * @param phoneNumber: Phone number associated with the event.
     * @param ucid: A string that specifies one of the use case codes.
     * @param optionalParams: Dictionary of all optional parameters.
     * transaction.
     */
    score(callback, phoneNumber, ucid, optionalParams=null) {
        var params = {
            phone_number: phoneNumber,
            ucid: ucid
        };
        if (optionalParams != null) {
            params = Object.assign(params, optionalParams)
        }

        this.rest.execute(callback, "GET", this.scoreResource, params);
    }

    /***
     * The PhoneID Contact API delivers contact information related to the subscriber's phone number to provide another
     * set of indicators for established risk engines.
     *
     * See https://developer.telesign.com/docs/rest_api-phoneid-contact for detailed API documentation.
     *
     * @param callback: Callback method to handle response.
     * @param phoneNumber: Phone number associated with the event.
     * @param ucid: A string that specifies one of the use case codes.
     * @param optionalParams: Dictionary of all optional parameters.
     * transaction.
     */
    contact(callback, phoneNumber, ucid, optionalParams=null) {
        var params = {
            phone_number: phoneNumber,
            ucid: ucid
        };
        if (optionalParams != null) {
            params = Object.assign(params, optionalParams)
        }

        this.rest.execute(callback, "GET", this.contactResource, params);
    }

    /***
     * The PhoneID Live API delivers insights such as whether a phone is active or disconnected, a device is reachable
     * or unreachable and its roaming status.
     *
     * See https://developer.telesign.com/docs/rest_api-phoneid-live for detailed API documentation.
     *
     * @param callback: Callback method to handle response.
     * @param phoneNumber: Phone number associated with the event.
     * @param ucid: A string that specifies one of the use case codes.
     * @param optionalParams: Dictionary of all optional parameters.
     * transaction.
     */
    live(callback, phoneNumber, ucid, optionalParams=null) {
        var params = {
            phone_number: phoneNumber,
            ucid: ucid
        };
        if (optionalParams != null) {
            params = Object.assign(params, optionalParams)
        }

        this.rest.execute(callback, "GET", this.liveResource, params);
    }

    /***
     * The PhoneID Number Deactivation API determines whether a phone number has been deactivated and when, based on
     * carriers' phone number data and TeleSign's proprietary analysis.
     *
     * See https://developer.telesign.com/docs/rest_api-phoneid-number-deactivation for detailed API documentation.
     *
     * @param callback: Callback method to handle response.
     * @param phoneNumber: Phone number associated with the event.
     * @param ucid: A string that specifies one of the use case codes.
     * @param optionalParams: Dictionary of all optional parameters.
     * transaction.
     */
    numberDeactivation(callback, phoneNumber, ucid, optionalParams=null) {
        var params = {
            phone_number: phoneNumber,
            ucid: ucid
        };
        if (optionalParams != null) {
            params = Object.assign(params, optionalParams)
        }

        this.rest.execute(callback, "GET", this.numberDeactivationResource, params);
    }

}

module.exports = PhoneID;