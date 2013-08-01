var call;

call = (function () {
    var slice, nextTick, apply, append;
    
    slice = Array.prototype.slice;
    
    nextTick = typeof process === 'object' && typeof process.nextTick === 'function' ? process.nextTick : function nextTick(closure) {
        setTimeout(closure);
    };
    
    apply = function apply(thens, property, args) {
        thens.forEach(function(then) {
            var fn;
            
            fn = then[property];
            
            if (typeof fn === 'function') {
                fn.apply(null, args);
            }
        });
        
        if (property !== 'lastly') {
            apply(thens, 'lastly', args);
        }
    };
    
    append = function append(thens, then, completed, args) {
        var then;
    
        if (completed === undefined) {
            thens.push(then);
        } else {
            apply([then], completed ? 'done' : 'fail', args);
        }
    };
    
    return function call(fn, delay) {
        var thens, operator, completed, args;
        
        thens = [];
        
        operator = {
            resolve: function resolve() {
                completed = true;
                args = slice.call(arguments);
                apply(thens, 'done', args);
            },
            reject: function reject() {
                completed = false;
                args = slice.call(arguments);
                apply(thens, 'fail', args);
            },
            channel: {
                done: function done(fn) {
                    append(thens, {
                        done: fn
                    }, completed, args);
                    
                    return this;
                },
                fail: function fail(fn) {
                    append(thens, {
                        fail: fn
                    }, completed, args);
                    
                    return this;
                },
                lastly: function lastly(fn) {
                    append(thens, {
                        lastly: fn
                    }, completed, args);
                    
                    return this;
                },
                then: function then(callbacks) {
                    append(thens, callbacks, completed, args);
                    return this;
                }
            }
        };
        
        Object.freeze(operator.channel);
        Object.freeze(operator);
        
        nextTick(function () {
            fn(operator);
        });
        
        return operator.channel;
    };
}());
