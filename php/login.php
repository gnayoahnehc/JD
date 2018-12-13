<?php
	$value=$_POST['value'];

	$arr=['admin'];

	// 判断 传来的值是否已存在
	if(in_array($value,$arr)){
		// 已存在
		echo 'y';
	}else{
		//不存在
		echo "n";
	}
?>