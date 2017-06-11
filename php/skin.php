<?php 
	// 读取json 并返回给浏览器
	// echo  file_get_contents('data/info.json');

// 一次返回一个数据
   $str = file_get_contents('../json/c.json');
   $arr = json_decode($str);
   $randomkey = array_rand($arr,1);
   $oneobj = $arr[$randomkey];
    echo  json_encode($oneobj,true);
 ?>