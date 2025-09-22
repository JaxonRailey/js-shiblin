/**
 * Aggiunge una classe a un elemento.
 * @param {string} className - La classe da aggiungere.
 * @returns {Node} L'elemento stesso per il chaining.
 */
Node.prototype.addClass = function (className) {
    this.classList.add(className);
    return this;
};

/**
 * Rimuove una classe da un elemento.
 * @param {string} className - La classe da rimuovere.
 * @returns {Node} L'elemento stesso per il chaining.
 */
Node.prototype.removeClass = function (className) {
    this.classList.remove(className);
    return this;
};

/**
 * Aggiunge o rimuove una classe da un elemento.
 * @param {string} className - La classe da toggle.
 * @returns {Node} L'elemento stesso per il chaining.
 */
Node.prototype.toggleClass = function (className) {
    this.classList.toggle(className);
    return this;
};

/**
 * Restituisce o imposta la classe di un elemento.
 * @param {string} [className] - Se fornita, imposta la classe. Se non fornita, restituisce la classe corrente.
 * @returns {Node|string} L'elemento stesso per il chaining o la classe corrente.
 */
Node.prototype.class = function (className) {
    if (className === undefined) return this.className;
    this.className = className;
    return this;
};

/**
 * Restituisce o imposta il contenuto HTML di un elemento.
 * @param {string} [content] - Se fornito, imposta il contenuto HTML. Se non fornito, restituisce il contenuto corrente.
 * @returns {Node|string} L'elemento stesso per il chaining o il contenuto HTML corrente.
 */
Node.prototype.html = function (content) {
    if (content === undefined) return this.innerHTML;
    this.innerHTML = content;
    return this;
};

/**
 * Restituisce o imposta il contenuto testuale di un elemento.
 * @param {string} [content] - Se fornito, imposta il contenuto testuale. Se non fornito, restituisce il contenuto corrente.
 * @returns {Node|string} L'elemento stesso per il chaining o il contenuto testuale corrente.
 */
Node.prototype.text = function (content) {
    if (content === undefined) return this.textContent;
    this.textContent = content;
    return this;
};

/**
 * Restituisce o imposta il valore di un attributo.
 * @param {string} name - Il nome dell'attributo.
 * @param {string} [value] - Se fornito, imposta il valore dell'attributo. Se non fornito, restituisce il valore corrente.
 * @returns {Node|string} L'elemento stesso per il chaining o il valore dell'attributo corrente.
 */
Node.prototype.attr = function (name, value) {
    if (value === undefined) return this.getAttribute(name);
    this.setAttribute(name, value);
    return this;
};

/**
 * Rimuove un attributo da un elemento.
 * @param {string} name - Il nome dell'attributo da rimuovere.
 * @returns {Node} L'elemento stesso per il chaining.
 */
Node.prototype.removeAttr = function (name) {
    this.removeAttribute(name);
    return this;
};

/**
 * Aggiunge o rimuove un attributo da un elemento.
 * @param {string} name - Il nome dell'attributo da toggle.
 * @param {string} value - Il valore da impostare se l'attributo non esiste.
 * @returns {Node} L'elemento stesso per il chaining.
 */
Node.prototype.toggleAttr = function (name, value) {
    if (this.hasAttribute(name)) {
        this.removeAttribute(name);
    } else {
        this.setAttribute(name, value);
    }
    return this;
};

/**
 * Trova il primo elemento che corrisponde al selettore all'interno del nodo.
 * @param {string} selector - Il selettore CSS.
 * @returns {Node|null} L'elemento trovato o null.
 */
Node.prototype.find = function (selector) {
    return this.querySelector(selector);
};

/**
 * Aggiunge un event listener a un elemento.
 * @param {string} type - Il tipo di evento (es. 'click', 'change').
 * @param {Function} callback - La funzione da eseguire quando l'evento viene triggerato.
 * @returns {Node} L'elemento stesso per il chaining.
 */
Node.prototype.event = function (type, callback) {
    this.addEventListener(type, callback);
    return this;
};

/**
 * Applica i metodi a tutti gli elementi di una NodeList.
 */
NodeList.prototype.addClass = function (className) {
    this.forEach(element => element.addClass(className));
    return this;
};

NodeList.prototype.removeClass = function (className) {
    this.forEach(element => element.removeClass(className));
    return this;
};

NodeList.prototype.toggleClass = function (className) {
    this.forEach(element => element.toggleClass(className));
    return this;
};

NodeList.prototype.class = function (className) {
    if (className === undefined) return this[0]?.className || null;
    this.forEach(element => element.class(className));
    return this;
};

NodeList.prototype.html = function (content) {
    if (content === undefined) return this[0]?.innerHTML || null;
    this.forEach(element => element.html(content));
    return this;
};

NodeList.prototype.text = function (content) {
    if (content === undefined) return this[0]?.textContent || null;
    this.forEach(element => element.text(content));
    return this;
};

NodeList.prototype.attr = function (name, value) {
    if (value === undefined) return this[0]?.getAttribute(name) || null;
    this.forEach(element => element.setAttribute(name, value));
    return this;
};

NodeList.prototype.removeAttr = function (name) {
    this.forEach(element => element.removeAttribute(name));
    return this;
};

NodeList.prototype.toggleAttr = function (name, value) {
    this.forEach(element => element.toggleAttr(name, value));
    return this;
};

/**
 * Trova il primo elemento che corrisponde al selettore all'interno di ogni nodo della NodeList.
 * @param {string} selector - Il selettore CSS.
 * @returns {NodeList} Una lista di elementi trovati.
 */
