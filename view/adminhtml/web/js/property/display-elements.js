/**
 * @author denmozz(bivetech@pm.me)
 * @copyright Copyright (c) 2022 Bive Tech(https://github.com/BiveDigital)
 */
define([], () => {
    "use strict";

    function DisplayElements() {}
    const _proto = DisplayElements.prototype;

    /**
     * Read display config from element
     *
     * @param {HTMLElement} element
     * @returns {string | object}
     */
    _proto.read = element => {
        try {
            const data = element.dataset.displayElements;
            return JSON.parse(data);
        } catch (e) {
            return {}
        }
    };

    return DisplayElements;
});

