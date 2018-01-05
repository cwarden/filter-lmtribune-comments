console.log('filter-lmtribune-comments extension loaded');
[].forEach.call(document.getElementsByClassName('comment-body'), function(comment) {
	var username = comment.getElementsByClassName('username')[0].innerText;
	var match = username.match(/^(newsjunkie|rustyzipper|thetruthhurts)$/);
	if (match) {
		console.log('hiding comment from ' + match[0]);
		comment.style.display = 'none';
	}
});
