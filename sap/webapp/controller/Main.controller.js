sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "myapp/model/MyFormData",
], function (Controller, MyFormData) {
    "use strict";

    return Controller.extend("myapp.controller.Main", {
        
        
        onInputChange: function () {
            

            

            // console.log(oModel.aBindings[0].oValue)

        },
        onPressSubmit: function () {
            let oModel = this.getView().getModel();
            let sName = oModel.getProperty("/name");
            let sSurname = oModel.getProperty("/surname");
            let sEmail = oModel.getProperty("/email");

            let viewName = this.getView().byId("name")
            let viewSurName = this.getView().byId("surname")
            let viewEmail = this.getView().byId("email")
            
            let nameRegex = /^[a-zA-Z]{3,}$/; 
            let surnameRegex = /^[a-zA-Z]+$/; 
            let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
 
            //name validation logic
            if (nameRegex.test(sName)) {
                    viewName.setValueState(sap.ui.core.ValueState.None);

            } else {
                    viewName.setValueState(sap.ui.core.ValueState.Error)
                    viewName.setValueStateText("Name should contain only letters.");

            }
    
            //surname validation logic

            if (!sName.match(nameRegex)) {
                name.setValueState(sap.ui.core.ValueState.Error);
                
                // sName.setValueStateText("Name should contain only letters.");
            } else {
                sName.setValueState(sap.ui.core.ValueState.None);
            }

            // if (!sSurname.match(surnameRegex)) {
            //     sSurname.setValueState(sap.ui.core.ValueState.Error);
            //     sSurname.setValueStateText("Surname should contain only letters.");
            // } else {
            //     sSurname.setValueState(sap.ui.core.ValueState.None);
            // }
            // if (!sEmail.match(emailRegex)) {
            //     sEmail.setValueState(sap.ui.core.ValueState.Error);
            //     sEmail.setValueStateText("Email address is invalid.");
            // } else {
            //     sEmail.setValueState(sap.ui.core.ValueState.None);
            // }


            // Submit logic here
            // ...
            // console.log("hello");

        }
    });
});