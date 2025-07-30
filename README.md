<div align="center">

# 🏎️ F1 BOXXD
### *Premium Formula One E-Commerce Platform*

<p align="center">
  <strong>Bridging the gap between Formula One passion and premium merchandise accessibility</strong>
</p>

<p align="center">
  <a href="#-quick-start">
    <img src="https://img.shields.io/badge/📖-Get%20Started-blue?style=for-the-badge" alt="Get Started" />
  </a>
</p>

---

## 📖 About The Project
<br>

**F1 Marketplace** is a cutting-edge e-commerce platform that revolutionizes the Formula One merchandise experience. Born from the passion of Formula One enthusiasts and the identified gap in quality F1 merchandise availability, particularly in Nepal and surrounding regions.

---

## ✨ Features

<div align="center">

### 🛍️ **Core E-Commerce Features**

<table>
<tr>
<td align="center" width="33%">

**🛒 Smart Shopping Cart**
<br>
Real-time updates, persistent storage, quantity management, and seamless checkout flow

</td>
<td align="center" width="33%">

**👤 User Management**
<br>
Secure authentication, profile management, order history, and personalized experience

</td>
<td align="center" width="33%">

**📦 Product Catalog**
<br>
Dynamic filtering, search functionality, detailed product views, and category browsing

</td>
</tr>
</table>

### 🚀 **Advanced Features**

<table>
<tr>
<td align="center" width="25%">

**🎤 Voice Search**
<br>
<img src="https://img.shields.io/badge/ASR-Enabled-blue?style=flat-square" alt="ASR Enabled">
<br>
Hands-free product search using Web Speech API

</td>
<td align="center" width="25%">

**💳 UPI Payments**
<br>
<img src="https://img.shields.io/badge/PayTM-Integrated-orange?style=flat-square" alt="PayTM Integration">
<br>
Secure UPI transactions with PayTM API

</td>
<td align="center" width="25%">

**🤖 AI Assistant**
<br>
<img src="https://img.shields.io/badge/LLM-Optional-green?style=flat-square" alt="LLM Optional">
<br>
Intelligent chatbot for customer support

</td>
<td align="center" width="25%">

**📱 Responsive Design**
<br>
<img src="https://img.shields.io/badge/Mobile-Optimized-purple?style=flat-square" alt="Mobile Optimized">
<br>
Seamless experience across all devices

</td>
</tr>
</table>

</div>

---

## 🛠️ Technology Stack

<div align="center">

### **Frontend Technologies**
<p>
  <img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-3.3-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-4.4-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
</p>

### **Backend Technologies**
<p>
  <img src="https://img.shields.io/badge/Node.js-18.17-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-4.18-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/MySQL-8.0-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
  <img src="https://img.shields.io/badge/Prisma-5.1-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma ORM" />
</p>

### **Integration & APIs**
<p>
  <img src="https://img.shields.io/badge/PayTM-API-002970?style=for-the-badge&logo=paytm&logoColor=white" alt="PayTM API" />
  <img src="https://img.shields.io/badge/Web%20Speech%20API-ASR-4285F4?style=for-the-badge&logo=google&logoColor=white" alt="Web Speech API" />
  <img src="https://img.shields.io/badge/OpenAI-GPT--4-412991?style=for-the-badge&logo=openai&logoColor=white" alt="OpenAI API" />
  <img src="https://img.shields.io/badge/JWT-Auth-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white" alt="JWT" />
</p>

### **DevOps & Deployment**
<p>
  <img src="https://img.shields.io/badge/Docker-Containerized-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
  <img src="https://img.shields.io/badge/GitHub%20Actions-CI%2FCD-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" alt="GitHub Actions" />

</p>

</div>

---

## 🏗️ System Architecture

<div align="center">

### **High-Level Architecture**

```mermaid
graph TB
    subgraph "Client Layer"
        A[React Frontend] --> B[Service Worker]
        B --> C[PWA Features]
    end
    
    subgraph "API Gateway"
        D[Load Balancer] --> E[Rate Limiting]
        E --> F[Authentication Middleware]
    end
    
    subgraph "Backend Services"
        G[Express.js API] --> H[Business Logic]
        H --> I[Data Access Layer]
    end
    
    subgraph "Database Layer"
        J[(MySQL Primary)] --> K[(MySQL Replica)]
        L[(Redis Cache)]
    end
    
    subgraph "External Services"
        M[PayTM API]
        N[Web Speech API]
        O[OpenAI API]
        P[AWS S3]
    end
    
    subgraph "Monitoring & Analytics"
        Q[Application Logs]
        R[Performance Metrics]
        S[Error Tracking]
    end
    
    A --> D
    F --> G
    I --> J
    I --> L
    G --> M
    A --> N
    G --> O
    G --> P
    G --> Q
    A --> R
    G --> S
```

### **Database Schema**

```mermaid
erDiagram
    USERS ||--o{ ORDERS : "places"
    USERS ||--o{ CART_ITEMS : "has"
    USERS ||--o{ REVIEWS : "writes"
    PRODUCTS ||--o{ ORDER_ITEMS : "included_in"
    PRODUCTS ||--o{ CART_ITEMS : "added_to"
    PRODUCTS ||--o{ REVIEWS : "receives"
    ORDERS ||--o{ ORDER_ITEMS : "contains"
    CATEGORIES ||--o{ PRODUCTS : "contains"
    
    USERS {
        uuid id PK
        string email UK
        string password_hash
        string first_name
        string last_name
        json profile_data
        timestamp created_at
        timestamp updated_at
    }
    
    PRODUCTS {
        uuid id PK
        string name
        text description
        decimal price
        int stock_quantity
        uuid category_id FK
        json specifications
        string[] image_urls
        timestamp created_at
        timestamp updated_at
    }
    
    ORDERS {
        uuid id PK
        uuid user_id FK
        enum status
        decimal total_amount
        json shipping_address
        string payment_id
        timestamp created_at
        timestamp updated_at
    }
```

</div>

---
## 👥 Meet the Team

This project is a collaborative effort by students of the Department of Computer Science and Engineering, Kathmandu University.

| Name                         | Roll No. | GitHub Profile                                 |
|-----------------------------|:--------:|------------------------------------------------|
| Rishav Kumar Paudel[     |   35     | [Rishav](https://github.com/ScarFire111)                |
| Chuddant Shrestha       |   43     | [Chuddant](https://github.com/chuddantshrestha)              |
| Manjit Singh           |   47     | [Manjit](https://github.com/ManjitSingh121) |
| Subash Chandra Yadav    |   58     | [Subash](https://github.com/su-bash-np)                 |


