let handler = {
    set: (obj, prop, value) => {
        obj[prop] = value
        renderValues();
        return true;
    }
}

const developer = new Proxy({
    name: 'Isa Gul',
    title: 'Frontend Developer'
}, handler);

const listenersInput = document.querySelectorAll('[data-value]');
listenersInput.forEach(listener => {
    const modelName = listener.dataset.value;
    listener.addEventListener('keyup', () => {
        developer[modelName] = listener.value;
    });
});


const renderValues = () => {
    const bindingsValue = Array.from(document.querySelectorAll('[data-binding]')).map(e => {
        return e.dataset.binding;
    });
    bindingsValue.forEach((binding) => {
        document.querySelector(`[data-binding='${binding}']`).innerHTML = developer[binding];
        document.querySelector(`[data-value='${binding}']`).value = developer[binding];
    });
};


renderValues();