<?php


class MyPDO
{
    protected static $instance;
    protected $pdo;

    public function __construct()
    {
        $opt = array(
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => FALSE,
        );
        $dsn = 'mysql:host=localhost;dbname=FinalneZadanie';
        $this->pdo = new PDO($dsn, "xchoma", "sRknjGTdYiJITdI2000.", $opt);

    }

    // a classical static method to make it universally available
    public static function instance()
    {
        if (self::$instance === null) {
            self::$instance = new self;
        }
        return self::$instance;
    }

    public function __call($method, $args)
    {
        return call_user_func_array(array($this->pdo, $method), $args);
    }

    public function run($sql, $args = [])
    {
        if (!$args) {
            return $this->query($sql);
        }
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute($args);
        return $stmt;
    }
}
