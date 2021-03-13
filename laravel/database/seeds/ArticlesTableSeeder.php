<?php

use App\Article;
use Illuminate\Database\Seeder;

class ArticlesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 1; $i <= 10; $i++){
            Article::create([
                'title' => 'title' .$i,
                'content' => 'content' .$i,
                'person_in_charge' => 'person_in_charge' .$i,
            ]);
        }
    }
}
