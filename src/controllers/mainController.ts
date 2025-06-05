import express, { Request, Response } from 'express';

export const getMainPage = (req: Request, res: Response): void => {
    res.sendFile('index.html', { root: 'build/public' });
}


export const getColetivonPage = (req: Request, res: Response): void => {
    res.sendFile('coletivo.html', { root: 'build/public' });
}


export const getUsinaPage = (req: Request, res: Response): void => {
    res.sendFile('usina.html', { root: 'build/public' });
}


export const getProjectsPage = (req: Request, res: Response): void => {
    res.sendFile('projects.html', { root: 'build/public' });
}


export const getLojaPage = (req: Request, res: Response): void => {
    res.sendFile('store.html', { root: 'build/public' });
}


export const getEventsPage = (req: Request, res: Response): void => {
    res.sendFile('events.html', { root: 'build/public' });
}


export const getBlogPage = (req: Request, res: Response): void => {
    res.sendFile('blog.html', { root: 'build/public' });
}


export const getDonationsPage = (req: Request, res: Response): void => {
    res.sendFile('donations.html', { root: 'build/public' });
}

export const getSupportersPage = (req: Request, res: Response): void => {
    res.sendFile('supporter.html', { root: 'build/public' });
}


export const getContactPage = (req: Request, res: Response): void => {
    res.sendFile('contact.html', { root: 'build/public' });
}