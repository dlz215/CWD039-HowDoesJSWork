// "JS is a single-threaded language that can be non-blocking"

// WHAT IS A PROGRAM?
// allocate memory
// parse and execute

// JAVASCRIPT ENGINE
// Reads JS, converts to machine-executable instructions
// Chrome: V8
// Engine consists of two parts: memory heap and call stack
// Memory Heap: memory allocation

// CALL STACK: where code is read and executed
function foo(b) {
    let a = 10;
    return a + b + 11;
}

function bar(x) {
    let y = 3;
    return foo(x * y);
}

const baz = bar(7) // assigns 42 to baz

// Memory leak: large amount of memory heap taken up with unused variables
// global variables bad

// Single-threaded: only one call stack
// potential issues with multi-threaded languages: deadlocks
// Synchronous: code executes line by line, one line doesn't execute until prior is finished

// Stack overflow / recursion

// NON-BLOCKING

// JS RUN-TIME ENVIRONMENT
// Web APIs, callback queue, event loop
// Web APIs: DOM (document), AJAX (XMLHttpRequest), Timeout (setTimeout)

// SET TIMEOUT
const fn1 = () => console.log('1');
const fn2 = () => console.log('2');
const fn3 = () => console.log('3');

fn1();
setTimeout(fn2, 2000);
fn3();

// When call stack gets to setTimeout(), Web API is triggered and setTimeout() is removed from call stack
// Call stack executes next item
// Web API runs 2 second timer
// After timer expires, callback fn of setTimeout() (in this case console.log) is sent to callback  queue

// Event Loop: constantly checks if call stack is empty and ready for another item
// If call stack is empty, event loops checks callback queue

// Callback queue also gets callback functions from event listeners (eg, onClick, onLoad)














