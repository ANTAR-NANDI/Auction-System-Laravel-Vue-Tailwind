const ROLE = "bidder";

export default [{
    path: "/bidder",
    component: () =>
        import ("../views/Layout/main.vue"),
    children: [{
        path: "",
        name: "bidder.home",
        component: () =>
            import ("../views/Bidder/home.vue"),
        meta: { requiresAuth: true, role: ROLE },
    }]
}, ];