/**
 * @author denmozz(bivetech@pm.me)
 * @copyright Copyright (c) 2022 Bive Tech(https://github.com/BiveTech)
 */
define([
    'jquery',
    'Magento_PageBuilder/js/content-type/preview',
    'Bive_CountdownComponentLite/js/model/elements',
    'Bive_CountdownComponentLite/js/content-type/countdown/appearance/default/widget'
], function ($, PreviewBase, elements, widget) {
    'use strict';
    var $super;

    function Preview(parent, config, stageId) {
        PreviewBase.call(this, parent, config, stageId);
    }

    const _proto = Preview.prototype = Object.create(PreviewBase.prototype);

    /**
     * @return array
     */
    _proto.getAvailableElements = function () {
        return elements.filter(item => this.previewData[item.key]() === '1');
    };

    /**
     * @param element
     */
    _proto.onAfterRender = function (element) {
        setTimeout(() => widget({}, $(element)), 1500)
    };

    return Preview;
});
