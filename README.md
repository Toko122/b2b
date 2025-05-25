B2B Django API დოკუმენტაცია 
Base URL: http://localhost:8000/api/v1/ 
�
�	კალათა 
GET /cart/ – კალათის მიღება - აღწერა: აბრუნებს მომხმარებლის კალათაში არსებულ ნივთებს. - მეთოდი: GET - Output: 
[ 
{ 
"id": 2, 
"product": { 
"id": 1, 
"name": "Iphone 16 pro max", 
"brand": "Iphone", 
"description": "Desc", 
"price": "15.00", 
"bulk_price": "5.00", 
"stock_quantity": 10, 
"min_order_quantity": 5, 
"sku": "123332", 
"barcode": "123", 
"weight_kg": 23, 
"dimensions_cm": "32", 
"created_at": "2025-05-24T13:46:17.919177+04:00", 
"attributes": "{\"RAM\":\"16\",\"SSD\":\"259\"}", 
"category": 1, 
"supplier": 1 
}, 
"quantity": 5 
} 
] 
POST /cart/ – პროდუქტის დამატება კალათაში - მეთოდი: POST - Body: 
{ 
} 
  "product": 10, 
  "quantity": 5 - Output: 
{ 
} 
"message": "Added to cart" 
DELETE /cart/ – პროდუქტის წაშლა კალათიდან - მეთოდი: DELETE - Body: 
{ 
} 
  "product": 10 
Output: 
{ 
} 
"message": "Item removed from cart" 
�
�	მომხმარებელი 
POST /customer/login/ – ავტორიზაცია - მეთოდი: POST - Body: 
{ 
} 
  "email": "shabashvilinika@yahoo.com", 
  "password": "123" 
Output: 
{ 
"id": 1, 
"firstname": "Nika", 
"lastname": "Shabashvili", 
"email": "shabashvilinika@yahoo.com" 
} 
GET /customer/profile/ – პროფილის ნახვა - მეთოდი: GET 
Output: 
{ 
} 
"id": 1, 
"firstname": "Nika", 
"lastname": "Shabashvili", 
"email": "shabashvilinika@yahoo.com" 
�
�	შეკვეთა 
POST /order/submit – შეკვეთის დადასტურება - მეთოდი: POST - Body: 
{ 
  "shipping_address": "გორგასალი 159" 
} - Output: 
{ 
"id": 1, 
"customer_name": "nika", 
"order_date": "2025-05-24T13:50:22.977109+04:00", 
"total_price": "75.00", 
"status": "PENDING", 
"payment_status": "PENDING", 
"tracking_number": null, 
"shipping_address": "გორგასალი 159", 
"estimated_delivery_date": null, 
"items": [ 
{ 
} 
], 
"id": 1, 
"product": 1, 
"product_name": "Iphone 16 pro max", 
"quantity": 5, 
"price_per_unit": "15.00" 
"invoice": { 
  "invoice_number": "INV-000001", 
  "order_id": 1, 
  "customer_name": "nika", 
  "shipping_address": "გორგასალი 159", 
  "order_date": "2025-05-24T13:50:22.977109+04:00", 
  "items": [ 
   { 
    "product_name": "Iphone 16 pro max", 
    "quantity": 5, 
    "price_per_unit": "15.00", 
    "line_total": 75 
   } 
  ], 
  "total_price": "75.00" 
 } 
} 
GET /order/my – ჩემი შეკვეთები -მეთოდი: GET -Output 
[ 
 { 
  "id": 1, 
  "customer_name": "nika", 
  "order_date": "2025-05-24T13:50:22.977109+04:00", 
  "total_price": "75.00", 
  "status": "PENDING", 
  "payment_status": "PENDING", 
  "tracking_number": null, 
  "shipping_address": "გორგასალი 159", 
  "estimated_delivery_date": null, 
  "items": [ 
   { 
    "id": 1, 
    "product": 1, 
    "product_name": "Iphone 16 pro max", 
    "quantity": 5, 
    "price_per_unit": "15.00" 
   } 
  ], 
  "invoice": { 
   "invoice_number": "INV-000001", 
   "order_id": 1, 
   "customer_name": "nika", 
   "shipping_address": "გორგასალი 159", 
   "order_date": "2025-05-24T13:50:22.977109+04:00", 
   "items": [ 
    { 
     "product_name": "Iphone 16 pro max", 
     "quantity": 5, 
     "price_per_unit": "15.00", 
     "line_total": 75 
    } 
   ], 
   "total_price": "75.00" 
  } 
 } 
] 
�
� კატეგორია 
GET /category/view – ყველა კატეგორიის მიღება 
Output: 
[ 
 { 
  "id": 1, 
  "subcategories": [], 
  "name": "Phones", 
  "description": "Phones", 
  "image": null, 
  "parent": null 
} 
] 
GET /category/view/{id} – კატეგორია ID-ით 
Output: 
{ 
} 
"id": 1, 
"subcategories": [], 
"name": "Phones", 
"description": "Phones", 
"image": null, 
"parent": null 
GET /category/view/{id}/attributes – ატრიბუტები კატეგორიით 
[ 
{ 
}, 
{ 
"id": 1, 
"name": "RAM", 
"category": 1 
"id": 2, 
"name": "SSD", 
"category": 1 
} 
] 
�
�	პროდუქტი 
GET /product/category/{category_id} – პროდუქტები კატეგორიით და 
მომწოდებლით 
Filter query params: 
min_price 
max_price 
search 
ordering 
supplier_id 
attribute_ (ram) (ssd) 
Output: 
[ 
{ 
"id": 1, 
"name": "Iphone 16 pro max", 
"brand": "Iphone", 
"description": "Desc", 
"price": "15.00", 
"bulk_price": "5.00", 
"stock_quantity": 10, 
"min_order_quantity": 5, 
"sku": "123332", 
"barcode": "123", 
"weight_kg": 23, 
"dimensions_cm": "32", 
"created_at": "2025-05-24T13:46:17.919177+04:00", 
"attributes": "{\"RAM\":\"16\",\"SSD\":\"259\"}", 
"category": 1, 
"supplier": 1 
} 
] 
GET /product/{id} – პროდუქტი ID-ით 
{ 
"id": 1, 
"name": "Iphone 16 pro max", 
"brand": "Iphone", 
"description": "Desc", 
"price": "15.00", 
"bulk_price": "5.00", 
"stock_quantity": 10, 
"min_order_quantity": 5, 
"sku": "123332", 
"barcode": "123", 
"weight_kg": 23, 
"dimensions_cm": "32", 
"created_at": "2025-05-24T13:46:17.919177+04:00", 
"attributes": "{\"RAM\":\"16\",\"SSD\":\"259\"}", 
"category": 1, 
"supplier": 1 
} 
�
�	ქუქი ფაილები - sessionId: სესიის მართვა - csrftoken: CSRF დაცვისთვი