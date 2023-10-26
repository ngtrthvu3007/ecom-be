
# ecom-be
Visit https://vu-ecom-api.onrender.com/ to get more info and use case

--- DESCRIPTION ---
This repo just a simple api server for a ecommerce website. And it deployed free with render https://render.com/

domain : https://vu-ecom-api.onrender.com/

routes: 

  - users:
    
    my-profile GET
    
    register POST
    
    login POST
    
    update-my-profile PUT
    
    change-password PUT
    
- products:
  
    /:sku GET -> get detail of a product
  
    /?{query}  GET -> get products with query is sort/filter/limit/page
  
    example: {{domain}}/products?sort=price&sort=desc&filter=sku&filter=ip11
  

    /create POST -> create a product if user is admin
  
    /delete DELETE -> destroy a product if user is admin
  
    /update/:sku PUT -> update  a prodcut if user is admin
  

- orders:
  
    /create POST -> create a order
  
    /:id GET -> get detail of a order
  
    /?{query}  GET -> get orders with query is status
  
    example: {{domain}}/orders?status=pending


   /update/:id PUT -> update  a order
