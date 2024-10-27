(function(global) {
    const wick = function(selector, type) {
        if (type === "words") {
            return new wick.fn.initWords(selector);
        }
        return new wick.fn.init(selector);
    };

    wick.fn = wick.prototype = {
        constructor: wick,
        // Standard selector initialization
        init: function(selector) {
            this.elements = document.querySelectorAll(selector);
            return this;
        },
        // Word selector initialization
        initWords: function(selector) {
            const elements = document.querySelectorAll(selector);
            const wordElements = [];
            elements.forEach(element => {
                const words = element.textContent.split(' ');
                element.innerHTML = ''; // Clear the content
                words.forEach(word => {
                    const span = document.createElement('span');
                    span.textContent = word + ' ';
                    span.classList.add('word');
                    element.appendChild(span);
                    wordElements.push(span);
                });
            });
            this.elements = wordElements;
            return this;
        },
        // Custom methods for manipulating elements
        css: function(property, value) {
            this.elements.forEach(element => {
                element.style[property] = value;
            });
            return this;
        },
        addClass: function(className) {
            this.elements.forEach(element => {
                element.classList.add(className);
            });
            return this;
        },
        toggleClass: function(className) {
            this.elements.forEach(element => {
                element.classList.toggle(className);
            });
            return this;
        },
        underline: function() {
            this.elements.forEach(element => {
                element.style.textDecoration = 'underline';
            });
            return this;
        },
        on: function(event, handler) {
            this.elements.forEach(element => {
                element.addEventListener(event, handler);
            });
            return this;
        },
        // New method to underline any specific word dynamically
        underlineWord: function(element) {
            element.style.textDecoration = 'underline';
            return this;
        }
    };

    wick.fn.init.prototype = wick.fn;
    wick.fn.initWords.prototype = wick.fn;

    global.wick = wick;

})(window);