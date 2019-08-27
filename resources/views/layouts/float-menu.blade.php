<div class="float-header">
  <div class="d-none d-xl-block" id="main_menu">
    @if (has_nav_menu('primary_navigation'))
      {!! wp_nav_menu([
      'theme_location' => 'primary_navigation',
      'container_class' => 'navbar-nav',
      'menu_class' => 'nav'])
      !!}
    @endif
  </div>
</div>

<div class="lock-wrap" id="lock-wrap"></div>
<div class="login-form" id="login-form-wrap">
	<form id="login-form">
		<div class="field">
			<label for="name"><span>Login</span></label>
			<span class="wpcf7-form-control-wrap">
				<input type="text" class="wpcf7-form-control wpcf7-text" id="login-value" />
			</span>
		</div>
		<br />
		<div class="field">
			<label for="password"><span>Password</span></label>
			<span class="wpcf7-form-control-wrap">
				<input type="password" class="wpcf7-form-control wpcf7-text" id="password-value" />
			</span>
		</div>
		<br />
		<button type="submit" class="wpcf7-form-control wpcf7-submit" id="login-form-btn">Submit</button>
	</form>
	<style>
		.lock-wrap{
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: #fff;
			z-index: 101;
			cursor: default;
/* 			display: none; */
		}
		.login-form{
/* 			display: none; */
			position: fixed;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			z-index: 101;
		}
		.login-form .field{
			display: flex;
			justify-content: space-between;
		}
		.login-form .wpcf7-form-control-wrap{
			margin-left: 10px;
		}
		.login-form input{
			cursor: default !important;
		}
	</style>
	<script>

		var lockWrap = document.getElementById('lock-wrap');
		var loginFormWrap = document.getElementById('login-form-wrap');
		
		if(sessionStorage.getItem('adminIsLoggedIn')) {
		   
			lockWrap.style.display = 'none';
			loginFormWrap.style.display = 'none';
		   
		} else {
			
			lockWrap.style.display = 'block';
			lockWrap.style.setProperty('cursor', 'default', 'important');
			loginFormWrap.style.display = 'block';
			loginFormWrap.style.setProperty('cursor', 'default', 'important');
			document.getElementById('login-value').style.setProperty('cursor', 'default', 'important');
			document.getElementById('password-value').style.setProperty('cursor', 'default', 'important');
			document.getElementById('login-form-btn').style.setProperty('cursor', 'pointer', 'important');
			
		}
		
		document.getElementById('login-form').addEventListener('submit', function(e){

			e.preventDefault();
		
			var loginValue = document.getElementById('login-value').value;
			var passwordValue = document.getElementById('password-value').value;
			
			if(loginValue === 'admin' && passwordValue === 'studiopresto') {
			   
				lockWrap.style.display = 'none';
				loginFormWrap.style.display = 'none';
				sessionStorage.setItem('adminIsLoggedIn', true);
				
			} else {
				
				sessionStorage.removeItem('adminIsLoggedIn');
				
			}
			
			console.log(loginValue, passwordValue);

		});
	</script>
</div>