NodeList.prototype.find = function (selector) {
    const results = [];
    this.forEach(element => {
        const found = element.querySelector(selector);
        if (found) results.push(found);
    });
    return results;
};

/**
 * Aggiunge un event listener a tutti gli elementi di una NodeList.
 * @param {string} type - Il tipo di evento (es. 'click', 'change').
 * @param {Function} callback - La funzione da eseguire quando l'evento viene triggerato.
 * @returns {NodeList} La NodeList stessa per il chaining.
 */
NodeList.prototype.event = function (type, callback) {
    this.forEach(element => element.event(type, callback));
    return this;
};

/**
 * Aggiunge un event listener al documento.
 * @param {string} type - Il tipo di evento (es. 'click', 'change').
 * @param {Function} callback - La funzione da eseguire quando l'evento viene triggerato.
 * @returns {Document} Il documento stesso per il chaining.
 */
Document.prototype.event = function (type, callback) {
    this.addEventListener(type, callback);
    return this;
};

/**
 * Crea un nuovo elemento HTML.
 * @param {string} tagName - Il nome del tag dell'elemento.
 * @param {Object} [attributes={}] - Un oggetto con gli attributi da impostare.
 * @param {Array|string} [children=[]] - Un array di elementi figli da aggiungere o una stringa HTML per innerHTML.
 * @returns {HTMLElement} L'elemento creato.
 */
const $create = (tagName, attributes = {}, children = []) => {
    const element = document.createElement(tagName);

    Object.entries(attributes).forEach(([attr, value]) => {
        if (['innerHTML', 'html'].includes(attr)) {
            element.innerHTML = value;
        } else {
            element.setAttribute(attr, value);
        }
    });

    if (Array.isArray(children)) {
        children.forEach(child => element.appendChild(child));
    }

    return element;
};

/**
 * Seleziona un singolo elemento dal DOM.
 * @param {string} selector - Il selettore CSS.
 * @returns {Node|null} L'elemento selezionato o null.
 */
const $one = (selector) => document.querySelector(selector);

/**
 * Seleziona tutti gli elementi dal DOM che corrispondono al selettore.
 * @param {string} selector - Il selettore CSS.
 * @returns {NodeList} Una lista di elementi selezionati.
 */
const $all = (selector) => document.querySelectorAll(selector);

/**
 * Gestisce lo storage locale.
 */
const storage = {
    /**
     * Salva un valore nello storage.
     * @param {string} key - La chiave.
     * @param {*} value - Il valore da salvare.
     */
    set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),

    /**
     * Recupera un valore dallo storage.
     * @param {string} key - La chiave.
     * @returns {*} Il valore recuperato.
     */
    get: (key) => JSON.parse(localStorage.getItem(key)),

    /**
     * Rimuove un valore dallo storage.
     * @param {string} key - La chiave.
     */
    remove: (key) => localStorage.removeItem(key),

    /**
     * Svuota tutto lo storage.
     */
    clear: () => localStorage.clear(),
};

/**
 * Gestisce le richieste HTTP.
 */
const request = (() => {

    const globalHeaders = {};

    let beforeRequestCallback = () => {};
    let afterRequestCallback = () => {};

    return {

        setGlobalHeaders: (headers) => {
            Object.assign(globalHeaders, headers);
        },

        removeGlobalHeaders: (...keys) => {
            keys.forEach(key => delete globalHeaders[key]);
        },

        beforeRequest: (callback) => {
            beforeRequestCallback = callback;
        },

        afterRequest: (callback) => {
            afterRequestCallback = callback;
        },

        send: (config) => {
            const { url, method = 'GET', data = null, headers = {}, responseType = 'json' } = config;
            const mergedHeaders = { ...globalHeaders, ...headers };
            const options = { method, headers: mergedHeaders };

            if (data) {
                if (data instanceof FormData) {
                    options.body = data;
                    // Non impostare Content-Type per FormData, il browser lo gestisce automaticamente
                } else if (mergedHeaders['Content-Type'] === 'application/x-www-form-urlencoded') {
                    options.body = new URLSearchParams(data).toString();
                } else {
                    // Imposta Content-Type solo se non è già impostato
                    if (!mergedHeaders['Content-Type']) {
                        options.headers['Content-Type'] = 'application/json';
                    }
                    options.body = JSON.stringify(data);
                }
            }

            beforeRequestCallback();

            const promise = fetch(url, options)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
                    }

                    const contentType = response.headers.get('content-type') || '';

                    switch (responseType) {
                        case 'json':
                            // Controlla se la risposta contiene JSON
                            if (contentType.includes('application/json') || contentType.includes('text/json')) {
                                return response.json();
                            }
                            // Se non è JSON ma la risposta è vuota, restituisci un oggetto vuoto
                            return response.text().then(text => {
                                if (!text.trim()) return {};
                                try {
                                    return JSON.parse(text);
                                } catch (e) {
                                    console.warn('Expected JSON but got:', text);
                                    return { success: true, data: text };
                                }
                            });
                        case 'blob':
                            return response.blob();
                        case 'text':
                            return response.text();
                        case 'formData':
                            if (contentType.includes('multipart/form-data')) {
                                return response.formData();
                            }
                            throw new Error(`Expected form data response but got ${contentType}`);
                        default:
                            throw new Error(`Unsupported responseType: ${responseType}`);
                    }
                })
                .catch(error => {
                    console.error('Request error:', error);
                    throw error;
                })
                .finally(() => {
                    afterRequestCallback();
                });

            return promise;
        },

        async: async (config) => {
            return this.send(config);
        }
    };
})();
