<?php

require __DIR__ . '/vendor/autoload.php';

$app_id = 'app-id';
$app_key = 'app-key';
$app_secret = 'app-secret';
$app_cluster = 'mt1';
$app_host = 'localhost';
$app_port = 6001;

$pusher = new Pusher\Pusher($app_key, $app_secret, $app_id, [
    'cluster' => $app_cluster,
    'useTLS' => false,
    'host' => $app_host,
    'port' => $app_port,
]);

// Create a properly structured notification object
$notificationData = [
    'notification' => [
        'id' => uniqid(),
        'source' => 'System',
        'message' => 'This is a test notification from PHP!',
        'created_at' => date('c'),  // ISO 8601 format (2023-07-21T10:30:45+00:00)
        'type' => 'info',  // Changed from notificationType to type
        // avatar is optional - will use icon based on type if not provided
        'actions' => [
            ['label' => 'View', 'backgroundColor' => '#3b82f6', 'url' => '#'],
            ['label' => 'Dismiss', 'backgroundColor' => '#6b7280', 'url' => '#']
        ]
    ]
];

$result = $pusher->trigger('notifications', 'NotificationEvent', $notificationData);

// Debug output
echo 'Pusher result: ';
var_dump($result);
echo "\nSent notification data: ";
var_dump($notificationData);
