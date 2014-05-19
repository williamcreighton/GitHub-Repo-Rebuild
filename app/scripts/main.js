// var people = [
//   { 
//     person: "Mason",
//     feeling: "great"
//   },
//   {
//     person: "Bob",
//     feeling: "terrible"
//   }
// ]
 
//  function              function       string  
// var goodMorningTemplate = _.template($('.goodmorning-template').text());
 
// people.forEach(function(person){
 
  //   string      function           object
//   var rendered = goodMorningTemplate( person );
 
//   $('body').prepend(rendered);
// })


// var githubRepo = [

// ]


// var repoList = _.template($('.repolist-template').text());

// githubRepo.forEach(function(name){

// var rendered = repoList(name);	

// $('body').prepend(rendered);

// })

// names = function(repoList){
//     return _.pluck(repoList, "name");
// }


// names = function(starredItems){
//     return _.pluck(starredItems, "stargazers_count");
// }




// // from @jeffdill2

// if anybody needs to get the 'starred' number into the sidebar, this will get 
// that number for you:

// var numStarred = 0;

// aryRepoData.forEach(function(repo) {
//   numStarred = numStarred + repo.stargazers_count;
// });

// aryUserData[0]["starred"] = numStarred;
// Hide full text

// that'll go through your repo data, add up all of your 'stargazers_count' values, 
// and then add a new property called 'starred' onto your user data json with with the 
// value.

// fyi for that snippet i sent out...i just realized it's not completely accurate for 
// the starred count that appears on your real github page...it looks like that starred 
// count actually includes repos you own that have been starred, and also any repos 
// that belong to other people that you've starred...the thing i wrote is only counting 
// the stars in your repos

// // end from @jeffdill2

// <ul class="navigation-user-tools">
//     <li class="navigation-user-tools-li">name</li>
//     <li class="navigation-user-tools-li">new</li>
//     <li class="navigation-user-tools-li">settings</li>
//     <li class="navigation-user-tools-li">logout</li>
// </ul>










// Template for Github Sidebar Starred Data
// var starGazers = _.template($('.starred').text());


// 	var rendered = starGazers(starredInfo);
//     $('.sidebar').prepend(rendered);
//   }
// )

// stargazers_url


// /images/icons/question-mark-icon.png

// Followers

// <p class="sidebar-stats-text">Followers</p>

// href=" <%= stargazers_url %> "> <%= stargazers_count %> </a>


// <div><a class="sidebar-stats-starred" href=" <%= starred_url %> "> <%= starred %> </a></div>

// gray-git-logo.png


// <p class="repo-updated">Last Updated</p>



// <p class="sidebar-stats-text">Followers</p>


// var repoList = _.template($('.repolist-template').text());

// githubRepo.forEach(function(name){

// var rendered = repoList(name);	

// $('body').prepend(rendered);

// })

// var names = _.pluck(githubRepo, "name")

// console.log(names)

// ....... //  ....... removes ALL THE JSON CODE FROM GITHUB API  .......  //


// Sidebar Info ////////////////////////////////////////////////////

// var showSidebar = _.template($('.showSidebar').text());

// function renderSidebar (data, destination){
//     var rendered = showSidebar(data);
//     destination.prepend(rendered);
//   }
