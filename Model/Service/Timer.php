<?php
/**
 * @author denmozz(bivetech@pm.me)
 * @copyright Copyright (c) 2022 Bive Tech(https://github.com/BiveDigital)
 */
declare(strict_types=1);

namespace Bive\CountdownComponentLite\Model\Service;

use Bive\CountdownComponentLite\Api\Service\TimerInterface;
use Magento\Framework\Stdlib\DateTime\DateTime;

class Timer implements TimerInterface
{
    public function __construct(
        private readonly DateTime $dateTime
    ) {
    }

    /**
     * Return current timestamp with timezone offset.
     *
     * @return int
     */
    private function getCurrentTime(): int
    {
        return $this->dateTime->timestamp() + $this->dateTime->getGmtOffset();
    }

    /**
     * @inheritdoc
     */
    public function getCurrentTimeDiff(string $date): int
    {
        if (empty($date)) {
            return 0;
        }

        return $this->dateTime->gmtTimestamp($date) - $this->getCurrentTime();
    }
}
