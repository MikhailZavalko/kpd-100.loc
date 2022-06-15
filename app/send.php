<?php
// Файлы phpmailer
require 'class.phpmailer.php';
require 'class.smtp.php';

$form_subject = $_POST['form_subject'];
$name = $_POST['name'];
$number = $_POST['number'];
$email = $_POST['email'];

// Настройки
$mail = new PHPMailer;
$mail->isSMTP();
$mail->Host = 'smtp.yandex.ru';
$mail->SMTPAuth = true;
$mail->Username = 'sendallmailrus';
$mail->Password = 'QWEasd123';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
$mail->setFrom('sendallmailrus@yandex.ru');
$mail->addAddress('s.furs@list.ru');
$mail->addAddress('hadesyara@gmail.com');
$mail->addAddress('nikdv27@bk.ru');
$method = $_SERVER['REQUEST_METHOD'];

//Script Foreach
$c = true;
if ($method === 'POST') {

    $project_name = trim($_POST["project_name"]);
    $admin_email  = trim($_POST["admin_email"]);
    $form_subject = trim($_POST["form_subject"]);

    foreach ($_POST as $key => $value) {
        if ($value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject") {
            $message .= "
            " . (($c = !$c) ? '<tr>' : '<tr style="background-color: #f8f8f8;">') . "
            <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
            <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
        </tr>
        ";
        }
    }
}

$message = "<table style='width: 100%;'>$message 
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Откуда</b></td>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><a href='http://ipgeobase.ru/?address=" . $_SERVER['REMOTE_ADDR'] . "' target='_blank'>посмотреть</a></td></table>";

// Письмо
$mail->isHTML(true);
$mail->Subject = "$form_subject"; // Заголовок письма
$mail->Body    = "$message"; // Текст письма

// Результат
if (!$mail->send()) {
    echo 'Письмо не может быть отправлено.';
    echo 'Ошибка отправки письма: ' . $mail->ErrorInfo;
} else {
    echo 'Письмо успешно отправлено';
}
