<?php

namespace App\Database;

class AdapterSQLite implements AdapterInterface
{

    public function open()
    {
        echo "<br> AdapterAQLite: open()<br>";
    }
    public function close()
    {
        echo "<br> AdapterAQLite: close()<br>";
    }
    public function get()
    {
        echo "<br> AdapterAQLite: get()<br>";
    }
}