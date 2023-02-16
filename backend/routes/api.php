<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\KorpaController;
use App\Http\Controllers\ProizvodController;
use App\Http\Controllers\PorukaController;
use App\Http\Controllers\StavkaKorpeController;
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

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);


Route::post('kontakt', [PorukaController::class, 'primiPoruku']); 

Route::get('poruke',[PorukaController::class,'index']);  
Route::resource('/korpe', KorpaController::class ) ;  
Route::resource('/stavke', StavkaKorpeController::class ) ;  
Route::get('proizvod',[ProizvodController::class,'index']);
Route::post('proizvod',[ProizvodController::class,'store']);
Route::put('proizvod/{id}',[ProizvodController::class,'update']);
Route::delete('proizvod/{id}',[ProizvodController::class,'destroy']);
Route::get('proizvod/{id}',[ProizvodController::class,'show']);
Route::group(['middleware' => ['auth:sanctum']], function () {  //ulogovani korisnici
    Route::get('/profiles', function (Request $request) {  
        return auth()->user();
    });
    Route::resource('stavkeKorpe', StavkaKorpeController::class ) ;




   
   
   
  
    Route::post('logout', [AuthController::class, 'logout']);  
  
});

Route::middleware(['auth:sanctum','isAPIAdmin'])->group(function(){  

    Route::get('/check', function(){
        return response()->json(['message'=>'Admin ulogovan'],200);
    });



});