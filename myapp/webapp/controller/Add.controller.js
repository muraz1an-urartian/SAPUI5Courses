sap.ui.define([
	"opensap/myapp/controller/BaseController",
	"sap/ui/core/routing/History"
], function(BaseController, History) {
	"use strict";

	return BaseController.extend("opensap.myapp.controller.Add", {

		
		
		onInit: function() {
			this.getRouter().getRoute("add").attachPatternMatched(this._onRouteMatched, this);
		},

		

		_onRouteMatched: function() {
			var oModel = this.getModel();
			oModel.metadataLoaded().then(this._onMetadataLoaded.bind(this));
		},

		_onMetadataLoaded: function () {

			// create default properties
			var oProperties = {
				ProductID: "" + parseInt(Math.random() * 1000000000, 10),
				TypeCode: "PR",
				TaxTarifCode: 1,
				MeasureUnit: "EA"
			};

			// create new entry in the model
			this._oContext = this.getModel().createEntry("/Products", {
				properties: oProperties
			});
			
			// bind the view to the new entry
			this.getView().setBindingContext(this._oContext);
		},

		onNavBack : function() {

			var oHistory = History.getInstance(),
				sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				history.go(-1);
			} else {
				var bReplace = true;
				this.getRouter().navTo("app", {}, bReplace);
			}
		}

	});
});
