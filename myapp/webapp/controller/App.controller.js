sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "opensap/myapp/model/formatter",
  "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"opensap/myapp/controller/BaseController",


], function (controller, MessageToast, formatter, Filter, FilterOperator,BaseController) {
  'use strict';


  return BaseController.extend("opensap.myapp.controller.App", {


    formatter: formatter,

    _mFilters: {
				cheap: [new sap.ui.model.Filter("UnitPrice", "LT", 15)],
				moderate: [new sap.ui.model.Filter("UnitPrice", "BT", 15, 27)],
				expensive: [new sap.ui.model.Filter("UnitPrice", "GT", 27)]
			},


    onQuickFilter: function(oEvent) {
				var sKey = oEvent.getParameter("key"),
					oFilter = this._mFilters[sKey],
					oList = this.byId("productsList"),
					oBinding = oList.getBinding("items");
				if (oFilter) {
					oBinding.filter(oFilter);
				} else {
					oBinding.filter([]);	
				}
			},
  
    onShowHello: function () {

      let oBundle = this.getView().getModel("i18n").getResourceBundle();
      let sRecipient = this.getView().getModel("helloPanel").getProperty("/recipient/name");
      let sMsg = oBundle.getText("helloMsg", [sRecipient]);

      MessageToast.show(sMsg);

    }
    ,

    onFilterProducts: function (oEvent) {

      let aFilter = []

      let sQuery = oEvent.getParameter("query")
      let oList = this.getView().byId("productsList")
      let oBinding = oList.getBinding("items");

      if (sQuery) {
        aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
      }
      oBinding.filter(aFilter);
    },

    onItemSelected: function (oEvent) {
      
      let oSelectedItem = oEvent.getParameter("listItem");
      let oContext = oSelectedItem.getBindingContext();
      let sPath = oContext.getPath();

      let oPanel = this.byId('productDetails');
      oPanel.bindElement({path: sPath});
      oPanel.setVisible(true)
    },

    onAdd: function() {
      this.getRouter().navTo("add");
    },



  })

});