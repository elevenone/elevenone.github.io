/**
 * 
 * startup
 * 
 */
import PromiseDom from "./promiseDom.js"
import Router from "./router.js"
import FetchPartial from "./fetchPartial.js"

// check if dom is ready
let dom: any = new PromiseDom
dom.ready.then(__start())

function __start(): void {
    console.log('---------------------------------')
    console.log('   dom is ready, starting now')
    console.log('---------------------------------')
    includePartials()
}

/**
 *
 * routing
 * 
 */
const router = new Router({
    type: "hash",
    routes: {
        "/":         "home",
        "/about":    "about",
        "/products": "products",
        "/404":      "404"
    }
}).listen().on("route", async e => {

    const element = document.querySelector("section")
    const htmlfile = "/" + e.detail.route + ".html"

    document.title = e.detail.route

    console.log('!!!!!!!!!!!!')

    if(typeof e.detail.route  === 'undefined' || e.detail.route === null ) {
        console.error('OOOOOOOO')
    }

    console.debug(router)
    console.log(router.routeHash)
    console.log('!!!!!!!!!!!!')

    
    // check if e.detail.route is in router.routeHash
    if( router.routeHash.includes('/' + e.detail.route) ) {
        console.log('kkkkkkkkk')
        console.log('e.detail.route   = ' + e.detail.route)
        console.log('router.routeHash = ' + router.routeHash)
        console.log(router.routeHash.includes('/' + e.detail.route))
        console.log('kkkkkkkkk')
    }

    if( !router.routeHash.includes('/' + e.detail.route) ) {
        console.log('kkkkkkkkk')
        console.log('e.detail.route   = ' + e.detail.route)
        console.log('router.routeHash = ' + router.routeHash)
        console.log(router.routeHash.includes('/' + e.detail.route))
        console.log('kkkkkkkkk')
    }





    console.log('route: ' + e.detail.route, ' url: ' + e.detail.url)
    console.log('htmlfile: ' + htmlfile)

    if (htmlfile == '/404.html') {
        // let myrequest = new Request('./404.html')
        // let myheaders = myrequest.headers

        window.location.href = '/nonexistentpage.html'
        // return
    }

    try {

        const response = await fetch(htmlfile)
            .then(function(result) {
                console.debug(result.type)
                console.debug(result.url)
                console.debug('status ' + result.status)
                console.debug(result.ok)
                console.debug(result.statusText)
                console.debug(result.headers)
                return result
            })
            // .then(function(html) {
            //     let parser = new DOMParser()
            //     let htmlfragment = parser.parseFromString(html, "txt/html")
            //     console.log(htmlfragment)
            //     return htmlfragment
            // })

        const text = await response.text()
        console.debug('___response___status___text === ' + response.statusText)

        if(!response.ok) {
            console.log('___response___status___text === ' + response.statusText)
            window.location.href = '/nonexistentpage.html'
            // window.location.href = '404.html'
        }

        if(response.ok) {

            element.innerHTML = text

            // element.innerHTML = ''
            // const partial_tag = element
            // const content = new FetchPartial()
            // content.fetchOne(htmlfile, partial_tag)

            // let parser = new DOMParser()
            // let htmlfragment = parser.parseFromString(text, "text/html")
            // // console.log('______________')
            // // console.log(htmlfragment)
            // // console.log('______________')
            // let payload = htmlfragment.querySelector('div')
            // console.log(' payload === ' + payload)
            // element.innerHTML = ''
            // element.appendChild(payload) 

        } else {
            throw new Error('response error')
        }

    } catch (e) {
        // console.log(' try catch error == ' + e)
        element.innerHTML = e
        throw e
    }

})

/**
 *
 * partial
 * 
 */
function includePartials(): void {
    const partial = new FetchPartial()
    partial.fetchAll()
}

// function include(): void {
//     const zzz = document.querySelector("section")
//     const content = new FetchPartial()
//     content.fetchOne('about.html', zzz)
// }

// include()
