const data = [
    {
        key: 1,
        name: 'Shibin Khan',
        role: 'Captain',
        age: 21,
        country: 'Bangladesh',
        salary: 200000,
        photo: 'https://scontent.fdac127-1.fna.fbcdn.net/v/t1.6435-9/53020339_2405041073115587_6292811259750383616_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=Mm94lIwvDqoAX913R0b&_nc_ht=scontent.fdac127-1.fna&oh=4fb64b509acab653cebcc90304631801&oe=61777287'
    },
    {
        key: 2,
        name: 'Jhankar Mahbub',
        role: 'Co-Captain',
        age: 11,
        country: 'Uganda',
        salary: 20,
        photo: 'https://scontent.fdac127-1.fna.fbcdn.net/v/t1.18169-9/546516_10150621522826891_958698903_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=de6eea&_nc_ohc=9L2Qi7XDH5sAX8b9l2S&_nc_oc=AQnjxJ0MAdhdU96x7cB2D-GJy2d_KbRRbZ2kDQZpHZnv8OJwiNE768_HnWHwfQmlgiM&_nc_ht=scontent.fdac127-1.fna&oh=3e22b11c8b7db9b1cd89f14e01bf5a29&oe=6174AB2F'
    },
    {
        key: 3,
        name: 'Abdullah Al Asif',
        role: 'Sweeper The Alien',
        age: 280,
        country: 'Earth-1610, Andromeda Galaxy',
        salary: 20,
        photo: 'https://scontent.fdac127-1.fna.fbcdn.net/v/t39.30808-6/217049357_3013858172236874_2235244951831541132_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=wVv4H8TMFOEAX8l1FNm&_nc_ht=scontent.fdac127-1.fna&oh=9dcbe2882cf0dd1bb7ef9864697dde7a&oe=61546B5A'
    
},
    {
        key: 6,
        name: 'Alyssa Carson',
        role: "Captain's Girl",
        age: 32,
        country: 'United States',
        salary: 40000,
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Alyssa_Carson_2.jpg/330px-Alyssa_Carson_2.jpg'
    },
    {
        key: 4,
        name: 'Elon Musk',
        role: 'Right Hand of Captain',
        age: 48,
        country: 'United States',
        salary: 100000,
        photo: 'https://cdn.fbsbx.com/v/t65.23080-21/92938561_519645985381771_3257150190266385504_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=615b6e&_nc_ohc=aGdArNZZI1MAX8bFP3v&_nc_ht=cdn.fbsbx.com&oh=335632f419f76dc269f81c356f56606a&oe=6151AF24'
    },
    {
        key: 5,
        name: 'Neil Armstrong',
        role: 'Dish washer',
        age: 32,
        country: 'Germany',
        salary: 90000,
        photo: 'https://cdn.fbsbx.com/v/t65.23080-21/101872175_2681019118883866_6209447236815123450_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=615b6e&_nc_ohc=ySGnEubKHZUAX_9umqD&tn=ycHN8Ozl0fL4_8Dc&_nc_ht=cdn.fbsbx.com&oh=de4ae97e34222e13aceff0c792c9fb60&oe=615217CB'
    },
    {
        key: 7,
        name: 'Thomas Akers',
        role: 'Commercial astronaut',
        age: 43,
        country: 'Germany',
        salary: 30000,
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Thomas_D_Akers.jpg/384px-Thomas_D_Akers.jpg'
    },
    {
        key: 8,
        name: 'Vladimir Aksyonov',
        role: 'Commercial astronaut',
        age: 25,
        country: 'China',
        salary: 50000,
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/1980_CPA_5108.jpg/340px-1980_CPA_5108.jpg'
    },
    {
        key: 9,
        name: 'Buzz Aldrin',
        role: 'Commercial astronaut',
        age: 35,
        country: 'United States',
        salary: 70000,
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Buzz_Aldrin.jpg/384px-Buzz_Aldrin.jpg'
    },
    {
        key: 10,
        name: 'Aleksandar Panayoto',
        role: 'Commercial astronaut',
        age: 34,
        country: 'Germany',
        salary: 60000,
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D0%B2_%D0%9F%D0%B0%D0%BD%D0%B0%D0%B9%D0%BE%D1%82%D0%BE%D0%B2.JPG/319px-%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D0%B2_%D0%9F%D0%B0%D0%BD%D0%B0%D0%B9%D0%BE%D1%82%D0%BE%D0%B2.JPG' 
    },
    {
        key: 11,
        name: 'Andrew M. Allen',
        role: 'Commercial astronaut',
        age: 32,
        country: 'China',
        salary: 20000,
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Andrew_allen.jpg/384px-Andrew_allen.jpg' 
    },
    {
        key: 12,
        name: 'Joseph P. Allen',
        role: 'Commercial astronaut',
        age: 35,
        country: 'United States',
        salary: 50000,
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/JosephAllen.jpg/384px-JosephAllen.jpg' 
    },
    {
        key: 13,
        name: ' Scott Altman',
        role: 'Commercial astronaut',
        age: 26,
        country: 'Germany',
        salary: 20000,
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Scott_Douglas_Altman.jpg/384px-Scott_Douglas_Altman.jpg' 
    },
    {
        key: 14,
        name: 'William Anders',
        role: 'Commercial astronaut',
        age: 28,
        country: 'China',
        salary: 40000,
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/William_Anders.jpg/384px-William_Anders.jpg' 
    },
    {
        key: 15,
        name: 'Clayton Anderson',
        role: 'Commercial astronaut',
        age: 30,
        country: 'United States',
        salary: 50000,
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Clayton_C._Anderson.jpg/384px-Clayton_C._Anderson.jpg'
    }
];