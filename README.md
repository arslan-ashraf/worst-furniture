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

### Use Case Diagram
![useCaseDiagram](https://user-images.githubusercontent.com/43149204/124045390-8ce8d100-d9dd-11eb-819a-a3bae23d358e.png)

### CLASSES
# Product_category 
# Product
# Account - registered users
# Admin_account
# Order

### Class Diagram 
![classDiagram](https://user-images.githubusercontent.com/43149204/124045405-96723900-d9dd-11eb-9ad5-af836845cdbd.png)
