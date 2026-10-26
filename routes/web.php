<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/register', function() {
    return Inertia::render('auth/Register');
})->name('register');
Route::get('/login', function(){
    return Inertia::render('auth/Login');
})->name('login');
