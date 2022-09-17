#!/usr/bin/env node

export type MyPackage = () => void

export const myPackage: MyPackage = () => {
    console.log('node package template: rollup /  typescript');
}
