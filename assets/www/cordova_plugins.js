cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-telerik-imagepicker.ImagePicker",
      "file": "plugins/cordova-plugin-telerik-imagepicker/www/imagepicker.js",
      "pluginId": "cordova-plugin-telerik-imagepicker",
      "clobbers": [
        "plugins.imagePicker"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-telerik-imagepicker": "2.3.3"
  };
});