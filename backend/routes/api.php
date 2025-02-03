<?php

use App\Http\Controllers\RevisaoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AnotacaoController;
use App\Http\Controllers\AuthController;

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

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('me', [AuthController::class, 'me']);
    Route::get('gerarSenha/{senha}', [AuthController::class, 'gerarSenha']);
    Route::get('quemSouEu', [AuthController::class, 'me']);
    
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('teste', function(){
    dd('chegou');
});

Route::get('palindromo/{palavra}', [RevisaoController::class, 'palindromo']);
Route::get('pedido', [RevisaoController::class, 'pedido']);
Route::post('cumprimento', [RevisaoController::class, 'cumprimento']);
Route::post('contarVogais', [RevisaoController::class, 'contarVogais']);
Route::get('contarNumeros/{limite}', [RevisaoController::class, 'contarNumeros']);



Route::get('usuarios', [UserController::class, 'getUsuarios']);
Route::post('anotacaoNuvem', [AnotacaoController::class, 'insertAnotacaoNuvem']);


Route::get('anotacao', [AnotacaoController::class, 'getAnotacao']);
Route::post('anotacao', [AnotacaoController::class, 'insertAnotacao']);
Route::get('anotacao/{id}', [AnotacaoController::class, 'getAnotacaoOne']);
Route::patch('anotacao/{id}', [AnotacaoController::class, 'updateAnotacao']);
Route::delete('anotacao/{id}', [AnotacaoController::class, 'deleteAnotacao']);