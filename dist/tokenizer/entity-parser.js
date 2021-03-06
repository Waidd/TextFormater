define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const HEXCHARCODE = /^#[xX]([A-Fa-f0-9]+)$/;
    const CHARCODE = /^#([0-9]+)$/;
    const NAMED = /^([A-Za-z0-9]+)$/;
    class EntityParser {
        constructor(named) {
            this.named = named;
        }
        parse(entity) {
            if (!entity) {
                return;
            }
            let matches = entity.match(HEXCHARCODE);
            if (matches) {
                return String.fromCharCode(parseInt(matches[1], 16));
            }
            matches = entity.match(CHARCODE);
            if (matches) {
                return String.fromCharCode(parseInt(matches[1], 10));
            }
            matches = entity.match(NAMED);
            if (matches) {
                return this.named[matches[1]];
            }
        }
    }
    exports.default = EntityParser;
});
//# sourceMappingURL=entity-parser.js.map