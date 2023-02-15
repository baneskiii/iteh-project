<?php

namespace Database\Seeders;

use App\Models\Proizvod;
use Illuminate\Database\Seeder;

class ProizvodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Proizvod::create(['image'=>'https://www.sportvision.rs/files/thumbs/files/watermark/files/images/slike_proizvoda/media/DD9/DD9294-001/images/thumbs_w/thumbs_800/DD9294-001_w_800_800px.jpg', 'naziv'=>'Nike Downshifter 12', 'cena'=>6500, 'kolicina'=>0, 'kategorija'=>1,'proizvodjac'=>'Nike']);
        Proizvod::create(['image'=>'https://www.sportvision.rs/files/thumbs/files/watermark/files/images/slike_proizvoda/media/DQ5/DQ5558-503/images/thumbs_w/thumbs_800/DQ5558-503_2_w_800_800px.jpg', 'naziv'=>'Nike Get Fit',   'cena'=>6300, 'kolicina'=>0, 'kategorija'=>2,'proizvodjac'=>'Nike']);
        Proizvod::create(['image'=>'https://www.sportvision.rs/files/thumbs/files/watermark/files/images/slike_proizvoda/media/DH4/DH4073-010/images/thumbs_w/thumbs_800/DH4073-010_w_800_800px.jpg', 'naziv'=>'Nike Sportswear Therma-FIT Windrunner',   'cena'=>16000, 'kolicina'=>0, 'kategorija'=>3,'proizvodjac'=>'Nike']);
        Proizvod::create(['image'=>'https://www.sportvision.rs/files/thumbs/files/watermark/files/images/slike_proizvoda/media/656/656927/images/thumbs_w/thumbs_800/656927_w_800_800px.jpg', 'naziv'=>'adidas TANGO ROSARIO',   'cena'=>2700, 'kolicina'=>0, 'kategorija'=>4,'proizvodjac'=>'adidas']);
        Proizvod::create(['image'=>'https://www.sportvision.rs/files/thumbs/files/watermark/files/images/slike_proizvoda/media/NF0/NF0A7X2KJK31/images/thumbs_w/thumbs_800/NF0A7X2KJK31_w_800_800px.jpg', 'naziv'=>'THE NORTH FACE COORDINATES',   'cena'=>4990, 'kolicina'=>0, 'kategorija'=>5,'proizvodjac'=>'THE NORTH FACE']);
        Proizvod::create(['image'=>'https://www.sportvision.rs/files/thumbs/files/watermark/files/images/slike_proizvoda/media/IC6/IC6755/images/thumbs_w/thumbs_800/IC6755_w_800_800px.jpg', 'naziv'=>'adidas Basic 3-Stripes',   'cena'=> 8000, 'kolicina'=>0, 'kategorija'=>6,'proizvodjac'=>'adidas']);
        Proizvod::create(['image'=>'https://www.sportvision.rs/files/thumbs/files/watermark/files/images/slike_proizvoda/media/369/369144-01/images/thumbs_w/thumbs_800/369144-01_w_800_800px.jpg', 'naziv'=>'PUMA VIKKY STACKED',   'cena'=> 8000, 'kolicina'=>0, 'kategorija'=>1,'proizvodjac'=>'Puma']);



    }
}
