<?php


namespace Controllers\Traits;


use Sober\Controller\Utils;

trait SelfData {

    static $class;
    static $methods;
    static $dataSelf = [];
    static $dataMethods;
    static $staticMethods;

    public static function getSelfData() {
        self::$class = new \ReflectionClass(self::class);

        // Get all public methods from class
        self::$methods = self::$class->getMethods(\ReflectionMethod::IS_PUBLIC);

        // Remove __contruct, __init, __finalize and this class methods from self::$methods
        self::$methods = array_filter(self::$methods, function ($method) {
            return
                $method->class !== 'Sober\Controller\Controller' &&
                $method->name !== '__construct' &&
                $method->name !== '__before' &&
                $method->name !== '__after';
        });

        // Get all public static methods from class
        self::$staticMethods = self::$class->getMethods(\ReflectionMethod::IS_STATIC);

        // Remove self::$staticMethods from self::$methods using array_diff
        self::$dataMethods = array_diff(self::$methods, self::$staticMethods);

        // Filter the remaining data methods
        self::$dataMethods = array_filter(self::$dataMethods, function ($method) {
            return $method = $method->name;
        });

//        // For each method convert method name to snake case and add to data[key => value]
        foreach (self::$dataMethods as $method) {
            // Convert method name to snake case
            $var = Utils::convertToSnakeCase($method->name);
            $myself = new self();

            // Add var method name to data[]
            self::$dataSelf[$var] = $myself->{$method->name}();
        }

        return self::$dataSelf;
    }

}
