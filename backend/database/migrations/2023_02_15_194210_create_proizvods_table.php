<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProizvodesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('proizvods', function (Blueprint $table) {
            $table->id();
            $table->string('image');
            $table->string('naziv');
            $table->string('proizvodjac');

            $table->double('cena');
            $table->integer('kolicina')->default(0);
            $table->foreignId('kategorija');
            $table->string('zemlja_porekla')->default("Srbija");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('proizvods');
    }
}
