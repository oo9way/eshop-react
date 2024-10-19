// apiService.js
import AuthService from './authService';

const API_BASE_URL = "https://api.asbd.uz/api/";

const apiService = {
    // Generic request function that handles token and refreshing
    fetchWithAuth: async (endpoint, method = "GET", body = null) => {
        let token = AuthService.getToken();

        let response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: body ? JSON.stringify(body) : null,
        });

        // If token is expired (usually 401 or 403)
        if (response.status === 401) {
            try {
                // Try refreshing the token
                token = await AuthService.refreshToken();

                // Retry the request with the new token
                response = await fetch(`${API_BASE_URL}${endpoint}`, {
                    method,
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                    body: body ? JSON.stringify(body) : null,
                });
            } catch (err) {
                // If refresh fails, logout
                AuthService.logout();
                throw new Error("Session expired, please login again.");
            }
        }

        return response.json();
    },

    // Example for getting products
    getProducts: async () => {
        let data = {
            "owner_id": 16,
            "branch_id": 21,
            "limit": 100,
            "offset": 0,
            "type": "product",
            "type_id": 1261
        }
        return apiService.fetchWithAuth('bot/shop/data/', "POST", data);
    },

    getCategories: async () => {
        let data = {
            "owner_id": 16,
            "branch_id": 21,
            "limit": 100,
            "offset": 0,
            "type": "type"
        }
        return apiService.fetchWithAuth('bot/shop/data', "POST", data);
    },

    getProductDetail: async (product_id) => {
        let data = {
            "owner_id": 16,
            "branch_id": 21,
            "limit": 100,
            "offset": 0,
            "type": "detail",
            "product_id": product_id
        }
        return apiService.fetchWithAuth('bot/shop/data', "POST", data);
    },

    // Example for creating an order
    createOrder: async (customer_id, address, products) => {
        const body = {
            client_id: customer_id,
            delivery_address: address,
            products,
            location: "location_x, location_y",
            date: new Date().toISOString(),
        };

        return apiService.fetchWithAuth('delivery/water/order/web', "POST", body);
    },
};

export default apiService;
