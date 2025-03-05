<?php
require_once "define.php";

class dao {
    
    protected static $instance = null;
    protected static $statement = null;
    
    public static function open() {
        if( is_null( self :: $instance ) ) {
            self :: $instance = new PDO( DSN, DB_USER, DB_PASS );
        }
    }
    
    public static function close() {
        if( ! is_null( self :: $instance ) ) {
            self :: $statement = null;
            self :: $instance = null;
        }
    }
    
    
    public function query( $sql ) {
        self::$statement = self :: $instance->query( $sql ); 
    }
    
    public function fetch() {
        if( ! is_null( self :: $statement ) ) {
            $result = [];
            while( $row = self :: $statement -> fetch( PDO::FETCH_ASSOC ) ) {
                $result[] = $row;
            }
            return $result;
        }
    }
}
?>