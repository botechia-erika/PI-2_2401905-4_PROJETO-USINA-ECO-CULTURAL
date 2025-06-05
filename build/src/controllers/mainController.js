"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMainPage = void 0;
const getMainPage = (req, res) => {
    res.sendFile('index.html', { root: 'build/public' });
};
exports.getMainPage = getMainPage;
//# sourceMappingURL=mainController.js.map