sap.ui.define([

    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent"
  ], function (Controller, UIComponent) {
  
    "use strict";
   
    return Controller.extend("opensap.myapp.controller.BaseController", {
   
   
      getRouter: function() {
       
        return UIComponent.getRouterFor(this);
   
      },
   
      getModel: function(sName) {
     
        return this.getView().getModel(sName);
   
      },
   
      setModel: function(oModel, sName) {
   
        return this.getView().setModel(oModel, sName);
   
      },
   
      getResourceBundle: function () {
   
        return this.getOwnerComponent().getModel("i18n").getResourceBundle();
   
      },
   
      randomCalculations: function(fValue1, fValue2) {
   
   
      }
   
    });
   
  });