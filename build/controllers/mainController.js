"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContactPage = exports.getSupportersPage = exports.getDonationsPage = exports.getBlogPage = exports.getEventsPage = exports.getLojaPage = exports.getProjectsPage = exports.getUsinaPage = exports.getColetivonPage = exports.getMainPage = void 0;
const getMainPage = (req, res) => {
    res.sendFile('index.html', { root: 'build/public' });
};
exports.getMainPage = getMainPage;
const getColetivonPage = (req, res) => {
    res.sendFile('coletivo.html', { root: 'build/public' });
};
exports.getColetivonPage = getColetivonPage;
const getUsinaPage = (req, res) => {
    res.sendFile('usina.html', { root: 'build/public' });
};
exports.getUsinaPage = getUsinaPage;
const getProjectsPage = (req, res) => {
    res.sendFile('projects.html', { root: 'build/public' });
};
exports.getProjectsPage = getProjectsPage;
const getLojaPage = (req, res) => {
    res.sendFile('store.html', { root: 'build/public' });
};
exports.getLojaPage = getLojaPage;
const getEventsPage = (req, res) => {
    res.sendFile('events.html', { root: 'build/public' });
};
exports.getEventsPage = getEventsPage;
const getBlogPage = (req, res) => {
    res.sendFile('blog.html', { root: 'build/public' });
};
exports.getBlogPage = getBlogPage;
const getDonationsPage = (req, res) => {
    res.sendFile('donations.html', { root: 'build/public' });
};
exports.getDonationsPage = getDonationsPage;
const getSupportersPage = (req, res) => {
    res.sendFile('supporter.html', { root: 'build/public' });
};
exports.getSupportersPage = getSupportersPage;
const getContactPage = (req, res) => {
    res.sendFile('contact.html', { root: 'build/public' });
};
exports.getContactPage = getContactPage;
//# sourceMappingURL=mainController.js.map