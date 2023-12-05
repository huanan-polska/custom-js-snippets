//the code below fixes a misposition of "Ask for product" button which is changing regarding current stock availability

if(document.querySelector("div.product_wrapper.clearfix > div.entry-summary.column.one-second > div > p.stock.out-of-stock")) 	//a check for out-of-stock status on currently viewed product
{
  //alert('This product is Out-Of-Stock!');    //a custom alert to see if check is working OK, uncomment to enable
	document.querySelector("#enquiry").style.left=0;    //a change of CSS attiributes that correspond with "Ask for product" button
	document.querySelector("#enquiry").style.right=0;
	document.querySelector("#enquiry").style.top=0;
	document.querySelector("#enquiry").style.bottom=0;
	document.querySelector("#enquiry").style.margin="0px 0px 0px 0px";
	document.querySelector("#enquiry").style.padding="5px 0px 15px 0px";
	
} 
else
{
	//alert('This product is NOT Out-Of-Stock!');    //a custom alert to see if check is working OK, the same as above, uncomment to enable
	document.getElementsByName("quantity")[0].removeAttribute("type");   //this  attribute removal fixes the visibility of stock amount if there's only 1 piece left on stock
}



//the code below fixes a misposition of product description
document.querySelector("div.product_wrapper.clearfix > div.entry-summary.column.one-second > div > div.woocommerce-product-details__short-description > p:nth-child(1)").style.padding="20px 0px 20px 0px";
