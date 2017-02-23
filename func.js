/*begin button functions*/
function secondNext(pg1,pg2) {
	changePage(pg1,pg2);
	upDateVars();
	}
/*end button functions*/


/*begin radio button check function*/
function getRadioValue(theRadioGroup) {
    var elements = document.getElementsByName(theRadioGroup);
    for (var i = 0, l = elements.length; i < l; i++)
    {
        if (elements[i].checked)
        {
            return elements[i].value;
        }
    }
}
/*end radio button check function*/

/*begin variable function*/
function upDateVars() {
    /*begin defining input variables*/
    purchasePrice= eval(document.getElementsByName("price")[0].value);
    rehabCost= eval(document.getElementsByName("cost")[0].value);
    ARV= eval(document.getElementsByName("ARV")[0].value);
    percentArvVar = getRadioValue('percentArvVar');
    period = getRadioValue('period');

    nameVar= document.getElementsByName("nameVar")[0].value;
    addressVar= document.getElementsByName("addressVar")[0].value;
    emailVar= document.getElementsByName("emailVar")[0].value;
    phoneVar= document.getElementsByName("phoneVar")[0].value;
   /*end defining input variables*/


    /*begin defining output variables*/
    loanAmount = ARV * percentArvVar;
    lendersFees = (loanAmount * period) + 750;
    if (loanAmount <= 100000){
            otherClosingCosts = loanAmount * 0.03;
            console.log("closing costs: option 1");
    } else if (loanAmount > 100000 && loanAmount <= 200000){
            otherClosingCosts = loanAmount * 0.025;
            console.log("closing costs: option 2");
    } else if (loanAmount > 200000){
            otherClosingCosts = loanAmount * 0.02;
            console.log("closing costs: option 3");
    }
    totalClosingCosts = lendersFees + otherClosingCosts;
    estimatedFundsDueAtClosing = purchasePrice + rehabCost + totalClosingCosts - loanAmount;
    monthlyLoanPayments = loanAmount * 0.01;
    profitForFlip = ARV - (purchasePrice + rehabCost + totalClosingCosts) - (ARV * 0.04);
    equityCaptureWithRental = ARV - (purchasePrice + rehabCost + totalClosingCosts);
    /*end defining output variables*/


    /* DEBUG */
    console.log("Monthly loan payment: " + monthlyLoanPayments);
    console.log("Loan amount: " + loanAmount);
    console.log("Lenders fees: " + lendersFees);
    console.log("Purchase price: " + purchasePrice);
    console.log("Rehab cost: " + rehabCost);
    console.log("ARV: " + ARV);
    console.log("Precent ARV: " + percentArvVar);
    console.log("Period: " + period);
    console.log("Other closing costs: " + otherClosingCosts);
    console.log("Total closing costs: " + totalClosingCosts);
    console.log("Estimated funds due at closing: " + estimatedFundsDueAtClosing);
    console.log("Profit for flip: " + profitForFlip);
    console.log("Equity capture with rental: " + equityCaptureWithRental);
    console.log("Lender's Fees*: $" + lendersFees);
    /* GUBED */


    /*begin output variable printing*/
    document.getElementsByName('out1')[0].innerHTML = "Lender's Fees*: $" +lendersFees.toFixed(2);
    document.getElementsByName('out2')[0].innerHTML = "Other Closing Costs**: $" +otherClosingCosts.toFixed(2);
    document.getElementsByName('out3')[0].innerHTML = "Total Closing Costs: $" +totalClosingCosts.toFixed(2);
    if (estimatedFundsDueAtClosing <= 0){
		document.getElementsByName('out4')[0].innerHTML = "Estimated Funds Due at Closing: $0";
	} else {
		document.getElementsByName('out4')[0].innerHTML = "Estimated Funds Due at Closing: $" +estimatedFundsDueAtClosing.toFixed(2);
	}
    document.getElementsByName('out5')[0].innerHTML = "Monthly Loan Payments: $" +monthlyLoanPayments.toFixed(2);
    /* N/A block */
    if (percentArvVar == 0.7){
		document.getElementsByName('out6')[0].innerHTML = "Profit for Flip***: $" +profitForFlip.toFixed(2);
        document.getElementsByName('out7')[0].innerHTML = "Equity Capture with Rental: N/A";
	} else if (percentArvVar == 0.75){
		document.getElementsByName('out6')[0].innerHTML = "Profit for Flip***: N/A";
        document.getElementsByName('out7')[0].innerHTML = "Equity Capture with Rental: $" +equityCaptureWithRental.toFixed(2);
    }
    /* N/A block */
    /*end output variable printing*/
}
/*end variable function*/



/*begin loan calculator*/
function calculateLoanAmount(){
    ARV = eval(document.getElementsByName("ARV")[0].value);
    percentArvVar = getRadioValue('percentArvVar');
    loanAmount = (ARV * percentArvVar).toFixed(2); // JJH cut down to two digits after the decimal point
    document.getElementById("loanVar").innerHTML="Loan Amount: $" + loanAmount;
}
/*end loan calculator*/







/*Begin additional options hide/unhide*/	
 		function unhide(inner_add) {
 		var item = document.getElementById(inner_add);
 		if (item) {
 		item.className=(item.className=='hidden')?'unhidden':'hidden';
 }
 }



function emailForm(){
	var src = document.referrer;
	var email = "info@noblemoney.com,clenz@noblemoney.com";
	var b1 = '%3Cb%3E'; 
	var b2 = '%3C%2Fb%3E'; 
	var br = '%3Cbr%3E'; 
	br = b1+br;
	var email_body = b1+'Purchase Price: $'+b2+purchasePrice+
					br+'Rehab Cost: $'+b2+rehabCost+
					br+'ARV: $'+b2+ARV+
                    br+'Loan Amount: $'+b2+loanAmount+
                    br+"Lender's Fees: $'"+b2+lendersFees+
                    br+'Other Closing Costs: $'+b2+otherClosingCosts+
                    br+'Total Closing Costs: $'+b2+totalClosingCosts+
                    br+'Estimated Funds Due at Closing: $'+b2+estimatedFundsDueAtClosing+
                    br+'Monthly Loan Payments: $'+b2+monthlyLoanPayments+
                    br+'Profit for Flip: $'+b2+profitForFlip+
                    br+'Equity Capture with Rental: $'+b2+equityCaptureWithRental+
					br+'****Additional Information****'+b2+
					br+'Name: '+b2+nameVar+
					br+'Address:'+b2+addressVar+
					br+'Email: '+b2+emailVar+
					br+'Phone: '+b2+phoneVar;
					
	var mailTo = 'mailto: '+email+'?subject=Noble App&body='+email_body;
	win = window.open(mailTo,'emailWindow');
	if (win && win.open &&!win.closed) win.close();
	
}



