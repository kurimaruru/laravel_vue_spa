<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
     return $request->user();
});

// 記事一覧を取得
Route::get('/articles','ArticleController@index');
// 記事登録
Route::post('/articles','ArticleController@store');
// 記事詳細取得
Route::get('articles/{article}','ArticleController@show');
// 記事更新
Route::put('/articles/{article}','ArticleController@update');
// 記事削除
Route::delete('/articles/{article}','ArticleController@destroy');




