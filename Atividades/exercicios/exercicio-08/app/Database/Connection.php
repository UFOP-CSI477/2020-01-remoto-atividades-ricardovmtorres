<?php

namespace App\Database;

class Connection
{
    private $adapter;
    //private static $adapter

    public function __construct(AdapterInterface $adapter)
    {
        $this->adapter = $adapter;
        //static::adapter = $adapter;
    }

    public function getAdapter()
    {
        return $this->adapter;
    }
}