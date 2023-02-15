<?php

namespace Database\Seeders;

use App\Models\Korpa;
use App\Models\Proizvod;
use App\Models\User;
use App\Models\Kategorija;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::truncate();
        Kategorija::truncate();
        Korpa::truncate();
        Proizvod::truncate();


        $admin = new User();
        $admin->name="Admin";
        $admin->email="admin@gmail.com";
        $admin->password= Hash::make("admin");
        $admin->admin = 1;
        $admin->save();
        User::factory(10)->create();

        $vs = new KategorijaSeeder(); 
        $vs->run();

        $ps = new ProizvodSeeder();
        $ps->run();
    }
}
