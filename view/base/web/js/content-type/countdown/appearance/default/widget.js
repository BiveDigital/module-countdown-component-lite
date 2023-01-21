/**
 * @author denmozz(bivetech@pm.me)
 * @copyright Copyright (c) 2022 Bive Tech(https://github.com/BiveDigital)
 */
define([
    'jquery',
    'underscore'
], function ($, _) {
    'use strict';

    const API_ENDPOINT = '/rest/V1/countdown/service/timer/current-time-diff';

    const convert = diff => {
        const days = Math.floor(diff / (60 * 60 * 24));
        const hours = Math.floor((diff / (60 * 60)) % 24);
        const minutes = Math.floor((diff  / 60) % 60);
        const seconds = Math.floor(diff % 60);

        return {diff, days, hours, minutes, seconds};
    }

    const updateRefs = (timer, refs) => {
        Object.keys(refs)
            .filter(key => refs[key] && timer[key] > 0)
            .forEach(key => {
                refs[key].find('[data-element="number"]').html(
                    timer[key] < 10 ? `0${timer[key]}` : timer[key]
                );
            });
    }

    return (config, element) => {
        const date = element.data('date');
        if (_.isEmpty(date)) {
            return;
        }

        const refs = {
            hours: element.find('.countdown-element-hours'),
            days: element.find('.countdown-element-days'),
            minutes: element.find('.countdown-element-minutes'),
            seconds: element.find('.countdown-element-seconds'),
        };

        element.addClass('state-loading');
        const $req = $.get(API_ENDPOINT, {date: date});
        $req.done(diff => {
            element.removeClass('state-loading')
                .addClass('state-loaded');

            if (!diff) {
                return;
            }

            updateRefs(convert(diff), refs);

            const dynamicValue = parseInt(element.data('dynamic'));
            if (isNaN(dynamicValue) || dynamicValue === 0) {
                return;
            }

            setInterval(() => {
                updateRefs(convert(diff), refs);
                diff--;
            }, 1000);
        });
    }
});
