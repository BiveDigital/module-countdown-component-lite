/**
 * @author denmozz(bivetech@pm.me)
 * @copyright Copyright (c) 2022 Bive Tech(https://github.com/BiveDigital)
 */
define([
    "underscore",
    "Magento_PageBuilder/js/utils/object"
],  (_, obj) => {
    'use strict';

    function DisplayElements() {}
    const _proto = DisplayElements.prototype;

    /**
     * Convert value to internal format
     *
     * @param data {object}
     * @param value {object}
     * @returns {string | object}
     */
    _proto.fromDom = (data, value) => {
        try {
            const elements = obj.get(data, 'elements') || false;
            if (!elements) {
                return data;
            }

            const elementsData = JSON.parse(elements);
            for (let element in elementsData) {
                obj.set(data, element, elementsData[element]);
            }
        } catch (e) {}

        return data;
    }

    /**
     * Convert value to knockout format
     *
     * @param {Object} data
     * @param {Object} config
     * @returns {string | object}
     */
    _proto.toDom = (data, config) => {
        obj.set(data, "elements", JSON.stringify({
            days: data.days,
            hours: data.hours,
            minutes: data.minutes,
            seconds: data.seconds
        }));

        return data;
    };

    return DisplayElements;
});
