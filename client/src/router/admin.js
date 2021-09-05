const ROLE = "admin";
const PATH = "../views/Admin/";

export default [{
    path: "/admin",
    component: () =>
        import ("../views/Layout/main.vue"),
    children: [{
            path: "dashboard",
            name: "admin.home",
            component: () =>
                import (PATH + "home.vue"),
            meta: { requiresAuth: true, role: ROLE },
        },
        {
            path: "category",
            name: "admin.category.index",
            component: () =>
                import (PATH + "Category/index.vue"),
            meta: { requiresAuth: true, role: ROLE },
        },
        {
            path: "category/create",
            name: "admin.category.create",
            component: () =>
                import (PATH + "Category/create.vue"),
            meta: { requiresAuth: true, role: ROLE },
        },
        {
            path: "product",
            name: "admin.product.index",
            component: () =>
                import (PATH + "Product/index.vue"),
            meta: { requiresAuth: true, role: ROLE },
        },
        {
            path: "product/create",
            name: "admin.product.create",
            component: () =>
                import (PATH + "Product/create.vue"),
            meta: { requiresAuth: true, role: ROLE },
        },
        {
            path: "auction",
            name: "admin.auction.past",
            component: () =>
                import (PATH + "Auction/Past.vue"),
            meta: { requiresAuth: true, role: ROLE },
        },
        {
            path: "auction",
            name: "admin.auction.running",
            component: () =>
                import (PATH + "Auction/Running.vue"),
            meta: { requiresAuth: true, role: ROLE },
        },
        {
            path: "auction",
            name: "admin.auction.upcoming",
            component: () =>
                import (PATH + "Auction/Upcoming.vue"),
            meta: { requiresAuth: true, role: ROLE },
        },
        {
            path: "auction/create",
            name: "admin.auction.create",
            component: () =>
                import (PATH + "Auction/create.vue"),
            meta: { requiresAuth: true, role: ROLE },
        },
        {
            path: "auction/details/:id",
            name: "admin.auction.details",
            component: () =>
                import (PATH + "Auction/Details.vue"),
            meta: { requiresAuth: true, role: ROLE },
        },
    ]
}, ];