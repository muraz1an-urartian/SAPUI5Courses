sap.ui.define([
    
], function() {
    'use strict';
    

    return {
        delivery: function(iweight,sMeasuer){
            let sResult = ""
            if (sMeasuer == "G") {
                iweight = iweight / 1000
            }
            if(iweight< 0.5){
                sResult = "Mail Deliver"
            }else if(iWeight < 5) {
                sResult = "Parcel Deliver"
            }else {
                sResult = "Carrier Deliver"
            }

            return sResult
        }
    }
});