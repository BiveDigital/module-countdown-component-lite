/**
 * @author denmozz(bivetech@pm.me)
 * @copyright Copyright (c) 2022 Bive Tech(https://github.com/BiveDigital)
 */
define([
    'mage/translate'
], function ($t) {
    'use strict';

    return [
        {label: $t('Days'), key: 'days', css: {'countdown-element-days': true}},
        {label: $t('Hours'), key: 'hours', css: {'countdown-element-hours': true}},
        {label: $t('Minutes'), key: 'minutes', css: {'countdown-element-minutes': true}},
        {label: $t('Seconds'), key: 'seconds', css: {'countdown-element-seconds': true}}
    ]
});
