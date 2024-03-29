/**
 *
 * Simple Vanilla JS Event System
 *
 */
class Emitter {
    constructor(obj) {
        // console.log('_42 / Emitter ')
        this.obj = obj;
        this.eventTarget = document.createDocumentFragment();
        const _ = ["addEventListener", "dispatchEvent", "removeEventListener"].forEach(this.delegate, this);
    }
    delegate(method) {
        // console.log('_42 / Emitter / delegate')
        this.obj[method] = this.eventTarget[method].bind(this.eventTarget);
    }
}
class Events {
    constructor(host) {
        // console.log('_42 / Emitter ')
        this.host = host;
        new Emitter(host); // add simple event system
        host.on = (eventName, func) => {
            host.addEventListener(eventName, func);
            return host;
        };
    }
    trigger(event, detail, ev) {
        // console.log('_42 / Emitter / trigger')
        if (typeof (event) === "object" && event instanceof Event) {
            return this.host.dispatchEvent(event);
        }
        if (!ev) {
            ev = new Event(event, { bubbles: false, cancelable: true });
        }
        ev.detail = { ...(detail || {}), host: this.host };
        return this.host.dispatchEvent(ev);
    }
}
export default Events;
//# sourceMappingURL=events.js.map