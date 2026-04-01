(() => {
    // Literal Types (Alternative to Enum)
    let userRole: 'Marius' | 'Artem' | 'Rosa' | 'Vyn' | 'Luke' = 'Marius';

    userRole = 'Artem';
    // anotherUserRole = 'superadmin'

    function access(role: 'Marius' | 'Artem' | 'Rosa' | 'Vyn' | 'Luke') {
        console.log("Access role granted to:", role);
        console.log("Private pass access granted to:", userRole);
    }

    access('Marius');
})();