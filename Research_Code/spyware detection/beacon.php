<?php

		$fullpath  = $_SERVER['REQUEST_URI'];

		$filename  = basename($fullpath);

		$ip        = $_SERVER["REMOTE_ADDR"]; // Returns the IP address from where the user is viewing the current page

		$useragent = $_SERVER["HTTP_USER_AGENT"];


?>