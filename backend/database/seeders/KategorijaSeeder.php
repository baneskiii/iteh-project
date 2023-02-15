<?php

namespace Database\Seeders;

use App\Models\Kategorija;
use Illuminate\Database\Seeder;

class KategorijaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $v1 = new Kategorija();
        $v1->naziv="Patike";
        $v1->save();

        $v2 = new Kategorija();
        $v2->naziv="Dukserica";
        $v2->save();

        $v3 = new Kategorija();
        $v3->naziv="Jakna";
        $v3->save();

        $v4 = new Kategorija();
        $v4->naziv="Lopta";
        $v4->save();

        $v5 = new Kategorija();
        $v5->naziv="Majica";
        $v5->save();

        $v6 = new Kategorija();
        $v6->naziv="Trenerka";
        $v6->save();
    }
}
