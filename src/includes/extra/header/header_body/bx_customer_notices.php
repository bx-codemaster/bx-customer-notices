<?php
/**
 * Customer Notices Header Include
 * This file includes the necessary PHP logic to initialize the Customer Notices module.
 */

if (defined('MODULE_BX_CUSTOMER_NOTICES_STATUS') && 'True' == MODULE_BX_CUSTOMER_NOTICES_STATUS) {
  $customerNoticesManagerFile = DIR_FS_EXTERNAL . 'customer_notices/classes/CustomerNoticesManager.class.php';
  if (!class_exists('CustomerNoticesManager') && file_exists($customerNoticesManagerFile)) {
    require_once $customerNoticesManagerFile;
  }

  if (class_exists('CustomerNoticesManager')) {
    CustomerNoticesManager::run();
  }
}
