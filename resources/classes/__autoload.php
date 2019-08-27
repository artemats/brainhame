<?php

namespace Theme;

//======================================================================================================================
//ini_set('display_errors', 1);
//error_reporting(E_ALL);
//======================================================================================================================

//use Theme\helpers\AcfFunctions;
//
//OptionPageAcf::init();
//RegisterPostType::init();
//SetupTheme::init();
//BladeDirectives::init();
//WooExtensions::init();
//SageAdminPages::init();
//AcfExtensions::init();
//
//WpmExtension::init();
//BrandExtension::init();
//
//new DancelegendAjax();

use HaydenPierce\ClassFinder\ClassFinder;

class __autoload {
    public function __construct() {
        $classes = ClassFinder::getClassesInNamespace(__NAMESPACE__);
        foreach($classes as $class) {
            if ( $class !== __CLASS__ ) {
                new $class();
            }
        }
    }
}

new __autoload();
