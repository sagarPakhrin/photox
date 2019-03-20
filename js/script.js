$(document).ready(function(){
		$('.nav-button').click(function() {
				$('.nav-button').toggleClass('change');
		});

		$(window).scroll(function(){
				let position = $(this).scrollTop();
				if(position >= 200){
						$('.nav-menu').addClass('custom-navbar');
				}
				else {
						$('.nav-menu').removeClass('custom-navbar');
				}
		})

		$(window).scroll(function(){
				let position = $(this).scrollTop();
				console.log(position);
				if(position >= 500) {
						$('.camera-img').addClass('fromLeft');
						$('.mission-text').addClass('fromRight');
				}
		})
		$('.gallery-list-item').click(function(){
				let value = $(this).attr('data-filter');
				if(value ==='all'){
						$('.filter').show(300);
				}
				else {
						$('.filter').not('.' + value).hide(300);
						$('.filter').filter('.'+ value).show(300);
				}
		})

		$('.gallery-list-item').click(function(){
				$(this).addClass('active-item').siblings().removeClass('active-item');
		});

		$(window).scroll(function(){
				let position = $(this).scrollTop();
				if(position>=3976){
						$('.card-1').addClass('moveFromLeft');
						$('.card-3').addClass('moveFromRight');
						$('.card-2').addClass('moveFromBottom');
				}
		})

});
