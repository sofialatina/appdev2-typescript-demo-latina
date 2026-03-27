(() => {
    enum Role {
        // SuperAdmin,
        // SuperAdmin = 1,
        Painter = 'Painter',
        // Teacher,
        Lawyer = 'Lawyer',
        // Student,
        Mentor = 'Mentor',
    }

    // let userRole: Role = 0;
    let userRole1: Role = Role.Painter;
    console.log("User Role 1:", userRole1);

    let userRole2: Role = Role.Lawyer;
    console.log("User Role 2:", userRole2);

    let userRole3: Role = Role.Mentor;
    console.log("User Role 3:", userRole3);
})();