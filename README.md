### Design of the ecommerce application
# * Please note:  the actual app is a toy project, it isn't built off of the following design, the design is for demonstrative purposes only

## Requirements of the system
# Functional requirements 
- All users should be able to access the products being sold 
- All users should be able to add products to cart
- All guest users should be able to register or log in if they're already registered
- Registered users should be able to place an order and leave reviews once the delivery is confirmed
- The system should send order information to customers upon purchase and send notifications on order status and shipment
- The system should be able to handle complaints and returns 
- The system uses sensitive customer information such as financials, so that part of the service must be consistent

# Nonfunctional requirements
- The system must keep track of which products are best sellers, worst sellers
- The system must be highly available in all cases where consistency is not an absolute must

## Use Case
# Parties involved
1 - users, unregistered - ability to browse around, add items to cart, and register
  - users, registered - ability to browse around, add items to cart, log in, make a purchase, leave a review
2 - administrators - ability to remove registered users and/or ban them from joining, 
3 - the ecommerce platform - add, edit or remove products and product information, send order information, notifications on order status, delivery

# How the system is to be used
1 - User registeration
2 - Login/logout
3 - Add/remove/edit product
4 - Add items to cart
5 - Verify payments
6 - Moniter order/delivery 

## Use Case Diagram
						 -------------can----> add_items_to_cart
						|
						 ------only---can----> register
						|
			   -------------------
	 -------> | User, unregisterd | --can----> browse_catalog
    |		   -------------------	
    |
 -------------------- 
|  User, registered | -----can---------------> make_a_purchase
 --------------------  
    |
     ----------------------can---------------> make_returns
    |
     ----------------------can---------------> leave_product_reviews
    | 
     ----------------------can---------------> login_or_logout

 ---------------
| Administrator | ---------can---------------> remove_and_or_ban_users
 ---------------

     ----------------------can---------------> add_edit_remove_products_and_productInfo
    |
 --------------------
| Ecommerce Platform | ----can---------------> send_customers_order_information
 --------------------
    |
     ----------------------can---------------> notify_customers_on_order_status_or_delivery


### CLASSES
# Product_category 
# Product
# Account - registered users
# Admin_account
# Order

### Class Diagram 

 ----------------------- 
| ENUM - Payment_status |<-------------------------
 -----------------------							|
| - pending				|							|
| - Failed				|							|
| - Success				|							|
| - Canceled			|							|
| - Refuned				|							|
 -----------------------							|
 													|
 ----------------------- 							|
| ENUM - Account_status |<------------------		|
 -----------------------					|		|
| - Active				|					|		|
| - Inactive			|					|		|
| - Canceled			|					|		|
| - Banned				|					|		|
 -----------------------					|		|
 											|		|
 ----------------------- 					|		|
|  ENUM - Order_status 	|<----------------------	|
 -----------------------					|	|	|
| - Assembly_phase		|					|	|	|
| - Shipped				|					|	|	|
| - Canceled			|					|	|	|
 -----------------------					|	|	|
 											|	|	|	
 ----------------------- 					|	|	|
|  Data - Credit/Debit 	|<--------------	|	|	|
 -----------------------				|	|	|	|
| - Card_number			|				|	|	|	|
| - Expiration			|				|	|	|	|
| - Code 				|				|	|	|	|
 -----------------------				|	|	|	|
 										|	|	|	|
 										|	|	|	|
 ----------------------- 				|	|	|	|
|    Data - Address 	|<----------	|	|	|	|
 -----------------------			|	|	|	|	|
| - Street				|			|	|	|	|	|
| - City				|			|	|	|	|	|
| - State 				|			|	|	|	|	|
| - Zipcode				|			|	|	|	|	|
 -----------------------			|	|	|	|	|
 									|	|	|	|	|
 ------------------------------- 	|	|	|	|	|	 ---------------------------------------
|   	Class - Account  		|	|	|	|	|	|	| 			Class - Order 				|
 -------------------------------|	|	|	|	|	|	 ---------------------------------------
| - Username: string			|	|	|	|	|	|	| - Order_number: int 					|
| - Password: string			|	|	|	|	|   -->	| - Payment_status: Payment_status 		|
| - Shipping_address: Address	|<--	|	|	 ----->	| - Status: Order_status 				|
| - Payment_info: Card 			|<------	|			| - Add_to_shipping_log: function()		|
| - Status: Account_status		|<----------			 -------------------------------------
| - Add_to_cart: function()		| 											|
| -	Update_account: function()	|											|
| - Add_review: function()		|											|
| - Edit_review: function()		|											|
| - Edit_cart: function()		|											|
 -------------------------------											|
 	^	^	^																|
 	|	|	|																|
 	|	|	 ----<------------<-------------Order belongs to Account----<---
 	|	^
 	^	|
 	|	 -------<--------<------Product_review belongs to Account---<-------
 	|																		|
 	|																		^
 Cart belongs to Account 													|
 	|																		|
 ------------------------------- 						 ---------------------------------------
|   	Class - Cart  			|						| 		Class - Product_review 			|
 -------------------------------|						 ---------------------------------------
| - Username: string			|						| - Product_id: int 					|
| - Items: list					|						| - Review: string				 		|
| - Subtotal: int 				|						| - Rating: int 		 				|
| - Tax: int 		 			|						 ---------------------------------------
| - Shipping_cost: int 			|						 					|
| - Calculate_total: function()	| 											|
 -------------------------------											|
 																			|
 				 -<-------------<-----Product_view belongs to Product---<--- 	
 				|
 				|
 ------------------------------- 						 ---------------------------------------
|   	Class - Product  		|						| 	  Class - Product_Category 			|
 -------------------------------|						 ---------------------------------------
| - Title: string				|						| - Categories: list 					|
| - Description: string			|						| - Add_category: function()	 		|
| - Price: int 					|						| - Remove_category: function() 		|
| - Quantity: int 				|						 ---------------------------------------
| - Shipping_cost: int 			|						 					^ 		
 -------------------------------											|
 				|															|
 				 -------->---Product belongs to Product_Category----->------