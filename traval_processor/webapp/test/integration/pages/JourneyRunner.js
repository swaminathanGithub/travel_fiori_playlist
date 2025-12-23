sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"travalprocessor/test/integration/pages/TravelList",
	"travalprocessor/test/integration/pages/TravelObjectPage",
	"travalprocessor/test/integration/pages/BookingObjectPage"
], function (JourneyRunner, TravelList, TravelObjectPage, BookingObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('travalprocessor') + '/test/flp.html#app-preview',
        pages: {
			onTheTravelList: TravelList,
			onTheTravelObjectPage: TravelObjectPage,
			onTheBookingObjectPage: BookingObjectPage
        },
        async: true
    });

    return runner;
});

