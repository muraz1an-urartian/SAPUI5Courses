sap.ui.define([
    "sap/ui/core/UIComponent",
    "myapp/model/MyFormData"
  ], function(UIComponent, MyFormData) {
    "use strict";
  
    return UIComponent.extend("myapp.Component", {
      metadata: {
        manifest: "json"
      },
  
      init: function() {
        UIComponent.prototype.init.apply(this, arguments);
  
        var oData = new MyFormData();
        this.setModel(oData);
      }
    });
  });