<?php
//
// select.php
// 
// 定数ファイル
require_once "define.php";

$data = [];
$where = "";

if( ! is_null( filter_input( INPUT_GET, "connector_id" ) ) ) {
    $where = " WHERE ";
    $data[ "connector_id" ] = filter_input( INPUT_GET, "connector_id" );
}

if( ! is_null( filter_input( INPUT_GET, "created_at" ) ) ) {
    $where = " WHERE ";
    $data[ "created_at" ] = "'". filter_input( INPUT_GET, "created_at" ) ."'";
}

$params = [];
foreach( $data as $k => $v ) {
    $params[] = $k ." = ". $v;
}
$where .= implode( " AND ", $params );

$instance = new mysqli( DB_HOST, DB_USER, DB_PASS, DB_NAME  );
if( $instance -> connect_error ) {
    print "DB Connect Error";
    exit;
}
$instance -> set_charset( "utf8" );

$sql = "SELECT num FROM ". MESH . $where;

// var_dump($sql);

if( $result = $instance -> query( $sql ) ) {
    if( $result -> num_rows ) {
        $response = [];
        while( $row = $result -> fetch_assoc() ) {
            if( $result -> num_rows > 1 ) {
                $response[] = $row;
            }
            else {
                $response = $row;
            }
        }
        $json = json_encode( $response );
    }
    else {
        $e = [
            "id" => null,
            "connector_id" => null,
            "count" => 0,
        ];
        $json = json_encode( $e, JSON_FORCE_OBJECT );
    }
}

if( ! is_null( $callback = filter_input( INPUT_GET, "callback") ) ) {
    print $callback ."(". $json .")";
}
else {
    print $json;
}
?>