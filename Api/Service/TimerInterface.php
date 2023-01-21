<?php
/**
 * @author denmozz(bivetech@pm.me)
 * @copyright Copyright (c) 2022 Bive Tech(https://github.com/BiveDigital)
 */
declare(strict_types=1);

namespace Bive\CountdownComponentLite\Api\Service;

interface TimerInterface
{
    /**
     * @param string $date
     * @return int
     */
    public function getCurrentTimeDiff(string $date): int;
}
