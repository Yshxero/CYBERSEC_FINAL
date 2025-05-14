$( () => {
    // On Scroll Functionality
    $(window).scroll( () => {
        var windowTop = $(window).scrollTop();
        windowTop > 100 ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow');
        windowTop > 100 ? $('ul').css('top','100px') : $('ul').css('top','160px');
    });

    // Click Logo To Scroll To Top
    $('#logo').on('click', () => {
        $('html,body').animate({
            scrollTop: 0
        },500);
    });

    // Smooth Scrolling Using Navigation Menu
    $('a[href*="#"]').on('click', function(e){
        $('html,body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        },500);
        e.preventDefault();
    });

    // Toggle Menu
    $('#menu-toggle').on('click', () => {
        $('#menu-toggle').toggleClass('closeMenu');
        $('ul').toggleClass('showMenu');
        
        $('li').on('click', () => {
            $('ul').removeClass('showMenu');
            $('#menu-toggle').removeClass('closeMenu');
        });
    });
});


/*
<div class="wrapper">
    <div class="form-box login">
        <h2>Login</h2>
        <form action="#">
            <div class="input-box">
                <span class="icon">
                    <ion-icon name="mail"></ion-icon>
                </span>
                <input type="email" required>
                <label>Email</label>
            </div>
            <div class="input-box">
                <span class="icon">
                    <ion-icon name="lock-closed"></ion-icon>
                </span>
                <input type="password" required>
                <label>Password</label>
            </div>
            <div class="remember-forgot">
                <label><input type="checkbox">Remember Me</label>
                <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" class="btn">Login</button>
            <div class="login-register">
                <p>Don't have an account?<a href="#" class="register-link">Register</a></p>
            </div>
        </form>
    </div>
</div>
*/
