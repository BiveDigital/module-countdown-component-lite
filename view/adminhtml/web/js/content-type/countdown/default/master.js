/**
 * @author denmozz(bivetech@pm.me)
 * @copyright Copyright (c) 2022 Bive Tech(https://github.com/BiveDigital)
 */
define([
    'ko',
    'Magento_PageBuilder/js/content-type/master',
    'Bive_CountdownComponentLite/js/model/elements'
], function (ko, MasterBase, elements) {
    'use strict';

    function Master(contentType, observableUpdater) {
        MasterBase.call(this, contentType, observableUpdater);
    }

    const _proto = Master.prototype = Object.create(MasterBase.prototype);

    /**
     * @returns array
     */
    _proto.getAvailableElements = function () {
        const dataStore = this.contentType.dataStore;
        return elements.filter(item => dataStore.get(item.key) === '1');
    };

    return Master;
});
