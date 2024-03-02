import { writable } from 'svelte/store';

export const selected_page = writable('Login');
export const select_page = (page) => {
    console.log('select_page', page);
    selected_page.set(page || 'Login');
}