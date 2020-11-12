<?php

declare(strict_types = 1);

namespace elevenone\View;

class Factory
{
    /**
     * @var array $config
     */
    protected $config = [];

    public function __construct(array $config)
    {
        $this->config = $config;
    }

    /**
     * Creates and returns a new View instance.
     *
     * @return View
     * @throws ViewException
     */
    public function makeRenderer(): View
    {
        $pathViews = $this->config['path_views'] ?? '';
        $renderer = new View;
        $renderer->setPathViews($pathViews);

        return $renderer;
    }
}
