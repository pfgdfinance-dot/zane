self.addEventListener("install", event => {
console.log("Zane installed")
})

self.addEventListener("fetch", event => {
event.respondWith(fetch(event.request))
})

