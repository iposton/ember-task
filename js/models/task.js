Tasks.Task = DS.Model.extend({
    title: DS.attr('string'),
    note: DS.attr('string'),
    isDone: DS.attr('boolean')
});

Tasks.Task.FIXTURES = [
    {
        id: 1,
        title: 'Bring Kids to School',
        note: 'Bring kids to school on Monday',
        isDone: true
    },
    {
        id: 2,
        title: 'Family Metting',
        note: 'Family meeting with boss my wife',
        isDone: false
    },
    {
        id: 3,
        title: 'Dinner With Parents',
        note: 'Dinner with parents on Wed',
        isDone: false
    }
];