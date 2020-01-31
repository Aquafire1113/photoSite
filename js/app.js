Vue.component('home',{

    template:
        '<section class="fullSize home">' +
        '<div class="homeBox">' +
        '<p class="rotate">Show off your art</p>' +
        '<div>' +
        '<img src="images/homeImage.jpg" alt="home image">' +
        '<p class="homeText">Meet other Artists</p>' +
        '</div>' +
        '</div>' +
        '</section>'

});
const Home ={template: '<home></home>'};

Vue.component('about', {
    template:
        '<section class="fullSize about">' +
        '<div class="pageHeader">' +
        '<h1>About</h1>' +
        '</div>' +
        '<img src="images/aboutImage.jpg" alt="">' +
        '<div class="infoDiv">' +
        '<p class="headerText">Summary</p>' +
        '<p class="aboutText">This site is meant to be comparative to deviantArt, ' +
        'but features a more professional platform to showcase work on. Users can upload, edit, delete' +
        'their content and view other users content, and will be able to sign in to their own unique accounts.</p>' +
        '<p class="headerText">More</p>' +
        '<p class="aboutText">This art site has been built for fun on the side. It is ' +
        'made using Vue routing, firebase, and HTML, Less, and javascript. It has been created by' +
        'Abbigail Merrill, and will be used in her portfolio to showcase her work. There will be admin' +
        'functions for users to change their individual works, and there will be an ability to view others works as well. It is hopeful' +
        'to also add a messaging app within the project in the future as well.</p>' +
        '</div>' +
        '<form>' +
        '<p class="headerText">Get in Touch with Us</p>' +
        '<div>' +
        'Name<br>' +
        '<input id="name" type="text">' +
        '<div>' +
        'Email<br>' +
        '<input id="email" type="email">' +
        '<div>' +
        'Message:<br>' +
        '<textarea id="message" cols="30" rows="10"></textarea>' +
        '</div>' +
        '<input id="submitMessage" class="submit" type="submit" value="Send">' +
        '</form>' +
        '</section>'
});
const About = {template: '<about></about>'};

Vue.component('login', {
   template:
        '<section class="fullSize login">' +
       '<div class="pageHeader">' +
       '<h1>Login</h1>' +
       '</div>' +
       '<form>' +
       '<div>' +
       'Email:<br>' +
       '<input id="signInEmail" type="text">' +
       '</div>' +
       '<div>' +
       'Password:<br>' +
       '<input id="signInPW" type="password">' +
       '</div>' +
       '<input id="loginSubmit" class="submit" type="submit">' +
       '<div>' +
       '<p>or Login using <a id="googleSignIn" href="#"><i class="fab fa-google"></i></a></p>' +
       '<br><a class="resetLink" href="#">Reset Password</a>' +
       '</div>' +
       '</form>' +
       '</section>'
});
const Login = {template: '<login></login>'};
const router = new VueRouter({
    routes:[
        {path: '/home', component:Home},
        {path: '/about', component:About},
        {path: '/login', component:Login}
    ]
});

const app = new Vue({
    router,
    methods:{

    }
}).$mount("#app");