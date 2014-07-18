function find_children(element) {
	// find text nodes
	if (element.nodeType === 1) { 
		// determine if text node is not empty
		if (/\S/.test(element.textContent)) {
			$(element).wrap(function() {
				return '<span class="text"></span>';
			});
		}
	}

	// traverse through all elements
	if (element.nodeType === 1) {
		$(element).contents().each( function (index,element) {
			find_children(element);
		});
	}
}