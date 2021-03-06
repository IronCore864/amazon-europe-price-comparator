import * as amzUtil from "../util/AmazonUtils"

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if( request.message === "get_current_page_info" ) {
			sendResponse([
				amzUtil.getPriceFromAmazonProductDetailPage(document),
				amzUtil.getRank(document)
			])
		}
	}
)
