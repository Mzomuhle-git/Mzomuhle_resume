
// for creating a smooth scrolling effect
$(function (){
    $("a").on('click', function(){
        $("html, body, nav, .wrapper").animate({
            scrollTop: $($.attr(this, 'href')).offset().top
            }, 1000 );
        });
    });


function openNav() {
	  document.getElementById("myNav").style.height = "100%";
	}

	function closeNav() {
	  document.getElementById("myNav").style.height = "0%";
	}
