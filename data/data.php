<?php
//
// MESHカスタムタグからのAjax通信を受け取って
// DBへ保存するファイル
//
require_once "define.php";
// var_dump(file_get_contents("php://input"));
if( ! $meshData = filter_input(INPUT_POST, "sendData") ) {
    print 'Not MESH Send Data';
    exit;
}
//$meshData= '{"value":"MESH Send Data","id":0,"count":111}';
$data = json_decode( $meshData );
// 今日の日付
// レコードの検索に使用
$current_date = date( 'Y-m-d' );


$instance = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
if( $instance -> connect_error ) {
    print 'DB Connect Error';
    exit;
}

$instance -> set_charset('utf8');

$selectSQL = "SELECT id FROM ". MESH;

if( $result = $instance -> query( $selectSQL ) ) {
    // 新規
    $values = "";
    $values .= "{$data -> id},";
    $values .= "{$data -> num}";
    $calumns = "( connector_id, num )";
    $sql = "INSERT INTO " . MESH . $calumns;
    $sql .= " VALUES ( ". $values ." )";
    }
    var_dump($sql);
    
    if( ! $instance -> query( $sql ) ) {
        exit;
    }
else {
    exit;    
}

$instance -> close();

?>