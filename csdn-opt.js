let host = window.location.host

let rule = {
    'blog.csdn.net': blog_csdn_net,
    'v2ex.com': v2ex_com,
}

function blog_csdn_net() {
    if (window.csdn) {
        if (window.csdn.clearReadMoreBtn) {
            // 1. read more
            window.csdn.clearReadMoreBtn()
        }
        // 2. copyright
        if (window.csdn.copyright) {
            window.csdn.copyright.textData=''
            window.csdn.copyright.htmlData=''
        }
    }
    // 3. hide ad
    $("div[id^='kp_box_']").hide()
}

function v2ex_com() {
    let target = []
    target.push($('.adsbygoogle'))
    target.push($('.sidebar_units'))
    target.forEach(element => {
        element.hide()
    })
}

(function() {
    let func = rule[host]
    if (func) {
        func()
    }
})()