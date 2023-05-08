sap.ui.define([
    "sap/ui/model/json/JSONModel"
  ], function(JSONModel) {
    "use strict";
  
    return JSONModel.extend("myapp.model.MyFormData", {
      constructor: function() {
        JSONModel.apply(this, arguments);
  
        var oData = {
          name: "",
          surname: "",
          email: "",
          state: "None"
        };
  
        this.setData(oData);
      },
  
      setProperty: function(sPath, oValue, oContext, bAsyncUpdate) {
        JSONModel.prototype.setProperty.apply(this, arguments);
  
        var oData = this.getData();
        this.setData(oData);
      }
    });
  });
  