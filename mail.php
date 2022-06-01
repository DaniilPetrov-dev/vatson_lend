<?php

$recepient = "vityacool@gmail.com";
$sitename = "PAPA WATSON";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$date = trim($_POST["date"]);
$quantity = trim($_POST["quantity"]);
$message = trim($_POST["message"]);
$message = "Имя: $name \nТелефон: $phone \Дата: $date \nКоличество человек: $quantity \nТекст: $message";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");