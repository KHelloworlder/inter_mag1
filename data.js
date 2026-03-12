// Данные товаров TechStore

const products = [
    // ===== Сотовые телефоны (1-20) =====
    { id: 1, name: 'iPhone 15 Pro', category: 'phones', price: 129990, image: '📱', stock: 15 },
    { id: 2, name: 'Samsung Galaxy S24', category: 'phones', price: 89990, image: '📱', stock: 20 },
    { id: 3, name: 'Xiaomi 14 Pro', category: 'phones', price: 79990, image: '📱', stock: 25 },
    { id: 4, name: 'Google Pixel 8 Pro', category: 'phones', price: 99990, image: '📱', stock: 12 },
    { id: 5, name: 'OnePlus 12', category: 'phones', price: 69990, image: '📱', stock: 18 },
    { id: 6, name: 'iPhone 14', category: 'phones', price: 79990, image: '📱', stock: 30 },
    { id: 7, name: 'Samsung Galaxy Z Fold5', category: 'phones', price: 149990, image: '📱', stock: 7 },
    { id: 8, name: 'Xiaomi 13T Pro', category: 'phones', price: 59990, image: '📱', stock: 22 },
    { id: 9, name: 'Sony Xperia 1 V', category: 'phones', price: 89990, image: '📱', stock: 10 },
    { id: 10, name: 'Nothing Phone 2', category: 'phones', price: 49990, image: '📱', stock: 25 },
    
    // ===== Ноутбуки (21-40) =====
    { id: 21, name: 'MacBook Pro 16"', category: 'laptops', price: 249990, image: '💻', stock: 8 },
    { id: 22, name: 'Dell XPS 15', category: 'laptops', price: 189990, image: '💻', stock: 12 },
    { id: 23, name: 'ASUS ROG Zephyrus G14', category: 'laptops', price: 159990, image: '💻', stock: 10 },
    { id: 24, name: 'Lenovo ThinkPad X1', category: 'laptops', price: 179990, image: '💻', stock: 6 },
    { id: 25, name: 'HP Spectre x360', category: 'laptops', price: 149990, image: '💻', stock: 9 },
    { id: 26, name: 'Acer Swift 3', category: 'laptops', price: 69990, image: '💻', stock: 15 },
    { id: 27, name: 'MSI Stealth 16', category: 'laptops', price: 219990, image: '💻', stock: 5 },
    { id: 28, name: 'Huawei MateBook X Pro', category: 'laptops', price: 129990, image: '💻', stock: 11 },
    
    // ===== Аксессуары (41-60) =====
    { id: 41, name: 'AirPods Pro 2', category: 'accessories', price: 24990, image: '🎧', stock: 50 },
    { id: 42, name: 'Samsung Galaxy Buds2 Pro', category: 'accessories', price: 12990, image: '🎧', stock: 60 },
    { id: 43, name: 'Apple Watch Series 9', category: 'accessories', price: 39990, image: '⌚', stock: 30 },
    { id: 44, name: 'Logitech MX Master 3', category: 'accessories', price: 8990, image: '🖱️', stock: 40 },
    { id: 45, name: 'Samsung 65W Charger', category: 'accessories', price: 3990, image: '🔌', stock: 80 },
    { id: 46, name: 'Xiaomi Electric Scooter', category: 'accessories', price: 29990, image: '🛴', stock: 12 },
    { id: 47, name: 'Apple Magic Keyboard', category: 'accessories', price: 13990, image: '⌨️', stock: 25 },
];

// ===== СТАТИСТИКА ТОВАРОВ =====
function initProductStats() {
    const stats = {};
    products.forEach(product => {
        stats[product.id] = {
            inCart: 0,
            inFavorites: 0,
            ordered: 0,
            purchased: 0
        };
    });
    return stats;
}

// ===== ПОЛУЧЕНИЕ СТАТИСТИКИ =====
function getProductStats() {
    const stored = localStorage.getItem('productStats');
    if (stored) return JSON.parse(stored);
    
    const stats = initProductStats();
    localStorage.setItem('productStats', JSON.stringify(stats));
    return stats;
}