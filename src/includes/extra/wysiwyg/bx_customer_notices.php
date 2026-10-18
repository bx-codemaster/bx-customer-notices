<?php
/**
 * Customer Notices WYSIWYG Include
 * This file configures the WYSIWYG editor for the Customer Notices module.
 * WYSIWYG editor customer_notices textarea named customer_notices[langID]
 */
  switch($type) {
    case 'customer_notices':
      $editorName = 'description['.$language_id.']';
      $default_editor_height = 400;
      break;
  }
