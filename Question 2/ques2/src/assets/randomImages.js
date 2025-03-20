const userImages = [
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/men/3.jpg",
    "https://randomuser.me/api/portraits/women/4.jpg",
  ];
  
  const postImages = [
    "https://source.unsplash.com/random/400x300",
    "https://source.unsplash.com/random/401x301",
    "https://source.unsplash.com/random/402x302",
  ];
  
  export const getRandomUserImage = () =>
    userImages[Math.floor(Math.random() * userImages.length)];
  
  export const getRandomPostImage = () =>
    postImages[Math.floor(Math.random() * postImages.length)];
  