

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

// Start your code here
// You may move this JS to another file if you wish

errorBtns.forEach(button => {
    button.addEventListener('click', function () {
        switch (this.textContent) {
            case 'Console Log':
                console.log('Console Log Example');
                break;
            case 'Console Error':
                console.error('Error example!');
                break;
            case 'Console Count':
                console.count('Click count');
                break;
            case 'Console Warn':
                console.warn('Warning example!');
                break;
            case 'Console Assert':
                console.assert(document.querySelector('output').textContent !== '', 'No result to display!');
                break;
            case 'Console Clear':
                console.clear();
                break;
            case 'Console Dir':
                console.dir(document.querySelector('form'));
                break;
            case 'Console dirxml':
                console.dirxml(document.querySelector('form'));
                break;
            case 'Console Group Start':
                console.group('Console Group');
                console.log('Grouped Log 1');
                console.log('Grouped Log 2');
                break;
            case 'Console Group End':
                console.groupEnd();
                break;
            case 'Console Table':
                console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);
                break;
            case 'Start Timer':
                console.time('Processing Time');
                break;
            case 'End Timer':
                console.timeEnd('Processing Time');
                break;
            case 'Console Trace':
                console.trace('Trace Example');
                break;
            case 'Trigger a Global Error':
                throw new Error('Simulated global error');
                break;
        }
    });
});