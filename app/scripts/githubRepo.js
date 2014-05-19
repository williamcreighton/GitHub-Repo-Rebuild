"use strict"


// .on is an update to the .live jQuery method. 
// 'focus' is saying that this function will run when 
// the determined location is 'activated' by the mouse
// 'click'.

$('.navigation-search').on('focus',function(){
        
// "this" is referring back to '.navigation-search'
// then usisng the .animate method to manipulate the size
// of the input box.
// .width is the amount (150px) the box will expand by 
// and '200' is the speed in which the animation will take place.

	$(this).animate({width:($(this).width()+190)+'px'},200);

// 'blur' is saying that if its value == '' or essentially
// empty (null?) then the animation reverses itself.

}).on('blur',function(){
            
            if($(this).val() === '') {
                
                $(this).animate({width:($(this).width()-190)+'px'},300);
                
            }
            
        });

// need to look into/study the overflow and visibility CSS 
// selectors in order to 'hide' the ul.top-nav menu items
// when input box is expanded.



// Template for GitHub Sidebar Profile Data
var githubProfile = _.template($('.profile').text());

// Fetch Profile Data
$.getJSON('https://api.github.com/users/williamcreighton?client_id=XXX&client_secret=XXX').done(function(userInfo){

	var rendered = githubProfile(userInfo);
    $('.sidebar').prepend(rendered);
}
);



// Template for GitHub Repo Data
var githubRepo = _.template($('.repos').text());

// Fetch Repo Data
$.getJSON('https://api.github.com/users/williamcreighton/repos?client_id=XXX&client_secret=XXX').done(function(data){
	renderRepos(data);
});

// Render functions
function renderRepos (repos) {
	repos.forEach(function(module){
		var rendered = githubRepo(module);
		$('.repo-list').prepend(rendered);
	});
}


// ....... // ....... // ....... //


























