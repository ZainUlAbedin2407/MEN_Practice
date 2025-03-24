### **REST API for Products**  
🚀 Hosted API: [`https://restapi-production-60f6.up.railway.app/api/products`](https://restapi-production-60f6.up.railway.app/api/products)  

Ye REST API **products** ka data provide karti hai jisme filtering, sorting, pagination aur field selection ka support hai.  

---

## **📌 Endpoints & Usage**  

### **1️⃣ Get All Products**  
📌 **GET** `/api/products`  
🔹 **Description:** Sare products ko fetch karega.  

🔗 **Example:**  
```sh
https://restapi-production-60f6.up.railway.app/api/products
```
📝 **Response:**  
```json
{
  "Products": [
    {
      "name": "IPhone 14 Pro",
      "price": 999,
      "company": "Apple"
    },
    {
      "name": "Samsung Galaxy S23 Ultra",
      "price": 1199,
      "company": "Samsung"
    }
  ],
  "nbHits": 2
}
```

---

### **2️⃣ Filter Products (Company, Name, Featured)**  
📌 **GET** `/api/products?company={value}&name={value}&featured={true/false}`  
🔹 **Description:** Query params ka use karke specific data filter karega.  

🔗 **Example:**  
```sh
https://restapi-production-60f6.up.railway.app/api/products?company=Apple
https://restapi-production-60f6.up.railway.app/api/products?name=Galaxy
https://restapi-production-60f6.up.railway.app/api/products?featured=true
```

---

### **3️⃣ Sorting Products**  
📌 **GET** `/api/products?sort={field1},{field2}`  
🔹 **Description:** Sorting ke liye multiple fields ka use kar sakte hain.  

🔗 **Example:**  
```sh
https://restapi-production-60f6.up.railway.app/api/products?sort=price
https://restapi-production-60f6.up.railway.app/api/products?sort=-price,name
```
📝 **Note:**  
- `price` → Ascending  
- `-price` → Descending  
- `name` → Alphabetically  
- `-name` → Reverse Alphabetically  

---

### **4️⃣ Select Specific Fields**  
📌 **GET** `/api/products?select={field1},{field2}`  
🔹 **Description:** Sirf specific fields ko response me laane ke liye.  

🔗 **Example:**  
```sh
https://restapi-production-60f6.up.railway.app/api/products?select=name,price
```
📝 **Response:**  
```json
{
  "Products": [
    {
      "name": "IPhone 14 Pro",
      "price": 999
    },
    {
      "name": "Samsung Galaxy S23 Ultra",
      "price": 1199
    }
  ],
  "nbHits": 2
}
```

---

### **5️⃣ Pagination (Page & Limit)**  
📌 **GET** `/api/products?page={value}&limit={value}`  
🔹 **Description:** Data ko pages me divide karne ke liye.  

🔗 **Example:**  
```sh
https://restapi-production-60f6.up.railway.app/api/products?page=2&limit=5
```
📝 **Note:**  
- `page=2` → Dusre page ka data  
- `limit=5` → Sirf 5 records  

---

### **6️⃣ Testing Route**  
📌 **GET** `/api/products/testing`  
🔹 **Description:** Testing endpoint jo `name` aur `price` return karega.  

🔗 **Example:**  
```sh
https://restapi-production-60f6.up.railway.app/api/products/testing
```

---

## **🛠️ Tech Stack**  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Hosting:** Railway.app  
- **ORM:** Mongoose  

---

## **📌 How to Run Locally?**  
```sh
git clone https://github.com/your-username/your-repo.git
cd your-repo
npm install
npm start
```
🌐 **Localhost URL:** `http://localhost:5000/api/products`  

---
