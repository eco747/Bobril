﻿/// <reference path="jasmine.d.ts"/>
describe("sandbox", function () {
    var root;
    beforeEach(function () {
        root = document.createElement("div");
        root = document.body.appendChild(root);
    });
    afterEach(function () {
        document.body.removeChild(root);
    });
    it("works", function () {
        root.appendChild(document.createElement("div"));
        expect(root.innerHTML).toBe("<div></div>");
    });
});
//# sourceMappingURL=sandbox.js.map
