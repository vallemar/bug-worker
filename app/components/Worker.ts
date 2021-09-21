import { Utils } from "@nativescript/core";

global.onmessage = function (msg) {
    console.log("RUN WORKER");

    const context = Utils.android.getApplicationContext(); // This line break app with worker.terminate();

    (global as any).postMessage({ success: true })
}