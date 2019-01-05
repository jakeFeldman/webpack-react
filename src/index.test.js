document.body.innerHTML = '<div id="root"></div>';

describe('App', () => {
    it('renders', () => {
        require('./index');
        expect(document.getElementById('root').innerHTML.length).not.toBe(0);
    });
});
