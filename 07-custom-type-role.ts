(() => {
    // Type Aliases or Custom Types
    // use `type` keyword to create custom type
    type Role = 'admin' | 'guess' | 'teacher' | 'student';

    // Complex Object Type Definition
    type User = {
        name: string;
        age: number;
        role: Role; // you can use as well the Role type in Object type
        permission: string[];
    };

    let userRole: Role = 'student';
    const user: User = {
        name: 'Marius',
        age: 21,
        role: 'student',
        permission: ['access to painting room to paint', 'access key to nxx headquarters' ]
    };
    console.log("User Role", userRole);
    console.log("User Info:", user);

    let userRole1: Role = 'teacher';
    const user1: User = {
        name: 'Vyn',
        age: 27,
        role: 'teacher',
        permission: ['teaches at stellis university', 'owner of nxx headquarters' ]
    };
    console.log("User Role 1", userRole1);
    console.log("User Info 1:", user1);

    function access(role: Role) {
        console.log("Role:", role);
    }
    access(user.role);
    access(user1.role);
})();