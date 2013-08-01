var channel;

channel = call(function (operator) {
            setTimeout(function () {
                operator.resolve(1, 2, 3);
            }, 3000);
        })
        .then({
            done: function () {
                console.log('then done');
            }
        })
        .done(function () {
            console.log('done');
        })
        .lastly(function () {
            console.log('lastly');
        });
