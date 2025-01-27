<?php

use App\Http\Controllers\RevisaoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('teste', function(){
    dd('chegou');
});

Route::get('palindromo/{palavra}', [RevisaoController::class, 'palindromo']);
Route::get('pedido', [RevisaoController::class, 'pedido']);