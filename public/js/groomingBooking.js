mobiscroll.datepicker('#demo-booking-multiple', {
    controls: ['calendar', 'timegrid'],
    min: '2022-10-27T00:00',
    max: '2023-04-27T00:00',
    minTime: '08:00',
    maxTime: '19:59',
    stepMinute: 60,
    // example for today's labels and invalids
    labels: [{
        start: '2022-10-26',
        textColor: '#e1528f',
        title: '2 SPOTS'
    }],
    invalid: [{
        start: '2022-10-27T08:00',
        end: '2022-10-27T13:00'
    }, {
        start: '2022-10-27T15:00',
        end: '2022-10-27T17:00'
    }, {
        start: '2022-10-27T19:00',
        end: '2022-10-27T20:00'
    }]
});